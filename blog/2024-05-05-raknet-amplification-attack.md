---
title: "RakNet 放大攻击总结与应对"
slug: "raknet-amplification-attack"
authors: Kas-tle
hide_table_of_contents: false
description: "了解我们如何处理 RakNet 协议中的漏洞"
---

今年三月，我们发现了 Geyser 使用的 RakNet 网络库中的一个漏洞，使得 Geyser 实例容易被利用进行分布式拒绝服务（DDoS）放大攻击。此漏洞已在所有编号为 478 及更高版本的 Geyser 构建中得到修复。如果您仍在运行过时的 Geyser 版本，请立即从 [https://geysermc.org/download](https://geysermc.org/download) 下载最新版本进行更新。此漏洞的原始[安全公告](https://github.com/CloudburstMC/Network/security/advisories/GHSA-6h3m-c6fv-8hvh)发布在 [CloudburstMC/Network](https://github.com/CloudburstMC/Network) 仓库中。本文将详细介绍时间线、攻击原理、我们的应对措施以及为防止类似攻击而采取的额外措施。

<!-- truncate -->

## 时间线（UTC）

* **3月24日，上午11:00**：bStats 数据开始显示在线 Geyser 实例数量出现不稳定
* **3月28日，凌晨5:00**：首次报告 Geyser 实例导致 OVH 暂停服务器
* **3月28日，下午4:00**：首次在 GitHub 上开启问题，提及可疑连接垃圾邮件
* **3月28日，下午5:00**：针对全局链接服务器的攻击，该服务器还托管全局 API 和 Geyser 测试服务器，导致所有三个服务离线
* **3月28日，下午6:07**：启动全局 API 服务器，开始从 MariaDB 日志恢复数据库
* **3月28日，下午6:27**：识别出导致 Geyser 测试服务器机器暂停的数据包，每个数据包 134 字节，以每秒 60,000 个数据包的速率发送
* **3月28日，下午6:30**：在测试服务器上安装带有增强日志记录的 Geyser 构建，用于收集有关攻击向量的数据
* **3月28日，下午7:48**：数据库恢复完成，全局 API 重新上线，但由于停机期间的初始请求积压仍然不稳定
* **3月28日，下午8:46**：全局 API 稳定性恢复正常
* **3月29日，凌晨1:30**：在 Geyser 中实施初始速率限制，来自 Cloudburst Network 的上游更改，但具体攻击向量仍不清楚
* **3月29日，凌晨3:32**：识别出负责的数据包为连接请求接受，由 Geyser 在初始 RakNet 握手期间发送
* **3月29日，上午6:00**：创建初始概念验证，显示客户端可以恶意垃圾邮件连接请求数据包，导致服务器以更大的连接请求接受数据包回复
* **3月29日，下午12:25**：通过 Cloudburst Network 向 Geyser 添加进一步的速率限制，特别是对连接请求数据包的回复
* **3月30日，上午9:20**：从受攻击的 Geyser 实例获取原始数据包捕获，揭示问题的根本原因为 Cloudburst Network 中连接请求接受数据包的 RakNet 可靠性设置
* **3月30日，上午10:30**：向 Geyser 推送 Cloudburst Network 的最终修复，并通过完整的数据包转储监控先前被利用的实例以确认修复
* **3月30日，下午10:28**：在 Cloudburst Network GitHub 仓库发布安全公告
* **3月30日，下午10:31**：在 Geyser Discord 中发布一年来的首次 @everyone 通知，宣布安全公告并要求所有服务器所有者尽快更新其实例


## 初始预警信号

在问题最初被检测到之前，Geyser 的 bStats 数据中已经出现可疑趋势。3 月 24 日上午 11:00（UTC）左右开始，在线 Geyser 实例总数出现明显波动。正常情况下，在线实例数量会平稳地增减约 500 个，通常与人们空闲玩 Minecraft 的时间相关。但从 3 月 24 日起，每小时在线实例数量频繁波动高达 2200 个。事后看来，这很可能是攻击被大规模利用的起点。

| ![Geyser bStats Usage](/img/blog/2024-05-05-raknet-amplification-attack/geyser-bstats-usage.png) |
|:--:| 
| *三月份使用 Geyser 的服务器 bStats 图表。左侧可以明显看到从 3 月 24 日开始在线服务器数量出现不稳定，这比收到任何正式攻击报告至少早了三天。* |


## 初始披露

Geyser Discord 中的多个用户首先通过向我们提供他们的托管服务提供商的通知来引起我们对这次攻击的注意，他们的服务器实例因滥用而被暂停。这意味着他们的 Geyser 实例正在发送出站流量，被其托管服务提供商解释为拒绝服务攻击。以下是其中一份通知的片段：


```sh
##############################################################################
#       DDoS-Attack detected from host XXX.XXX.XXX.XXX                       #
##############################################################################

TIME                             	SRC       	SRC-PORT  ->  DST       	DST-PORT  SIZE  PROT
----------------------------------------------------------------------------------------------------------
2024-03-28 06:49:06.493070866 +0100  XXX.XXX.XXX.XXX	19132  ->  51.75.XXX.XXX    	1   134   UDP
2024-03-28 06:49:06.50822918  +0100  XXX.XXX.XXX.XXX	19132  ->  51.75.XXX.XXX    	1   134   UDP
2024-03-28 06:49:06.515954324 +0100  XXX.XXX.XXX.XXX	19132  ->  51.75.XXX.XXX    	1   134   UDP
2024-03-28 06:49:06.519665639 +0100  XXX.XXX.XXX.XXX	19132  ->  51.75.XXX.XXX    	1   134   UDP
2024-03-28 06:49:06.523410527 +0100  XXX.XXX.XXX.XXX	19132  ->  51.75.XXX.XXX    	1   134   UDP
2024-03-28 06:49:06.526647418 +0100  XXX.XXX.XXX.XXX	19132  ->  51.75.XXX.XXX    	1   134   UDP
2024-03-28 06:49:06.53355138  +0100  XXX.XXX.XXX.XXX	19132  ->  51.75.XXX.XXX    	1   134   UDP
2024-03-28 06:49:06.537470479 +0100  XXX.XXX.XXX.XXX	19132  ->  51.75.XXX.XXX    	1   134   UDP
```
*来自 OVH 关于运行 Geyser 实例的服务器被暂停的滥用报告。*

这是我们收到的关于攻击向量的第一份信息。基于此，我们可以通过从报告中的最后一个数据包时间减去第一个数据包时间（0.044399613 秒），然后用该时间段内发送的数据包数量（8 个）除以时间，来确定攻击的大致速度，可以看到这里每秒发送约 180 个数据包。我们还获得了线路上的数据包大小，为 134 字节。需要注意的是，这是数据包离开提供商网络时的大小，因此它应该只包含公共 IP 地址的目标标头。

Logs were also provided by another user, which show that after many repeated connection attempts, Cloudburst Network was unable to keep up and packet byte buffer handling was compromised.

```log
[nioEventLoopGroup-5-1/ERROR] [org.cloudburstmc.netty.channel.raknet.RakChannelPipeline]: Exception thrown in RakNet pipeline
io.netty.handler.codec.DecoderException: java.lang.NullPointerException: Cannot invoke "io.netty.buffer.ByteBuf.release()" because "this.buffer" is null
  at io.netty.handler.codec.MessageToMessageDecoder.channelRead(MessageToMessageDecoder.java:98)
  at io.netty.handler.codec.MessageToMessageCodec.channelRead(MessageToMessageCodec.java:111)
  at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:442)
  at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:420)
  at io.netty.channel.AbstractChannelHandlerContext.fireChannelRead(AbstractChannelHandlerContext.java:412)
  at io.netty.channel.DefaultChannelPipeline$HeadContext.channelRead(DefaultChannelPipeline.java:1410)
  at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:440)
  at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:420)
  at io.netty.channel.DefaultChannelPipeline.fireChannelRead(DefaultChannelPipeline.java:919)
  at org.cloudburstmc.netty.handler.codec.raknet.server.RakServerRouteHandler.channelRead(RakServerRouteHandler.java:60)  
  ...
  at org.cloudburstmc.netty.handler.codec.raknet.AdvancedChannelInboundHandler.channelRead(AdvancedChannelInboundHandler.java:48)
  ...
  at org.geysermc.geyser.network.netty.handler.RakConnectionRequestHandler.channelRead(RakConnectionRequestHandler.java:80)
  ...
  at org.cloudburstmc.netty.handler.codec.raknet.ProxyInboundRouter.channelRead(ProxyInboundRouter.java:66)
  ...
Caused by: java.lang.NullPointerException: Cannot invoke "io.netty.buffer.ByteBuf.release()" because "this.buffer" is null
  at org.cloudburstmc.netty.channel.raknet.packet.EncapsulatedPacket.deallocate(EncapsulatedPacket.java:138)
  ... 45 more
```
*来自被攻击服务器在多次连接尝试后的堆栈跟踪，显示了 Cloudburst Network 处理数据包能力的不稳定性。*


## 复现尝试

鉴于数据包垃圾邮件是在没有 Bedrock 登录的情况下发生的，漏洞很可能在于 RakNet 连接的初始建立。Minecraft 基岩版使用 RakNet 协议的修改版本，该协议多年来基本没有变化，并在 [https://wiki.vg/Raknet_Protocol](https://wiki.vg/Raknet_Protocol) 上有非官方文档。在发送游戏数据包之前，连接通过 7 个数据包建立，其中 4 个由客户端发送，3 个由服务器发送。很可能是这 3 个数据包中的一个被 Geyser 实例垃圾邮件发送。初始 RakNet 连接遵循以下序列：

```sh
[Client -> Server] Open Connection Request 1
[Server -> Client] Open Connection Reply 1
[Client -> Server] Open Connection Request 2
[Server -> Client] Open Connection Reply 2

RakNet connection is established and further messages now wrapped in Frame Set Packet

(FSP) [Client -> Server] Connection Request
(FSP) [Server -> Client] Connection Request Accepted
(FSP) [Client -> Server] New Incoming Connection
```
*RakNet 初始连接序列摘要。请注意，只有在数据包被包装在帧集数据包中后，才能利用 RakNet 可靠性设置。*

鉴于被垃圾邮件发送的数据包来自服务器，并且已知其出站长度为 134 字节，我们可以在 Wireshark 中分析与 Geyser 的正常连接，以确定最可能的责任数据包：

| ![Wireshark Initial RakNet Connection](/img/blog/2024-05-05-raknet-amplification-attack/wireshark-initial-raknet-connection.png) |
|:--:|
| *Wireshark 捕获的 Geyser 服务器在初始 RakNet 连接阶段的数据包。显示了服务器发送到客户端的连接请求接受数据包的十六进制转储。请注意，字节编号从 0 开始。* |

我们可以看到，在客户端，连接请求接受数据包在线路上为 148 字节。然而，如果我们减去本地网络为路由添加的 14 字节头部（字节 0 到 13），我们得到数据包离开提供商网络时的大小为 134 字节。知道这个数据包很可能是责任数据包，我们可以考虑如何让服务器发送许多这样的数据包。我们最初采取的一种有些天真的方法是，在从服务器接收到开放连接回复 2 后发送许多连接请求数据包。这确实导致服务器发送了许多连接请求接受数据包，显示了在 Cloudburst Network 现有实现中确实存在滥用的潜力：

| ![Wireshark Reproduction Attempt](/img/blog/2024-05-05-raknet-amplification-attack/wireshark-reproduction-attempt.png) |
|:--:|
| *Wireshark 数据包捕获显示了攻击的复现。请注意，响应连接请求数据包发送的大量连接请求接受数据包。* |

话虽如此，这最多只是一个放大因子为 2 的情况。到目前为止，我们已经获得了攻击的一些带宽数据，显示在野外放大因子至少为 350。鉴于此，必须有一种方法可以让这个数据包被发送更多次。

| ![Pterodactyl Outbound Spike](/img/blog/2024-05-05-raknet-amplification-attack/pterodactyl-outbound-spike.png) |
|:--:|
| *攻击期间运行 Geyser 的 Paper 服务器的 Pterodactyl 面板仪表板，显示出站流量大幅飙升。在短暂的攻击期间，入站流量仅为 819KiB，而出站流量接近 300MiB。* |


## 实时分析

讽刺的是，对我们有利的一点是，这个漏洞被大规模利用。由于我们自己的官方测试服务器，甚至我们的一些个人服务器，都在定期受到攻击，我们有足够的位置来收集关于攻击的数据。我们开始对一个正在被攻击的服务器进行完整的原始数据包捕获，这最终揭示了攻击的根本原因。

| ![Wireshark Live Attack](/img/blog/2024-05-05-raknet-amplification-attack/wireshark-live-attack.png) |
|:--:|
| *Wireshark 捕获的正在受到攻击的 Geyser 实例的数据包。高亮显示的数据包是一个 NAK 数据包，由客户端发送到 Geyser 实例，请求服务器重新发送序列号从 0 到 8191 的数据包。紧接着的数据包类似，请求数据包 8192 到 16383。攻击者在连接开始时发送这些数据包，然后简单地等待，而 Geyser 实例继续发送数千个数据包，每个数据包递增序列号，导致发送更多数据包，直到恶意 NAK 请求得到满足。* |

查看攻击者发送的数据包，我们看到事情大体上遵循了指定的连接序列。但我们也看到了一种新型数据包：一个范围从 0 到 8191 的 NAK 数据包。这引出了 RakNet 数据包可靠性的话题。

由于 UDP 本身没有像 TCP 那样的内置握手来确保所有数据按正确顺序完美到达，RakNet 实现了一个可靠性系统作为替代。对于这个系统，每个数据包都以可靠性类型发送。虽然 RakNet 有八种可靠性类型，但理解这个漏洞只需要我们理解可靠数据包和不可靠数据包之间的区别。简单来说，客户端可以请求重新发送可靠数据包，而不能请求重新发送不可靠数据包。查看 Cloudburst Network 库，我们看到这个数据包确实是以可靠方式发送的。

| ![RakServerOnlineInitialHandler](/img/blog/2024-05-05-raknet-amplification-attack/rak-server-online-initial-handler.png) |
|:--:|
| *RakServerOnlineInitialHandler#sendConnectionRequestAccepted 负责在初始连接序列中发送开放连接请求数据包。RakReliability.RELIABLE 枚举导致数据包在发送前被服务器缓存，因此允许客户端稍后通过 NAK 重新请求它。* |

由于数据包被标记为可靠，这意味着 Network 允许客户端以 ACK（肯定确认）或 NAK（否定确认）进行响应。在连接的这个阶段，这是一个滥用的向量，因为客户端还没有做任何事情来证明我们正在直接与他们通信，而不是接收带有伪造 IP 头部的 UDP 数据包。通过发送具有最大范围的 NAK，他们迫使我们连续发送连接请求接受数据包。


## 影响

这引出了一个问题：为什么攻击者会费心这样做？两个主要的理论是 UDP 放大，意味着目标是使用 Geyser 实例作为攻击其他服务器的手段，或基于提供商的暂停，意味着目标是让运行 Geyser 实例的服务器被其托管提供商暂停。


### UDP 放大

如前所述，UDP 没有内置握手。这意味着 UDP 允许将流量发送到给定 IP 地址，而无需他们确认或接受。当请求大小与响应大小的比率接近 1 时，这基本上不是问题，因为攻击者通过第三方发送数据几乎得不到什么好处。然而，在这种情况下，攻击者可以发送非常少量的数据（约 52 字节），并触发超过 8000 个 134 字节数据包的响应。由于连接序列直到连接请求接受总是相同的，并且不需要攻击者实际看到我们响应的数据包来正确响应，攻击者可以伪造发送到 Geyser 实例的 UDP 数据包的源 IP 头部。这意味着，由于这个放大向量，Geyser 实例可能在不知情的情况下被用来将攻击者的流量乘以理论最大因子 22,000。然而，在实践中，我们看到在野外实际放大因子约为 1000。


### 基于提供商的暂停

同样重要的是要考虑，服务器通常不是本地托管，而是与托管提供商一起托管。托管提供商有合法的商业利益，防止他们的网络被用于滥用，因为如果不这样做，可能会导致其他托管提供商和 ISP 完全阻止他们的流量。因此，许多托管提供商采用机制来检测来自其服务器的异常流量，并将“黑洞”进出其网络上发出此类流量的服务器的流量。这意味着，如果攻击者希望关闭特定服务器，而不是用传统的拒绝服务攻击来压倒它，他们可以简单地使其看起来像是服务器本身正试图参与拒绝服务攻击。这将导致来自服务器的出站流量被提供商丢弃，有效地产生相同的效果。我们看到这种情况发生，例如，一些托管在 Hetzer 上的 Geyser 服务，如下面的 MTR 所示。


```
mtr pe.minetropical.net -rwbc 10  	 
Start: 2024-03-28T18:24:58+0000
HOST: MS.local                                             	Loss%   Snt   Last   Avg  Best  Wrst StDev
  1.|-- 172.16.0.1                                            	0.0%	10	0.8   1.2   0.3   4.6   1.3
  2.|-- no-ptr.ziax.ltd (XXX.XXX.XXX.XXX)                       	0.0%	10	0.9   0.8   0.6   1.4   0.2
  3.|-- 62.7.117.42                                           	0.0%	10	7.5   7.6   7.2   8.4   0.3
  4.|-- core2-hu0-3-0-7.colindale.ukcore.bt.net (217.32.170.174)  0.0%	10	7.1   7.2   6.5   8.2   0.5
  5.|-- core6-hu0-3-0-15.faraday.ukcore.bt.net (109.159.252.134) 20.0%	10	7.5   7.7   7.0   9.0   0.6
  6.|-- 166-49-209-194.gia.bt.net (166.49.209.194)            	0.0%	10	7.5   7.6   7.2   8.8   0.5
  7.|-- t2c4-et-5-3-0.de-fra.gia.bt.net (166.49.195.103)      	0.0%	10   20.5  21.4  20.2  24.5   1.4
  8.|-- decix-gw.hetzner.com (80.81.192.164)                  	0.0%	10   20.8  20.8  20.3  22.0   0.4
  9.|-- core11.nbg1.hetzner.com (213.239.252.22)               	0.0%	10   25.8  26.2  25.5  29.3   1.2
 10.|-- blocked.hetzner.com (88.198.253.78)                    	0.0%	10   28.1  35.7  28.1  76.1  14.4
 11.|-- ???                                                  	100.0	10	0.0   0.0   0.0   0.0   0.0
 12.|-- blocked.hetzner.com (88.198.253.78)                  	90.0%	10  2906. 2906. 2906. 2906.   0.0
```
*MTR（我的路由追踪）显示了数据包到达给定 Geyser 服务器所经过的路径。在第 10 和第 12 跳，我们可以看到数据包被路由到主机名 blocked.hetzner.com，暗示到服务器的流量正在被空路由。*


## 缓解措施

这个漏洞的多种形式缓解措施，以及预防未来攻击的措施，已经被引入到 Geyser 及其上游网络库中。这些包括在 RakNet 连接早期的适当可靠性处理、早期 cookie 验证和速率限制。


### RakNet 连接早期的适当可靠性处理

主要的缓解措施是将被滥用数据包的可靠性类型更改为不可靠。这意味着服务器将不再对其 NAK 请求作出响应，有效地导致攻击者的请求得不到回应。下面的数据包捕获来自一个将连接请求接受的可靠性类型更改为不可靠的实例。我们可以看到，攻击者只是继续通过 NAK 增加他们请求的数据包范围，但没有提供响应。

| ![Wireshark Mitigated Attack](/img/blog/2024-05-05-raknet-amplification-attack/wireshark-mitigated-attack.png) |
|:--:|
| *Wireshark 捕获的正在受到攻击的 Geyser 实例的数据包，该实例构建缓解了原始攻击向量。可以看到攻击者发送 NAK 数据包，序列范围高达 40,959。然而，由于数据包不是以可靠方式发送的，Geyser 实例没有响应可发送。* |


### 早期 Cookie 验证

允许 UDP 放大攻击的根本问题是在连接早期阶段缺乏验证。原始的 RakNet 协议实际上为此指定了一个可选解决方案。作为背景，RakNet 在 2014 年被 Oculus 收购，并开源。鉴于 Oculus 被 Facebook 收购，原始实现的代码现在被他们存档。虽然 Mojang 对 RakNet 的实现与原始版本有一些差异，但它确实共享了许多相同的功能。在开放连接回复 1 数据包中，原始规范指的是一个布尔值 HasSecurity，如果布尔值为真，则后跟一个四字节 cookie。

| ![Original RakNet Packets](/img/blog/2024-05-05-raknet-amplification-attack/original-raknet-packets.png) |
|:--:|
| *原始 RakNet 数据包规范。注意 HasSecurity 布尔值和四字节 cookie。* |

事实证明，如果 Bedrock 服务器在开放连接回复 1 中提供了 cookie，Bedrock 客户端将用相同的 cookie 进行回复。这使我们能够有效地验证 Bedrock 客户端的 IP 没有被第三个数据包欺骗。如果 Bedrock 客户端的 IP 被欺骗，包含 cookie 的数据包将被发送到受害者的 IP，而攻击者将不知道。如果攻击者返回错误的 cookie，连接可以在此时终止。


### 速率限制

此外，Cloudburst Network 还实施了三种主要的速率限制，以防止协议被进一步滥用。下表总结了这些限制。

| 名称                    | RakNet 连接阶段 | 描述                                          | 默认值 |
| ----------------------- | ----------------------- | ---------------------------------------------------- | ------- |
| RAK_PACKET_LIMIT        | 连接后         | 每个 IP 每 tick（10 毫秒）连接后数据包限制  | 120     |
| RAK_GLOBAL_PACKET_LIMIT | 连接后         | 每 tick（10 毫秒）总体数据包限制                 | 1000    |

Geyser 最初推出了一项修复，强制使用这些默认值，但此后已[更新](https://github.com/GeyserMC/Geyser/pull/4532)，允许通过系统属性进行配置，这些属性已在 [Geyser Wiki](https://wiki.geysermc.org/geyser/geyser-command-line-arguments-and-system-properties/#disabling-warnings-and-advanced-configuration) 上记录。

这些默认值可能会对那些在 Geyser 实例前运行反向代理的用户造成问题，特别是那些使用 TCPShield 和 CosmicGuard 等 DDoS 缓解服务的用户，因为对于 Network 来说，所有连接似乎都源自同一个 IP。为了简化这些服务的配置，如果为基岩连接启用了代理协议，并且 Geyser 实例已正确配置为仅接受来自代理 IP 的连接，Geyser 将禁用这些速率限制。为了简化此配置，Geyser 的配置现在可以接受一个 URL 来指定代理服务器的 IP 范围。许多 DDoS 缓解提供商都有一个静态链接，指向一个始终最新的文本文件。

```yaml
bedrock:
# ...
  enable-proxy-protocol: true
  proxy-protocol-whitelisted-ips: [ "https://cosmic.global/ips/", "https://tcpshield.com/v4/" ]
```
*使用 URL 指向包含代理协议允许 IP 的换行分隔文本文件的 Geyser 配置。*


## 长期影响

所有运行易受攻击的 Geyser 实例的用户务必尽快更新。否则，您的 Geyser 实例可能会被利用，通过 UDP 拒绝服务放大攻击伤害他人。截至本文撰写时，我们仍在野外观察到该漏洞被利用，且在可预见的未来这一趋势不会停止。随着 Bedrock 更新迫使服务器所有者升级以支持最新版本，未修补的实例数量预计会随时间减少。


## 披露

该漏洞于2024年4月21日向 GeyserMC 团队披露。团队响应迅速并及时修复了该漏洞。

## 致谢

我们要感谢 GeyserMC 团队对该漏洞的快速响应和修补。我们还要感谢 Cloudburst Network 团队在实施额外缓解措施方面的帮助。我们也感谢社区在我们解决此问题时的耐心，感谢所有负责任地向我们披露此问题的人，感谢服务器托管商积极确保其托管服务上的实例尽快得到修补，感谢所有捐助者对 Geyser 的财务支持，以及感谢 Cubecraft 对项目的持续财务和运营支持。