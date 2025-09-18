---
title: 理解配置
description: 本页介绍了有关 Geyser 配置的基本信息以及每个选项的功能。
---

本页介绍了有关 Geyser 配置的基本信息以及每个选项的功能。虽然它们在配置本身中进行了解释，但这里更详细地解释了每个选项的作用。

## 基岩部分 {#bedrock-section}
Geyser 在基岩端面向的选项。主要包含有关基岩版将如何看待服务器的选项。

**`address`**: 基岩端 Geyser 的地址。在大多数情况下，这不需要更改，除非您想限制哪些 IP 可以连接到您的服务器。除非在设置指南中另有说明，否则请将其保留为 0.0.0.0（默认值）。

**`port`**: Geyser 将在其上运行的端口。默认情况下，在基岩版中为 19132。如果您使用的是服务器托管提供商，则可能无法使用此端口 - 在这种情况下，请阅读设置指南以继续。

**`clone-remote-port`**: 某些托管服务会在您每次启动服务器时更改您的 Java 端口，并要求对基岩/UDP 连接使用相同的端口。此选项使基岩端口在您每次启动服务器时都与 Java 端口相同。此选项在独立版 Geyser 上不起作用。

**`motd1`**: Geyser MOTD 的第一行。

**`motd2`**: Geyser MOTD 的第二行。**请记住，此选项仅在 Geyser 显示在“朋友”选项卡中时才有效！**

**`server-name`**: 显示在暂停菜单和设置菜单右上角区域的世界名称。

**`compression-level`**: 一个数字值，表示要压缩多少传出流量。可以是 -1 到 9 之间的任何数字；任何其他值都将被替换为最接近的可接受值。数字越大，使用的 CPU 处理就越多，但使用的带宽就越少。默认为 6。

**`broadcast-port`**:  用于向基岩客户端广播 MOTD 的端口，他们应该使用该 MOTD 连接到服务器。除非 Geyser 在与用于连接的内部端口不同的内部端口上运行，否则不要取消注释并更改此项。

**`enable-proxy-protocol`**:  是否为客户端启用 PROXY 协议。除非您在 Geyser 实例前面运行 UDP 反向代理，否则您不需要此功能。您不需要此功能即可使用 BungeeCord（及其分支）、Velocity 或 Waterfall。

**`proxy-protocol-whitelisted-ips`**: 默认禁用，仅当您使用“enable-proxy-protocol”时才启用此功能。允许使用 PROXY 协议的代理 IP 地址/子网列表。仅当您无法使用适当的防火墙时（通常在使用共享托管提供商等情况下为 true）才应真正使用此功能。将此列表保留为空意味着没有 IP 地址白名单。支持 IP 地址、子网和指向包含其中任一项的纯文本文件的链接。

## 远程部分 {#remote-section}
远程（Java）服务器的选项。

**`address`**: 您要加入的 Minecraft：Java 版服务器的地址。默认情况下，此值为 `auto`。通过将其保留为 `auto`，地址、端口和 Floodgate 支持将自动配置。在独立版中，将此项保留为 `auto` 会将远程地址设置为 127.0.0.1。

**`port`**: 您在 `address` 部分中指定的 Minecraft：Java 版服务器的端口。对于插件版本，如果地址已设置为“auto”，则端口也将遵循服务器的侦听端口。

**`auth-type`**: Minecraft：Java 版服务器的身份验证类型。有效选项为 `online`、`offline` 和 `floodgate`。

**请记住，您在 Geyser `auth-type` 选项中指定的内容必须与远程服务器具有的内容相同（Geyser 处于在线模式而远程处于离线模式除外）。如果没有正版帐户，您根本无法加入在线模式服务器。如果您想允许 Minecraft：基岩版帐户在没有 Minecraft：Java 版帐户的情况下加入，请参阅 [Floodgate](/zh-CN/wiki/floodgate/) Wiki 页面。**

**`use-proxy-protocol`**: 连接到服务器时是否启用 PROXY/HAProxy 协议。仅在以下情况下此功能才有用：
- 您的服务器支持 PROXY 协议（可能不支持）
- 您运行启用了相应选项的 Velocity 或 BungeeCord。
- 如果您不知道这是什么，请不要碰它！

**`forward-hostname`**: 将基岩客户端用于连接的主机名/IP 地址转发到 Java 服务器。这旨在用于代理上的强制主机。

## 通用选项 {#general-options}
主要特定于 Geyser 本身的通用 Geyser 选项。

