---
title: FloodgatePlayer
description: FloodgatePlayer 是用于访问 Bedrock 玩家数据的主要类。
---

FloodgatePlayer 是每个通过 Floodgate 连接的玩家都拥有的东西。
它包含有关 Bedrock 客户端的信息，这在各种情况下都很有用。

您可以通过使用 `FloodgateApi#getPlayer(uuid)` 方法获取 FloodgatePlayer（其中 uuid 是已连接玩家的唯一 id）
