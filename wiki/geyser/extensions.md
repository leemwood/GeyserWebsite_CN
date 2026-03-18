---
title: Geyser 扩展
description: Geyser 扩展是"插件"的等效物，但专门针对 Geyser 平台。这带来了平台无关的优势，意味着您无需担心单独支持所有平台。
---

# Geyser 扩展

Geyser 扩展是"插件"的等效物，但专门针对 Geyser 平台。
这带来了平台无关的优势，意味着您无需担心单独支持所有平台。
此外，按照设计，它们只会在通过 Geyser 加入的 Bedrock 玩家身上生效。

## Geyser 扩展可以做什么？ {#what-can-geyser-extensions-do}

扩展可以充分利用 Geyser API 为 Geyser 添加额外功能。
有关当前可行的功能，请参阅 [Geyser API 文档](/wiki/geyser/api/)。

举几个例子：
- 注册自定义物品和方块
- 隐藏建议的命令
- 更改 MOTD
- 注册您自己的命令
- 监听事件，例如表情事件。

底层的 Geyser API 正在稳步扩展，创造越来越多的机会。

## 有哪些 Geyser 扩展存在？ {#which-geyser-extensions-exist}

在 Modrinth 的 Geyser 扩展部分查看，就在"插件"选项卡下！

## 安装扩展 {#installing-extensions}

要安装扩展，只需将扩展 .jar 文件放入 Geyser 的 `extensions` 文件夹中。
然后，重启 Geyser（或 Geyser 所在的服务器）。

## 更新扩展 {#updating-extensions}
要更新扩展，请按如下方式使用扩展目录中的 `update` 文件夹：

1. 将扩展更新版本的 jar 复制到 `extensions` 目录内的 `update` 文件夹中。
2. 在下次服务器或应用程序重启时，`update` 文件夹中的任何扩展都将自动替换主扩展目录中的相应扩展。如果是新扩展，则会添加。
3. 如果更新失败，将记录日志，服务器/应用程序将继续正常加载扩展。您可以查看日志来解决任何问题。

## 创建 Geyser 扩展 {#creating-geyser-extensions}

