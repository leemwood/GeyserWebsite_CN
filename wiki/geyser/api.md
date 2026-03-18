---
title: Geyser API
description: Geyser API 允许您在自己的插件、mod 或扩展中与 Geyser 进行交互。
---

Geyser 有一个 API 来扩展 Geyser 的可能性，并允许您在自己的插件、mod 或扩展中与 Geyser 进行交互。

### 我可以在哪里使用 Geyser API？ {#where-can-i-use-the-geyser-api}
您可以在以下地方使用 Geyser API：
- Paper/Spigot、Velocity、Waterfall/BungeeCord 等的插件
- Fabric 或 NeoForge 的 mod
- Geyser 扩展

### 访问 Geyser API {#accessing-the-geyser-api}
有关如何在项目中包含 Geyser API 依赖项，请参阅[此处](/wiki/geyser/getting-started-with-the-api)。

### 文档 {#documentation}

Geyser API 提供要订阅的事件，或有关玩家是否通过 Geyser 加入的信息，并让您能够增强 Geyser 的功能（即注册自定义物品）。
（很快，也包括方块和实体）。
它可以轻松地在 Geyser 扩展中使用，请参阅[此处](/wiki/geyser/extensions)获取有关这些扩展的详细信息。

**快速概述：**
:::info
    Javadoc 可以在<a href="https://repo.opencollab.dev/javadoc/maven-snapshots/org/geysermc/geyser/api/latest">此处</a>找到。
:::

#### [GeyserApi](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/GeyserApi.java)： {#geyserapi}
GeyserApi 接口作为访问 Geyser API 提供的各种功能的中央接入点，提供例如与玩家连接交互的方法。
它扩展了 [Base API](https://github.com/GeyserMC/api/blob/master/base/src/main/java/org/geysermc/api/GeyserApiBase.java) 接口，该接口提供有关单个玩家的基本信息。

GeyserApi 类是 API 的基础类，您需要使用它来访问 API 的任何部分。
要访问它，只需输入：
```java
GeyserApi.api();
```

获取实例后，您可以访问所有方法。
使用 API 模块中的文档来查看（和获取有关）每个可用方法的更多信息。
大多数 [API 方法都有简单的说明](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/GeyserApi.java)。
由于 Geyser API 扩展了 Floodgate 和 Geyser 共享的 Base API，您也可以使用 [Base API 中的方法](https://github.com/GeyserMC/api/blob/master/base/src/main/java/org/geysermc/api/GeyserApiBase.java)。


#### 我们将重点介绍几个让您快速上手的方法： {#well-highlight-a-few-to-get-you-started-quickly}
`GeyserApi#isBedrockPlayer(UUID)`
用于检查给定 UUID 的**在线**玩家是否是 Bedrock 玩家。

`GeyserApi#connectionByUuid(UUID)`
用于获取**在线**玩家的 [Connection](https://github.com/GeyserMC/api/blob/master/base/src/main/java/org/geysermc/api/connection/Connection.java)。
如果玩家不是 Bedrock 玩家，此方法将返回 null。

:::info
    您不需要等到 Bedrock 玩家在线才能使用 getPlayer 和 isBedrockPlayer 方法。
    您甚至可以在预登录事件中使用它们。
:::

`GeyserApi#sendForm(UUID, Form(Builder))`
用于向具有给定 UUID 的 Bedrock 玩家发送表单。
点击[此处](/wiki/geyser/forms/)获取有关 Forms 的更多信息。

`GeyserApi#onlineConnectionsCount()`
用于获取在线 Bedrock 玩家的数量。

### Geyser API 简要概述 {#short-overview-of-the-geyser-api}

#### [Cumulus](https://github.com/GeyserMC/Cumulus/tree/master/src/main/java/org/geysermc/cumulus) {#cumulus}
虽然从技术上讲它不直接在 Geyser API 中，但 Cumulus 库也由 Geyser API 提供。
它允许您向玩家发送 Bedrock 版本表单。请参阅[此处](/wiki/geyser/forms/)获取更多信息。

#### [Events](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/event) {#events}
事件包包含 Geyser 触发的所有事件。请参阅[此处](/wiki/geyser/events)获取有关如何监听 Geyser 事件的详细文档。

#### [Command](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/command) {#command}
此包包含与 Geyser 中命令相关的类和接口，允许 [Geyser 扩展](/wiki/geyser/extensions)注册自定义命令。

#### [Entity](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/entity) {#entity}
Entity 包包含与 Geyser 中实体相关的类和接口，如 GeyserPlayerEntity 接口，
它代表 Geyser 中的玩家实体。此接口扩展了 GeyserEntity 接口，同时为玩家实体提供特定的其他功能，
如目前显示表情。

#### [Item](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/item) {#item}
物品包包含与 Geyser 中物品相关的类和接口。您可以创建自定义物品并使用 Geyser API 注册它们。
请参阅[此处](/wiki/geyser/custom-items)获取有关如何注册自定义物品的详细文档。

#### [Block](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/block) {#block}
方块包包含与 Geyser 中方块相关的类和接口。您可以使用此包创建自定义方块，并使用 [GeyserDefineCustomBlocksEvent](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/event/lifecycle/GeyserDefineCustomBlocksEvent.java) 注册它们。
请参阅[此处](/wiki/geyser/custom-blocks)获取更多信息。

#### [Network](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/network) {#network}
网络包通过
[RemoteServer](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/network/RemoteServer.java) 接口包含有关远程服务器的基本信息，
如服务器的 IP 地址和端口，以及远程服务器的协议版本。或 auth 类型。
您还可以通过 [BedrockListener](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/network/BedrockListener.java) 接口获取 Geyser 监听的端口/IP。

#### [Skin](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/skin) {#skin}
皮肤包包含一些代表皮肤数据的记录。如果您想更改玩家的皮肤，可以监听 [SessionSkinApplyEvent](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/event/bedrock/SessionSkinApplyEvent.java)，并在那里设置新的皮肤、皮肤几何数据或披风。

#### [Pack](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/pack) {#pack}
资源包包含与 Geyser 中资源包相关的类和接口。您可以创建自定义资源包，并在玩家登录之前使用 [SessionLoadResourcePacksEvent](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/event/bedrock/SessionLoadResourcePacksEvent.java) 将它们发送到各个会话。
如果您想将资源包发送到所有会话，可以使用 [GeyserDefineResourcePacksEvent](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/event/lifecycle/GeyserDefineResourcePacksEvent.java)。

资源包可以使用 [PackCodec](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/pack/PackCodec.java) 创建，例如提供的 [PathPackCodec](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/pack/PathPackCodec.java)。
这允许您从文件路径加载 Bedrock 资源包：
```java
ResourcePack pack = ResourcePack.create(PackCodec.path(path));
```

#### [Extension](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/extension) {#extension}
此包提供创建和管理扩展所需的组件。
有关扩展的更详细说明，请参阅[此处](/wiki/geyser/extensions)。
