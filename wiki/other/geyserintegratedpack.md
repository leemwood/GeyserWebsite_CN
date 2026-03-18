---
title: GeyserIntegratedPack
description: GeyserIntegratedPack 是一个 Bedrock 资源包，用于修复 Geyser 的对等性问题，使 Bedrock Edition 与 Java Edition 保持一致。
---

:::info
Geyser 包含 GeyserIntegratedPack（以前称为 "GeyserOptionalPack"），您不需要手动添加它！
有关详细信息，请参阅"迁移"部分。
:::

GeyserIntegratedPack 是一个 Bedrock 资源包，为 Geyser 添加更多功能，使 Bedrock Edition 与 Java Edition 保持一致。
资源包允许在 Bedrock 中实现各种功能和错误修复，包括：

- 护甲基础手臂/底板可见性
- 盔甲架姿势
- 幻术师
- 缺失的粒子效果
- 副手动画
- 潜影盒隐身对等性
- 光谱箭实体纹理
- 绕过记分板字符限制
- 隐藏 Java 版不存在的 UI 元素，例如：
  - 制图台中的文本输入字段
  - 创意模式下 2x2 合成网格
  - 命令块菜单中的 Tick 延迟和重命名字段
  - Java 版不存在的结构块选项
- 在武器冷却提示标题上隐藏无障碍背景

更完整的列表可以在整合包的 [README](https://github.com/GeyserMC/GeyserIntegratedPack/blob/master/README.md) 中找到。
有关功能添加方式的实现细节，请参见[此处](https://github.com/GeyserMC/GeyserIntegratedPack/blob/master/developer_documentation.md)。

## 从 GeyserOptionalPack 迁移 {#migration}

以前使用 GeyserOptionalPack 的用户应将其删除，以允许 Geyser 提供 GeyserIntegratedPack。
此更改有一个主要好处：自动更新，并且这是与 Geyser 绑定的高级功能的准备工作（例如真正的 Java 风格攻击指示器！）。

如果您不希望应用这些更改，也可以在 Geyser 的配置中禁用 GeyserIntegratedPack。

### 有什么变化？
- 资源包 uuid 和版本已更改
- GeyserIntegratedPack 以较低的优先级发送给客户端资源包堆叠（资源包应用的顺序），因此可以手动覆盖
- 由于 Geyser 包含该包，您不再需要担心自己更新该包！

### 如何迁移？

如果您以前从 Geyser 的下载页面下载了 GeyserOptionalPack，您可以简单地从 Geyser 的 `packs` 文件夹中删除它，让 Geyser 应用 GeyserIntegratedPack - 就完成了！

但是，如果您正在对资源包进行修改，则需要做更多的事情：
- 您应该将您的更改分离到一个单独的资源包中。GeyserIntegratedPack 在资源包堆叠中优先级较低，因此您资源包中的更改将优先。
- 如果您修改了 GeyserIntegratedPack 更改的实体定义，请确保手动合并这些定义！

使用 UrlPackCodec 的用户也应该改用 GeyserIntegratedPack（可从[此处](https://github.com/GeyserMC/GeyserIntegratedPack)获取）。
Geyser 仍将执行检查以确保"手动"包含的版本不是过时的，因此我们建议定期轮询 Geyser 的下载 API 以获取包更新。

## 资源包冲突 {#resource-pack-conflicts}

如果您的当前服务器资源包包含与 Geyser 更改重叠的任何实体定义（可在[此处](https://github.com/GeyserMC/GeyserIntegratedPack/tree/master/src/main/resources/integratedpack/entity)
和[此处](https://github.com/GeyserMC/GeyserIntegratedPack/tree/master/src/main/resources/patches/entity)找到），
您将需要合并这些实体的定义，以使可选包和您自己的包正常工作。
Bedrock 客户端将根据包应用顺序优先处理实体定义 - 最高优先级的获胜！由于实体定义文件的复杂性，此过程最好手动执行，但也可以[编写脚本](https://gist.github.com/Kas-tle/89c6adc3e7901fbabd1b9f71d902d0a6)完成。
