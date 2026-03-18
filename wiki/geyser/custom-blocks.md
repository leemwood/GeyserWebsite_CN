---
title: 自定义方块
description: Geyser 允许将自定义方块映射到原版 Java 方块状态或模组方块，以支持自定义方块模型。
---

要在 Geyser 中设置自定义方块，你需要选择注册方块的方式。最简单的方式是[使用 JSON 文件](#json-mappings)，但你也可以[使用 Geyser 扩展](#geyser-extensions)。

需要注意的是，方块及其相关组件并不十分稳定。Mojang 对方块的更改频率通常比物品要高得多。这意味着 Geyser 允许注册的任何组件都可能在未来版本的 Bedrock 中失效。

## 启用自定义方块 {#enabling-custom-blocks}

在开始之前，请确保在 `config.yml` 文件中将 `gameplay.enable-custom-content` 设置为 `true`。

```yml
# Whether to add any items and blocks which normally does not exist in Bedrock Edition.
# This should only need to be disabled if using a proxy that does not use the "transfer packet" style of server switching.
# If this is disabled, furnace minecart items will be mapped to hopper minecart items.
# Geyser's block, item, and skull mappings systems will also be disabled.
# This option requires a restart of Geyser in order to change its setting.
enable-custom-content: true
```

## JSON 映射 {#json-mappings}

JSON 映射使用的结构与行为包注册方块的结构类似。相关组件列表请参阅 [Minecraft: Bedrock Edition Creator Documentation](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/examples/blockcomponents/blockcomponentslist)。

用于注册方块或物品的自定义映射文件应放置在 `custom_mappings` 文件夹中。此文件夹在你启动服务器时创建。对于独立版，它位于 `Geyser-Standalone.jar` 文件所在的同一文件夹中；对于插件版，它位于 Geyser 数据文件夹内。如果你没有此文件夹，请确保使用的是最新版本的 Geyser。

### 示例映射文件 {#example-mappings-file}

```json
{
	"format_version": 1,
	"blocks": {
		"minecraft:granite_wall": {
			"name": "my_block",
			"display_name": "Custom Granite Wall",
			"geometry": "geometry.blocks.my_block_geo",
			"material_instances": {
				"*": {
					"texture": "some_texture",
					"render_method": "alpha_test",
					"face_dimming": true,
					"ambient_occlusion": true
				}
			},
			"tags": ["stone", "wall"],
			"state_overrides": {
				"east=none,north=none,south=none,up=true,waterlogged=true,west=none": {
					"geometry": "geometry.blocks.my_other_block_geo",
					"destructible_by_mining": 10,
					"place_air": false
				},
				"east=none,north=none,south=none,up=false,waterlogged=true,west=tall": {
					"friction": 0.6,
					"light_emission": 7,
					"light_dampening": 8,
					"transformation": {
                        "scale": [0.5, 0.5, 0.5],
                        "translation": [1, 0, 0],
                        "rotation": [0, 90, 0]
                    }
				},
				"east=none,north=none,south=low,up=true,waterlogged=true,west=tall": {
					"placement_filter": {
						"conditions": [{
							"allowed_faces": ["up", "down"],
							"block_filter": [{
									"tags": "!query.any_tag('stone')"
								},
								"minecraft:dirt"
							]
						}]
					}
				}
			}
		}
	}
}
```

### 架构 {#schema}

以下详细说明了映射文件的架构。只有 `name` 字段是严格必需的。所有其他字段都是可选的。

<div class="long-list" markdown="1">

- `format_version`:
  - 类型: `integer`
    - 描述: 映射文件格式的版本。
- `blocks`:
  - 类型: `object`
    - 描述: 包含方块定义列表的对象。
        - `minecraft:some_block`:
            - 类型: `object`
                - 描述: 用于覆盖指定 Java 方块的方块定义。
                    - `name`:
                        - 类型: `string`
                            - 默认值: 无
                            - 描述: 自定义方块的名称。
                    - `collision_box`:
                        - 类型: `object`
                            - `origin`:
                                - 类型: `array`
                                    - 默认值: 从被覆盖的方块推断
                                    - 描述: x、y 和 z 原点值的数组
                                    - 范围: 必须介于 `[-8, 0, -8]` 到 `[8, 16, 8]` 之间（含）
                                        - `items`:
                                            - 类型: `float`
                                                - 默认值: 从被覆盖的方块推断
                                                - 描述: 单个轴的原点值
                            - `size`:
                                - 类型: `array`
                                    - 默认值: 从被覆盖的方块推断
                                    - 描述: x、y 和 z 大小值的数组
                                        - `items`:
                                            - 类型: `float`
                                                - 默认值: 从被覆盖的方块推断
                                                - 描述: 单个轴的大小值
                            - 范围: `origin` 和 `size` 的和必须在 `[-8, 0, -8]` 到 `[8, 16, 8]` 之间（含）。
                    - `destructible_by_mining`:
                        - 类型: `integer`
                            - 默认值: 从被覆盖的方块推断
                            - 描述: 使用基础工具挖掘方块所需的秒数。
                    - `display_name`:
                        - 类型: `string`
                            - 默认值: 自定义方块的名称
                            - 描述: 方块的显示名称。
                    - `extended_collision_box`:
                        - 类型: `object`
                            - `origin`:
                                - 类型: `array`
                                    - 默认值: 从被覆盖的方块推断
                                    - 描述: x、y 和 z 原点值的数组
                                    - 范围: 必须介于 `[-8, 0, -8]` 到 `[8, 16, 8]` 之间（含）
                                        - `items`:
                                            - 类型: `float`
                                                - 默认值: 从被覆盖的方块推断
                                                - 描述: 单个轴的原点值
                            - `size`:
                                - 类型: `array`
                                    - 默认值: 从被覆盖的方块推断
                                    - 描述: x、y 和 z 大小值的数组
                                        - `items`:
                                            - 类型: `float`
                                                - 默认值: 从被覆盖的方块推断
                                                - 描述: 单个轴的大小值
                            - 范围: `origin` 和 `size` 的和必须在 `[-8, 0, -8]` 到 `[8, 16, 8]` 之间（含）。
                    - `friction`:
                        - 类型: `float`
                            - 范围: `0.0` 到 `1.0`
                            - 默认值: `0.4`
                            - 描述: 实体穿过方块时的摩擦力值。
                    - `geometry`:
                        - 类型: `string`
                            - 默认值: 无
                            - 描述: 方块的几何标识符。
                        - 类型: `object`
                            - 描述: 带骨骼可见性过滤器的方块几何体。
                                - `identifier`
                                    - 类型: `string`
                                        - 默认值: 无
                                        - 描述: 方块的几何标识符。
                                - `bone_visibility`:
                                    - 类型: `object`
                                        - 描述: 包含方块骨骼可见性过滤器的对象。
                                            - `bone_name`:
                                                - 类型: `string`
                                                    - 默认值: 无
                                                    - 描述: 一个 molang 字符串，决定骨骼是否可见。
                                                - 类型: `boolean`
                                                    - 默认值: 无
                                                    - 描述: 骨骼是否可见。
                    - `light_emission`:
                        - 类型: `integer`
                            - 范围: `0` 到 `15`
                            - 默认值: `0`
                            - 描述: 方块发出的光量。
                    - `light_dampening`:
                        - 类型: `integer`
                            - 范围: `0` 到 `15`
                            - 默认值: `15`
                            - 描述: 光线穿过方块时被衰减的量。
                    - `material_instances`:
                        - 类型: `object`
                            - 描述: 包含方块材质实例的对象。
                                - `key`:
                                    - 类型: `object`
                                        - 描述: 方块的默认材质实例。可以使用其他 glob 或特定实例。
                                            - `texture`:
                                                - 类型: `string`
                                                    - 默认值: 自定义方块的名称
                                                    - 描述: 方块的纹理资源路径。
                                            - `render_method`:
                                                - 类型: `string`
                                                    - 默认值: `alpha_test`
                                                    - 描述: 方块使用的渲染方法。
                                            - `face_dimming`:
                                                - 类型: `boolean`
                                                    - 默认值: `false`
                                                    - 描述: 是否启用方块的面暗淡。
                                            - `ambient_occlusion`:
                                                - 类型: `boolean`
                                                    - 默认值: `false`
                                                    - 描述: 是否启用方块的环境光遮蔽。
                    - `place_air`:
                        - 类型: `boolean`
                            - 默认值: `true`
                            - 描述: 方块是否应放置空气以防止重复放置。
                    - `placement_filter`:
                        - 类型: `object`
                            - 描述: 包含方块放置过滤器的对象。
                                - `conditions`:
                                    - 类型: `array`
                                        - 描述: 方块放置前必须满足的条件数组。
                                            - `allowed_faces`:
                                                - 类型: `array`
                                                    - 描述: 方块可以放置的面数组。
                                                        - `items`:
                                                            - 类型: `string`
                                                                - 范围: `up`、`down`、`north`、`south`、`east`、`west`
                                                                - 描述: 方块可以放置的面。
                                                        - `block_filter`:
                                                            - 类型: `array`
                                                                - 描述: 方块可以放置的方块或 true molang 查询数组。
                                                                    - `items`:
                                                                        - 类型: `string`
                                                                            - 描述: 方块可以放置的方块。
                                                                                - 类型 `object`
                                                                                    - 描述: 保存方块可以放置的 true molang 查询。
                                                                                        - `tags`:
                                                                                            - 类型: `array`
                                                                                                - 描述: 方块可以放置的 true molang 查询。
                    - `selection_box`:
                        - 类型: `object`
                            - `origin`:
                                - 类型: `array`
                                    - 默认值: 从被覆盖的方块推断
                                    - 描述: x、y 和 z 原点值的数组
                                    - 范围: 必须介于 `[-8, 0, -8]` 到 `[8, 16, 8]` 之间（含）
                                        - `items`:
                                            - 类型: `float`
                                                - 默认值: 从被覆盖的方块推断
                                                - 描述: 单个轴的原点值
                            - `size`:
                                - 类型: `array`
                                    - 默认值: 从被覆盖的方块推断
                                    - 描述: x、y 和 z 大小值的数组
                                        - `items`:
                                            - 类型: `float`
                                                - 默认值: 从被覆盖的方块推断
                                                - 描述: 单个轴的大小值
                            - 范围: `origin` 和 `size` 的和必须在 `[-8, 0, -8]` 到 `[8, 16, 8]` 之间（含）。
                    - `tags`:
                        - 类型: `array`
                            - 描述: 与方块关联的标签数组。
                                - `items`:
                                    - 类型: `string`
                    - `transformation`:
                        - 类型: `object`
                            - 描述: 要应用于方块的平移、缩放和旋转值。
                                - `scale`
                                    - 类型: `array`
                                        - 默认值: `[1, 1, 1]`
                                        - 描述: x、y 和 z 缩放值的数组
                                            - `items`:
                                                - 类型: `float`
                                                    - 默认值: `1`
                                                    - 描述: 单个轴的缩放值
                                - `translation`:
                                    - 类型: `array`
                                        - 默认值: `[0, 0, 0]`
                                        - 描述: x、y 和 z 平移值的数组
                                            - `items`:
                                                - 类型: `float`
                                                    - 默认值: `0`
                                                    - 描述: 单个轴的平移值
                                - `rotation`
                                    - 类型: `array`
                                        - 默认值: `[0, 0, 0]`
                                        - 描述: x、y 和 z 旋转值的数组，以 90 度为增量（例如 `[90, -180, 0]`）
                                            - `items`:
                                                - 类型: `integer`
                                                    - 范围: `0`、`90`、`180` 和 `270`
                                                    - 默认值: `0`
                                                    - 描述: 单个轴的旋转值
                    - `unit_cube`:
                        - 类型: `boolean`
                            - 默认值: `false`
                            - 描述: 是否使用单位立方体进行细分。
                    - `creative_category`:
                        - 类型: `string`
                            - 默认值: `building_blocks`
                            - 描述: 放置方块的创意模式类别。
                            - 范围: 请参阅 Bedrock Wiki 上的[菜单类别](https://wiki.bedrock.dev/documentation/menu-categories.html#list-of-categories)。
                    - `creative_group`:
                        - 类型: `string`
                            - 默认值: 无
                            - 描述: 放置方块的创意模式分组。
                            - 范围: 请参阅 Bedrock Wiki 上的[菜单分组](https://wiki.bedrock.dev/documentation/menu-categories.html#list-of-groups)。
                    - `included_in_creative_inventory`:
                        - 类型: `boolean`
                            - 默认值: `true`
                            - 描述: 方块是否包含在创意模式物品栏中。
                    - `only_override_states`:
                        - 类型: `boolean`
                            - 默认值: `false`
                            - 描述: 方块是否仅覆盖 `state_overrides` 中指定的状态。
                    - `state_overrides`:
                        - 类型: `object`
                            - 描述: 包含方块状态覆盖的对象。
                                - `property1=value1,property2=value2,...`:
                                    - 类型: `object`
                                        - 描述: 特定方块状态的覆盖。可能的状态列在 Geyser 的[方块映射](https://raw.githubusercontent.com/GeyserMC/mappings/6b661f0d517d895aebc1f55a25d2c86f033beb1d/blocks.json)中。
                                        - 接受与方块定义相同的属性，但 `creative_category`、`creative_group`、`included_in_creative_inventory`、`only_override_states` 和 `state_overrides` 除外。

</div>

## Geyser 扩展 {#geyser-extensions}

在这个示例中，我们将创建一个覆盖原版红石点的自定义方块。这个方块将放置在另一个方块顶部，并在通电时发出可见的红石信号。

首先，创建一个实现 Geyser Extension 类的类:

```java
public class RedstoneDot implements Extension {
    //...
}
```

接下来，创建一个在 `GeyserDefineCustomBlocksEvent` 中注册方块的方法:

```java
public class RedstoneDot implements Extension {
    @Subscribe
    public void onDefineCustomBlocks(GeyserDefineCustomBlocksEvent event) {
        //...
    }
}
```

为方块构建 `CustomBlockComponents`、`CustomBlockData` 和 `CustomBlockPermutation` 列表（如果需要）:

```java
public class RedstoneDot implements Extension {
    @Subscribe
    public void onDefineCustomBlocks(GeyserDefineCustomBlocksEvent event) {
        BoxComponent selectionBox = new BoxComponent(-5, 0, -5, 10, 1f, 10);

        CustomBlockComponents components = CustomBlockComponents.builder()
                .collisionBox(BoxComponent.emptyBox())
                .selectionBox(selectionBox)
                .geometry(new GeometryComponentBuilder()
                    .identifier("geometry.amberichu.redstone_dot")
                    .build())
                .lightEmission(0)
                .lightDampening(0)
                .friction(1f)
                .build();

        CustomBlockData redstoneDot = CustomBlockData.builder()
                .name("redstone_dot")
                .intProperty("POWER_PROPERTY", IntStream.range(0, 16).boxed().toList())
                .components(components)
                .permutations(createRedstoneDotPermutations())
                .build();

        // ...
    }

    private List<CustomBlockPermutation> createRedstoneDotPermutations() {
        List<CustomBlockPermutation> permutations = new ArrayList<>();
        for (int power = 0; power < 16; power++) {
            String texture = "amberichu.redstone_dot" + power;
            MaterialInstance invisMaterialInstance = MaterialInstance.builder()
                        .texture("amberichu.invisible")
                        .renderMethod("alpha_test")
                        .faceDimming(false)
                        .ambientOcclusion(false)
                        .build();
            CustomBlockComponents components = CustomBlockComponents.builder()
                    .materialInstance("up", MaterialInstance.builder()
                        .texture(texture)
                        .renderMethod("alpha_test")
                        .faceDimming(false)
                        .ambientOcclusion(false)
                        .build())
                    .materialInstance("down", invisMaterialInstance)
                    .materialInstance("north", invisMaterialInstance)
                    .materialInstance("south", invisMaterialInstance)
                    .materialInstance("east", invisMaterialInstance)
                    .materialInstance("west", invisMaterialInstance)
                    .build();
            String condition = String.format("query.block_property('%s') == %d", POWER_PROPERTY, power);
            permutations.add(new CustomBlockPermutation(components, condition));
        }
        return permutations;
    }
}
```

最后，注册自定义方块、方块状态覆盖和方块物品覆盖:

```java
public class RedstoneDot implements Extension {
    @Subscribe
    public void onDefineCustomBlocks(GeyserDefineCustomBlocksEvent event) {
        BoxComponent selectionBox = new BoxComponent(-5, 0, -5, 10, 1f, 10);

        CustomBlockComponents components = CustomBlockComponents.builder()
                .collisionBox(BoxComponent.emptyBox())
                .selectionBox(selectionBox)
                .geometry(new GeometryComponentBuilder()
                    .identifier("geometry.amberichu.redstone_dot")
                    .build())
                .lightEmission(0)
                .lightDampening(0)
                .friction(1f)
                .build();

        CustomBlockData redstoneDot = CustomBlockData.builder()
                .name("redstone_dot")
                .intProperty("POWER_PROPERTY", IntStream.range(0, 16).boxed().toList())
                .components(components)
                .permutations(createRedstoneDotPermutations())
                .build();

        event.register(redstoneDot);
        event.registerItemOverride("minecraft:redstone_wire", redstoneDot);

        for (int power = 0; power < 16; power++) {
            String javaIdentifier = String.format("minecraft:redstone_wire[east=none,north=none,power=%d,south=none,west=none]", power);
            event.registerOverride(javaIdentifier, redstoneDot.blockStateBuilder()
                    .intProperty("POWER_PROPERTY", power)
                    .build());
        }
    }

    private List<CustomBlockPermutation> createRedstoneDotPermutations() {
        List<CustomBlockPermutation> permutations = new ArrayList<>();
        for (int power = 0; power < 16; power++) {
            String texture = "amberichu.redstone_dot" + power;
            MaterialInstance invisMaterialInstance = MaterialInstance.builder()
                        .texture("amberichu.invisible")
                        .renderMethod("alpha_test")
                        .faceDimming(false)
                        .ambientOcclusion(false)
                        .build();
            CustomBlockComponents components = CustomBlockComponents.builder()
                    .materialInstance("up", MaterialInstance.builder()
                        .texture(texture)
                        .renderMethod("alpha_test")
                        .faceDimming(false)
                        .ambientOcclusion(false)
                        .build())
                    .materialInstance("down", invisMaterialInstance)
                    .materialInstance("north", invisMaterialInstance)
                    .materialInstance("south", invisMaterialInstance)
                    .materialInstance("east", invisMaterialInstance)
                    .materialInstance("west", invisMaterialInstance)
                    .build();
            String condition = String.format("query.block_property('%s') == %d", POWER_PROPERTY, power);
            permutations.add(new CustomBlockPermutation(components, condition));
        }
        return permutations;
    }
}
```