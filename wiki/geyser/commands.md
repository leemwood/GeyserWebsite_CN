---
title: 命令和权限
description: Geyser 的命令及其关联的权限节点。
---

# 命令和权限

Geyser 拥有许多内置命令，可供玩家或服务器管理员使用。

:::info

当使用 BungeeCord 和 Velocity 时，你需要在代理服务器上安装权限插件（如 <a href="https://luckperms.net/">LuckPerms</a>）来分配权限给玩家。在后端服务器上分配权限将不起作用。

:::

## Geyser 命令及其权限 {#geyser-commands--their-permissions}

|                命令                |          权限           |                                             描述                                              |
|:-------------------------------------:|:-----------------------------:|:----------------------------------------------------------------------------------------------------:|
|  `geyser` <br/> Geyser 根命令   |       `geyser.command`        |                       查看/运行任何 Geyser 命令所需的权限。                        |
|    `geyser help` <br/> `geyser ?`     |     `geyser.command.help`     |                               显示所有已注册命令的帮助信息。                                |
|         `geyser advancements`         | `geyser.command.advancements` |                                   打开 Java 版进度菜单。                                   |
|             `geyser dump`             |     `geyser.command.dump`     |                           转储 Geyser 调试信息用于错误报告。                            |
|             `geyser list`             |     `geyser.command.list`     |                              列出所有通过 Geyser 连接的玩家。                              |
|           `geyser offhand`            |   `geyser.command.offhand`    |                                    将物品放入你的副手。                                     |
|            `geyser reload`            |    `geyser.command.reload`     |                   重新加载 Geyser 配置。使用时会踢出所有玩家！                    |
|           `geyser settings`           |   `geyser.command.settings`   |                  打开设置菜单，允许你修改世界的各个方面。                  |
| `geyser shutdown` <br/> `geyser stop` |   `geyser.command.shutdown`   |                   关闭 Geyser。<br/>*此命令仅在独立版中有效。*                    |
|          `geyser statistics`          |  `geyser.command.statistics`  |                                    打开 Java 版统计菜单。                                    |
|           `geyser version`            |   `geyser.command.version`     |                       显示当前 Geyser 版本并检查更新。                       |
|           `geyser tooltips`           |   `geyser.command.tooltips`   |                          切换显示高级工具提示（Java 版上的 F3 + H）                           |
|          `geyser extensions`          |  `geyser.command.extensions`  | 列出所有当前已加载的扩展。仅在有扩展加载时才会注册此命令。 |
|             `geyser ping`             |     `geyser.command.ping`     |                      显示玩家与 Geyser 实例之间的延迟。                      |
|           `geyser options`            |   `geyser.command.options`    |               打开"暂停屏幕附加"对话框（如果 Java 服务器发送了此功能）                |
|         `geyser quickactions`         | `geyser.command.quickactions` |                   打开"快速操作"对话框（如果 Java 服务器发送了此功能）。                    |

## Geyser 扩展的权限 {#extension-permissions}

对于以下内容，`<id>` 指的是扩展的 ID。

| 命令                    | 权限                    | 描述                                               |
|:---------------------------|:------------------------------|:----------------------------------------------------------|
| `<id> help` <br/> `<id> ?` | `geyser.command.exthelp.<id>` | 显示此扩展注册的所有命令的帮助信息。 |

## 其他权限 {#other-permissions}

除了命令之外，还有其他权限用于保护特定的 Geyser 功能。

| 权限                  | 描述                                                                                                                         |
|-----------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| `geyser.settings.server`    | 允许玩家使用 [游戏设置菜单](/img/wiki/game_menu.png)。（还需要玩家拥有 op 权限。）                          |
| `geyser.settings.gamerules` | 定义用户是否可以在 [游戏设置菜单](/img/wiki/game_menu.png) 中修改游戏规则。（还需要玩家拥有 op 权限。） |
| `geyser.update`             | 该玩家加入时是否会收到 Geyser 更新通知。                                                          |

## 使用 Geyser-Standalone/Geyser-ViaProxy 时的权限 {#standalone-viaproxy-permissions}
Geyser-ViaProxy 和 Geyser-Standalone 拥有自己的基础权限处理器。要编辑基础权限，
请打开 `permissions.yml` 文件，并添加或删除 Geyser 玩家加入时应获得的权限。
有关更多信息，请参阅该文件。

你可以通过创建使用 Geyser API 处理权限检查的 [Geyser 扩展](/wiki/geyser/extensions/) 来进一步自定义权限处理。

## 在没有权限处理器的平台上使用 Geyser 时的权限 {#permissions-platforms-no-permission-handlers}
以下情况会影响 Geyser-BungeeCord、Geyser-Velocity 和 Geyser-Fabric。
不幸的是，这些平台没有内置的权限处理器。因此，你需要使用权限处理器（如 [LuckPerms](https://luckperms.net/)）手动授予这些平台上的权限。Geyser 的权限如上所列。对于扩展权限，请参阅它们的文档。

或者，你可以使用 [LuckLink](https://github.com/onebeastchris/LuckLink)（一个第三方 Geyser 扩展）来使用 [LuckPerms](https://luckperms.net/) 自动注册权限。
- 在安装 Geyser 的平台上安装 [LuckPerms](https://luckperms.net/)（BungeeCord/Velocity/Fabric）。
- 要允许 Geyser 自动注册权限默认值，请下载 `LuckLink.jar` 并将其添加到 Geyser 的 `extensions` 文件夹中，从而安装 [LuckLink](https://github.com/onebeastchris/LuckLink) Geyser 扩展。
- 重启服务器，权限将自动注册。

## Floodgate 命令和权限 {#floodgate-commands-and-permissions}

关于 Floodgate 命令，请参阅 [此处](/wiki/floodgate/commands/)。
