---
title: "1.18 版本发布、MCProtocolLib、重构与更多！"
slug: "1-18-release-and-more"
authors: RednedEpic
hide_table_of_contents: false
description: "在这篇文章中，我们将介绍导致 1.18 版本发布的所有更改。"
---
大家好 👋

欢迎来到全新的 Geyser 博客！我们将在这里定期发布有关项目更新、未来计划、项目公告以及围绕 Geyser 项目（们）的各种开发相关内容。这些内容将会在我们的 Discord #blog-feed 频道中发布，因此如果您希望在新帖子发布时收到通知，可以选择在自己的 Discord 服务器中关注该频道，或者开启通知。

<!-- truncate -->

## 简介： {#introduction}
在这篇文章中，我们将介绍导致 1.18 版本发布的所有更改。随着 1.18 的到来，Geyser 发生了一系列巨大变化，虽然这些变化对最终用户可能不可见，但在内部却是一项壮举。这不仅导致了 Geyser 本身以及周边项目（PacketLib、MCProtocolLib 等）的多次重构，还对代码的运行方式和性能进行了许多额外的优化和改进。特别是在 2021 年下半年，我们投入了更多时间来确保 Geyser 运行更加流畅，并优化代码中性能较差的部分，因此这些变化大多是该计划的直接结果。

