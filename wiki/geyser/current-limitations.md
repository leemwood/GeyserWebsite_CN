---
title: 当前限制
description: Geyser 当前已知的限制。
---

# 当前限制

由于 Geyser 是两个不同游戏（具有两个不同代码库）之间的协议翻译器，Geyser 遗憾的是无法处理一些限制。
尽管 Minecraft Bedrock 和 Java 版本相比已经非常接近，但在许多领域仍存在一些显著差异。

## 无法修复 {#unfixable}

以下问题无法在不更改 Bedrock 或 Java 协议的情况下修复。截至目前，它们在 Geyser 中无法修复。

- 聊天中的可点击链接
- 发光效果
- 在物品栏中区分左键和右键点击
- 红石.dot 方块状态
- 使用 PotionContents 数据组件实现药水颜色
- 任何不使用 Minecraft Brigadier 库的命令的各种命令参数
- 任何依赖于 Tab 补全或在聊天 UI 中输入的内容（与上述相关）- Bedrock 不会发送表示他们在此菜单中的数据包
- 无法看到超过 6 层的旗帜层
- 由于 Java 和 Bedrock 之间的偏移差异，竹子周围的移动问题。使用 [Hurricane](/wiki/other/hurricane) 来解决。
- 自定义铁砧配方或自定义锻造台材料/图案（[GeyserMC/Geyser#4706](https://github.com/GeyserMC/Geyser/issues/4706)）
- 主世界（以及 Geyser 映射到主世界的自定义维度）中低于 -512 或高于 512 的高度，其他维度中低于 0 或高于 256 的高度（[GeyserMC/Geyser#3804](https://github.com/GeyserMC/Geyser/issues/3804)）
- 海豚的恩赐药水效果视觉（效果仍应正常工作）
- 隐形物品框 - 但是，有一些 Bedrock 版本资源包可以使*所有*物品框隐形
- 实体头部上的方块（不包括南瓜灯）（例如盔甲架、玩家）
- 某些方块状态更改由客户端控制，不受调试棒的影响 - 例如栅栏。（[GeyserMC/Geyser#3125](https://github.com/GeyserMC/Geyser/issues/3125)）
- 自定义信标底座方块（[GeyserMC/Geyser#2301](https://github.com/GeyserMC/Geyser/issues/2301)）- 这些在 Bedrock 版本中是硬编码的。
- 数据包更改的可攀爬方块（[GeyserMC/Geyser#4051](https://github.com/GeyserMC/Geyser/issues/4051)）
- 自定义附魔/横扫之刃（[GeyserMC/Geyser#3121](https://github.com/GeyserMC/Geyser/issues/3121)）
- 没有鞘翅的滑翔/自定义鞘翅（https://github.com/GeyserMC/Geyser/issues/3255, https://github.com/GeyserMC/Geyser/issues/3299）
- 自定义熔炉烹饪时间（[GeyserMC/Geyser#4104](https://github.com/GeyserMC/Geyser/issues/4104)）
- Java/Bedrock 版本上的最大告示牌长度不同（[GeyserMC/Geyser#4130](https://github.com/GeyserMC/Geyser/issues/4130)）
- 进度提示的第二行（[GeyserMC/Geyser#3205](https://github.com/GeyserMC/Geyser/issues/3205)）
- 显示非原版附魔等级，例如"精准采集 2"（[GeyserMC/Geyser#5252](https://github.com/GeyserMC/Geyser/issues/5252)）

## 通过随附的 GeyserIntegratedPack 修复 {#fixed-with-geyserintegratedpack}

以下更改通过随附的 GeyserIntegratedPack **得到支持**，这是一个 Bedrock 资源包，用于添加 Bedrock 原生不支持的功能：
- 自定义盔甲架姿势
- 幻术师
- 击中粒子和其他 Bedrock 原生不具备的杂项粒子
- 副手动画
- 潜影盒隐形
-  spectral arrow 纹理
- 与 Java 匹配的计分板宽度
- 与 Java 匹配的物品栏 UI 更改

## 通过 Hurricane 修复 {#fixable-with-hurricane}

以下问题可以通过 [Hurricane](/wiki/other/hurricane) 插件/模组来解决。但是，这些涉及 Java 服务器修改。
- 由于 Java 和 Bedrock 之间的偏移差异，竹子周围的移动问题。
