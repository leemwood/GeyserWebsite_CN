---
title: 开发者指南
description: 为想要为GeyserMC项目做贡献的开发者的指南。
---

# 编译 {#compiling}
1. 将仓库克隆到您的计算机。
2. 确保您已安装Java 21。
3. 导航到Geyser根目录并运行 `git submodule update --init --recursive`。此命令下载Geyser所需的所有子模块，是此过程中的关键步骤。
4. 运行 `./gradlew build` 并定位到 `bootstrap/<platform>/build/` 文件夹。

# 项目结构 {#project-layout}

Geyser的代码分为不同的模块。例如：

* `bootstrap` 是我们保存特定平台代码的地方。如果您要将Geyser移植到新平台，或处理平台特定代码，您可能需要在这里工作。
* `core` 是处理连接和数据/数据包转换的地方。大部分Geyser工作都在这里进行。
* `api` 是找到Geyser API的地方。
* `build-logic` 是用于构建Geyser的Kotlin Gradle插件所在的地方。

# 编译器/IDE工具 {#compiler-ide-tools}

## Lombok {#lombok}

*请注意，最新版本的IntelliJ IDEA不需要额外设置即可使用Geyser进行开发。*

如果您使用IDE编辑任何GeyserMC项目，您很可能需要安装Project Lombok插件，因为它用于生成许多有用的函数。
您可以在没有它的情况下进行编辑，但您可能会在IDE中看到缺失的函数和/或其他问题。请查看他们网站上的IDE部分，了解支持的插件和安装方法 [https://projectlombok.org/setup/overview](https://projectlombok.org/setup/overview)。

# 协议信息 {#protocol-information}

## GopherTunnel {#gophertunnel}
[GopherTunnel](https://github.com/Sandertv/gophertunnel/tree/master/minecraft/protocol/packet) 是一个用Go编写的基岩版库。源代码是基岩协议的优秀文档。

## wiki.vg {#wikivg}

有关Java版协议的完整说明，请参阅 [此处](https://wiki.vg/Protocol)。

## wiki.vg (基岩版) {#wikivg-bedrock}

基岩版协议记录 [此处](https://wiki.vg/Bedrock_Protocol)，但目前不完整，因此仅将其作为参考。

# 程序 {#programs}

## debuginfo-be {#debuginfo-be}
[debuginfo-be](https://github.com/Heath123/debuginfo-be) 是一个Spigot插件，向Geyser客户端显示带有有用调试信息的覆盖层，类似于Java版中的F3屏幕。

## pakkit {#pakkit}
pakkit是一个基于GUI的工具，用于拦截服务器和客户端之间的数据包，由Geyser贡献者 [circuit10/Heath123](https://github.com/Heath123/) 使用Electron开发。它适用于Java版（使用node-minecraft-protocol）和基岩版（作为ProxyPass的GUI包装器，添加了额外功能）。它支持诸如以JSON格式查看数据包数据、编辑和重新发送以及原始数据包数据的十六进制视图等功能。您可以从 [此处](https://github.com/Heath123/pakkit/releases/) 下载。目前正在进行中，因此请预期会有错误。

## Gadget {#gadget}
Gadget是一个fabric客户端mod，用于检查&记录Java服务器和Java客户端之间发送的数据包等。它可用于确定Java行为。
您可以从 [此处](https://modrinth.com/mod/gadget) 下载。

## ProxyPass {#proxypass}
ProxyPass是一个用于拦截基岩服务器和客户端之间数据包的工具，由Cloudburst团队开发。它可以在 [此处](https://github.com/CloudburstMC/ProxyPass) 找到，原版基岩服务器可以在 [此处](https://www.minecraft.net/download/server/bedrock/) 找到。
有一个ProxyPass分支支持在线模式（允许您加入Geyser服务器并查看发送的数据包）：[Kastle的proxypass分支](https://github.com/Kas-tle/ProxyPass/)。

## MCC Toolchest {#mcc-toolchest}
MCC Toolchest是一个用于查看和编辑基岩版NBT数据的工具，这允许您查看数据在基岩中的存储方式。您可以从 [此处](https://mcctoolchest.weebly.com/) 下载。

## NBTExplorer {#nbtexplorer}
NBTExplorer是一个用于查看和编辑Java版NBT数据的工具，这允许您查看数据在Java版中的存储方式。您可以从 [此处](https://github.com/jaquadro/NBTExplorer/releases) 下载。

## Windows 10多版本启动器 {#windows-10-multi-version-launcher}
Windows 10多版本启动器允许您在Minecraft基岩版的发布版和测试版之间切换。其GitHub仓库可以查看 [此处](https://github.com/MCMrARM/mc-w10-version-launcher/)。
或者，使用FoxyNoTail的版本切换器，可在 [此处](https://foxynotail.com/software/mcbe-switcher) 找到。
注意：要为Minecraft预览版应用 [环回修复](/wiki/geyser/fixing-unable-to-connect-to-world#windows-1011)，请使用以下环回限制解除命令，使用不同的应用程序ID：`CheckNetIsolation LoopbackExempt -a -n="Microsoft.MinecraftWindowsBeta_8wekyb3d8bbwe"`
