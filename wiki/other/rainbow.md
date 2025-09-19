---
title: Rainbow
description: 一个Minecraft模组，用于生成Geyser物品映射和基岩版资源包，以配合Geyser的自定义物品API V2使用。
---

Rainbow是一个Fabric客户端Minecraft模组，用于生成Geyser物品映射和基岩版资源包，以配合Geyser的自定义物品API（v2）在服务器上使用。 

## 什么是Rainbow？ {#what-is-rainbow}

Rainbow是一个生成器，用于创建Geyser物品映射和基岩版资源包，它使用Geyser自定义物品API V2格式，允许使用1.21.4+ Java版资源包。

:::caution

此项目处于早期开发阶段！任何错误和问题都应该在我们的 [Discord](https://discord.gg/geysermc) 中报告。

:::

## 使用方法 {#usage}

要使用Rainbow：
1. 您需要为Java版设置一个1.21.7/.8 Fabric客户端，并确保模组已存在于客户端中。
2. 加入您选择的服务器开始转换资源包，并运行 `/rainbow create <资源包名称>`，其中 `<资源包名称>` 是您输出资源包的名称。
3. 您可以通过几种方式进行映射：
    - 逐个手持每个物品，并在手持物品时运行 `/rainbow map`。
    - 用自定义物品填满您的背包，并运行 `/rainbow mapinventory` 来映射整个背包。
    - 运行 `/rainbow auto inventory` 并打开带有自定义内容的UI（例如，箱子或插件命令显示自定义内容）。Rainbow将继续映射所有自定义物品，直到您使用 `/rainbow auto stop` 停止该过程。
4. 运行 `/rainbow finish` 完成转换，Rainbow将输出您的资源包和映射文件到 `<实例文件夹>/rainbow/<资源包名称>`，您也可以点击聊天中的 `已将资源包写入磁盘` 消息来打开文件夹。
5. 在此文件夹中，您将找到3个文件：`pack.zip` 放入服务器的 `packs` 文件夹，`geyser_mappings.json` 放入服务器的 `custom_mappings` 文件夹，最后是 `report.txt`，如果您遇到问题，可以在我们的 [Discord](https://discord.gg/geysermc) 中发送此文件，否则您可以忽略此文件。

## 下载 {#download} 

您可以 [在此](/download/?project=other-projects&rainbow=expanded) 下载Rainbow。

## 贡献 {#contributing}

欢迎任何贡献。如果您有兴趣帮助Rainbow的开发，请随时在我们的 [Discord](https://discord.gg/geysermc) 上联系我们。