## 编写全新的 Java 版协议库： {#writing-a-new-java-edition-protocol-library}
首先说明，我们最初并没有打算一次性进行如此大规模的重构，但事情一件接一件，最终走到了今天。我们最初的计划其实与此大相径庭，原本打算弃用并从代码库中移除 MCProtocolLib，[转而在我们的基岩版协议库 [Protocol](https://github.com/CloudburstMC/Protocol) 中实现对 Java 版的支持](https://github.com/GeyserMC/Protocol/tree/feature/java-3.0)。实际上，我们已经将其开发到了可以正常加入游戏并收发数据包的程度！

![Java Edition Lib](https://user-images.githubusercontent.com/29153871/144722769-88a6701f-4478-4608-96ae-a5c855b752b7.png)

这与我们持续改进 Geyser 性能和可维护性的计划是一致的，因为使用一个在 Java 和基岩协议库之间共享大量代码的库，将大大减少我们需要做的额外工作。一个很好的例子是我们 [ItemTranslator](https://github.com/GeyserMC/Geyser/blob/master/core/src/main/java/org/geysermc/geyser/translator/inventory/item/ItemTranslator.java#L295-L357) 类中的代码，我们需要将 MCProtocolLib 中使用的 NBT 对象转换为我们基岩协议库中使用的格式。我们原本打算在 1.18 版本中完成这项工作，因为这次更新本身并不剧烈，这意味着我们可以将更多时间花在 Geyser 本身，而不是忙于协议更新。

## 接管 MCProtocolLib： {#taking-over-mcprotocollib}
然而，当 MCProtocolLib 当时的维护者 Steveice10 联系我们[询问是否愿意接管该项目](https://github.com/GeyserMC/MCProtocolLib/issues/659)时，我们的计划彻底改变了。起初我们有些犹豫，因为我们已经为新的库投入了大量工作，但考虑到 MCProtocolLib 从一开始就是 Geyser 不可或缺的一部分，并且我们在过去一年左右的时间里实际上一直在维护这个库，我们一致认为弃用该库对我们以及同样使用该库的广大社区来说都不是明智之举。我们决定接管它。

随着我们完全掌控 MCProtocolLib，我们获得了前所未有的自由来更新和改进这个项目。与其完全采用新库，我们觉得逐步将大量工作移植到 MCProtocolLib 中会是更好的选择。随着 1.18 版本的临近，我们决定抢先一步，开始对数据包进行大规模重构，采用 Mojang 映射的数据包名称。这正是我们之前在 Protocol 中为 Java 版所做的，随着越来越多的项目采用这些名称，为了整体统一，我们认为现在是做出这一决定的最佳时机。 

## 提升 MCProtocolLib 性能： {#improving-performance-in-mcprotocollib}
在将数据包重命名为 Mojmap 名称的过程中，我们发现 MCProtocolLib 和 Geyser 的性能瓶颈并不主要在于对象转换，因为在大局上这种转换成本相对较低，而在于库本身的运行方式。

![Slow Packets](https://user-images.githubusercontent.com/29153871/144722843-4bef937f-b393-487d-99fc-cc56a8eece58.PNG)

我们发现，在 MCProtocolLib 的主要类 MinecraftProtocol 中，每次协议状态发生变化时，它都会为每个玩家单独重新注册 Minecraft 协议。为了更详细地说明这一点——Minecraft 协议在四个独立状态下运行。第一个是握手状态，当客户端首次连接到 Minecraft 服务器时设置此状态。握手完成后，下一个状态是 `login` 或 `status` 状态。当客户端从服务器列表 ping 服务器但并未真正加入时，设置为 status 状态；而当客户端登录服务器时，则为 login 状态。登录完成后，服务器进入 `game` 状态，在此状态下您会收到允许与世界交互的数据包。

以下是 MCProtocolLib 之前在从 `login` 状态切换到 `game` 状态时所执行操作的示例：

```java
private void initGame(BiConsumer<Integer, Class<? extends Packet>> clientboundPackets, BiConsumer<Integer, Class<? extends Packet>> serverboundPackets) {
        clientboundPackets.accept(0x00, ServerSpawnEntityPacket.class);
        clientboundPackets.accept(0x01, ServerSpawnExpOrbPacket.class);
        clientboundPackets.accept(0x02, ServerSpawnLivingEntityPacket.class);
        clientboundPackets.accept(0x03, ServerSpawnPaintingPacket.class);
        clientboundPackets.accept(0x04, ServerSpawnPlayerPacket.class);
        clientboundPackets.accept(0x05, ServerAddVibrationSignalPacket.class);
        clientboundPackets.accept(0x06, ServerEntityAnimationPacket.class);
        clientboundPackets.accept(0x07, ServerStatisticsPacket.class);
        clientboundPackets.accept(0x08, ServerPlayerActionAckPacket.class);
        clientboundPackets.accept(0x09, ServerBlockBreakAnimPacket.class);
        clientboundPackets.accept(0x0A, ServerUpdateTileEntityPacket.class);
        clientboundPackets.accept(0x0B, ServerBlockValuePacket.class);
        clientboundPackets.accept(0x0C, ServerBlockChangePacket.class);
        clientboundPackets.accept(0x0D, ServerBossBarPacket.class);
        clientboundPackets.accept(0x0E, ServerDifficultyPacket.class);
        clientboundPackets.accept(0x0F, ServerChatPacket.class);
        clientboundPackets.accept(0x10, ServerClearTitlesPacket.class);
        clientboundPackets.accept(0x11, ServerTabCompletePacket.class);
        clientboundPackets.accept(0x12, ServerDeclareCommandsPacket.class);
        clientboundPackets.accept(0x13, ServerCloseWindowPacket.class);
        clientboundPackets.accept(0x14, ServerWindowItemsPacket.class);
        clientboundPackets.accept(0x15, ServerWindowPropertyPacket.class);
        clientboundPackets.accept(0x16, ServerSetSlotPacket.class);
        clientboundPackets.accept(0x17, ServerSetCooldownPacket.class);
        clientboundPackets.accept(0x18, ServerPluginMessagePacket.class);
        // 这里还有超过 100 个数据包
```

在上述代码中，每个游戏数据包都会被注册到一个新映射中。这种情况远非理想，因为需要注册数百个数据包，而且每个客户端都会调用此操作。我们选择将其替换为[静态注册表](https://github.com/GeyserMC/MCProtocolLib/blob/master/src/main/java/com/github/steveice10/mc/protocol/codec/MinecraftCodec.java)，该注册表仅保存这些值一次。每当子协议发生变化时，它只需从这个静态编解码器中提取，而不是每次都填充映射。

我们还发现了其他代码运行缓慢的领域——以前，每个数据包都是通过反射构造的，我们意识到这可以轻松替换为数据包工厂。如今，数据包注册代码仅构建一次，玩家的协议状态决定从哪个映射中提取数据包。

随着所有这些变化整合到一个单独的编解码器中，这也为多重版本兼容性打开了大门——这是我们最初计划在 Protocol 中的 Java 版工作中实现的。尽管尚未得到官方支持，也不是我们完全承诺的功能，但这些变化将在未来允许这种能力，并且实现项目技术上可以根据需要实现此功能。

## 重构 Geyser： {#refactoring-geyser}
随着 MCProtocolLib 内部的大规模变化已经就绪，我们预见到 Geyser 的变化也将相当剧烈。由于扩展和更精简的 API 计划已经酝酿了一年多，我们觉得现在是开始推进这些计划的最佳时机。这最初始于对 Geyser 内部包结构的大规模重构。以前，Geyser 所有与数据包翻译等相关的工作都位于项目的 `connector` 模块中。这个名称对许多人来说有些困惑，因为 Geyser 所做的远不止“连接到服务器”。因此，我们决定将模块重命名为 `core`，并将其包名从 `org.geysermc.connector` 更新为 `org.geysermc.geyser`。

随着包名的更改，我们决定开始实施新的 API。在撰写本文时，这仍是一项进展中的工作，但这将使编写与 Geyser 和 Floodgate 互操作的项目变得更加简单流畅，并为扩展提供坚实的基础。

## 改进 Geyser 的代码： {#improving-code-in-geyser}
正如本文前面提到的，我们最初的计划之一是由于需要在 MCProtocolLib 和 Protocol 对象之间进行额外的转换，最终放弃使用 MCProtocolLib。然而，随着我们继续对 MCProtocolLib 和 Geyser 进行重构，我们发现这些转换并不是 Geyser 本身性能瓶颈的主要来源。这促使我们重构了 Geyser 内部的实体系统，不仅仅是为了性能，也是为了更好的可用性和可理解性。

```java
public void updateBedrockMetadata(EntityMetadata entityMetadata, GeyserSession session) {
        switch (entityMetadata.getId()) {
            case 0:
                if (entityMetadata.getType() == MetadataType.BYTE) {
                    byte xd = (byte) entityMetadata.getValue();
                    metadata.getFlags().setFlag(EntityFlag.ON_FIRE, ((xd & 0x01) == 0x01) && !metadata.getFlags().getFlag(EntityFlag.FIRE_IMMUNE)); // Otherwise immune entities sometimes flicker onfire
                    metadata.getFlags().setFlag(EntityFlag.SNEAKING, (xd & 0x02) == 0x02);
                    metadata.getFlags().setFlag(EntityFlag.SPRINTING, (xd & 0x08) == 0x08);
                    // Swimming is ignored here and instead we rely on the pose
                    metadata.getFlags().setFlag(EntityFlag.GLIDING, (xd & 0x80) == 0x80);

                    setInvisible(session, (xd & 0x20) == 0x20);
                }
                break;
            case 1: // Air/bubbles
                setAir((int) entityMetadata.getValue());
                break;
            case 2: // custom name
                if (entityMetadata.getValue() instanceof Component message) {
                    // Always translate even if it's a TextMessage since there could be translatable parameters
                    metadata.put(EntityData.NAMETAG, MessageTranslator.convertMessage(message, session.getLocale()));
                }
                break;
            case 3: // is custom name visible
                if (!this.is(PlayerEntity.class))
                    metadata.put(EntityData.NAMETAG_ALWAYS_SHOW, (byte) ((boolean) entityMetadata.getValue() ? 1 : 0));
                break;
            case 4: // silent
                metadata.getFlags().setFlag(EntityFlag.SILENT, (boolean) entityMetadata.getValue());
                break;
            case 5: // no gravity
                metadata.getFlags().setFlag(EntityFlag.HAS_GRAVITY, !(boolean) entityMetadata.getValue());
                break;
            case 6: // Pose change - typically used for bounding box and not animation
                Pose pose = (Pose) entityMetadata.getValue();

                metadata.getFlags().setFlag(EntityFlag.SLEEPING, pose.equals(Pose.SLEEPING));
                // Triggered when crawling
                metadata.getFlags().setFlag(EntityFlag.SWIMMING, pose.equals(Pose.SWIMMING));
                setDimensions(pose);
                break;
            case 7: // Freezing ticks
                // The value that Java edition gives us is in ticks, but Bedrock uses a float percentage of the strength 0.0 -> 1.0
                // The Java client caps its freezing tick percentage at 140
                int freezingTicks = Math.min((int) entityMetadata.getValue(), 140);
                setFreezing(session, freezingTicks / 140f);
                break;
        }
    }
```

查看上面的代码，我们之前用于翻译实体元数据的代码非常分散，并且使用了与实体翻译相关的许多魔法“数字”。这类 switch 语句遍布各个实体类，相当混乱。

为了更详细地解释上面的代码 - Minecraft Java 版通过协议发送实体元数据的方式是为每个实体元数据“类型”关联一个 id。查看上面的代码，例如 id 3 与实体名称是否显示在其头顶上方相关联。以这种方式处理代码的问题是，如果 Mojang 决定在 id 2 处添加一个新的实体元数据字段，那么上面的所有内容都将增加 1，因此“自定义名称可见”在未来的更新中将具有 id 4 而不是 3。除了代码如此分散之外，这意味着我们需要在_每个_实体类中递增 id，这远非理想。

为了解决此问题，我们选择不使用基于 id 的大量 if 或 switch 语句，而是将这些值注册到一个列表中，并根据它们应该被翻译的顺序添加它们。

```java
EntityDefinition<Entity> entityBase = EntityDefinition.builder((BaseEntityFactory<Entity>) Entity::new)
        .addTranslator(MetadataType.BYTE, Entity::setFlags)
        .addTranslator(MetadataType.INT, Entity::setAir) // Air/bubbles
        .addTranslator(MetadataType.OPTIONAL_CHAT, Entity::setDisplayName)
        .addTranslator(MetadataType.BOOLEAN, Entity::setDisplayNameVisible)
        .addTranslator(MetadataType.BOOLEAN, (entity, entityMetadata) -> entity.setFlag(EntityFlag.SILENT, ((BooleanEntityMetadata) entityMetadata).getPrimitiveValue()))
        .addTranslator(MetadataType.BOOLEAN, Entity::setGravity)
        .addTranslator(MetadataType.POSE, Entity::setPose)
        .addTranslator(MetadataType.INT, Entity::setFreezing)
        .build();
```

前面显示的所有代码都已浓缩为以下内容。现在，如果 Mojang 要在 id 2 处添加一个新的元数据字段，我们可以简单地将其作为第三个值插入，然后，其他所有内容将自动递增！

关于性能，以前所有实体数据都保存在 EntityType 枚举中，这对于构建更复杂的实体对象来说并不是最佳选择。这意味着我们必须使用反射来构建实体，如前所述，这在 MCProtocolLib 内部被使用，并且比我们想要的要慢。这也被实体工厂所取代，并可以在上面的代码片段中看到。

## 新 API、扩展与未来展望： {#new-api-extensions-and-looking-onward}
正如本文多次提到的，我们一直在花时间开发一个新的 API。我们最终希望为 Geyser 引入扩展，这些扩展本身就是插件，只不过它们是从 Geyser 本身加载的。随着越来越多的人和大型服务器采用 Geyser，出现了许多独特且小众的用例，这些用例并不特别适合放在 Geyser 本身内部，但仍然会使整体用户受益。由于 Geyser 目前能够在 6 个平台上运行（Spigot、Sponge、Standalone、Velocity、Fabric 和 BungeeCord，Forge 可能也即将支持），作为一名开发者，创建一个能够在所有这些平台上运行的单独插件远非理想。我们选择通过创建一个新的扩展系统来解决这个问题，允许开发者为 Geyser 一次性创建一个扩展，它就能够在这些平台中的任何一个上运行。

然而，这个扩展 API 尚未创建，Geyser 内部基础 API 的计划仍在最终确定中。我们还打算开始将大部分 Floodgate 功能迁移到 Geyser 本身，因此除非您独立于 Geyser 运行 Floodgate（例如，您使用 Geyser 独立版但在代理上运行 Floodgate），在不久的将来您只需要安装 Geyser，Floodgate 的所有功能都将在 Geyser 中自动处理。

随着这一进展，我们还希望设计基础 API 是中立的，即无论服务器只安装了 Geyser 还是只安装了 Floodgate，都可以使用相同的 API 来执行基本功能，例如检索有多少玩家在线。但与此同时，我们也希望利用更具体的 Floodgate 和 Geyser API 变得容易。

总之，第一篇文章就到此为止！感谢您的阅读，欢迎在我们的 [Discord 服务器](https://discord.gg/geysermc) 中就所涵盖的主题提供任何反馈！
