---
title: 常见问题
description: 人们在使用 Geyser 时可能遇到的常见问题及其潜在的解决方法。
---

# 常见问题

通常，人们可能会遇到 Geyser 未显示在服务器列表中或遇到类似的问题。
本页面包含一些人们可能遇到的常见问题以及潜在的解决方法。
如果您仍然无法解决问题，请加入[我们的 Discord](https://discord.gg/geysermc)寻求支持。

# Floodgate
关于 Floodgate 的问题，请参阅：[Floodgate：已知问题/注意事项](/zh-CN/wiki/floodgate/issues/)。

# 我无法连接！（服务器未显示在好友列表中，或者我收到“无法连接到世界”）
* 如果您不使用 TCPShield 等反向代理，请确保 `enable-proxy-protocol` 设置为 false。
要修复在没有控制台错误的情况下出现的“无法连接到世界”问题，请参阅[此处](/zh-CN/wiki/geyser/fixing-unable-to-connect-to-world/)。

## 如果服务器未显示在好友列表中 {#if-the-server-doesnt-show-up-in-the-friends-list}

* *如果使用 Windows 10、iOS 或 Android*：尝试在游戏中将服务器添加到服务器列表。
* *如果使用 Xbox One*：尝试使用 [BedrockConnect](/zh-CN/wiki/geyser/using-geyser-with-consoles/) 连接。
* *如果使用 PS4*：[尝试使用局域网代理。](/zh-CN/wiki/geyser/using-geyser-with-consoles#playstation-4)
* *如果使用 Nintendo Switch*：目前没有办法让本地服务器显示在“好友”选项卡中，但您仍然可以使用 [BedrockConnect](/zh-CN/wiki/geyser/using-geyser-with-consoles/) 连接。

*如果 Geyser 实例是本地托管的：* 尝试使用 `localhost` 或 `0.0.0.0` 作为 IP 地址。
*如果这不起作用，或者您的 Geyser 实例在网络中的另一台计算机上：* 使用您的**本地** IPv4 地址。

:::warning

有关修复在没有控制台错误的情况下出现的“无法连接到世界”问题，请参阅[此处](/zh-CN/wiki/geyser/fixing-unable-to-connect-to-world/)。

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

Sometimes this happens in poor-network environments. There is an `mtu` option in the Geyser config; lower this number slowly (in batches of 100), restart each time, and re-test joining.

This option will most likely not help if you are getting "Unable to Connect to World" with no console logs indicating a connection.

# Login Failed

***If you are using a plugin version:*** in your Geyser config, set your remote address to `127.0.0.1`. If that does not work, check your startup log for a message about Docker, and use that address in the remote address

### Cannot reply to EncryptionRequestPacket without profile and access token {#cannot-reply-to-encryptionrequestpacket-without-profile-and-access-token}

There are two causes of this message:

*Floodgate issue*:

This message can occur with a Floodgate setup. Usually, it means that a misconfiguration occurred, or another plugin is conflicting. If you copied the Floodgate key from its folder to the Geyser folder on the same server, this is now unnecessary and you can safely remove the Geyser copy, restart, and try again.

*Server is in Online Mode while Geyser is in Offline Mode*:

If you have your configuration set up like this, put simply, it won't work. If authentication for the Java server is set to online, it is expected Geyser is configured the same way. The server requires a valid Minecraft: Java Edition account, and if you aren't logging into one with Geyser, then you will be unable to join the server. If your configuration is set up properly and you're still getting this issue, it could be that your credentials are invalid.

### Connection Refused: \<INSERT IP AND/OR DOMAIN\> {#connection-refused-insert-ip-andor-domain}

Connection Refused usually means that a Java server could not be found on that port, or the server denied access to the connection on a network level. 
The latter can happen with anti-DDOS plugins such as TCPShield, but otherwise ensure that the server you're trying to connect to is spelled correctly in the config, is up and is port forwarded correctly.

If you're updating from an old build of Geyser, set your remote address to `auto` and try again.

### Floodgate Misconfiguration {#floodgate-misconfiguration}
See [this page](/wiki/floodgate/setup/) for more information.

### Missing profile key. This server requires secure profiles. {#missing-profile-key-this-server-requires-secure-profiles}

See [this page](/wiki/geyser/secure-chat/).

### Mojang Resetting Account Credentials {#mojang-resetting-account-credentials}
This is unfortunately something we have no control over, and is most likely the case when you're running Geyser as a plugin on a server host or joining a friend far away from your location. If you're running Geyser locally, this should not happen to you, but what we recommend for servers is a plugin we make called [Floodgate](https://github.com/GeyserMC/Floodgate), which allows for Bedrock clients to join your server without needing a Java Edition account. Take a look [here](/wiki/floodgate) for more information.

# "Invalid IP address!" from Bedrock
This can happen if the domain you are entering resolves to a SRV record, which Bedrock does not support. Try using the IPv4 address instead.
Additionally, this can happen when trying to specify both the ip and port in the ip tab - in which case, see [here](/img/wiki/edit_server_form.png) for how to properly connect to "test.geysermc.org:19132".

# Bedrock clients freeze when opening up commands for the first time
Disable `command-suggestions` in your Geyser config. This will stop the freezing at the expense of removing command suggestions from Bedrock clients.
If you're a dedicated server admin, you can have a list of commands players should be using. This will remove any unnecessary commands from tab completion as well for Java players. 
It has other benefits too. Here's a plugin that can just do that: 
[CommandWhitelist](https://www.spigotmc.org/resources/81326/). Alternatively, use the [HideCommands](https://github.com/Redned235/HideCommands) Geyser extension to hide commands just for Bedrock players.

# Failed to load locale asset cache: Unrecognized token 'Cannot'
This or anything else related to failing to download a locale file on startup is usually caused by java trying to connect using IPv6 and Mojang only use IPv4, so start Geyser or the server up with this flag `-Djava.net.preferIPv4Stack=true`, EG: `java -Xms1024M -Djava.net.preferIPv4Stack=true -jar Geyser.jar`

# Outdated client! Please use 1.x.x

The server is too new or Geyser is outdated. Make sure you're on the latest Geyser.

# Outdated server! I'm still on 1.x.x

Update the server or ask them to install [ViaVersion](https://viaversion.com/). You can also try [VIAaaS](https://github.com/ViaVersion/VIAaaS) (ViaVersion as a Service).

# Query: Incorrect Magic!

See here: https://www.spigotmc.org/threads/query-incorrect-magic-and-high-cpu-usage.159386/#post-2709057

* If you don't use a reverse proxy such as TCPShield make sure that `enable-proxy-protocol` is set to false.

# Only for BungeeCord with floodgate

If you use floodgate ensure that it is installed on all of your Spigot backend servers as following:

1.  `Bungee: Geyser and Floodgate`
2.  `Lobby: floodgate`
3.  `Server-1: floodgate`
4.  `Server-2: floodgate`

And so on.

* Please also make sure that you have the same `key.pem` and `config.yml` on all of your servers.

If your players can't connect from the lobby to another backend server, check console.

### Plugins that can cause issues {#plugins-that-can-cause-issues}
* `HamsterAPI`
