---
title: 开发者指南
description: 为想要为 GeyserMC 项目做出贡献的开发者提供的指南。
---

# 编译 {#compiling}
1. 将仓库克隆到您的计算机上。
2. 确保您已安装 Java 21。
3. 导航到 Geyser 根目录并运行 `git submodule update --init --recursive`。此命令用于下载 Geyser 所需的所有子模块，是此过程中的关键步骤。
4. 运行 `./gradlew build` 并前往 `bootstrap/<platform>/build/` 文件夹。

# 项目结构 {#project-layout}

Geyser 的代码分为不同的模块。例如：

* `bootstrap` 是我们存放特定平台代码的地方。因此，如果您正在将 Geyser 移植到新平台，或处理平台特定代码，您很可能需要在这里进行。
* `core` 是处理连接和数据/数据包转换的地方。Geyser 的主要工作都在这里。
* `api` 是 Geyser API 所在的位置。
* `build-logic` 是用于构建 Geyser 的 Kotlin Gradle 插件所在的位置。

# 编译器/IDE 工具 {#compiler-ide-tools}

## Lombok {#lombok}

*请注意，最新版本的 IntelliJ IDEA 不需要额外设置即可开发 Geyser。*

如果您使用 IDE 来编辑任何 GeyserMC 项目，您很可能需要安装 Project Lombok 插件，因为它用于生成大量实用函数。
您可以在没有它的情况下进行编辑，但您可能会在 IDE 中看到缺失的函数或其他问题。请参阅其网站上的 IDE 部分了解支持的插件和安装方法 [https://projectlombok.org/setup/overview](https://projectlombok.org/setup/overview)。

# 协议信息 {#protocol-information}

## GopherTunnel {#gophertunnel}
[GopherTunnel](https://github.com/Sandertv/gophertunnel/tree/master/minecraft/protocol/packet) 是一个用 Go 编写的 Bedrock Edition 库。源代码是 Bedrock 协议的出色文档。

## wiki.vg {#wikivg}
有关 Java Edition 协议的完整概述，请参见[此处](https://wiki.vg/Protocol)。

## wiki.vg (Bedrock) {#wikivg-bedrock}
Bedrock Edition 协议记录在[此处](https://wiki.vg/Bedrock_Protocol)，但目前尚不完整，因此仅将其作为参考。

# 程序 {#programs}

## debuginfo-be {#debuginfo-be}
[debuginfo-be](https://github.com/Heath123/debuginfo-be) 是一个 Spigot 插件，向 Geyser 客户端显示有用的调试信息叠加层，类似于 Java Edition 中的 F3 屏幕。

## pakkit {#pakkit}
pakkit 是一个基于 GUI 的工具，用于拦截服务器和客户端之间的数据包，由 Geyser 贡献者 [circuit10/Heath123](https://github.com/Heath123/) 开发，使用 Electron 构建。它适用于 Java Edition（使用 node-minecraft-protocol）和 Bedrock（作为 ProxyPass 的 GUI 包装器，添加额外功能）。它支持以 JSON 格式查看数据包数据、编辑和重发以及原始数据包数据的十六进制视图等功能。您可以从[此处](https://github.com/Heath123/pakkit/releases/)下载。它目前是 WIP，因此可能会出现错误。

## Gadget {#gadget}
Gadget 是一个 Fabric 客户端模组，用于检查和记录 Java 服务器和 Java 客户端之间发送的数据包以及其他内容。它可用于确定 Java 行为。
您可以从[此处](https://modrinth.com/mod/gadget)下载。

## ProxyPass {#proxypass}
ProxyPass 是一个用于拦截 Bedrock 服务器和客户端之间数据包的工具，由 Cloudburst 团队开发。它可以在[此处](https://github.com/CloudburstMC/ProxyPass)找到，原版 Bedrock 服务器可以在[此处](https://www.minecraft.net/download/server/bedrock/)找到。
有一个支持在线模式的 ProxyPass 分叉（允许您加入 Geyser 服务器并查看发送的数据包）：[Kastle 的 proxypass 分叉](https://github.com/Kas-tle/ProxyPass/)。

## MCC Toolchest {#mcc-toolchest}
MCC Toolchest 是一个用于查看和编辑 Bedrock 版本 NBT 数据的工具，这允许您查看 Bedrock 中存储的数据。您可以从[此处](https://mcctoolchest.weebly.com/)下载。

## NBTExplorer {#nbtexplorer}
NBTExplorer 是一个用于查看和编辑 Java 版本 NBT 数据的工具，这允许您查看 Java 版本中存储的数据。您可以从[此处](https://github.com/jaquadro/NBTExplorer/releases)下载。

## Windows 10 多版本启动器 {#windows-10-multi-version-launcher}
Windows 10 多版本启动器允许您在 Minecraft Bedrock 的发布版本和测试版本之间切换。其 GitHub 仓库可以在[此处](https://github.com/MCMrARM/mc-w10-version-launcher/)查看。
或者，使用 FoxyNoTail 的 Version Switcher，可在[此处](https://foxynotail.com/software/mcbe-switcher)找到。
注意：要为 Minecraft Preview 应用[回环修复](/wiki/geyser/fixing-unable-to-connect-to-world#windows-1011)，请使用以下回环限制解除命令，但需要使用不同的应用 ID：`CheckNetIsolation LoopbackExempt -a -n="Microsoft.MinecraftWindowsBeta_8wekyb3d8bbwe"`
