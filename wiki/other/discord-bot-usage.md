---
title: Discord机器人使用指南
description: 关于如何使用Geyser Discord机器人的信息。
---

我们的Discord机器人提供了一些非常有用的工具来调试/跟踪您的服务器问题。我们将深入介绍如何使用机器人命令及其工具。

## 服务器日志 {#server-logs}

如果您遇到控制台错误或Geyser无法正常运行/启动，服务器日志对于找到Geyser无法运行的根本原因非常有用。您可以安全地使用 [mclogs](https://mclo.gs) 分享您的服务器日志，因为它会从日志中删除所有IP地址和其他敏感信息。

如果您将日志URL粘贴到我们的Discord中，我们的机器人将分析错误，如果有解决方案，它会提供修复建议，如下所示。您也可以将 `latest.log` 文件粘贴到Discord中。

![错误示例](/img/wiki/discord-bot/logs.png)

## OCR {#ocr}

OCR或光学字符识别是我们的Discord机器人可以处理的功能，这意味着如果您在我们的Discord中上传包含错误的图片/图像，如下所示，机器人可能能够帮助您解决问题。

![错误示例](/img/wiki/discord-bot/ocr.png)

## 服务器Ping {#ping-server}

如果您不确定您的服务器是否可以从外部访问，您可以使用我们的ping工具。在#bot-spam频道中使用ping命令；/ping "服务器IP"，如下所示，机器人将检查您的服务器是否在线/可访问。当您的服务器不在默认端口上运行时：Java 25565和基岩19132，您需要指定端口，如 /ping "服务器IP:服务器端口"。

如果机器人返回 `无法在请求的地址找到Java/基岩服务器`，您的服务器可能未正确运行/设置，或者您的防火墙阻止了连接。有关如何设置Geyser的更多信息，请访问 [Geyser设置页面](/wiki/geyser/setup/)。

![ping命令示例](/img/wiki/discord-bot/ping.png)

## 提供商列表 {#provider-list}

一些托管提供商有独特的Geyser设置方法。如果您不知道如何在您的提供商上设置Geyser，您可以手动查看 [Geyser托管提供商列表](/wiki/geyser/supported-hosting-providers/)，或者使用我们的机器人命令 `/provider "提供商名称"`，如下所示。

![提供商命令示例](/img/wiki/discord-bot/provider.png)

## 下载命令 {#download-command}

发送所选程序/插件的下载链接。`/download "Geyser"` 或 `/download "ViaVersion"` 等等。

## 排行榜命令 {#leaderboard-command}

提供Geyser机器人XP排行榜的链接。

## 等级命令 {#rank-command}

您可以在我们的Discord上给自己两种类型的角色："GeyserNews" 和 "Testers"。您可以使用命令 `/rank "选择的等级"` 来给自己分配一个角色。

## 队列命令 {#queue-command}

显示当前全局API皮肤队列上传时间。


