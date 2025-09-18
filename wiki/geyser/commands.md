---
title: 命令和权限
description: Geyser 的命令及其相关的权限节点。
---

# 命令和权限

Geyser 具有许多内置命令，可供玩家或服务器所有者使用。

:::info

使用 BungeeCord 和 Velocity 时，您需要在代理服务器上使用 [LuckPerms](https://luckperms.net/) 等权限插件来为玩家分配权限。在后端服务器上分配权限将不起作用。

:::

## Geyser 命令及其权限 {#geyser-commands--their-permissions}

| 命令 | 权限 | 描述 |
|:---:|:---:|:---:|
| `geyser` <br/> Geyser 根命令 | `geyser.command` | 查看/运行任何 Geyser 命令所需的权限。 |
| `geyser help` <br/> `geyser ?` | `geyser.command.help` | 显示所有已注册命令的帮助。 |
| `geyser advancements` | `geyser.command.advancements` | 打开 Java 成就菜单。 |
| `geyser dump` | `geyser.command.dump` | 转储 Geyser 调试信息以用于错误报告。 |
| `geyser list` | `geyser.command.list` | 列出所有通过 Geyser 连接的玩家。 |
| `geyser offhand` | `geyser.command.offhand` | 将物品放入副手。 |
| `geyser reload` | `geyser.command.reload` | 重新加载 Geyser 配置。使用时会踢出所有玩家！ |
| `geyser settings` | `geyser.command.settings` | 打开设置菜单，允许您修改世界的各个方面。 |
| `geyser shutdown` <br/> `geyser stop` | `geyser.command.shutdown` | 关闭 Geyser。<br/>*此命令仅在独立版上有效。* |
| `geyser statistics` | `geyser.command.statistics` | 打开 Java 统计菜单。 |
| `geyser version` | `geyser.command.version` | 显示当前 Geyser 版本并检查更新。 |
| `geyser tooltips` | `geyser.command.tooltips` | 切换显示高级工具提示（Java 版上的 F3 + H） |
| `geyser extensions` | `geyser.command.extensions` | 列出所有当前已加载的扩展。此命令仅在加载任何扩展时注册。

## Geyser 扩展权限 {#extension-permissions}

对于以下内容，`<id>` 指的是扩展的 ID。

| 命令 | 权限 | 描述 |
|:---|:---|:---|
| `<id> help` <br/> `<id> ?` | `geyser.command.exthelp.<id>` | 显示此扩展注册的所有命令的帮助。 |

## 其他权限 {#other-permissions}

除了命令之外，还有其他用于保护特定 Geyser 功能的权限。

| 权限 | 描述 |
|:---|:---|
| `geyser.settings.server` | 允许玩家使用[游戏设置菜单](/img/wiki/game_menu.png)。（也需要玩家拥有操作员权限。） |
| `geyser.settings.gamerules` | 定义用户是否可以在[游戏设置菜单](/img/wiki/game_menu.png)中更改游戏规则。（也需要玩家拥有操作员权限。） |
| `geyser.update` | 该玩家加入时是否会收到 Geyser 更新通知。 |

## 使用 Geyser-Standalone/Geyser-ViaProxy 时的权限 {#standalone-viaproxy-permissions}
Geyser-ViaProxy 和 Geyser-Standalone 拥有自己的基本权限处理器。要编辑基本权限，
请打开 `permissions.yml` 文件，并添加或删除 Geyser 玩家在加入时应获得的权限。
有关更多信息，请参阅该文件。

您可以通过创建一个使用 Geyser API 处理权限检查的 [Geyser 扩展](/wiki/geyser/extensions/) 来进一步自定义权限处理。

## 在没有权限处理程序的平台上使用 Geyser 时的权限 {#permissions-platforms-no-permission-handlers}

在没有权限处理程序（例如 Fabric/NeoForge 服务器）的平台上使用 Geyser 时，权限将授予所有玩家或仅授予操作员。
默认情况下，所有玩家都拥有 `geyser.command.help` 和 `geyser.command.version` 权限。
操作员拥有所有 Geyser 权限。

## Floodgate 命令和权限 {#floodgate-commands-and-permissions}

有关 Floodgate 命令，请参见 [此处](/zh-CN/wiki/floodgate/commands/)。
