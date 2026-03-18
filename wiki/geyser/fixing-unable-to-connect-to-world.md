---
title: 解决"无法连接到世界"问题
description: 关于"无法连接到世界"错误的常见问题及解决方案。
---

## 解决"无法连接到世界"错误 {#解决无法连接到世界错误}
这是在尝试设置 Geyser 时最常见的错误。以下是一些解决步骤。
通常，此错误是由 Geyser 配置不当或网络问题引起的。

:::warning
如果您使用的是 Minecraft 服务器托管提供商（例如 Aternos 或 Apex Hosting），您应该参考[设置](/wiki/geyser/setup)页面上的托管提供商设置说明。
遵循这些说明很可能就能解决该问题！
:::

如果您没有使用 Minecraft 服务器托管提供商，请继续往下看。

:::info
要检查您的服务器在 Bedrock 版本上（理论上）是否可访问，请在服务器控制台中运行以下命令：
`geyser connectiontest <ip> <port>`，然后查看建议的解决方法。
:::

### Java Edition 玩家无法连接！ {#java-edition-玩家无法连接}

这**不应该**是 Geyser 的问题。Geyser 不会修改服务器行为。Floodgate 会修改登录结构，但仅针对 Bedrock 玩家。
请联系您的托管提供商或在其他地方查找解决此连接问题的方法。

### 更新 Geyser 后连接失败 {#更新-geyser-后连接失败}

如果这是在更新 Geyser 插件版本后发生的，请确保关闭服务器、更换 Geyser jar 文件，然后启动服务器。
如果您重置了配置文件，请再次查看[设置指南](/wiki/geyser/setup/)。

### 我的控制台有错误！ {#我的控制台有错误}

请阅读[常见问题页面](/wiki/geyser/common-issues/)。如果那里没有记录其他错误，请加入我们的 [Discord](https://discord.geysermc.org)。

### 尝试重启服务器和游戏 {#尝试重启服务器和游戏}

特别是在移动设备上，有时只是重启 Minecraft 就能解决问题。

### 是服务器还是客户端的问题？ {#是服务器还是客户端的问题}

将您的 Java 服务器 IP 和 Bedrock 地址输入这里：https://mcsrvstat.us/。这是判断服务器是否可访问的好方法。
另外，检查您是否能在服务器控制台中看到连接尝试。如果您看不到，很可能是网络问题。

特别针对主机玩家：如果只有他们无法加入，而其他 Bedrock 玩家可以，那很可能是他们主机连接方式的问题。

# 常规故障排除步骤

### 确保在正确的 IP 和端口上连接 {#确保在正确的-ip-和端口上连接}

您应该使用 Java 服务器 IP 和 Bedrock 端口（这是在 Geyser 配置中设置的）进行连接。例如，如果您端口转发了 19132，那么从 Bedrock 连接时应该指定端口 19132。

### 我使用的是托管提供商或 VPS！ {#我使用的是托管提供商或-vps}

请阅读[此页面了解支持的托管提供商](/wiki/geyser/supported-hosting-providers/)，查看您的托管或服务器提供商是否需要额外的配置步骤。
某些 VPS/KVM 提供商可能需要进一步设置，例如 OVH、SoYouStart 和 Oracle Cloud。请阅读此[注意事项](/wiki/geyser/port-forwarding#issues-with-specific-vpskvm-providers)了解更多信息。

### 使用 Docker 或 Pterodactyl 的问题 {#使用-docker-或-pterodactyl-的问题}
请确保为 pterodactyl 分配端口，在 docker 上则添加到 docker compose 文件。请参阅我们的[端口转发](/wiki/geyser/port-forwarding#using-docker-or-pterodactyl)页面获取解决方法。

## 端口转发问题 {#端口转发问题}

您的服务器确实需要进行端口转发才能允许外部网络连接。请参阅[我们的端口转发指南](/wiki/geyser/port-forwarding/)获取更多信息。

### 在 DNS 选项/端口转发中使用 TCP 而不是 UDP {#在-dns-选项端口转发中使用-tcp-而不是-udp}

Minecraft: Java Edition 使用 TCP 连接；Minecraft: Bedrock Edition 使用 UDP。如果只使用 TCP 对 Bedrock Edition 端口进行端口转发，是不会工作的，必须使用 UDP。使用 `TCP/UDP`（两种协议）对 Bedrock Edition 端口进行转发也可以工作，但不建议这样做，除非 Java Edition 和 Bedrock Edition 共享同一个端口。

### Bedrock 端口小于 10000 {#bedrock-端口小于-10000}

从历史上看，Bedrock 端口号较低会导致问题。将其设置为 10000 或更高似乎是安全的。

### Bedrock 玩家在通过 TCP 端口（例如在 Java 或同一服务器上的网站）访问服务器后可以连接，或者只有同时在 Java Edition 上玩的玩家才能通过 Geyser 加入 {#bedrock-玩家在通过-tcp-端口访问服务器后可以连接或者只有同时在-java-edition-上玩的玩家才能通过-geyser-加入}

这可能是您服务器上的防火墙问题。尝试以下解决方法：
尝试通过 Web 浏览器连接 Bedrock IP 和端口——例如 `http://test.geysermc.org:19132`。这不会起作用，但然后通过 Bedrock 尝试连接，应该就可以工作了。

OVH/SoYouStart 的具体解决方法可以在[这里](/wiki/geyser/port-forwarding#issues-with-specific-vpskvm-providers)找到。

### 更改 Geyser 配置中的 `bedrock` `address`。 {#更改-geyser-配置中的-bedrock-address}

除了少数特定的托管提供商外，您通常不需要更改 Geyser 配置的这一部分。
但是，在极少数情况下，这确实可以解决问题——例如，当 Windows 有多个网络适配器时（通过在 cmd 中运行 `ipconfig` 来检查），
可以将 `address` 设置为您想要使用的适配器的本地 IP。

## 使用托管提供商或其他位置 {#使用托管提供商或其他位置}

### Pterodactyl {#pterodactyl}

如果您在使用 Pterodactyl Panel 时收到此错误，请尝试编辑 Geyser 配置并将端口更改为除 `19132` 以外的端口（例如 `25566`）。

## 在同一网络上的另一台计算机上托管 Geyser {#在同一网络上的另一台计算机上托管-geyser}

### 只能从同一台计算机连接，其他地方不行 {#只能从同一台计算机连接其他地方不行}

您的防火墙可能挡在中间了。尝试为 Java 添加例外，或者为了测试目的禁用防火墙。

## 作为故障排除的最后手段... {#作为故障排除的最后手段}

Minecraft 在[这里](https://www.minecraft.net/download/server/bedrock)提供了一个原版 Bedrock 服务器。下载、运行并尝试连接它可以帮助确定问题是在 Geyser 端还是在您的计算机/网络端。
