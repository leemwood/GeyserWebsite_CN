---
title: 支持的语言和翻译
description: Geyser 支持多种语言，为全球玩家提供最佳体验。社区成员可以帮助将 Geyser 翻译成更多语言。
---

Geyser 支持多种语言，为全球玩家提供最佳体验。
当玩家加入您的服务器时，Geyser 会自动检测他们的语言环境并提供相应的语言。

## 支持哪些语言？ {#what-languages-are-supported}
我们的目标是支持 Bedrock 支持的任何语言 - 以下是所有这些语言及其语言代码的列表。

| 名称                         | 代码    |
|------------------------------|---------|
| 保加利亚语                    | bg_bg   |
| 捷克语                       | cs_cz   |
| 丹麦语                       | da_dk   |
| 德语                        | de_de   |
| 希腊语                       | el_gr   |
| 英式英语                     | en_gb   |
| 美式英语                     | en_us   |
| 西班牙语                     | es_es   |
| 墨西哥西班牙语                | es_mx   |
| 芬兰语                       | fi_fi   |
| 加拿大法语                   | fr_ca   |
| 法语                        | fr_fr   |
| 匈牙利语                     | hu_hu   |
| 印度尼西亚语                  | id_id   |
| 意大利语                     | it_it   |
| 日语                        | ja_jp   |
| 韩语                        | ko_kr   |
| 荷兰语                       | nl_nl   |
| 挪威博克马尔语                | nb_no   |
| 波兰语                       | pl_pl   |
| 巴西葡萄牙语                  | pt_br   |
| 葡萄牙语                     | pt_pt   |
| 俄语                        | ru_ru   |
| 斯洛伐克语                    | sk_sk   |
| 瑞典语                       | sv_se   |
| 土耳其语                     | tr_tr   |
| 乌克兰语                     | uk_ua   |
| 简体中文（中国）               | zh_cn   |
| 繁体中文（台湾）               | zh_tw   |

### 其他语言 {#additional-languages}
这些语言也受支持，可通过 [Minecraft 翻译资源包](https://www.curseforge.com/minecraft-bedrock/addons/translations-for-minecraft) 在 Bedrock 客户端中使用。

| 名称                | 代码    |
|---------------------|---------|
| 南非荷兰语           | af_za   |
| 白俄罗斯语           | be_by   |
| 希伯来语             | he_il   |
| 印地语              | hi_in   |

## 我如何帮助翻译 Geyser？ {#how-can-i-help-translate-geyser}
我们使用 [Crowdin](https://translate.geysermc.org/) 来管理我们的翻译。
我们也可以添加更多语言的支持，如果您愿意翻译，请通过 Discord 服务器请求。
（这些可以通过 [https://www.curseforge.com/minecraft-bedrock/addons/translations-for-minecraft](https://www.curseforge.com/minecraft-bedrock/addons/translations-for-minecraft) 在客户端启用）

## 添加自定义 Geyser 翻译覆盖 {#adding-custom-geyser-translation-overrides}
这些字符串仅用于 Geyser 使用它们的地方。要编辑 Minecraft Java 翻译，请参阅下面的部分。

首先，在 Geyser 配置文件所在的目录中创建一个 `languages` 文件夹。
在其中，您需要添加一个以您想要的语言环境结尾的 `.properties` 文件。您可以查看
[此处](https://github.com/GeyserMC/languages/tree/master/texts）了解 Geyser 使用的语言环境文件 -
您可以下载这些文件作为起点，或者只添加您想要覆盖的字符串。

您必须重启 Geyser 才能使更改生效。

## 修改/添加 Minecraft Java 翻译 {#modifyingadding-minecraft-java-translations}
Geyser 还会从 Mojang 的服务器下载 Minecraft Java 翻译，并在需要时将它们发送到 Bedrock 客户端。
要修改这些内容，请在 `locales` 文件夹中打开 `overrides` 子文件夹。然后，将您修改后的 `.json` 文件放入 `overrides` 文件夹中。
您也可以在该 json 文件中添加自定义 Java 翻译字符串。

注意：您不需要提供整个文件，只需提供您想要更改/添加的 Java 字符串。Geyser 将仅更新您提供的字符串。
您必须重启 Geyser 才能使更改生效。
