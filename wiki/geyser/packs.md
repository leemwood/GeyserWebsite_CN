---
title: 在 Geyser 中使用资源包
description: 本页面说明如何在 Geyser 中使用资源包。
---

# 简介

Geyser 支持向连接的 Bedrock 客户端发送 Bedrock 版本的资源包。
但是，Geyser 不会将 Java Edition 格式的资源包转换为 Bedrock 版本格式。

资源包提供多种自定义选项。就像 Java 版一样，它们可用于各种用途：
- 材质修改：资源包可以改变方块、物品和实体的外观，提供独特的视觉体验。
- 声音更改：可以添加自定义音效或音乐曲目，以创造更身临其境的氛围。
- UI 增强：资源包可以修改用户界面——一个流行的例子是提供深色模式 UI 选项。
... 还有更多！

# 使用资源包

### 发送本地资源包
向 Bedrock 玩家发送资源包最简单的方法是将 Bedrock 版本的资源包（可以是 `.zip` 或 `.mcpack` 文件）放入 Geyser 的 `packs` 文件夹中。

"packs"文件夹的位置：

- Fabric/NeoForge: `/config/Geyser-<platform>/packs/`
- Geyser Standalone: 根目录下的 `/packs/`
- 其他平台: `/plugins/Geyser-<platform>/packs/`

重启服务器（或重新加载 Geyser）后，连接的玩家将收到该文件夹中的所有资源包。


### 远程资源包链接（可使用 Geyser API 访问）

除了发送本地资源包外，您还可以通过向 Bedrock 玩家发送下载资源包的链接来发送资源包。
这与 Java 版本的资源包下载方式类似。但是，有几个关键限制：

- 链接必须是资源包下载的直接链接（它会跟随重定向，但重定向必须导致文件下载）
- Content-Length 头必须指定确切的文件大小。
- Content-Type application 头必须设置为 `application/zip`。

Geyser 会在启动时下载您配置的远程资源包一次，如果这些条件中的任何一个不满足，它会发出警告。
不幸的是，不可能绕过这些限制，因为这些是 Bedrock 客户端施加的限制。

要手动验证 headers，请使用 curl 获取网站并检查值。
例如：
`curl -I -L https://download.geysermc.org/v2/projects/geyseroptionalpack/versions/1.0.10/builds/11/downloads/geyseroptionalpack` 返回以下内容：
- `-I`：此选项告诉 curl 在输出中获取 HTTP 响应头。
- `-L`：确保 curl 跟随重定向

这将显示以下输出：
```shell
HTTP/1.1 200 OK
Date: Wed, 03 Jul 2024 23:03:06 GMT
Content-Type: application/zip
Content-Length: 95400
Connection: keep-alive
access-control-allow-methods: GET
access-control-allow-origin: *
Cache-Control: public, s-maxage=1209600
content-disposition: attachment; filename="=?UTF-8?Q?GeyserOptionalPack.mcpack?="; filename*=UTF-8''GeyserOptionalPack.mcpack
etag: "0258409cde3a2906e1085490fa5b10b77"
last-modified: Wed, 03 Jul 2024 08:42:41 GMT
CF-Cache-Status: HIT
Age: 21500
Accept-Ranges: bytes
Report-To: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v4?s=DUpNVi9R96y13%2BlJm%2BNTpDLvSt9bw9CFDUh8Qwhpb9SsqjJbuInBGtSM5hiM2dGbSGkUccP4KvSqqD%2FCKrrcQ9ur5at5G0u8FrfooVTKLP%2B4MwGoUl29DwlxeMVg6tX36RjjICmV97M4FlErCZEe%2F3gM%2FA%3D%3D"}],"group":"cf-nel","max_age":604800}
NEL: {"success_fraction":0,"report_to":"cf-nel","max_age":604800}
Server: cloudflare
CF-RAY: 89da81ca69c63735-FRA
alt-svc: h3=":443"; ma=86400
```
这显示 content-length 确实设置正确，并且 content type 确实是 `application/zip`。
此外，Geyser 会尝试读取 `ETag` 以查看内容是否已更改。要查询它，您可以使用以下命令：

`curl -I -L -v https://download.geysermc.org/v2/projects/geyseroptionalpack/versions/1.0.10/builds/11/downloads/geyseroptionalpack 2>&1 | grep ETag`
或者，只需使用 `-v` 标头就会打开详细模式，也会显示 etag。

# 常见问题

- **Geyser 支持行为包/附加组件吗？** <br />
不。这些需要在 Java 服务器端进行修改，而在 Geyser 用在代理上时，这是不可能的。
但是，可以使用 Geyser 的 API 完成附加组件或行为包可以完成的许多事情——例如[自定义物品](/wiki/geyser/custom-items)
或[自定义方块](/wiki/geyser/custom-blocks)。

- **Geyser 会转换 Java 版本的资源包吗？** <br />
目前不会。现在，您需要手动创建 Bedrock 版本的等效资源包。

- **我可以允许玩家自己选择资源包吗？** <br />
在大多数 Bedrock 平台上（主机除外），玩家能够在客户端下载和安装资源包。
还有一个 Geyser 扩展 [PickPack](https://github.com/onebeastchris/PickPack)，它使用 Geyser API 允许所有 Bedrock 玩家从一组资源包中进行选择。

- **在代理设置上：是否可以按后端服务器设置资源包？** <br />
遗憾的是，这无法在原生状态下实现，因为 Bedrock 版本只允许在最初连接到服务器时移除和添加资源包。
但是，通过使用 transfer 数据包，可以指示 Bedrock 客户端重新连接到服务器，然后在此时应用更改。
对于每个服务器的包，您可以使用非官方的 [GeyserPackSync](https://github.com/onebeastchris/GeyserPackSync) 插件。

- **Geyser 有 API 可以发送资源包吗？** <br />
是的！有关更多信息，请参阅 [Geyser API 文档](/wiki/geyser/api/)。有一个 `SessionLoadResourcePacksEvent` 可以确定哪些
资源包被发送到每个连接的玩家，或者更通用的 `GeyserDefineResourcePacksEvent` 来定义所有用户接收的资源包。

- **我可以使用子包或指定资源包的加载顺序吗**？
可以！但是，此功能需要您使用 Geyser API。
