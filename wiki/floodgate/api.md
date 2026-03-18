---
title: Floodgate API
description: Floodgate 提供了一个 API，允许服务器获取 Bedrock 客户端的信息。它还允许插件访问 Cumulus，这是一个用于向 Bedrock 玩家发送和收集表单数据的 API。
---

Floodgate 提供了一个 API 来扩展可能性，并允许服务器获取 Bedrock 客户端的信息。它还允许其他插件访问 [Cumulus](/wiki/geyser/forms/)

本页将包含关于 FloodgateApi 类的信息。
有关 API 其他部分的信息，请参阅侧边栏。

### 访问 Floodgate API {#accessing-the-floodgate-api}
有关如何在项目中包含 Floodgate API，请参见[此处](/wiki/geyser/getting-started-with-the-api)。


Floodgate 2.0 中的 API 发生了变更。最重要的变化是 API 方法不再是静态的，而是基于实例的，如下所示。

FloodgateApi 类是 API 的基础类，您需要使用它来访问 API 的任何部分。
要访问它，您只需输入：
```java
FloodgateApi.getInstance();
```

获取实例后，您可以访问所有方法。
使用 API 模块中的文档查看（并获取信息）每个可用的方法。
大多数 [API 方法都有简单的说明](https://github.com/GeyserMC/Floodgate/tree/master/api/src/main/java/org/geysermc/floodgate/api)。

:::note

要查看完整的详细文档，请参阅 [javadocs](https://repo.opencollab.dev/javadoc/maven-snapshots/org/geysermc/floodgate/api/latest)。

:::

#### 我们将突出介绍几个方法以帮助您快速入门： {#well-highlight-a-few-to-get-you-started-quickly}

`FloodgateApi#isFloodgatePlayer(UUID)`
用于检查给定 UUID 的**在线**玩家是否是 Bedrock 玩家。

`FloodgateApi#getPlayer(UUID)`
用于获取**在线**玩家的 FloodgatePlayer 实例。
点击[此处](/wiki/floodgate/player/)获取有关 FloodgatePlayer 类的更多信息。

**注意**：您无需等到 Bedrock 玩家上线才能使用 getPlayer 和 isFloodgatePlayer 方法。
您甚至可以在预登录事件中使用它们。

`FloodgateApi#getPlayerLink()`
用于获取 Floodgate 用于检查链接账户的 PlayerLink 实例。
点击[此处](/wiki/floodgate/linking/)获取有关 PlayerLink 类的更多信息

`FloodgateApi#sendForm(UUID, Form(Builder))`
用于向具有给定 UUID 的 Bedrock 玩家发送表单。
点击[此处](/wiki/geyser/forms/)获取有关表单的更多信息。

### 在后端服务器上使用 API {#using-the-api-on-backend-servers}

为了在使用代理时在后端 Spigot 服务器上成功使用 API，必须将代理 Floodgate 配置中的 `send-floodgate-data` 设置为 `true`，并且 `key.pem` 文件在所有 Floodgate 实例之间必须相同。
