---
title: 常见问题
description: 人们在使用 Geyser 时可能遇到的常见问题及其潜在的解决方法。
---

# 常见问题

通常，人们可能会遇到 Geyser 未显示在服务器列表中或遇到类似的问题。
本页面包含一些人们可能遇到的常见问题以及潜在的解决方法。
如果您仍然无法解决问题，请加入[我们的 Discord](https://discord.gg/geysermc)寻求支持。

# Floodgate
关于 Floodgate 的问题，请参阅：[Floodgate：已知问题/注意事项](/wiki/floodgate/issues/)。

# 我无法连接！（服务器未显示在好友列表中，或者我收到“无法连接到世界”）
* 如果您不使用 TCPShield 等反向代理，请确保 `enable-proxy-protocol` 设置为 false。
要修复在没有控制台错误的情况下出现的“无法连接到世界”问题，请参阅[此处](/wiki/geyser/fixing-unable-to-connect-to-world/)。

## 如果服务器未显示在好友列表中 {#if-the-server-doesnt-show-up-in-the-friends-list}

* *如果使用 Windows 10、iOS 或 Android*：尝试在游戏中将服务器添加到服务器列表。
* *如果使用 Xbox One*：尝试使用 [BedrockConnect](/wiki/geyser/using-geyser-with-consoles/) 连接。
* *如果使用 PS4*：[尝试使用局域网代理。](/wiki/geyser/using-geyser-with-consoles#playstation-4)
* *如果使用 Nintendo Switch*：目前没有办法让本地服务器显示在“好友”选项卡中，但您仍然可以使用 [BedrockConnect](/wiki/geyser/using-geyser-with-consoles/) 连接。

*如果 Geyser 实例是本地托管的：* 尝试使用 `localhost` 或 `0.0.0.0` 作为 IP 地址。
*如果这不起作用，或者您的 Geyser 实例在网络中的另一台计算机上：* 使用您的**本地** IPv4 地址。

:::warning

有关修复在没有控制台错误的情况下出现的“无法连接到世界”问题，请参阅[此处](/wiki/geyser/fixing-unable-to-connect-to-world/)。

:::

### `java.net.BindException: Address already in use: bind` on startup. {#javanetbindexception-address-already-in-use-bind-on-startup}
这意味着您在配置中指定的端口上已有程序（很可能是另一个 Geyser 实例）在运行。请确保关闭所有在此端口上运行的应用程序。如果您不记得打开过任何程序，通常重启计算机可以解决此问题。

### [...]` has been compiled by a more recent version of the Java Runtime (class file version 60.0)` {#-has-been-compiled-by-a-more-recent-version-of-the-java-runtime-class-file-version-600}

请参阅此链接以更新到 Java 17：https://docs.papermc.io/misc/java-install。

### 主机提供商不会立即开放 UDP。 {#hosting-provider-will-not-immediately-open-up-udp}

这些步骤仅适用于独立版 Geyser。
这通常与您的主机端有关。最常见的原因是，他们不通过 UDP 协议开放端口，而我的世界：基岩版使用 UDP 协议，与我的世界：Java 版使用 TCP 协议不同。
一种解决方法（如果您使用的是在线主机）是关闭您的服务器，并在请求服务器 jar 时，选择 Nukkit 或任何其他基岩版服务器软件（您实际上不会切换到 Nukkit）。然后，打开您的 FTP 文件管理器并找到 Nukkit jar。然后，用您正在使用的服务器软件替换此 jar。启动服务器后，它应该会通过 UDP 开放端口，同时仍然允许您使用您想要的服务器 jar。

**请注意：** 如果您的服务器在启动时自动重新下载 jar，例如使用自动更新系统，则此解决方法将不起作用。如果此方法对您不起作用，请联系您的主机，因为我们无能为力。

# 卡在“正在定位服务器”且无错误 {#stuck-on-locating-server-with-no-errors}

您可能需要更新您的 Java 版本。如果是这样，请在 [Adoptium.net](https://adoptium.net/) 更新。

有时这种情况会发生在网络环境较差的情况下。Geyser 配置中有一个 `mtu` 选项；请缓慢降低此数值（以 100 为批次），每次重启后重新测试加入。

如果您遇到“无法连接到世界”且控制台日志中没有连接指示，此选项很可能不会有帮助。

# Login Failed

***如果您使用的是插件版本：*** 在您的 Geyser 配置中，将远程地址设置为 `127.0.0.1`。如果这不起作用，请检查您的启动日志中是否有关于 Docker 的消息，并在远程地址中使用该地址

### Cannot reply to EncryptionRequestPacket without profile and access token {#cannot-reply-to-encryptionrequestpacket-without-profile-and-access-token}

此消息有两个原因：

*Floodgate 问题*：

此消息可能出现在 Floodgate 设置中。通常，这意味着发生了配置错误，或者另一个插件存在冲突。如果您将 Floodgate 密钥从其文件夹复制到同一服务器上的 Geyser 文件夹，现在这是不必要的，您可以安全地删除 Geyser 副本，重启，然后重试。

*服务器处于在线模式而 Geyser 处于离线模式*：

如果您的配置设置为这样，简单来说，它将无法工作。如果 Java 服务器的身份验证设置为在线，则期望 Geyser 也以相同方式配置。服务器需要有效的 Minecraft：Java 版帐户，如果您没有使用 Geyser 登录一个帐户，那么您将无法加入服务器。如果您的配置设置正确，但仍然遇到此问题，可能是您的凭据无效。

### Connection Refused: \<INSERT IP AND/OR DOMAIN\> {#connection-refused-insert-ip-andor-domain}

连接被拒绝通常意味着在该端口上找不到 Java 服务器，或者服务器在网络层面拒绝了连接。
后者可能发生在使用 TCPShield 等反 DDoS 插件时，但除此之外，请确保您在配置中输入的服务器地址拼写正确、服务器已启动且端口已正确转发。

如果您是从旧版本的 Geyser 升级，请将远程地址设置为 `auto` 并重试。

### Floodgate 配置错误 {#floodgate-misconfiguration}
有关更多信息，请参阅[此页面](/wiki/floodgate/setup/)。

### 缺少配置文件密钥。此服务器需要安全配置文件。 {#missing-profile-key-this-server-requires-secure-profiles}

请参阅[此页面](/wiki/geyser/secure-chat/)。

### Mojang 重置帐户凭据 {#mojang-resetting-account-credentials}
不幸的是，这是我们无法控制的事情，当您将 Geyser 作为插件在服务器主机上运行或加入远离您位置的朋友时，最有可能发生这种情况。如果您在本地运行 Geyser，这不应该发生在您身上，但我们为服务器推荐的插件是我们制作的名为 [Floodgate](https://github.com/GeyserMC/Floodgate) 的插件，它允许基岩版客户端无需 Java 版帐户即可加入您的服务器。请查看[此处](/wiki/floodgate)了解更多信息。

# 来自基岩版的“无效 IP 地址！”
如果您输入的域名解析为 SRV 记录，则可能会发生这种情况，而基岩版不支持 SRV 记录。请尝试改用 IPv4 地址。
此外，当尝试在 IP 选项卡中同时指定 IP 和端口时，也可能会发生这种情况 - 在这种情况下，请参阅[此处](/img/wiki/edit_server_form.png)了解如何正确连接到“test.geysermc.org:19132”。

# 基岩版客户端首次打开命令时冻结
在您的 Geyser 配置中禁用 `command-suggestions`。这将停止冻结，但代价是移除基岩版客户端的命令建议。
如果您是专职服务器管理员，您可以有一个玩家应该使用的命令列表。这还将为 Java 玩家移除标签补全中的任何不必要的命令。
它还有其他好处。这里有一个插件可以做到这一点：
[CommandWhitelist](https://www.spigotmc.org/resources/81326/)。或者，使用 [HideCommands](https://github.com/Redned235/HideCommands) Geyser 扩展来仅为基岩版玩家隐藏命令。

# 无法加载区域设置资源缓存：无法识别的标记 'Cannot'
此问题或任何其他与启动时下载区域设置文件失败相关的问题，通常是由于 Java 尝试使用 IPv6 连接而 Mojang 仅使用 IPv4 引起的，因此请使用此标志启动 Geyser 或服务器：`-Djava.net.preferIPv4Stack=true`，例如：`java -Xms1024M -Djava.net.preferIPv4Stack=true -jar Geyser.jar`

# 客户端版本过旧！请使用 1.x.x

服务器版本太新或 Geyser 版本过旧。请确保您使用的是最新版本的 Geyser。

# 服务器版本过旧！我仍然在使用 1.x.x

更新服务器或要求他们安装 [ViaVersion](https://viaversion.com/)。您也可以尝试 [VIAaaS](https://github.com/ViaVersion/VIAaaS)（ViaVersion 即服务）。

# 查询：不正确的魔法！

请参见此处：https://www.spigotmc.org/threads/query-incorrect-magic-and-high-cpu-usage.159386/#post-2709057

* 如果您不使用 TCPShield 等反向代理，请确保 `enable-proxy-protocol` 设置为 false。

# 仅适用于带有 Floodgate 的 BungeeCord

如果您使用 Floodgate，请确保它按照以下方式安装到所有您的 Spigot 后端服务器上：

1.  `Bungee：Geyser 和 Floodgate`
2.  `大厅：floodgate`
3.  `服务器-1：floodgate`
4.  `服务器-2：floodgate`

依此类推。

* 还请确保您在所有服务器上都有相同的 `key.pem` 和 `config.yml`。

如果您的玩家无法从大厅连接到另一个后端服务器，请检查控制台。

### 可能导致问题的插件 {#plugins-that-can-cause-issues}
* `HamsterAPI`
