---
title: 功能
description: 了解Floodgate 2.0的功能，包括白名单命令和皮肤上传。
---

## 白名单命令 {#whitelist-command}

Floodgate 2.0有一个白名单命令 `fwhitelist`，用于将Floodgate玩家添加到whitelist.json或从其中移除。不需要包含用户名前缀。
`fwhitelist add Tim203`
`fwhitelist remove Tim203`

您也可以指定UUID：`fwhitelist add 00000000-0000-0000-0009-01f64f65c7c3`

权限节点是 `floodgate.command.fwhitelist`。

## 什么是皮肤上传？ {#what-is-skin-uploading}
安装了Floodgate 2.0的服务器上，基岩版玩家的皮肤应该对Java版玩家可见。
如果不可见，很可能是皮肤上传队列变得太大，上传您的皮肤需要一些时间。

皮肤上传也是[全球API](/wiki/api/api.geysermc.org/global-api/)的一部分。它负责将基岩版皮肤转换为Java版皮肤，并上传到Mojang服务器，使其在Java版中显示。

我们在内部使用MineSkin。MineSkin运行在社区捐赠的账户上。因此，如果您想支持MineSkin并加快上传速度，请查看[此页面](https://mineskin.org/account)获取更多信息。

![皮肤上传示例](/img/wiki/skin_upload_example.png)
