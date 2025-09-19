---
title: GeyserOptionalPack
description: GeyserOptionalPack是一个基岩版资源包，修复了Geyser的兼容性问题，使基岩版与Java版保持一致。
---

## [点击此处下载](/download?project=other-projects&geyseroptionalpack=expanded) {#download-here}

GeyserOptionalPack是一个基岩版资源包，为Geyser添加更多功能，使基岩版与Java版保持一致。资源包允许在基岩版中实现各种功能和错误修复，包括：

- 盔甲基座臂/底板可见性
- 盔甲架姿势
- 幻术师
- 缺失的粒子效果
- 副手动画
- 潜影贝隐身兼容性
- 光灵箭实体纹理
- 绕过记分板字符限制
- 隐藏Java版不存在的UI元素，例如：
  - 制图台中的文本输入字段
  - 创造模式下的2x2合成网格
  - 命令方块菜单中的刻延迟和重命名字段
  - Java版不存在的结构方块选项
- 隐藏武器冷却标题上的辅助功能背景
  
更完整的列表可以在可选资源包的 [README](https://github.com/GeyserMC/GeyserOptionalPack/blob/master/README.md) 中找到。对于有兴趣了解如何添加功能的实现细节，请参见 [这里](https://github.com/GeyserMC/GeyserOptionalPack/blob/master/developer_documentation.md)。

虽然推荐安装，但并不要求在服务器上安装资源包 - 客户端可以自行安装。此外，如果您使用像WaterdogPE这样的代理，您可以在服务器上安装资源包，而不会影响其他基岩版服务器的游戏玩法。

## 资源包冲突 {#resource-pack-conflicts}

如果您当前的服务器资源包包含任何与可选资源包重叠的 [实体定义](https://github.com/GeyserMC/GeyserOptionalPack/tree/master/entity)，您将需要合并这些实体的定义，以使可选资源包和您自己的资源包能够正确工作。否则，占优势的实体定义将基于资源包应用顺序。由于实体定义文件的复杂性，这个过程最好手动执行，但也可以 [脚本化](https://gist.github.com/Kas-tle/89c6adc3e7901fbabd1b9f71d902d0a6)。
