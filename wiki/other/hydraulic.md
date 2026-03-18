---
title: Hydraulic
description: 'Hydraulic 是 Geyser 的配套工具，允许 Bedrock 玩家加入模组化的 Minecraft: Java Edition 服务器。'
---

Hydraulic 是 Geyser 的配套工具，允许 Bedrock 玩家加入模组化的 Minecraft: Java Edition 服务器。

## 什么是 Hydraulic？ {#what-is-hydraulic}

Hydraulic 是一个服务器端模组，允许 Bedrock 玩家加入模组化的 Minecraft: Java Edition 服务器。此项目与 [Geyser](https://github.com/GeyserMC/Geyser) 配合工作以实现此目的。

:::caution

此项目仍处于非常早期的开发阶段，不应在生产环境中使用！

:::

## 下载 {#download}

您可以在[此处](/download/?project=other-projects&hydraulic=expanded)下载 Hydraulic。

## 贡献 {#contributing}

任何贡献都是表示感谢的。如果您有兴趣帮助 Hydraulic，请随时在 [Discord](https://discord.gg/geysermc) 上联系我们。

### 项目设置 {#project-setup}

1. 将仓库克隆到您的计算机上。
2. 导航到 Hydraulic 根目录并运行 `git submodule update --init --recursive`。此命令用于下载 Hydraulic 所需的所有子模块，是此过程中的关键步骤。
3. 项目应在 loom 设置完成后导入您的 IDE。有关更多详细信息，请参阅 [Fabric 设置](https://fabricmc.net/wiki/tutorial:setup)。
4. 使用 `./gradlew build` 编译 jar 文件，或使用 `./gradlew :fabric:runServer` 或 `./gradlew :neoforge:runServer` 运行安装了 Hydraulic 的服务器。请确保将 Geyser 安装到您的 `mods` 文件夹中！
