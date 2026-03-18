---
title: 常见问题
description: 人们在使用 Geyser 时可能遇到的常见问题及其可能的修复方法。
---

# 常见问题

通常情况下，用户可能会遇到 Geyser 在服务器列表中不显示或遇到类似问题。
本页面包含一些用户可能遇到的常见问题及其可能的修复方法。
如果仍然无法解决问题，请加入[我们的 Discord](https://discord.gg/geysermc) 获取支持。

# Floodgate
关于 Floodgate 问题请参阅：[Floodgate: 已知问题/注意事项](/wiki/floodgate/issues/)。

# 我无法连接！（服务器没有在好友列表中显示或显示"无法连接到世界"）
* 如果您不使用 TCPShield 等反向代理，请确保 `advanced.java.use-haproxy-protocol` 设置为 false。
要修复控制台无错误提示的"无法连接到世界"问题，请参阅[此处](/wiki/geyser/fixing-unable-to-connect-to-world/)。

## 如果服务器没有在好友列表中显示 {#if-the-server-doesnt-show-up-in-the-friends-list}

* *如果使用 Windows 10、iOS 或 Android*：尝试在游戏内的服务器列表中添加服务器。
* *如果使用 Xbox One*：尝试使用 [BedrockConnect](/wiki/geyser/using-geyser-with-consoles/) 连接。
* *如果使用 PS4*：[尝试使用 LAN 代理](/wiki/geyser/using-geyser-with-consoles#playstation-4)。
* *如果使用 Nintendo Switch*：目前没有办法让本地服务器显示在好友选项卡中，但您仍然可以使用 [BedrockConnect](/wiki/geyser/using-geyser-with-consoles/) 连接。

*如果 Geyser 实例托管在本地*：尝试使用 `localhost` 或 `0.0.0.0` 作为 IP 地址。
*如果这不起作用，或者您的 Geyser 实例在网络中的另一台计算机上*：使用您的**本地** IPv4 地址。

:::warning

有关修复控制台无错误提示的"无法连接到世界"问题，请参阅[此处](/wiki/geyser/fixing-unable-to-connect-to-world/)

:::

### 启动时出现 `java.net.BindException: Address already in use: bind` {#javanetbindexception-address-already-in-use-bind-on-startup}
这意味着有某个程序（可能是 Geyser 的另一个实例）正在使用您在配置中指定的端口。请确保关闭所有使用此端口的应用程序。如果您不记得打开过任何程序，通常重启计算机可以解决此问题。

### [...]` 已由更新版本的 Java Runtime 编译（class file version 60.0）` {#-has-been-compiled-by-a-more-recent-version-of-the-java-runtime-class-file-version-600}

请参阅此链接升级到 Java 17：https://docs.papermc.io/misc/java-install。

### 主机服务商不会立即开放 UDP {#hosting-provider-will-not-immediately-open-up-udp}

这些步骤仅适用于独立版本的 Geyser。
这通常与您主机端有关。最常见的原因是它们没有开放 UDP 协议的端口，Minecraft: Bedrock Edition 使用 UDP 协议，而 Minecraft: Java Edition 使用 TCP。
解决这个问题的一种方法（如果您使用在线主机）是关闭服务器，在请求服务器 jar 时选择 Nukkit 或任何其他 Bedrock 版本服务器软件（您实际上不会切换到 Nukkit）。然后，打开您的 FTP 文件管理器找到 Nukkit jar。接着，用您正在使用的服务器软件替换这个 jar。启动服务器时，它应该会开放 UDP 端口，同时仍允许您使用您想要的服务器 jar。

**请注意：**如果您的服务器在启动时自动重新下载 jar，例如使用自动更新系统，此解决方法将不起用。如果这对您不起作用，请联系您的主机，因为我们无法处理。

# 卡在"正在定位服务器"且无错误

您可能需要更新 Java 版本。如果是，请访问 [Adoptium.net](https://adoptium.net/) 更新。

有时在网络环境较差的情况下会发生这种情况。Geyser 配置中有 `advanced.bedrock.mtu` 选项；慢慢降低这个数字（每次减少 100），每次重启后重新测试连接。

如果您在控制台日志中没有看到连接错误提示的"无法连接到世界"，此选项很可能不会有帮助。

# 登录失败

***如果您使用的是插件版本：***在 Geyser 配置中，将远程地址设置为 `127.0.0.1`。如果这不起作用，请检查启动日志中关于 Docker 的消息，并在远程地址中使用该地址。

### 无法回复 EncryptionRequestPacket 且没有 profile 和 access token {#cannot-reply-to-encryptionrequestpacket-without-profile-and-access-token}

此消息有两种原因：

*Floodgate 问题*：

此消息可能在使用 Floodgate 时出现。通常，这意味着发生了配置错误或其他插件冲突。如果您将 Floodgate 密钥从其文件夹复制到同一服务器上的 Geyser 文件夹，这现在是不必要的，您可以安全地删除 Geyser 的副本，重启，然后重试。

*服务器处于在线模式而 Geyser 处于离线模式*：

如果您将配置设置成这样，简单来说，它将无法工作。如果 Java 服务器的身份验证设置为在线模式，则 Geyser 也应配置为相同方式。服务器需要一个有效的 Minecraft: Java Edition 账户，如果您没有使用 Geyser 登录一个账户，您将无法加入服务器。如果您的配置设置正确但仍然遇到此问题，可能是您的凭证无效。

### 连接被拒绝：\<插入 IP 和/或域名\> {#connection-refused-insert-ip-andor-domain}

连接被拒绝通常意味着在该端口上找不到 Java 服务器，或者服务器在网络级别拒绝了连接。
后者可能发生在使用 TCPShield 等 anti-DDOS 插件时，否则请确保您在配置中正确拼写了要连接的服务器，服务器已启动并且端口转发正确。

### Floodgate 配置错误 {#floodgate-misconfiguration}
有关更多信息，请参阅[此页面](/wiki/floodgate/setup/)。

### 缺少 profile key。此服务器需要安全 profile。 {#missing-profile-key-this-server-requires-secure-profiles}

请参阅[此页面](/wiki/geyser/secure-chat/)。

### Mojang 重置账户凭证 {#mojang-resetting-account-credentials}
不幸的是，我们无法控制这个问题，当您在服务器上以插件形式运行 Geyser 或加入远离您所在位置的朋友时，很可能是这种情况。如果您在本地运行 Geyser，则不应该发生这种情况，但我们建议服务器使用我们制作的名为 [Floodgate](https://github.com/GeyserMC/Floodgate) 的插件，它允许 Bedrock 客户端无需 Java Edition 账户即可加入您的服务器。在此查看更多信息[/wiki/floodgate](/wiki/floodgate)。

# Bedrock 显示"无效 IP 地址！"
如果输入的域名解析到 SRV 记录，就会发生这种情况，Bedrock 不支持 SRV 记录。尝试改用 IPv4 地址。
此外，当尝试在 IP 选项卡中同时指定 ip 和端口时也会发生这种情况 - 在这种情况下，请参阅[此处](/img/wiki/edit_server_form.png)了解如何正确连接到"test.geysermc.org:19132"。

# Bedrock 客户端在首次打开命令时冻结
在 Geyser 配置中禁用 `command-suggestions`。这将停止冻结，但代价是移除 Bedrock 客户端的命令建议。
如果您是专用服务器管理员，可以让玩家使用一个命令列表。这也将从 tab 补全中移除任何不必要的命令，适用于 Java 玩家。
它还有其他好处。这里有一个可以做到这一点的插件：
[CommandWhitelist](https://www.spigotmc.org/resources/81326/)。或者，使用 [HideCommands](https://github.com/Redned235/HideCommands) Geyser 扩展仅为 Bedrock 玩家隐藏命令。

# 加载 locale 资源缓存失败：无法识别的标记 'Cannot'
或与启动时下载 locale 文件失败相关的其他错误，通常是由于 Java 尝试使用 IPv6 连接，而 Mojang 只使用 IPv4，因此请使用此标志启动 Geyser 或服务器 `-Djava.net.preferIPv4Stack=true`，例如：`java -Xms1024M -Djava.net.preferIPv4Stack=true -jar Geyser.jar`

# 客户端版本过旧！请使用 1.x.x

服务器太新或 Geyser 太旧。请确保您使用的是最新版本的 Geyser。

# 服务器版本过旧！我仍在 1.x.x

更新服务器或让他们安装 [ViaVersion](https://viaversion.com/)。您也可以尝试 [VIAaaS](https://github.com/ViaVersion/VIASaaS)（即服务形式的 ViaVersion）。

# 仅适用于带 floodgate 的 BungeeCord

如果您使用 floodgate，请确保它已安装在您的所有 Spigot 后端服务器上，如下所示：

1. `Bungee: Geyser 和 Floodgate`
2. `Lobby: floodgate`
3. `Server-1: floodgate`
4. `Server-2: floodgate`

以此类推。

* 请同时确保您在所有服务器上拥有相同的 `key.pem` 和 `config.yml`。

如果您的玩家无法从大厅连接到另一个后端服务器，请检查控制台。

### 可能导致问题的插件 {#plugins-that-can-cause-issues}
* `HamsterAPI`
