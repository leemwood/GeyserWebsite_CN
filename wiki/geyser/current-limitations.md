---
title: 当前限制
description: Geyser 当前已知的限制。
---

# 当前限制

由于 Geyser 是在两个不同游戏之间进行协议翻译的工具，而这两个游戏有着不同的代码库，因此 Geyser 无法处理一些限制。
尽管 Minecraft 基岩版和 Java 版在很多方面比较接近，但在许多领域仍存在巨大差异。

## 无法修复的问题 {#unfixable}

以下问题在没有对基岩版或 Java 协议进行更改的情况下无法修复。截至目前，它们在 Geyser 中无法修复。

- Clickable links in chat
- Glowing effect
- Crafting in the 2x2 menu while in creative mode - with the GeyserOptionalPack, this grid is hidden as it does not exist on Java.
- Distinguishing between left and right clicks in inventories
- Redstone dot blockstates
- Potion colors implemented using NBT
- Various command arguments for any command that doesn't use the Minecraft Brigadier library
- Anything that relies on tab complete or typing in the chat UI (related to the above) - Bedrock sends no packet that indicates they are in this menu
- Unable to see banner layers past 6
- Movement issues around bamboo due to offset differences between Java and Bedrock. Use [Hurricane](/wiki/other/hurricane) to work around it.
- Custom anvil recipes or custom smithing table ingredients/patterns ([GeyserMC/Geyser#4706](https://github.com/GeyserMC/Geyser/issues/4706))
- Heights lower than -512 or higher than 512 in the overworld (and custom dimensions mapped by Geyser to the overworld), and heights lower than 0 or higher than 256 in other dimensions ([GeyserMC/Geyser#3804](https://github.com/GeyserMC/Geyser/issues/3804))
- Dolphin's Grace potion effect visuals (effects should still work correctly)
- Invisible item frames - however, there are Bedrock edition resource packs making *all* item frames invisible 
- Blocks (excluding jack-o-lantern) on entity heads (E.G. armor stands, players)
- Some block state changes are controlled client side, and are not influenced by the debug stick - fences for example. ([GeyserMC/Geyser#3125](https://github.com/GeyserMC/Geyser/issues/3125))
- Custom beacon base blocks ([GeyserMC/Geyser#2301](https://github.com/GeyserMC/Geyser/issues/2301)) - these are hardcoded on Bedrock edition.
- Climbable blocks changed by datapacks ([GeyserMC/Geyser#4051](https://github.com/GeyserMC/Geyser/issues/4051))
- Custom enchantments/sweeping edge ([GeyserMC/Geyser#3121](https://github.com/GeyserMC/Geyser/issues/3121))
- Gliding without elytras/custom elytras (https://github.com/GeyserMC/Geyser/issues/3255, https://github.com/GeyserMC/Geyser/issues/3299)
- Custom furnace cook times ([GeyserMC/Geyser#4104](https://github.com/GeyserMC/Geyser/issues/4104))
- Maximum sign length different on Java/Bedrock edition ([GeyserMC/Geyser#4130](https://github.com/GeyserMC/Geyser/issues/4130))

## 可通过 GeyserOptionalPack 修复 {#fixable-with-geyseroptionalpack}

以下更改**受支持**，通过 [GeyserOptionalPack](/wiki/other/geyseroptionalpack/) 实现，这是一个基岩版资源包，您可以安装它以获得基岩版原生不支持的功能：
- Custom armor stand poses
- Illusioners
- Hit particles and other miscellaneous particles not natively in Bedrock
- Offhand animations
- Shulker invisibility
- Spectral arrow texture
- Scoreboard width that matches Java
- Inventory UI changes to match Java

## 可通过 Hurricane 修复 {#fixable-with-hurricane}

以下问题可以通过 [Hurricane](/wiki/other/hurricane) 插件/模组来解决。然而，这些涉及 Java 服务器的修改。
- Movement issues around bamboo due to offset differences between Java and Bedrock.