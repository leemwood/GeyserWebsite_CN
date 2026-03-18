---
title: GeyserConnect
description: GeyserConnect 是一个用于 Geyser 的扩展，允许您使用单个 Geyser 代理加入多个服务器。
---

GeyserConnect 是一个用于 Geyser 的扩展，允许您使用单个 GeyserMC 代理加入多个服务器。

## 设置 {#setup}
（GeyserConnect 工作需要打开一个 UDP 端口，默认情况下是 `19132`）。
1. 从[下载页面](/download)下载最新的 Geyser 构建版本
2. 从[此处](https://geysermc.org/download/?project=other-projects&geyserconnect=expanded)下载最新的构建版本
3. 解压下载的 ZIP 文件，并将解压后的 JAR 文件放入 GeyserMC 独立安装的 `extensions` 文件夹中。
4. 像正常 Geyser 安装一样启动 Geyser 独立版。例如：`java -Xms1024M -jar Geyser.jar`（更多信息请参见[创建启动脚本](/wiki/geyser/creating-a-startup-script/)）
5. 关闭独立版 Geyser 实例，并对 `extensions` 文件夹中 `GeyserConnect` 内的 GeyserConnect 配置进行您想要的更改。
6. 连接它以确保一切正常工作。

## DNS {#dns}
如果您想使用它们，仓库中有 [DNS](https://github.com/GeyserMC/GeyserConnect/tree/master/bind9)（使用 bind9）配置。

## 配置 {#config}
请参见[此处](https://github.com/GeyserMC/GeyserConnect/blob/master/src/main/resources/config.yml)。
