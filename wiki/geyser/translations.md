---
title: 支持的语言和翻译
description: Geyser 支持多种语言，为全球玩家提供最佳体验。社区成员可以帮助将 Geyser 翻译成更多语言。
---

Geyser 支持多种语言，为全球玩家提供最佳体验。
当玩家加入您的服务器时，Geyser 会自动检测他们的区域设置并提供相应的语言。

## 支持哪些语言？ {#what-languages-are-supported}
我们的目标是支持所有基岩版语言——以下是这些语言的列表以及所有语言代码。

| 名称 | 代码 |
|---|---|
| 保加利亚语 | bg_bg |
| 捷克语 | cs_cz |
| 丹麦语 | da_dk |
| 德语 | de_de |
| 希腊语 | el_gr |
| 英式英语 | en_gb |
| 美式英语 | en_us |
| 西班牙语 | es_es |
| 墨西哥西班牙语 | es_mx |
| 芬兰语 | fi_fi |
| 加拿大法语 | fr_ca |
| 法语 | fr_fr |
| 匈牙利语 | hu_hu |
| 印度尼西亚语 | id_id |
| 意大利语 | it_it |
| 日语 | ja_jp |
| 韩语 | ko_kr |
| 荷兰语 | nl_nl |
| 挪威语（书面语） | nb_no |
| 波兰语 | pl_pl |
| 巴西葡萄牙语 | pt_br |
| 葡萄牙语 | pt_pt |
| 俄语 | ru_ru |
| 斯洛伐克语 | sk_sk |
| 瑞典语 | sv_se |
| 土耳其语 | tr_tr |
| 乌克兰语 | uk_ua |
| 简体中文（中国） | zh_cn |
| 繁体中文（台湾） | zh_tw |

### 其他语言 {#additional-languages}
还支持这些语言，并且可以使用 [Minecraft 翻译资源包](https://www.curseforge.com/minecraft-bedrock/addons/translations-for-minecraft)在基岩客户端中使用。

| 名称 | 代码 |
|---|---|
| 南非荷兰语 | af_za |
| 白俄罗斯语 | be_by |
| Hebrew              | he_il |
| Hindi               | hi_in |

## How can I help translate Geyser? {#how-can-i-help-translate-geyser}
We use [Crowdin](https://crowdin.com/project/geyser) to manage our translations.
We also can add support for more languages, and please request them in the Discord server if you are willing to translate them.
(Those can be enabled clientside via [https://www.curseforge.com/minecraft-bedrock/addons/translations-for-minecraft](https://www.curseforge.com/minecraft-bedrock/addons/translations-for-minecraft))

## Adding custom Geyser translation overrides {#adding-custom-geyser-translation-overrides}
These strings are only for places where Geyser uses them. To edit Minecraft Java translations, see the section below.

To start, create a `languages` folder in the same directory as the Geyser config file.
Inside of it, you'll need to add a file with your desired locale ending in `.properties`. You can see
[here](https://github.com/GeyserMC/languages/tree/master/texts) for the locale files that Geyser uses - 
you can download these as a starting point, or you can just add the strings you want to overwrite. 

You must restart Geyser for the changes to apply.

## Modifying/Adding Minecraft Java translations {#modifyingadding-minecraft-java-translations}
Geyser also downloads the Minecraft Java translations from Mojang's servers and sends them to Bedrock clients when needed.
To modify these, open the `overrides` subfolder in the `locales` folder. Then, place your modified `.json` files in the `overrides` folder.
You can also add custom Java translation strings to that json file.

Note: You do not need to provide the entire file, only the Java strings you want to change/add. Geyser will only update the strings you provide.
You must restart Geyser for the changes to apply.
