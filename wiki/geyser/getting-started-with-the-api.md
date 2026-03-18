---
title: API 入门指南
description: '关于如何使用 Geyser 和 Floodgate API 的入门指南。'
---

首先，将 Open Collaboration 仓库添加到您的项目中：

**Maven**
```xml
<repository>
    <id>opencollab-snapshot</id>
    <url>https://repo.opencollab.dev/main/</url>
</repository>
```
"main" 仓库包含发布版本和快照版本。

**Gradle**
```groovy
repositories {
    maven {
        url = uri("https://repo.opencollab.dev/main/")
    }
}
```

## 使用 Geyser {#using-geyser}

将 Geyser 的 API 代码库添加为依赖项：

**Maven**
```xml
<dependency>
    <groupId>org.geysermc.geyser</groupId>
    <artifactId>api</artifactId>
    <version>2.9.0-SNAPSHOT</version>
    <scope>provided</scope>
</dependency>
```

**Gradle**
```groovy
dependencies {
    compileOnly('org.geysermc.geyser:api:2.9.0-SNAPSHOT')
}
```

要获取 Geyser 玩家或检查玩家是否来自 Bedrock：

```java
GeyserConnection connection = GeyserApi.api().connectionByUuid(uuid);
```

如果这样的玩家不在 Geyser 上，`connection` 可能为 null。

`GeyserApi.api()` 在 Geyser 插件启用之前可能为 null。

有关 Geyser API 的更多信息，请参阅[此处](/wiki/geyser/api/)。

## 使用 Floodgate {#using-floodgate}
本页面对 Floodgate API 有一个非常简单的入门指南。有关完整说明，请参阅[此处](/wiki/floodgate/api/)。

将 Floodgate 的 API 添加为依赖项：

**Maven**
```xml
<dependency>
    <groupId>org.geysermc.floodgate</groupId>
    <artifactId>api</artifactId>
    <version>2.2.4-SNAPSHOT</version>
    <scope>provided</scope>
</dependency>
```

**Gradle**
```groovy
dependencies {
    compileOnly('org.geysermc.floodgate:api:2.2.4-SNAPSHOT')
}
```

使用以下方式获取 Floodgate API：
```java
FloodgateApi api = FloodgateApi.getInstance();
api.isFloodgatePlayer(uuid);
```

有关 Floodgate API 的更多信息，请参阅[此处](/wiki/floodgate/api/)。
