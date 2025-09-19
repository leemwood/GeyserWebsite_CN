---
title: "回顾2022"
slug: "looking-back-at-2022"
authors: Camotoy
hide_table_of_contents: false
description: "回顾 Geyser 在 2022 年的发展历程"
---
大家好。

与其他年份相比，2022 年对于 Geyser 来说在新功能方面相当平凡。2021 年有基岩版皮肤支持和完整的物品栏支持，2020 年有移动修复，而今年感觉很大程度上像是一个维护年。我认为这是件好事；这意味着我们已经达到了只剩下错误修复、小众功能/行为或更新的阶段。即便如此，以下是 Geyser 在 2022 年的一些值得注意的点，以及未来的计划。

<!-- truncate -->

## 年度 GitHub 统计

在 2022 年，我们有 519 次提交来自 59 位贡献者，85 个合并的 PR，以及 869 个新的星标在仓库上。Geyser 每年持续获得的影响力确实令人惊叹。

## （几乎）每个 Floodgate 实例都崩溃了

在 2022 年 2 月 2 日，Mojang 偷偷对他们的 API 做了一个更改，导致几乎所有涉及 Paper 服务器软件的 Floodgate 实例崩溃（可能是由于 [这个](https://github.com/PaperMC/Paper/blob/0cc2503b88343c4d10d9e6ecf7592d56762b4cae/patches/server/0183-Ability-to-change-PlayerProfile-in-AsyncPreLoginEven.patch#L38) Paper 补丁）- 即使是仅在代理上的 Floodgate 实例。我们迅速采取了缓解措施，虽然我希望这样的问题再也不会发生，但这一天呈现了一个一生一次的独特挑战，即修复一个突然的、严重的错误，这个错误不是我们引起的，它提醒我们 Geyser 的工作的一部分是应对 Mojang 在更新内外扔给我们的任何变化。

## 自定义物品支持

Java 的 CustomModelData 系统现在终于在基岩版上得到支持。这一变化很大程度上要感谢 [ImDaBigBoss](https://github.com/ImDaBigBoss)，他在二月份创建了 [PR](https://github.com/GeyserMC/Geyser/pull/2822)，以及 [Kastle](https://github.com/Kas-tle)，他致力于尽可能轻松地将 Java 资源包映射到基岩版。 

## 专用维基

我们现在有了一个[专用维基](https://wiki.geysermc.org/)，允许用户贡献文档，同时不允许任何人随意更改。

## 扩展

经过两年的理论和概念研究，Geyser 扩展现在成为可能，允许与基岩版客户端进行更好的交互，以利用基岩版平台所提供的功能。这些功能与插件非常相似，允许开发者使用 Geyser API 专门为基岩版和 Geyser 功能编写代码。在 2023 年，我们希望看到更多的 API 添加，让服务器、插件和模组在创造力方面大放异彩。

## Geyser-Fabric 加入主仓库

Geyser-Fabric 现在是主 Geyser 仓库的一部分，而不是被降级到单独的仓库。这将确保 Fabric 模组始终获得 Geyser 的最新更改，并且不容易错过更新。

## 安全配置文件和 Geyser

1.19 Java 更新添加了新更改，允许玩家聊天被验证并报告给 Mojang。目前的基岩版基本上与这些更改不兼容；在 1.19.3 之前，要求所有玩家安全聊天（在 `server.properties` 中启用 `enforce-secure-profile`）会阻止基岩版加入。幸运的是，在 1.19.3 中，同样的设置现在允许基岩版玩家加入，只是没有聊天能力。

## 几乎 100% 的首日更新

我为所有我们的开发者和贡献者感到自豪，他们能够在每次 Minecraft 发布之前准备好更新。两年前对于 1.16，我们无法在发布日期之前准备好更新。现在，我们已经能够通过在发布当天发布 Geyser 版本来持续准备支持自动更新的基岩版客户端。今年的一个例外是 8 月发布的基岩版 1.19.21 更新 - 虽然它应该是一个补丁更新，但它让整个基岩版社区（甚至包括特色服务器）感到惊讶，因为它与之前的 1.19.20 版本不兼容，而 Mojang 没有发出任何通知。没有明显的差异，我们在发现不兼容性后大约一小时内就推送了更新。

## 即将到来：Geyser 和 Floodgate 合并

展望 2023 年，我作为 Geyser 项目负责人的目标之一是确保设置和更新过程尽可能顺畅和安全。让用户担心两个插件并不有趣，我们得到的许多支持请求都不知道他们需要 Floodgate 才能让基岩版玩家无需 Java 账户即可加入。虽然 Floodgate 必须继续存在于后端服务器和 Geyser 独立版中，但我们希望将 Floodgate 功能打包到 Geyser 中，以提高效率，修复一些[烦人的错误](https://github.com/GeyserMC/Floodgate/issues/178)，其中重复的类会导致 API 错误，并简化安装 Geyser 需要安装的插件数量。


总的来说，我真的很高兴也非常感激看到 Geyser 今天的样子。我们有 20,000 个正在运行的 Geyser 实例，总共有 10,000 名玩家。我们有一个令人惊叹的社区，以及更广泛的 Minecraft 社区的许多支持。2023 年承诺会有更多好的变化 - 为此干杯！
