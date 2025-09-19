---
title: Geyser Extensions
description: Geyser Extensions are the equivalent of "plugins", but specifically for the Geyser platform. This brings the advantage of them being platform-agnostic, meaning that you won't have to worry about supporting all platforms individually.
---

# Geyser 扩展

Geyser 扩展相当于“插件”，但专门为 Geyser 平台设计。
这带来了平台无关的优势，意味着您无需担心单独支持所有平台。
此外，它们设计上仅适用于通过 Geyser 加入的基岩版玩家。

## Geyser 扩展能做什么？ {#what-can-geyser-extensions-do}

扩展可以充分利用 Geyser API 为 Geyser 添加额外功能。
查看 [Geyser API 文档](/wiki/geyser/api/) 了解目前可以实现的功能。

举几个例子：
- 注册自定义物品和方块
- 隐藏命令建议
- 更改 MOTD
- 注册您自己的命令
- 监听事件，例如表情事件。

底层的 Geyser API 正在稳步扩展，创造越来越多的机会。

## 有哪些 Geyser 扩展？ {#which-geyser-extensions-exist}

目前，扩展仍是一个新系统，因此只有少量已知的 Geyser 扩展。
然而，新的扩展总是在不断创建中！

有一个[官方列表](https://github.com/GeyserMC/GeyserExtensionList)列出了可用的扩展，您可以查看。
如果您有想要添加到该列表中的扩展，请随时提交 PR！

## 安装扩展 {#installing-extensions}

要安装扩展，只需将扩展的 .jar 文件放入 Geyser 的 `extensions` 文件夹中。
然后，重启 Geyser（或 Geyser 运行的服务器）。

## 更新扩展 {#updating-extensions}
要更新扩展，请使用扩展目录中的 `update` 文件夹，步骤如下：

1. 将更新版本的扩展 jar 文件复制到 `extensions` 目录内的 `update` 文件夹中。
2. 在下次服务器或应用程序重启时，`update` 文件夹中的任何扩展将自动替换主扩展目录中的相应扩展。如果是新扩展，它将被添加。
3. 如果更新失败，将会记录日志，服务器/应用程序将继续照常加载扩展。您可以查看日志以解决任何问题。

## 创建 Geyser 扩展 {#creating-geyser-extensions}

创建扩展最简单的方法是使用[这个官方模板](https://github.com/GeyserMC/GeyserExampleExtension/)。
只需从模板创建新仓库，自定义 `extension.yml` 和 `settings.gradle` 文件，然后开始制作扩展。

Geyser 通过识别 jar 文件中 `resources` 文件夹内名为 `extension.yml` 的文件来识别扩展。

```yml title="extension.yml"
id: exampleid
name: ExampleExtension
main: org.geyser.extension.exampleid.ExampleExtension
api: 2.7.0
version: 1.0.0
authors: [ExampleAuthor]
```

各个字段的说明：
- id：扩展的 ID。每个扩展都需要有唯一的 ID - 全部小写字母。例如，如果您为扩展注册命令，它将以 ID 作为前缀：例如 `/exampleid command`。
- name：扩展的名称。
- main：扩展的主类。
- api：扩展针对的 Geyser API 版本。
- authors：扩展的作者。要添加多个条目，用逗号分隔。

## 创建主类 {#creating-the-main-class}

主类作为扩展的入口点，需要[实现 Geyser 提供的 **Extension** 接口](https://github.com/GeyserMC/GeyserExampleExtension/blob/master/src/main/java/org/geyser/extension/exampleid/ExampleExtension.java#L12)。
这样，Geyser 就能识别扩展，并让您访问重要方法 - 例如 `logger()`，用于获取扩展的记录器。
要查看该接口提供的所有方法，请参见[此处](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/extension/Extension.java)。

与插件不同，扩展没有 `onEnable` 或 `onDisable` 方法。相反，大多数操作都是在 Geyser 生命周期不同阶段的事件中使用事件完成的。
一些重要的事件包括：
- `GeyserPreInitializeEvent`：当 Geyser 开始初始化时触发此事件。例如，如果您需要注册在配置中配置的扩展命令，
您需要在此处加载配置，以确保在触发 `GeyserDefineCommandsEvent` 之前您的配置已准备就绪。
- `GeyserPostInitializeEvent`：当 Geyser 完成初始化时调用。您的大部分代码应该放在这里，因为在此阶段 GeyserAPI 已完全可用。
- `GeyserShutdownEvent`：当 Geyser 关闭时调用。您可以使用它来保存数据或清理资源。

示例如下：
```java
@Subscribe
public void onPostInitialize(GeyserPostInitializeEvent event) {
    // 示例：显示您的扩展正在加载。
    this.logger().info("正在加载示例扩展...");
}
```
如果您希望注册自定义物品、全局资源包（或即将支持的自定义方块和实体），您需要使用 @Subscribe 注解订阅事件，
并在事件中注册它们。您可以在[此处](/wiki/geyser/custom-items#geyser-extensions)找到自定义物品的示例。有关其他事件，请参见[此处](/wiki/geyser/events)的文档。

要构建扩展，请运行 Gradle 构建任务，然后安装扩展。

## 使用 Geyser 扩展创建命令 {#creating-commands-with-geyser-extensions}
要创建命令，您需要使用 Geyser API 中的 `Commands` 包。简要说明：
- [Command.java](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/command/Command.java)
  此接口代表 Geyser 中的命令 - 要创建一个命令，您可以使用 CommandBuilder。您可以通过
  [GeyserDefineCommandsEvent](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/event/lifecycle/GeyserDefineCommandsEvent.java) 注册它
- [CommandExecutor.java](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/command/CommandExecutor.java)
  此接口代表 Geyser 中的命令执行处理器，并扩展 CommandSource 接口。
- [CommandSource.java](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/command/CommandSource.java)
  此接口代表 Geyser 中的命令源。它可用于例如向源发送消息、检查源是否有执行命令的权限，或获取语言环境。

```java
Command command = Command.builder(this) // "this" 是扩展的主类
        .name("ExampleCommand")
        .bedrockOnly(true)
        .source(CommandSource.class)
        .aliases(List.of("example", "ex"))
        .description("一个示例命令")
        .executableOnConsole(false) 
        .suggestedOpOnly(false)
        .permission("example.command")
        .executor((source, cmd, args) -> {
            // 这是命令执行器 - 这是您放置执行命令代码的地方。
            // source 是执行命令的源
            // cmd 是被执行的命令
            // args 是传递给命令的参数
            source.sendMessage("你好世界");
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
如果一切顺利，您应该能够在游戏中通过运行 `/extensionid [command]` 来执行命令 - 在我们的例子中，是 `/exampleid examplecommand`。
在这里，它会向运行命令的源发送“你好世界”。
由于我们还设置了别名，您也可以运行 `/exampleid example` 或 `/exampleid ex` 来执行相同的命令。
要提供参数，只需运行 `/exampleid examplecommand [args]` - 将 `[args]` 替换为您要传递给命令的参数。

## 监听事件 {#listening-to-events}
请参见[此处](/wiki/geyser/events)的文档。您无需注册事件监听器，Geyser 会为您完成。

---

## 遇到扩展问题？ {#facing-troubles-with-extensions}

- 确保您使用的是最新版本的 Geyser - 旧版本可能没有最新的 API 更改。
- 添加调试打印。
- 在 [Geyser Discord 服务器](https://discord.gg/geysermc) 的 #development 频道中提问。