**`floodgate-key-file`**:  Floodgate 使用加密来确保使用来自授权来源。这应该指向由 Floodgate（BungeeCord、Spigot 或 Velocity）生成的公钥。如果不使用 Floodgate，可以忽略此项。如果您在同一台服务器上使用插件版本的 Floodgate，密钥将自动从 Floodgate 获取。Floodgate 的密钥文件路径。要求您已安装 [Floodgate](/zh-CN/wiki/floodgate/) 并将 `auth-type` 设置为 `floodgate`。

**`saved-user-logins`**: 仅适用于在线模式身份验证类型。
存储应在登录后保存其 Java 版帐户的基岩玩家用户名列表。
这保存了一个身份验证链令牌，该令牌可以稍后重新用于验证玩家。这不保存电子邮件或密码，
但在添加到此列表并授予他人对此 Geyser 实例文件的访问权限时，您仍应谨慎。
从此列表中删除名称将在下次 Geyser 启动时删除其缓存的登录信息。
令牌将保存的文件与此配置在同一文件夹中，名为 `saved-auth-chains.json`。

格式：

```yml
saved-user-logins:
  - jeb_
  - Dinnerbone
```

**`command-suggestions`**: 当基岩客户端首次打开命令提示符时，如果存在大量命令建议，它们会冻结或崩溃。此配置选项禁用发送命令建议以防止任何冻结。**自 1.16.100 起：** 命令冻结和崩溃已大大减少；您可能不再需要禁用此选项。

**`passthrough-motd`**: 是否应从远程服务器中继 MOTD。导致基岩部分中的 `motd1` 和 `motd2` 选项不再有用。

**`passthrough-player-count`**: 是否应从远程服务器中继当前和最大玩家数量。

**`legacy-ping-passthrough`**: 如果启用，则通过模拟 Minecraft 客户端手动 ping 服务器，而不是使用服务器的 API。**此选项应*仅*在您的 MOTD 或玩家数量不准确时启用，** 因为它可能会导致错误，尤其是在 BungeeCord 上。此选项在独立版 Geyser 上不起作用。

**`ping-passthrough-interval`**: 假 Minecraft 客户端应尝试 ping 远程服务器以更新信息的频率，以秒为单位（设置为 1 将每秒 ping 服务器一次；设置为 3 将每三秒 ping 服务器一次）。仅与独立版和旧版 ping 穿透相关。如果您遇到超时或 BrokenPipe 异常，请增加该数字。

**`forward-player-ping`**: 是否将玩家 ping 转发到服务器。虽然启用此选项将使基岩玩家拥有更准确的 ping，但也可能导致玩家更容易超时。

**`max-players`**: ping 服务器时显示的最大玩家数量。这实际上并不会限制此时可以加入 Geyser 实例的玩家数量。如果玩家数量更多，ping 时数字会在视觉上增加，因为基岩客户端甚至不会尝试加入已满的服务器。

**`debug-mode`**: 是否应在控制台中打印调试消息。如果您遇到错误并需要更多上下文，这很有用。是的，这会导致控制台中出现更多消息、警告甚至错误 - 某些数据包未翻译。

**`allow-third-party-capes`**: 是否应向基岩玩家显示第三方（Optifine、5zig、LabyMod 等）披风。

**`allow-third-party-ears`**: 是否应启用第三方 Deadmau5 风格的耳朵。目前仅支持 MinecraftCapes。

**`show-cooldown`**: 基岩版目前没有 Java 版 1.9+ 的战斗机制。为了解决这个问题，Geyser 通过发送标题消息来发送假的冷却时间。如果使用 1.8 战斗机制，则不应显示此冷却时间。此设置可用的选项有 `false`（不发送冷却时间）、`title`/`true`（在标题中显示冷却时间指示）或 `actionbar`（在操作栏中显示冷却时间指示）。所有其他选项默认为 `false`。

**`show-coordinates`**: 基岩版有一个选项可以在屏幕左上角显示坐标。此设置启用或禁用此功能。

**`disable-bedrock-scaffolding`**: 是否阻止基岩玩家执行其脚手架式搭桥。

**`emote-offhand-workaround`**: 自 Java 版 1.9 起，客户端可以通过按键绑定切换主手和副手中的物品。基岩版没有此功能，因此此配置选项弥补了这一点，如果设置，当基岩玩家执行任何表情时，它将交换副手和主手物品，就像 Java 版按键绑定一样。可以将其设置为三个选项之一：
- `disabled` - 默认/回退，不应用此解决方法
- `no-emotes` - 表情不会发送给其他基岩客户端，并且副手将被交换。这实际上禁用了所有表情的显示。
- `emotes-and-offhand` - 表情将发送给基岩客户端，并且副手将被交换

