---
title: 支持的版本
description: Geyser 支持的版本信息。
---

import { Versions } from '@site/src/components/Versions'
import DocCardList from '@theme/DocCardList';

# 当前支持的版本

:::info
**Geyser 目前支持 Minecraft Bedrock <Versions platform="bedrock"/> 和 Minecraft Java <Versions platform="java"/>**。
:::

## 在较旧的 Minecraft: Bedrock 版本上使用 Geyser

不支持较旧的 Bedrock 版本。Minecraft: Bedrock Edition 在所有平台上都会自动更新，因此很少有用户会
想要使用较旧的版本。此外，较旧的 Bedrock 版本不具备 Geyser 支持的所有功能，这将导致体验不佳。

## 在较旧的 Minecraft: Java 版本服务器上使用 Geyser

Geyser 模拟的是 <Versions platform="java"/> 客户端，因此 Java 服务器必须接受使用该版本的用户，Geyser 才能工作。
这要感谢 [ViaVersion](https://viaversion.com/)，它允许使用较新版本的 Java 版玩家加入
运行较旧版本游戏的服务器。

### 在运行 1.16.5 或更高版本的 Spigot/Paper 服务器上使用 Geyser-Spigot

您可以在运行 1.16.5 或更高版本的服务器上使用 Geyser-Spigot。请注意，Geyser 需要 Java 17 才能运行！您还需要至少运行 Java 17 或更高版本来使用 Geyser。有关更新 Java 的更多信息，请参见[此处](https://docs.papermc.io/misc/java-install)。不支持 Java 17 的 Paper 版本可以添加 `-DPaper.IgnoreJavaVersion=true` 标志到 Java 启动参数中，以允许 Paper 在 Java 17 上运行。

为了让 Bedrock 玩家能够聊天（1.19.3+）或加入（1.19.1/1.19.2），您需要禁用聊天签名。更多相关信息可以在[聊天签名页面](/wiki/geyser/secure-chat)上阅读。

### 在低于 1.16.5 版本的 Spigot/Paper 服务器上使用 Geyser-Spigot

很遗憾，这是不可能的。您需要使用 Velocity 或 BungeeCord 等代理，或使用 [ViaVersion](https://github.com/ViaVersion/ViaVersion) 插件单独设置 Geyser-Standalone。另一个选择是安装 [ViaProxy](https://github.com/ViaVersion/ViaProxy)，这是一个独立的 ViaVersion 代理，可以
在不同的 Minecraft: Java 版本之间进行翻译，并安装 Geyser-ViaProxy。

### 在未使用最新 Minecraft 版本的 Fabric/NeoForge 服务器上使用 Geyser {#fabric-neoforge-servers}

遗憾的是，Geyser-Fabric 和 Geyser-NeoForge 仅支持最新版本的 Minecraft: Java Edition。仍然使用
较旧版本 Geyser 的推荐方式是安装 [ViaProxy](https://github.com/ViaVersion/ViaProxy)，这是一个独立的 ViaVersion 代理，可以
在不同的 Minecraft: Java 版本之间进行翻译，并在此上安装 Geyser-ViaProxy。这也适用于 Floodgate 身份验证。

### 在代理上使用 Geyser-Velocity 或 Geyser-BungeeCord

请确保将您的代理软件更新到最新可用版本，如果后端服务器不是 <Versions platform="java"/>，还要在后端服务器上安装 [ViaVersion](https://github.com/ViaVersion/ViaVersion) 插件。Velocity/BungeeCord 支持大多数 Minecraft 版本，因此您可以无论后端服务器版本如何都更新它们。
