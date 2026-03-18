---
title: Geyser 事件
description: Geyser 有一个强大的事件系统，允许您监听 Geyser 发送的事件。事件是 Geyser 扩展的核心，也可供插件和 mod 使用。
---

# Geyser 事件
Geyser 有一个强大的事件系统，允许您监听 Geyser 发送的事件。事件是 Geyser 扩展的核心，也可供插件和 mod 使用。

完整文档可在[此处](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/event)找到。

## 事件类别 {#event-categories}
要在 Spigot/Paper 插件或 Fabric mod 中使用事件，您需要将 Geyser Event Bus 注册为监听器，然后订阅您想要监听的事件。
扩展可以使用 @Subscribe 注解。

事件分为以下类别：
- [Bedrock](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/event/bedrock)：为每个连接的 Bedrock 客户端发送的事件，
  例如当 Bedrock 玩家使用表情时发送的 ClientEmoteEvent，或当 Bedrock 玩家登录并即将加入服务器时发送的 SessionLoginEvent。
- [Java](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/event/java)：为 java 服务器发送的事件，例如
  ServerDefineCommandsEvent - 当 Java 发送要显示给 Bedrock 玩家的命令时触发。
- [Connection](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/event/connection)：连接相关事件，例如返回自定义 MOTD 的 ping 事件。
- [Lifecycle](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/event/lifecycle)：在 Geyser 生命周期中发送的事件，例如自定义物品、资源包或 Geyser 命令的加载。

要查看相应类别中的所有事件，请点击上面的链接。

## 使用示例： {#usage-examples}

每个要订阅事件的方法都需要使用 @Subscribe 注解（GeyserMC 事件包中的）进行注解。
```java
@Subscribe
public void onGeyserLoadResourcePacksEvent(GeyserLoadResourcePacksEvent event) {
    logger().info("Loading: " + event.resourcePacks().size() + " resource packs.");
    // 您可以使用 event.resourcePacks().add(path-to-pack) 添加资源包
}
```
如果您想在 Spigot/Paper 插件或 Fabric mod 中监听事件，您需要首先将 Geyser Event Bus 注册为监听器。只要确保在 mod 或插件的主类中实现 `EventRegistrar` 即可。
扩展不需要这样做 - 它们是自动注册的，所以简单的 @Subscribe 注解就足够了。

**Paper/Spigot 插件示例：**

1. 在您的 plugin.yml 中，添加以下行：
```yaml
  depend: ["Geyser-Spigot"]
```
这确保您的插件在 Geyser 加载之后再加载，这样 Geyser API 就可用了。

2. 在您的主类中，实现 EventRegistrar 接口并在 onEnable 方法中注册事件总线：
```java
public class ExamplePlugin extends JavaPlugin implements EventRegistrar {

    @Override
    public void onEnable(){
        getLogger().info("Registering Geyser event bus!");
        GeyserApi.api().eventBus().register(this, this); // 注册您的插件和此类实例作为监听器
    }

    // 这里是一个事件，我们像往常一样使用 @Subscribe 注解进行订阅
    @Subscribe
    public void onGeyserPostInitializeEvent(GeyserPostInitializeEvent event) {
        getLogger().info("Geyser started!");
    }
}
```
3. 如果您想为事件提供 consumer，而不是对其进行注解，您也可以手动将方法订阅到事件总线：
```java
// 在 onEnable 中注册事件注册器后添加此内容
GeyserApi.api().eventBus().subscribe(this, GeyserPostInitializeEvent.class, this::onGeyserPostInitializeEvent);
```

**Fabric mod 示例：**
```java
public class ExampleMod implements ModInitializer, EventRegistrar {
    public static final Logger LOGGER = LoggerFactory.getLogger("modid");

    @Override
    public void onInitialize() {
        ServerLifecycleEvents.SERVER_STARTING.register((server) -> {
            GeyserApi.api().eventBus().register(this, this); // 注册您的 mod 和此类实例作为监听器
        });

        LOGGER.info("Geyser is cool!");
    }

    // 这里是一个事件，我们像往常一样使用 @Subscribe 注解进行订阅
    @Subscribe
    public void onGeyserPostInitializeEvent(GeyserPostInitializeEvent event) {
        LOGGER.info("Geyser started!");
    }
}
```
:::info
    注意：我们无法直接在 mod 初始化程序中注册事件总线，因为 Geyser API 尚未加载。
:::

因此，我们在 Fabric API 提供的服务器启动事件中注册它。

## 事件优先级 {#event-priority}
事件可以具有优先级，用于确定监听器被调用的顺序。默认优先级是 NORMAL。
要（可选）设置事件监听器的优先级，您可以将优先级添加到 `@Subscribe` 注解中：
```java
@Subscribe(postOrder = PostOrder.EARLY)
```
如果您不指定优先级，则使用默认优先级。所有可用优先级，请参阅
[此处](https://github.com/GeyserMC/Events/blob/master/src/main/java/org/geysermc/event/PostOrder.java)。
