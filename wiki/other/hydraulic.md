---
title: Hydraulic
description: 'Hydraulic是Geyser的配套工具，允许基岩版玩家加入模组化的Minecraft：Java版服务器。'
---

Hydraulic是Geyser的配套工具，允许基岩版玩家加入模组化的Minecraft：Java版服务器。 

## 什么是Hydraulic？ {#what-is-hydraulic}

Hydraulic是一个服务器端模组，允许基岩版玩家加入模组化的Minecraft：Java版服务器。这个项目与 [Geyser](https://github.com/GeyserMC/Geyser) 协同工作以实现这一目标。

:::caution

此项目仍处于非常早期的开发阶段，不应在生产环境中使用！

:::

## 下载 {#download} 

您可以 [在这里](/download/?project=other-projects&hydraulic=expanded) 下载Hydraulic。

## 贡献 {#contributing}

我们欢迎任何贡献。如果您有兴趣帮助Hydraulic项目，请随时在 [Discord](https://discord.gg/geysermc) 上联系我们。

### 项目设置 {#project-setup}

1. 将仓库克隆到您的计算机。
2. 导航到Hydraulic根目录并运行 `git submodule update --init --recursive`。此命令下载Hydraulic所需的所有子模块，是此过程中的关键步骤。
3. 在loom设置完成后，项目应该可以导入到您的IDE中。有关更详细的信息，请参见 [Fabric设置](https://fabricmc.net/wiki/tutorial:setup)
4. 使用 `./gradlew build` 编译jar文件，或使用 `./gradlew :fabric:runServer` 或 `./gradlew :neoforge:runServer` 运行安装了Hydraulic的服务器。确保将Geyser安装到您的 `mods` 文件夹中！
