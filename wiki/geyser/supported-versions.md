---
title: 支持的版本
description: 关于Geyser支持的版本信息。
---

import { Versions } from '@site/src/components/Versions'
import DocCardList from '@theme/DocCardList';

# 当前支持的版本

:::info
**Geyser 目前支持 Minecraft 基岩版 <Versions platform="bedrock"/> 和 Minecraft Java 版 <Versions platform="java"/>**。
:::

## 在旧版 Minecraft: 基岩版上使用 Geyser
不支持旧的基岩版版本。Minecraft: 基岩版会在所有平台上自动更新，因此很少有用户会想使用旧版本。此外，旧的基岩版版本不具备 Geyser 支持的所有功能，这会导致体验不佳。

## 在旧版 Minecraft: Java 版服务器上使用 Geyser
Geyser 模拟一个 <Versions platform="java"/> 客户端，因此 Java 服务器必须接受使用该版本的用户，Geyser 才能工作。这要归功于 [ViaVersion](https://viaversion.com/)，它允许使用较新版本的 Java 版玩家加入运行较旧版本游戏的服务器。

### 在 1.16.5 或更高版本的 Spigot/Paper 服务器上使用 Geyser-Spigot
您可以在运行 1.16.5 或更高版本的服务器上使用 Geyser-Spigot。请注意，Geyser 需要 Java 17 才能运行！您还需要运行至少 Java 17 或更高版本才能使用 Geyser。有关更新 Java 的更多信息，请参阅[此处](https://docs.papermc.io/misc/java-install)。不支持 Java 17 的 Paper 版本可以在 Java 启动参数中添加 `-DPaper.IgnoreJavaVersion=true` 标志以允许 Paper 在 Java 17 上运行。

为了让基岩版玩家能够聊天（1.19.3+）或加入（1.19.1/1.19.2），您需要禁用聊天签名。有关更多信息，请阅读[聊天签名页面](/wiki/geyser/secure-chat)。

### 在低于 1.16.5 版本的 Spigot/Paper 服务器上使用 Geyser-Spigot
很遗憾，这是不可能的。您需要使用像 Velocity 或 BungeeCord 这样的代理，或者单独设置 Geyser-Standalone 并安装 [ViaVersion](https://github.com/ViaVersion/ViaVersion) 插件。另一种选择是安装 [ViaProxy](https://github.com/ViaVersion/ViaProxy)，这是一个独立的 ViaVersion 代理，可以在不同的 Minecraft: Java 版版本之间进行转换，并在其上安装 Geyser-ViaProxy。

### 在非最新 Minecraft 版本的 Fabric/NeoForge 服务器上使用 Geyser {#fabric-neoforge-servers}
不幸的是，Geyser-Fabric 和 Geyser-NeoForge 仅支持最新版本的 Minecraft: Java 版。在旧版本上仍然使用 Geyser 的推荐方法是安装 [ViaProxy](https://github.com/ViaVersion/ViaProxy)，这是一个独立的 ViaVersion 代理，可以在不同的 Minecraft: Java 版版本之间进行转换，并在其上安装 Geyser-ViaProxy。这也适用于 Floodgate 身份验证。

### 在代理服务器上使用 Geyser-Velocity 或 Geyser-BungeeCord
请确保将您的代理软件更新到最新可用版本，并且，如果后端服务器不是 <Versions platform="java"/>，请在后端服务器上也安装 [ViaVersion](https://github.com/ViaVersion/ViaVersion) 插件。Velocity/BungeeCord 支持大多数 Minecraft 版本，因此无论后端服务器版本如何，您都可以更新它们。
```