创建扩展的最简单方法是使用[此官方模板](https://github.com/GeyserMC/GeyserExampleExtension/)。
只需从模板创建新仓库，自定义 `extension.yml` 和 `settings.gradle` 文件，然后开始制作扩展。

Geyser 在 jar 的 `resources` 文件夹中有名为 `extension.yml` 的文件时识别扩展。

```yml title="extension.yml"
id: exampleid
name: ExampleExtension
main: org.geyser.extension.exampleid.ExampleExtension
api: 2.9.0
version: 1.0.0
authors: [ExampleAuthor]
dependencies: # Optional
  exampledependency:
    # 此依赖应该在何时加载（在您的扩展之前或之后）
    load: BEFORE # 默认值：BEFORE
    # 这决定此依赖是否是加载此扩展所必需的
    required: true # 默认值：true
```

各字段的说明：
- id：扩展的 ID。每个扩展都需要有唯一的 ID - 全部小写字母。例如，如果您为扩展注册命令，它将以 ID 作为前缀：例如 `/exampleid command`。
- name：扩展的名称。
- main：扩展的主类。
- api：扩展目标对应的 Geyser API 版本。
- authors：扩展的作者。要添加多个条目，请用逗号分隔。
- dependencies：扩展的依赖项。每个依赖都有加载顺序和必需属性，默认值分别为 `BEFORE` 和 `true`。

## 创建主类 {#creating-the-main-class}

主类（扩展的入口点）需要[实现 Geyser 提供的 **Extension** 接口](https://github.com/GeyserMC/GeyserExampleExtension/blob/master/src/main/java/org/geyser/extension/exampleid/ExampleExtension.java#L12)。
这样，Geyser 可以识别扩展，并让您访问重要方法 - 例如 `logger()`，以获取扩展的日志记录器。
要查看该接口提供的所有方法，请参阅[此处](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/extension/Extension.java)。

与插件不同，扩展没有 `onEnable` 或 `onDisable` 方法。相反，大多数操作是在 Geyser 生命周期不同阶段的 events 中完成的。
一些重要的 event 是：
- `GeyserPreInitializeEvent`：当 Geyser 开始初始化时触发此事件。例如，如果您需要注册在配置中设置的扩展命令，您需要在此处加载配置以确保您的配置在 `GeyserDefineCommandsEvent` 触发之前已准备好。
- `GeyserPostInitializeEvent`：当 Geyser 完成初始化时调用。此时大部分代码应该放在这里，因为此时 GeyserAPI 已完全可用。
- `GeyserShutdownEvent`：当 Geyser 关闭时调用。您可以使用它来保存数据或清理资源。

请参阅下面的示例：
```java
@Subscribe
public void onPostInitialize(GeyserPostInitializeEvent event) {
    // 示例：显示您的扩展正在加载。
    this.logger().info("Loading example extension...");
}
```
如果您想注册自定义物品、全局资源包（或即将推出的自定义方块和实体），您需要使用 @Subscribe 注解订阅事件，并在该事件中注册它们。您可以在[此处](/wiki/geyser/custom-items#geyser-extensions)找到自定义物品的示例。对于其他事件，请参阅[此处](/wiki/geyser/events)获取文档。

要构建您的扩展，请运行 Gradle 构建任务，然后安装扩展。

## 使用 Geyser 扩展创建命令 {#creating-commands-with-geyser-extensions}
要创建命令，您需要使用 Geyser API 中的 `Commands` 包。简要概述：
- [Command.java](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/command/Command.java)
  此接口代表 Geyser 中的一个命令 - 要创建一个，您可以使用 CommandBuilder。您可以通过
  [GeyserDefineCommandsEvent](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/event/lifecycle/GeyserDefineCommandsEvent.java) 注册它
- [CommandExecutor.java](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/command/CommandExecutor.java)
  此接口代表 Geyser 中的命令执行处理器，并扩展了 CommandSource 接口。
- [CommandSource.java](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/command/CommandSource.java)
  此接口代表 Geyser 中的命令源。它可用于例如向源发送消息、检查源是否有权执行命令，或获取区域设置。

```java
Command command = Command.builder(this) // "this" 是扩展的主类
        .name("ExampleCommand")
        .bedrockOnly(true)
        .source(CommandSource.class)
        .aliases(List.of("example", "ex"))
        .description("An example command")
        .executableOnConsole(false)
        .suggestedOpOnly(false)
        .permission("example.command")
        .executor((source, cmd, args) -> {
            // 这是命令执行器 - 这是您放置要执行的命令代码的地方。
            // source 是执行命令的源
            // cmd 是执行的命令
            // args 是传递给命令的参数
            source.sendMessage("Hello World");
        })
        .build();
```

要注册命令，您需要订阅 `GeyserDefineCommandsEvent`，并在那里注册命令：
```java
@Subscribe
public void onDefineCommands(GeyserDefineCommandsEvent event) {
    event.register(command);
}
```
如果一切顺利，您应该能够通过在游戏中运行 `/extesionid [command]` 来执行命令 - 在我们的例子中是 `/exampleid examplecommand`。
在这里，它会向运行命令的源发送"Hello World"。
由于我们还设置了别名，您也可以运行 `/exampleid example` 或 `/exampleid ex` 来执行相同的命令。
要提供参数，只需运行 `/exampleid examplecommand [args]` - 将 `[args]` 替换为您想要传递给命令的参数。

## 监听事件 {#listening-to-events}
有关文档，请参阅[此处](/wiki/geyser/events)。您无需注册事件监听器，Geyser 会为您完成。

---

## 扩展遇到问题？ {#facing-troubles-with-extensions}

- 确保您使用的是最新版本的 Geyser - 旧版本可能没有最新的 API 更改。
- 添加调试打印。
- 在 [Geyser Discord 服务器](https://discord.gg/geysermc) 的 #development 频道提问。
