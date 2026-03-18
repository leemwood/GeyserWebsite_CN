---
title: 功能
description: 了解 Floodgate 2.0 的功能，包括白名单命令和皮肤上传。
---

## 白名单命令 {#whitelist-command}

Floodgate 2.0 有一个白名单命令 `fwhitelist`，用于向 whitelist.json 添加或移除 Floodgate 玩家。不需要包含用户名前缀。
`fwhitelist add Tim203`
`fwhitelist remove Tim203`

您也可以指定 UUID：`fwhitelist add 00000000-0000-0000-0009-01f64f65c7c3`

权限节点是 `floodgate.command.fwhitelist`。

## 什么是皮肤上传？ {#what-is-skin-uploading}

安装了 Floodgate 2.0 的服务器上，Bedrock 玩家的皮肤应该对 Java 玩家可见。
如果不可见，很可能是因为皮肤上传队列已经变得太大，需要一段时间才能上传您的皮肤。

皮肤上传也是 [Global Api](/wiki/api/api.geysermc.org/global-api/) 的一部分。它负责将 Bedrock 皮肤转换为 Java 皮肤并上传到 Mojang 服务器，使它们可以在 Java Edition 上显示。

我们在内部使用 MineSkin。MineSkin 运行的是由社区捐赠的账户。因此，如果您想支持 MineSkin 并加快上传速度，请随时查看[此页面](https://mineskin.org/account)了解更多信息。

![皮肤上传示例](/img/wiki/skin_upload_example.png)
