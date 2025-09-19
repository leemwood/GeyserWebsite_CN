---
title: Geyser API
description: Geyser API 允许您在自己的插件、模组或扩展中与 Geyser 进行交互。
---

Geyser 提供了一个 API，以扩展 Geyser 的可能性，并允许您在自己的插件、模组或扩展中与 Geyser 进行交互。

### 在哪里可以使用 Geyser API？ {#where-can-i-use-the-geyser-api}
您可以在以下场景中使用 Geyser API：
- Paper/Spigot、Velocity、Waterfall/BungeeCord 等平台的插件
- Fabric 或 NeoForge 的模组
- Geyser 扩展

### 访问 Geyser API {#accessing-the-geyser-api}
有关如何在项目中包含 Geyser API 依赖项，请参阅[此处](/wiki/geyser/getting-started-with-the-api)。

### 文档 {#documentation}

Geyser API 提供了可订阅的事件，或关于玩家是否通过 Geyser 加入的信息，并使您能够增强 Geyser 的功能（例如注册自定义物品）。
（很快还将支持方块和实体）。
它可以在 Geyser 扩展中轻松使用，有关详细信息，请参阅[此处](/wiki/geyser/extensions)。

**快速概览：**   
:::info
    Javadocs 可以在<a href="https://repo.opencollab.dev/javadoc/maven-snapshots/org/geysermc/geyser/api/latest">此处</a>找到。
:::

#### [GeyserApi](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/GeyserApi.java): {#geyserapi}
GeyserApi 接口是访问 Geyser API 提供的各种功能的中心入口点，提供了例如与玩家连接交互的方法。
它扩展了 [Base API](https://github.com/GeyserMC/api/blob/master/base/src/main/java/org/geysermc/api/GeyserApiBase.java) 接口，该接口提供有关单个玩家的基本信息。

GeyserApi 类是 API 的基类，您需要使用它来访问 API 的任何部分。
要访问它，您只需键入：
```java
GeyserApi.api();
```

获取实例后，您就可以访问所有方法。
使用 API 模块中的文档来查看（并获取有关）每个可用方法的信息。
大多数[API 方法都有简单的解释](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/GeyserApi.java)。
由于 Geyser API 扩展了 Floodgate 和 Geyser 共享的 Base API，因此您也可以使用[Base API 中的方法](https://github.com/GeyserMC/api/blob/master/base/src/main/java/org/geysermc/api/GeyserApiBase.java)。


#### 我们将重点介绍一些内容，以帮助您快速入门： {#well-highlight-a-few-to-get-you-started-quickly}
`GeyserApi#isBedrockPlayer(UUID)`  
用于检查给定 **在线** 玩家的 UUID 是否为基岩版玩家。

`GeyserApi#connectionByUuid(UUID)`  
用于获取 **在线** 玩家的[连接](https://github.com/GeyserMC/api/blob/master/base/src/main/java/org/geysermc/api/connection/Connection.java)。
如果玩家不是基岩版玩家，此方法将返回 null。

:::info
    You don't need to wait until the Bedrock player is online to use the getPlayer and isBedrockPlayer methods.  
    You can even use them in the pre-login events.
:::

`GeyserApi#sendForm(UUID, Form(Builder))`  
Used to send a form to the Bedrock player with the given UUID.  
Click [here](/wiki/geyser/forms/) to get more information about Forms.

`GeyserApi#onlineConnectionsCount()`  
Used to get the amount of online Bedrock players.

### Short Overview of the Geyser API {#short-overview-of-the-geyser-api}

#### [Cumulus](https://github.com/GeyserMC/Cumulus/tree/master/src/main/java/org/geysermc/cumulus) {#cumulus}
While technically not directly in the Geyser API, the Cumulus library is also provided by the Geyser API. 
It allows you to send Bedrock edition forms to players. See [Cumulus](/wiki/geyser/forms/) for more information.

#### [Events](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/event) {#events}
The event package contains all the events that Geyser fires. See [here](/wiki/geyser/events) for detailed information on how to listen to Geyser events.

#### [Command](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/command) {#command}
This package contains classes and interfaces related to commands in Geyser, which allows [Geyser Extensions](/wiki/geyser/extensions) to register custom commands.

#### [Entity](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/entity) {#entity}
The Entity package contains classes and interfaces related to entities in Geyser, like the GeyserPlayerEntity interface, 
which represents a player entity in Geyser. This interface extends the GeyserEntity interface, while providing additional functionality specifically for player entities, 
like currently, showing emotes.

#### [Item](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/item) {#item}
The item package contains classes and interfaces related to items in Geyser. You can create custom items and register them using the Geyser API.
See [here](/wiki/geyser/custom-items) for detailed information on how to register custom items.

#### [Block](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/block) {#block}
The block package contains classes and interfaces related to blocks in Geyser. You can create custom blocks using this package, and register them in using the [GeyserDefineCustomBlocksEvent](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/event/lifecycle/GeyserDefineCustomBlocksEvent.java).
See [here](/wiki/geyser/custom-blocks) for detailed information.

#### [Network](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/network) {#network}
The network package contains basic information about the remote server via the 
[RemoteServer](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/network/RemoteServer.java)
interface, such as the server's IP address and port, and the protocol version of the remote server. Or the auth type.
You can also get the port/IP that Geyser listens to via the [BedrockListener](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/network/BedrockListener.java) interface.

#### [Skin](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/skin) {#skin}
The skin package contains some records representing skin data. If you want to change the skin of players, you can listen to the [SessionSkinApplyEvent](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/event/bedrock/SessionSkinApplyEvent.java), and set a new skin, skin geometry or cape there.

#### [Pack](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/pack) {#pack}
The pack package contains classes and interfaces related to resource packs in Geyser. You can create custom resource packs and send them to individual sessions before they log in using the [SessionLoadResourcePacksEvent](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/event/bedrock/SessionLoadResourcePacksEvent.java).
If you wish to send a resource pack to all sessions, you can use the [GeyserDefineResourcePacksEvent](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/event/lifecycle/GeyserDefineResourcePacksEvent.java).

Packs can be created using a [PackCodec](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/pack/PackCodec.java), such as the provided [PathPackCodec](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/pack/PathPackCodec.java).
This allows you to load a Bedrock resource pack from a file path:
```java
ResourcePack pack = ResourcePack.create(PackCodec.path(path));
```

#### [Extension](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/extension) {#extension}
This package provides the necessary components to create and manage extensions.
For a more detailed explanation of extensions, see [here](/wiki/geyser/extensions).
