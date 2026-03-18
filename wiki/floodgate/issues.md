---
title: 问题
description: 解决常见的 Floodgate 问题。获取连接问题、配置错误和已知限制的解决方案。
---

# 已知问题和注意事项

如果您遇到的问题未列在此处，请考虑加入 Geyser 的 [Discord](http://discord.geysermc.org/)。

## 运行命令 {#running-commands}

在某些情况下，比如如果您将 `username-prefix` 设置为 `*`，您可能需要将 Bedrock 玩家的用户名用引号括起来；例如：`/tp "*BedrockPlayer"`。将前缀设置为 `.` 也应该可以解决此问题。

## 如果您想使用 IP 转发，请同时在您的 BungeeCord 配置中启用它！ {#if-you-wish-to-use-ip-forwarding-please-enable-it-in-your-bungeecord-config-as-well}

很可能您在 Floodgate 配置中启用了 `send-floodgate-data`，但目标服务器上未安装 Floodgate，或者您的 floodgate 密钥在插件安装之间不相同（请复制它们，使它们都使用相同的密钥）。

## `java.lang.IllegalStateException: Cannot reply to EncryptionRequestPacket without profile and access token.` {#javalangillegalstateexception-cannot-reply-to-encryptionrequestpacket-without-profile-and-access-token}

确保服务器已正确安装并启动 Floodgate。否则，请查看下一行是否能解决您的错误。

## `javax.crypto.AEADBadTagException: Tag mismatch!` {#javaxcryptoaeadbadtagexception-tag-mismatch}

如果 Geyser 和 Floodgate 在同一服务器上，请关闭您的服务器，删除 `floodgate` 插件文件夹，删除 Geyser 文件夹中的任何密钥文件，然后重启服务器。
如果 Geyser 和 Floodgate 不在同一服务器上，而您必须复制密钥文件，这也可能是通过 FTP 上传时的错误。使用 ASCII 模式在这里不行，您需要确保使用二进制模式上传。如果您需要使用 FTP，我们建议使用 [WinSCP](https://winscp.net)。

## java.lang.NumberFormatException: For input string: "" {#javalangnumberformatexception-for-input-string-}

您尝试在没有 Xbox 账户的情况下登录。Floodgate 需要 Xbox 账户来验证 Bedrock 玩家。

## Geyser-Floodgate:51777 lost connection: Internal Exception: java.lang.NumberFormatException: For input string: "SfqdXv36" (or a similar error) {#geyser-floodgate51777-lost-connection-internal-exception-javalangnumberformatexception-for-input-string-sfqdxv36-or-a-similar-error}

将 BungeeCord 中的 `ip-forwarding` 设置为 `true`。

## "Please connect through the official Geyser" 断开连接消息 {#please-connect-through-the-official-geyser-disconnect-message}

确保 Floodgate 和 Geyser 都是最新版本。

## 在配置中更改前缀后，前缀在服务器上没有改变。 {#prefix-is-not-changing-on-the-server-after-changing-it-in-the-config}

在 Paper 1.15.2-355 到 1.16.5-505 构建版本之间存在一个 bug，即已经连接到服务器的 Floodgate 玩家的前缀不会改变。Paper 构建版本 1.16.5-506 及更高版本修复了此问题。

确保您已从服务器根目录中删除了 `usercache.json` 文件，然后重启服务器。

## LuckPerms 和前缀的问题 {#issues-with-luckperms-and-prefixes}

在 LuckPerms 的配置中将 `allow-invalid-usernames` 设置为 `true`。

## "Failed to verify username!"（使用 Paper 时） {#failed-to-verify-username-with-paper}

要完全缓解此问题，请在 [config/paper-global.yml 文件的不支持设置中](https://docs.papermc.io/paper/reference/global-configuration#unsupported_settings)（在 1.19 以下的服务器上是根服务器文件夹中的 `paper.yml`）禁用 `perform-username-validation`。在后端服务器上使用 Floodgate 也可以缓解此问题。

## Forge 或 Fabric Bukkit Hybrid 的错误 {#error-with-forge-or-fabric-bukkit-hybrid}

目前，无法在混合 Forge 和 Bukkit 或 Fabric 和 Bukkit 的服务器上运行 Floodgate（例如：Magma、Mohist 和 Cardboard/Bukkit4Fabric）——大多数混合服务器软件不支持我们为允许 Bedrock 玩家连接而需要执行的复杂程序（对于技术人员：这些服务器软件通常不支持 NMS）。

如果您希望将 Floodgate 与混合服务器结合使用，我们建议将这些服务器放在 BungeeCord 或 Velocity 代理后面，并在代理上运行 Floodgate。

## 在离线模式下启用全局链接后，Java 和 Bedrock 玩家之间的玩家数据不同步。 {#after-enabling-global-linking-in-offline-mode-player-data-is-not-synced-between-java-and-bedrock-players}

这发生在离线模式下，因为链接到 Bedrock 账户的 Java 账户的 UUID 与 Floodgate 全局链接服务器返回的在线模式 UUID 不匹配。

使用全局链接时，请确保将 `server.properties` 中的 `online-mode` 设置为 `true`。否则，Bedrock 玩家将不会使用与在 Java Edition 上游戏时相同的 UUID 进行身份验证，从而导致进度丢失。这不会发生在本地链接上。
