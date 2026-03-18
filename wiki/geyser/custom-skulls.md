---
title: 自定义头颅
description: Geyser 允许将自定义头颅映射到自定义方块，以用于物品栏和实体上。
---

与 Java Edition 不同，Bedrock 没有对自定义头颅物品的原生支持。因此，任何使用 Geyser 显示自定义头颅的方法在某种程度上都是一种变通方法。长期以来，Geyser 通过生成玩家实体来支持世界内的自定义头颅。然而，这不允许在物品栏中使用自定义头颅，也不允许实体佩戴它们。为了解决这个问题，Geyser 现在允许通过配置文件预先注册自定义头颅。Geyser 将使用此配置文件在启动时生成一个包含自定义头颅几何形状和纹理的自定义资源包。对于客户端来说，这些头颅是方块。因此，它们可以保存在玩家物品栏中。此外，为每个头颅方块定义了 attachables，以便在实体佩戴和持有时正确显示。

要在 Geyser 中设置自定义头颅，你需要选择注册方块的方式。最简单的方式是[使用 custom-skulls.yml](#custom-skullsyml)，但你也可以[使用 Geyser 扩展](#geyser-extensions)。

## 启用自定义头颅 {#enabling-custom-skulls}

要启用自定义头颅，你必须在 `config.yml` 文件中将 `gameplay.enable-custom-content` 设置为 `true`。这将启用自定义资源包的生成以及自定义头颅到自定义方块的转换。然后你可以将自定义头颅添加到 `custom-skulls.yml` 文件中。

```yaml
# Whether to add any items and blocks which normally does not exist in Bedrock Edition.
# This should only need to be disabled if using a proxy that does not use the "transfer packet" style of server switching.
# If this is disabled, furnace minecart items will be mapped to hopper minecart items.
# Geyser's block, item, and skull mappings systems will also be disabled.
# This option requires a restart of Geyser in order to change its setting.
enable-custom-content: true
```

## custom-skulls.yml {#custom-skullsyml}

配置文件 `custom-skulls.yml` 位于 Geyser 的配置文件夹中，其布局如下：

```yml
# --------------------------------
# Geyser Custom Skull Configuration Files
#
# This file is ignored with `add-custom-skull-blocks` disabled.
# See `config.yml` for the main set of configuration values
#
# Custom skulls with the player username, UUID, or texture specified in this file
# will be translated as custom blocks and be displayed in the inventory and on entities.
# --------------------------------

# Java player usernames
# Skins will be updated when Geyser starts and players will have to re-download
# the resource pack if any players had changed their skin.
player-usernames:
  - GeyserMC

# Java player UUIDs
# Skins will be updated when Geyser starts and players will have to re-download
# the resource pack if any players had changed their skin.
player-uuids:
  - 8b8d8e8f-2759-47c6-acb5-5827de8a72b8

# The long string of characters found in the NBT of custom player heads
player-profiles:
  - ewogICJ0aW1lc3RhbXAiIDogMTY1NzMyMjIzOTgzMywKICAicHJvZmlsZUlkIiA6ICJjZGRiZTUyMGQwNDM0YThiYTFjYzlmYzkyZmRlMmJjZiIsCiAgInByb2ZpbGVOYW1lIiA6ICJBbWJlcmljaHUiLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYTkwNzkwYzU3ZTE4MWVkMTNhZGVkMTRjNDdlZTJmN2M4ZGUzNTMzZTAxN2JhOTU3YWY3YmRmOWRmMWJkZTk0ZiIsCiAgICAgICJtZXRhZGF0YSIgOiB7CiAgICAgICAgIm1vZGVsIiA6ICJzbGltIgogICAgICB9CiAgICB9CiAgfQp9

# The hash of the skin on Minecraft's skin server
skin-hashes:
  - a90790c57e181ed13aded14c47ee2f7c8de3533e017ba957af7bdf9df1bde94f
```

要添加头颅，你需要选择四种方法中的任意一种，并添加一个新条目。以下部分将解释每种方法：

### 玩家用户名 {#player-usernames}

头颅可以通过玩家用户名在此部分注册。这些将在 Geyser 启动时更新。因此，如果玩家的用户名或皮肤发生变化，它们可能会发生变化。

### 玩家 UUID {#player-uuids}

头颅可以通过玩家 UUID 在此部分注册。这些将在 Geyser 启动时更新。因此，如果皮肤发生变化，它们可能会发生变化。

### 玩家档案 {#player-profiles}

头颅可以通过在自定义玩家头颅的 NBT 中找到的纹理字符串在此部分注册。除非手动更改值，否则这些不会在 Geyser 启动时更新。因此，如果玩家的用户名或皮肤发生变化，它们不会发生变化。数据是简单的 base64 编码 JSON。例如，配置中给出的示例解码如下：

```json
{
  "timestamp" : 1657322239833,
  "profileId" : "cddbe520d0434a8ba1cc9fc92fde2bcf",
  "profileName" : "Amberichu",
  "textures" : {
    "SKIN" : {
      "url" : "http://textures.minecraft.net/texture/a90790c57e181ed13aded14c47ee2f7c8de3533e017ba957af7bdf9df1bde94f",
      "metadata" : {
        "model" : "slim"
      }
    }
  }
}
```

如果在 Paper 服务器上，可以通过手持物品并运行命令 `/paper dumpitem` 来获取头颅的数据。这将把物品的 NBT 数据输出到聊天和控制台。纹理字符串可以在 `SkullOwner` 标签下、`Properties` 标签下、`textures` 标签下、`Value` 标签下找到。例如：

```log
[05:58:07 INFO]: .KastleFirefox issued server command: /paper dumpitem
[05:58:07 INFO]: minecraft:player_head{display: {Name: '{"text":"Test"}'}, SkullOwner: {Properties: {textures: [{Value: "ewogICJ0aW1lc3RhbXAiIDogMTY1NzMyMjIzOTgzMywKICAicHJvZmlsZUlkIiA6ICJjZGRiZTUyMGQwNDM0YThiYTFjYzlmYzkyZmRlMmJjZiIsCiAgInByb2ZpbGVOYW1lIiA6ICJkYXZjaG9vIiwKICAidGV4dHVyZXMiIDogewogICAgIlNLSU4iIDogewogICAgICAidXJsIiA6ICJodHRwOi8vdGV4dHVyZXMubWluZWNyYWZ0Lm5ldC90ZXh0dXJlL2E5MDc5MGM1N2UxODFlZDEzYWRlZDE0YzQ3ZWUyZjdjOGRlMzUzM2UwMTdiYTk1N2FmN2JkZjlkZjFiZGU5NGYiLAogICAgICAibWV0YWRhdGEiIDogewogICAgICAgICJtb2RlbCIgOiAic2xpbSIKICAgICAgfQogICAgfQogIH0KfQ"}]}, Id: [I; -229048314, -553040501, -1407961158, 465313087]}}
```

### 皮肤哈希 {#skin-hashes}

头颅可以通过 Minecraft 皮肤服务器上皮肤的哈希值在此部分注册。这可以在 URL 的末尾找到。例如，在 URL `http://textures.minecraft.net/texture/a90790c57e181ed13aded14c47ee2f7c8de3533e017ba957af7bdf9df1bde94f` 中，哈希值是 `a90790c57e181ed13aded14c47ee2f7c8de3533e017ba957af7bdf9df1bde94f`。除非手动更改值，否则这些不会在 Geyser 启动时更新。因此，如果玩家的用户名或皮肤发生变化，它们不会发生变化。

这可以通过解码从玩家档案获得的 base64 数据来获取。

## Geyser 扩展 {#geyser-extensions}

在这个示例中，我们将从玩家档案注册一个自定义头颅。我们将使用上面示例中的玩家档案。

首先，创建一个实现 Geyser Extension 类的类：

```java
public class RegisterCustomSkull implements Extension {
    //...
}
```

接下来，创建一个在 `GeyserDefineCustomSkullsEvent` 中注册方块的方法：

```java
public class RegisterCustomSkull implements Extension {
    @Subscribe
    public void onDefineCustomSkulls(GeyserDefineCustomSkullsEvent event) {
        //...
    }
}
```

最后，在事件中注册你的头颅。使用 SkullTextureType 枚举指定正在传递的值是玩家档案：

```java
public class RegisterCustomSkull implements Extension {
    @Subscribe
    public void onDefineCustomSkulls(GeyserDefineCustomSkullsEvent event) {
        String profile = "ewogICJ0aW1lc3RhbXAiIDogMTY1NzMyMjIzOTgzMywKICAicHJvZmlsZUlkIiA6ICJjZGRiZTUyMGQwNDM0YThiYTFjYzlmYzkyZmRlMmJjZiIsCiAgInByb2ZpbGVOYW1lIiA6ICJkYXZjaG9vIiwKICAidGV4dHVyZXMiIDogewogICAgIlNLSU4iIDogewogICAgICAidXJsIiA6ICJodHRwOi8vdGV4dHVyZXMubWluZWNyYWZ0Lm5ldC90ZXh0dXJlL2E5MDc5MGM1N2UxODFlZDEzYWRlZDE0YzQ3ZWUyZjdjOGRlMzUzM2UwMTdiYTk1N2FmN2JkZjlkZjFiZGU5NGYiLAogICAgICAibWV0YWRhdGEiIDogewogICAgICAgICJtb2RlbCIgOiAic2xpbSIKICAgICAgfQogICAgfQogIH0KfQ"
        event.register(profile, SkullTextureType.PROFILE);
    }
}
```

## 从世界中提取自定义头颅 {#scraping-custom-skulls-from-a-world}

可以使用工具 [HeadExtractor](https://github.com/davchoo/HeadExtractor)（由 Amberichu 制作）从现有世界中提取自定义头颅，以便通过映射或 API 轻松实现。请参阅链接的仓库以获取使用说明。