**`default-locale`**: 如果找不到玩家的语言环境，则发送给玩家的默认语言环境。此选项默认禁用 - 要启用它，请删除选项前面的“#”。

**`cache-images`**: 指定图像将缓存到磁盘的天数，以节省从互联网下载的时间。值为 0 表示禁用。（默认：0）

**`allow-custom-skulls`**: 允许在放置时显示自定义头颅。保持启用可能会导致旧/弱设备性能下降。

**`max-visible-custom-skulls`**: 每个玩家显示的最大自定义头颅数量。增加此值可能会降低弱设备的性能。设置为 -1 将显示所有自定义头颅，无论距离或数量如何。

**`custom-skull-render-distance`**: 指定玩家周围自定义头颅显示的半径（以方块为单位）。默认值为 32。

**`add-non-bedrock-items`**: 是否添加（目前仅）熔炉矿车作为游戏中的独立物品，这在基岩版中通常不存在。仅当使用不使用“传输数据包”风格服务器切换的代理时才需要禁用此项。如果禁用，熔炉矿车物品将映射为漏斗矿车物品。此选项需要重启 Geyser 才能更改其设置。

**`above-bedrock-nether-building`**: 基岩版阻止在地狱 Y127 以上建造和显示方块 - 启用此配置选项通过将地狱维度 ID 更改为末地 ID 来解决此问题。其主要缺点是地狱中的天空将类似于末地天空，但这最终是实现此功能的唯一方法。

**`force-resource-packs`**: 如果有资源包，强制客户端加载所有资源包。如果设置为 false，则允许用户在不想下载资源包时断开与服务器的连接。

**`xbox-achievements-enabled`**: 允许解锁 Xbox 成就。

**`log-player-ip-addresses`**: 服务器是否将记录玩家 IP 地址。

**`notify-on-new-bedrock-update`**: 是否提醒控制台和操作员有新的 Geyser 版本可用，该版本支持此 Geyser 版本不支持的基岩版本。建议保持此选项启用，因为许多基岩平台会自动更新。

**`unusable-space-block`**: 用于标记基岩玩家库存中不可用槽位的物品。例如创造模式下的 2x2 合成网格，或大小不同于通常 3x9 的自定义库存菜单。默认物品为屏障方块（因此默认值为 minecraft:barrier）。接受任何 Minecraft 基岩版物品标识符，例如 `minecraft:apple`。要将其设置为自定义物品，您需要添加 `geyser_custom:` 命名空间。

## 指标

bStats 是一个完全匿名的统计跟踪器，仅跟踪有关 Geyser 的基本信息，例如有多少人在线、有多少服务器使用 Geyser、使用什么操作系统等。您可以在 [此处](https://bstats.org/) 了解有关 bStats 的更多信息。要查看 Geyser 统计信息，请参见 [此处](https://bstats.org/plugin/server-implementation/GeyserMC/)。

**`enabled`**: 是否启用了指标

**`uuid`**: 服务器的 UUID，请勿更改此项！

## 高级选项

**`scoreboard-packet-threshold`**: Geyser 在每个记分板数据包后更新记分板，但当 Geyser 尝试每秒处理大量记分板数据包时可能会导致严重延迟。此选项允许您指定在每秒多少记分板数据包后，记分板更新将限制为每秒四次更新。

**`enable-proxy-connections`**: 允许来自 ProxyPass 和 Waterdog 的连接。请参阅 https://www.spigotmc.org/wiki/firewall-guide/ 获取帮助 - 使用 UDP 而不是 TCP。**此选项不需要在 BungeeCord 或 Velocity 等实例中启用**。

**`mtu`**: https://en.wikipedia.org/wiki/Maximum_transmission_unit - 互联网支持的最大 MTU 为 1492，但可能会导致数据包碎片问题。默认值为 1400。

**`use-direct-connection`**: 是否直接连接到 Java 服务器而不创建 TCP 连接。仅当与数据包或网络接口的插件无法与 Geyser 正常工作时才应禁用此选项。如果在插件版本中启用，远程地址和端口部分将被忽略。如果在插件版本中禁用，预计性能会下降且延迟会增加。

Default Geyser Config: [config.yml](https://github.com/GeyserMC/Geyser/blob/master/core/src/main/resources/config.yml)
