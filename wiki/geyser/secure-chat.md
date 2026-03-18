---
title: Geyser 与安全聊天
description: 关于禁用安全聊天以允许 Bedrock 玩家在 Java 服务器上聊天的信息。
---

在 1.19 Java Edition 更新中，实现了一种向 Mojang 报告玩家聊天消息的机制。
Bedrock Edition 不支持此报告机制。
如果您的服务器或代理设置要求每个加入的玩家都支持此机制（可能是默认启用的），
Bedrock 玩家将无法聊天。

服务器管理员可以禁用此设置，但请注意，Java 玩家可以通过某些模组加入，使他们的消息无法被举报。

有关 Java 聊天签名系统的技术说明，请参阅此[文章](https://gist.github.com/kennytv/ed783dd244ca0321bbd882c347892874)。

# 禁用方法

*Vanilla、Spigot/Paper/分支、Fabric、NeoForge*

在 [server.properties](https://minecraft.fandom.com/wiki/Server.properties) 中设置 `enforce-secure-profile: false`

*BungeeCord 和分支*

在 [config.yml](https://www.spigotmc.org/wiki/bungeecord-configuration-guide/) 中设置 `enforce_secure_profile: false`

*Velocity*

在 [velocity.toml](https://github.com/PaperMC/Velocity/blob/dev/3.0.0/proxy/src/main/resources/default-velocity.toml#L19) 中设置 `force-key-authentication = false`
