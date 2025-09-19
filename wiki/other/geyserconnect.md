---
title: GeyserConnect
description: GeyserConnect是Geyser的一个扩展，允许您使用单个Geyser代理加入多个服务器。
---

GeyserConnect是Geyser的一个扩展，允许您使用单个GeyserMC代理加入多个服务器。

## 设置 {#setup}
（要使GeyserConnect正常工作，您需要一个开放的UDP端口，默认是 `19132`）。
1. 从 [下载页面](/download) 下载最新的Geyser构建版本
2. 从 [这里](https://geysermc.org/download/?project=other-projects&geyserconnect=expanded) 下载最新构建版本
3. 解压下载的ZIP文件，将解压后的JAR文件放入您的GeyserMC独立安装中的 `extensions` 文件夹。
4. 像正常安装Geyser一样启动Geyser独立版本。例如：`java -Xms1024M -jar Geyser.jar`（更多信息请参见 [创建启动脚本](/wiki/geyser/creating-a-startup-script/)）
5. 关闭独立Geyser实例，并在 `extensions` 文件夹中的 `GeyserConnect` 中进行您想要的配置更改。
6. 连接到它以确保一切正常工作。

## DNS {#dns}
如果您想要使用它们，仓库中有 [DNS](https://github.com/GeyserMC/GeyserConnect/tree/master/bind9)（使用bind9）配置。

## 配置 {#config}
请参见 [这里](https://github.com/GeyserMC/GeyserConnect/blob/master/src/main/resources/config.yml)。
