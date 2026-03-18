---
title: playit.gg 设置
description: 如何设置 playit.gg 以使用 Geyser 而无需端口转发。
---

## 前置要求 {#前置要求}

:::info
您必须能够本地连接到您的 Geyser 实例！
:::

:::warning
playit.gg Minecraft 服务器插件不支持 UDP 隧道。您需要使用程序代理！
:::

- 如果您已经运行并设置了 playit.gg（例如用于 Minecraft Java 版本），请跳过步骤 1 和 2，继续步骤 3。

## 设置 {#设置}
1. 前往 [playit.gg 网站](https://playit.gg/) - 下载程序并运行它。它会在浏览器中打开登录站点 - 创建一个账户并登录。或者，使用访客账户。
2. 登录后，确保连接程序和站点，直到达到步骤 4。如果不是，请按照网站上的说明和 playit.gg 程序控制台的说明进行操作。
   ![img](/img/wiki/playit-gg/running.png)
3. 如果您看到上面的屏幕，请点击"Create Tunnel"，或者在登录账户后选择"Tunnels"标签。在那里，选择"Minecraft Bedrock"，保留"Enable Tunnel"勾选，然后点击"Add tunnel"。
   ![img](/img/wiki/playit-gg/add_tunnel.png)
4. 点击"Add tunnel"后，它应该会创建一个新隧道，您就完成了！向下滚动直到看到以下内容：
   ![img](/img/wiki/playit-gg/added_tunnel.png)
   在 Geyser 配置中，将 `advanced.bedrock.broadcast-port` 设置为 playit.gg"Allocation"标签中的端口。这对于 motd 显示是必要的。

   **请不要更改 `config.yml` 中的 Geyser 端口**，除非您有理由这样做（例如在同一台机器上托管另一个 Geyser 服务器），在这种情况下，请跳到下面的段落。`config.yml` 中的 bedrock (Geyser) 端口和 playit.gg 端口是完全分开的，playit.gg 会将其端口转发到默认的 Geyser 端口，应该已经可以工作了。更改它可能会导致错误。如果您更改了配置端口，请将 bedrock 端口改回默认的 19132，并确保 `clone-remote-port` 是 `false`。

   如果您的 Geyser 运行在不是 19132 的端口上，请使用上面显示页面中的"Local Port"更新您的 Geyser 端口。"Local Address"不需要更改，除非您不是在同一台设备上运行 playit.gg 和 Geyser。
5. 连接到您的服务器 - 使用"Allocation"标签中的 IP 和端口。在我们的示例中 - "180.ip.ply.gg"作为 IP，"17019"作为端口。或者，使用它给您的域名代替 IP。
6. 如果您成功加入，那么您就完成了！请确保让 playit.gg 程序保持运行，因为关闭它会关闭隧道。您可能还需要限制单个连接 - 使用"Per Connection Rate Limit"选项来执行此操作。
   （如果您无法加入，请查看页面的[故障排除](#故障排除)部分。）

## 故障排除 {#故障排除}

### 我无法连接到我的服务器！ {#我无法连接到我的服务器}
* *您的 minecraft 服务器控制台中有错误吗？*
* *除非您手动更改了 playit.gg 网站上的"Local Port"，否则在 Geyser 配置中，确保 bedrock 端口是默认的 `19132`，并且 `clone-remote-port` 是 `false`。*
* *如果您更改了 `bedrock-port` 或将 `clone-remote-port` 设置为 `true`，并且您有理由这样做（例如在同一台机器上托管另一个 Geyser 服务器），您需要告诉 playit.gg 使用该端口！请参阅步骤 4 中的最后一段。*
* *检查您是否使用 playit.gg"Allocation"标签中的 IP 和端口加入。*
* *确保在尝试加入时打开程序代理。*
* *请参阅[此处](/wiki/geyser/fixing-unable-to-connect-to-world/)获取常规故障排除步骤。*
