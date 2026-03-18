---
title: Rainbow
description: 一个用于生成 Geyser 物品映射和 Bedrock 资源包的 Minecraft 模组，用于 Geyser 的自定义物品 API V2。
---

Rainbow 是一个 Fabric 客户端 Minecraft 模组，用于生成 Geyser 物品映射和 Bedrock Edition 资源包，使用 Geyser 的自定义物品 API（v2）在服务器上使用。

## 什么是 Rainbow？ {#what-is-rainbow}

Rainbow 是一个生成器，用于创建 Geyser 物品映射和 Bedrock Edition 资源包，它使用 Geyser 自定义物品 API V2 格式来允许使用 1.21.4+ Java Edition 资源包。

:::caution

此项目处于早期开发阶段！任何错误和问题都应在我们的 [Discord](https://discord.gg/geysermc) 中报告。

:::

## 使用方法 {#usage}

要使用 Rainbow：
1. 您需要为 Java Edition 设置 1.21.11 Fabric 客户端，并确保模组存在于客户端上。
2. 加入您选择的服务器以开始转换资源包，并运行 `/rainbow create <pack name>`，其中 `<pack name>` 是输出包的名称。
3. 您可以通过几种方式映射物品：
    - 逐个在手中持有每个物品，并在持有物品时运行 `/rainbow map`。
    - 用自定义物品填充您的物品栏，并运行 `/rainbow mapinventory` 来映射您的整个物品栏。
    - 运行 `/rainbow auto inventory` 并打开包含自定义内容的 UI（例如，箱子或插件显示自定义内容的命令）。Rainbow 将继续映射所有自定义物品，直到您使用 `/rainbow auto stop` 停止该过程。
4. 运行 `/rainbow finish` 完成您的转换，Rainbow 随后将您的包和映射文件输出到 `<instance folder>/rainbow/<pack name>`，或者，您也可以点击聊天中的 `Wrote pack to disk` 消息来打开该文件夹。
5. 在此文件夹中，您将找到 3 个文件，`pack.zip` 放入服务器的 `packs` 文件夹，`geyser_mappings.json` 放入服务器的 `custom_mappings` 文件夹，最后 `report.txt` 如果您遇到问题可以发送给我们 的 [Discord](https://discord.gg/geysermc)，否则您可以忽略此文件。

## 下载 {#download}

您可以在[此处](/download/?project=other-projects&rainbow=expanded)下载 Rainbow。

## 贡献 {#contributing}

任何贡献都是表示感谢的。如果您有兴趣帮助 Rainbow，请随时在 [Discord](https://discord.gg/geysermc) 上联系我们。
