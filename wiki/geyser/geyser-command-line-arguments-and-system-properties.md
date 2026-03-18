---
title: Geyser 命令行参数和系统属性
description: Geyser 提供了一些命令行参数/系统属性，允许您在不编辑配置文件的情况下配置 Geyser。
---

# Geyser 命令行参数和系统属性

Geyser 提供了一些命令行参数/系统属性，允许您在不编辑配置文件的情况下配置 Geyser。
此外，您还可以抑制一些可能打印到控制台的警告。

## 配置系统属性 {#configuration-system-properties}

您可以使用以下命令行参数将 Geyser 设置为自动绑定到特定地址和端口。
这主要面向服务器托管提供商，以便自动为用户配置服务器。

:::note

Geyser 特定属性优先于插件属性！

:::

- ```-DgeyserUdpPort=server``` 或 ```-DpluginUdpPort=server```
  - ```-1``` 表示不支持 UDP，并将强制停止 Geyser。
  - ```server``` 表示匹配 TCP 服务器的端口。
  - 任何其他数字表示使用该特定端口

- ```-DgeyserUdpAddress=server``` 或 ```-DpluginUdpAddress=server```
  - ```server``` 表示匹配 TCP 服务器的绑定地址
  - 任何其他字符串将原样用作绑定地址。

- ```-DgeyserBroadcastPort=19132```
    - 在 Geyser 运行所使用的端口与玩家连接的端口不匹配的情况下可以使用（例如由于端口转发路由）。
    - 如果未设置或设置为 0，则默认为 Geyser 运行所使用的端口

## 禁用警告和高级配置 {#disabling-warnings-and-advanced-configuration}
您可以使用以下命令行参数来禁用可能打印到控制台的一些警告。除非另有说明，否则所示值为 Geyser 使用的默认值。

:::caution

禁用 Geyser 日志警告不会解决实际问题！只有在您知道自己在做什么的情况下才禁用它们。

:::

- `-DGeyser.PrintSecureChatInformation=true`
  - 允许您禁用有关安全聊天被禁用的警告。
  由于警告是在服务器发送警告时发送的，此选项现在作用不大。
- `-DGeyser.ShowScoreboardLogs=true`
  - 允许您禁用与计分板相关的警告，例如"Tried to update score without the existence of its requested objective"。
- `-DGeyser.ShowResourcePackLengthWarning=true`
  - 允许您禁用有关资源包路径过长的警告。禁用此警告不会解决底层问题！
  如果您的资源包路径超过 80 字符限制，控制台玩家可能根本无法加入您的服务器。
- `-DGeyser.PrintPingsInDebugMode=true`
  - 控制是否在调试模式下记录 ping。
- `-DGeyser.UseDirectAdapters=true`
  - 允许您禁用 NMS 适配器的使用。禁用将导致性能损失，仅应用于调试。
  这是 Spigot 专用的，在其他平台上不起作用。
- `-DGeyser.BedrockNetworkThreads=8`
  - 允许您设置用于 Bedrock 网络的线程数。默认情况下不设置为特定数字，而是根据可用资源计算。
- `-DGeyser.AddTeamSuggestions=true`
  - 允许您关闭计分板命令中队伍的建议。默认启用，如果定义了很多队伍，禁用此功能可以帮助提高性能。
  在配置中将"command-suggestions"设置为 false 也会禁用此功能。
- `-DGeyser.NoPlayerListPS=true`
  - 启用一个不太理想的解决方案来解决在有很多玩家在线的 PlayStation 主机上聊天/输入命令时客户端崩溃的问题。
  默认禁用，因为大多数设置不需要此功能。
- `-DGeyser.RakPacketLimit=120`
  - 设置 RakNet 的每 IP 每刻（10ms）连接后数据包限制。
- `-DGeyser.RakGlobalPacketLimit=100000`
  - 设置 RakNet 的每刻（10ms）全局数据包限制。
- `-DGeyser.RakRateLimitingDisabled=false`
  - 允许您禁用 RakNet 的连接后速率限制器。除非初始 RakNet 连接由反向代理处理，否则不应禁用速率限制器。
- `-DGeyser.RakSendCookie=true`
  - 允许您禁用发送和验证 [Open Connection Reply 1](https://wiki.vg/Raknet_Protocol#Open_Connection_Reply_1) 数据包中的 cookie challenge。除非 Geyser 运行在反向代理后面，而该反向代理也发送 challenge 以防止 IP 欺骗，否则不应将其设置为 `false`。

## Geyser-Standalone 专用选项 {#geyser-standalone-specific-options}

### `--config [file]` {#--config-file}
- **别名: `-c`**
- 指向要使用的备用配置文件。

### `--gui` / `--nogui` {#--gui----nogui}
- **别名: `gui` / `nogui`**:
- 根据上下文强制使用或不使用 GUI。

## 覆盖特定配置值 {#overriding-specific-config-values}
覆盖标准配置选项（例如 `command-suggestions`）：

`--command-suggestions=false`

覆盖嵌套配置选项（例如 `remote` 部分中的 `address`）：

`--remote.address=test.geysermc.org`
