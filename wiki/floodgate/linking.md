---
title: 链接
description: 了解如何链接您的 Java 和 Bedrock Minecraft 账户以实现跨平台游戏。了解内置的全局链接或如何设置可选的本地链接。
---

## 什么是全局链接？ {#what-is-global-linking}

有关如何链接的说明和信息也可以在此处找到：[https://link.geysermc.org/](https://link.geysermc.org/)

在我们引入全局链接之前，您必须在访问的每个服务器上（安装了 Floodgate 的服务器）链接您的 Java 和 Bedrock 账户。全局链接就是为了解决这个问题。一次链接，到处游玩。

请记住：当您的账户已链接时，无论您从哪个平台登录，您都将使用 Java 账户的位置、库存数据和成就等（因此，"同步"玩家数据）。Bedrock 账户的玩家数据在您再次取消链接之前将无法访问。因此，您应该在链接之前将所有东西（末影箱内容、物品、盔甲）转移到 Java 账户，以免"丢失"您的 Bedrock 进度。如果您忘记这样做，您可以取消链接，将所有东西转移过去，然后重新链接。

全局链接是 [Global Api](/wiki/api/api.geysermc.org/global-api/) 的一部分，使用 GlobalLinkServer 来链接您的账户。要链接您的账户，您需要执行以下操作：
1. 使用您的 Java 和 Bedrock 账户加入 GlobalLinkServer
   （IP: `link.geysermc.org`，Java 端口: `25565`，Bedrock 端口: `19132`）
2. 在您的 Java **或** Bedrock 账户上输入 `/linkaccount` 来开始链接过程
3. 您将收到一条包含随机数字的消息，您需要在未开始链接过程的账户上输入该数字。
4. 在另一个账户上输入随机数字，方法是输入 `/linkaccount <code>`
5. 您应该会从服务器被踢出，同时您的 Bedrock 和 Java 账户都会收到消息，表明您的账户已成功链接。

要取消链接您的全局链接账户，请按照上述链接描述加入 GlobalLinkServer（在 Java 或 Bedrock 上），然后使用 `/unlinkaccount` 命令。

全局链接应该在每个运行 Floodgate 2.0 的服务器上默认启用，但如果您禁用了它，您可以打开 Floodgate 配置并确保 `player-link` 部分类似于以下内容：
```yml
# Configuration for player linking
player-link:
  # Whether to enable the linking system. Turning this off will prevent
  # players from using the linking feature even if they are already linked.
  enabled: true
  # Whether to use global linking. Global linking uses a central server to request link
  # accounts, allowing people to link once, join everywhere (on servers with global linking).
  enable-global-linking: true
```
（[查看默认配置](https://github.com/GeyserMC/Floodgate/blob/master/core/src/main/resources/config.yml)）

保存配置并重启服务器后，您应该正在使用全局链接。

如果您不想使用全局链接，可以在 Floodgate 配置中禁用 `enable-global-linking`。

## 本地链接 {#local-linking}

您也可以在服务器上设置本地链接数据库。本地链接可以与全局链接同时工作。您本地数据库中的链接条目将覆盖全局链接服务器中的条目。

请注意，如果您有代理（BungeeCord 或 Velocity），您只需要在代理上遵循这些步骤。

1. 从[此处](https://ci.opencollab.dev/job/GeyserMC/job/Floodgate/job/fix-weird-via-issue/)下载链接数据库扩展之一。
   如果您需要帮助选择正确的扩展：如果您已有数据库或想要设置多代理架构，请选择 `mysql`。对于其他情况，请选择 `sqlite`。完整名称应该是 `floodgate-*type*-database.jar`。
2. 将您刚刚下载的数据库扩展 jar 复制到 floodgate 2.0 插件文件夹中（例如 `/plugins/floodgate/`）。
3. 在 Floodgate 的 `player-link` 部分启用 `enable-own-linking`。
4. 在 `player-link` 部分将 `type` 设置为您的数据库类型（目前是 `mysql` 或 `sqlite`）。（如果您使用过 Floodgate 1.0 并且当时启用了链接；数据库类型是 `sqlite`）。
5. 重启服务器

如果您选择了 `mysql`，应该在 Floodgate 数据文件夹中生成一个新的数据库数据文件夹。您可以在其中输入您的数据库凭据。完成后，再重启一次服务器。

这样应该就完成了。您可以通过输入 `/linkaccount` 后按照说明来链接您的账户。
