---
title: 修复“无法连接到世界”
description: “无法连接到世界”错误的常见问题和解决方案。
---

## 修复“无法连接到世界”错误 {#fixing-unable-to-connect-to-world-errors}
这是人们尝试设置 Geyser 时最常见的错误。以下是解决此问题的一些步骤。
通常，此错误是由 Geyser 配置不当或网络问题引起的。

:::warning
如果您使用的是 Minecraft 服务器托管提供商（例如 Aternos 或 Apex Hosting），您应该参考设置页面上的托管提供商设置说明。
按照这些说明操作很可能会解决问题！
:::

如果您没有使用 Minecraft 服务器托管提供商，请继续。

:::info
要检查您的服务器是否（理论上）可以在基岩版上访问，请尝试在服务器控制台中运行以下命令：
`geyser connectiontest <ip> <port>`，并查看它建议尝试什么。
:::

### Java 版玩家无法连接！ {#java-edition-players-cant-connect}

这**不应该**是 Geyser 的问题。Geyser 不会修改服务器行为。Floodgate 确实会修改登录结构，但仅针对基岩玩家。
请联系您的托管提供商或在其他地方寻找解决此连接问题的方法。

### 更新 Geyser 后连接失败 {#connecting-fails-after-updating-geyser}

如果这是在更新 Geyser 插件版本后发生的，请确保关闭服务器，更换 Geyser jar 文件，然后重新启动服务器。
如果您重置了配置文件，请再次查看[设置指南](/wiki/geyser/setup/)。

### 我的控制台中有错误！ {#there-are-errors-in-my-console}

请通读[常见问题页面](/wiki/geyser/common-issues/)。如果那里有未记录的其他错误，请加入我们的 [Discord](https://discord.geysermc.org)。

### 尝试重启服务器和游戏 {#try-restarting-the-server-and-game}

尤其是在移动设备上，有时只需重启 Minecraft 即可解决问题。

### 是服务器还是客户端的问题？ {#is-it-the-server-or-the-client}

在此处运行您的 Java 服务器 IP 和基岩地址：https://mcsrvstat.us/。这是确定服务器是否可访问的好方法。
此外，检查您是否可以在服务器控制台中看到连接尝试。如果不能，则可能是网络问题。

对于主机玩家：如果只有他们无法加入，而其他基岩玩家可以，则可能是他们的主机连接方法有问题。

# 一般故障排除步骤

### 确保您连接到正确的 IP 和端口 {#ensure-youre-connecting-on-the-right-ip-and-port}

您应该使用 Java 服务器 IP 和基岩端口（在 Geyser 配置中设置）进行连接。例如，如果您转发了端口 19132，则在从基岩版连接时应指定端口 19132。

### I'm using a hosting provider or VPS! {#im-using-a-hosting-provider-or-vps}

Please read [this page on supported hosting providers](/wiki/geyser/supported-hosting-providers/) to see if there are extra configuration steps required for your hosting or server provider.
Some VPS/KVM providers may require further setup, such as OVH, SoYouStart, and Oracle Cloud. Please read this [note](/wiki/geyser/port-forwarding#issues-with-specific-vpskvm-providers) for more information.

### Issues using Docker or Pterodactyl {#issues-using-docker-or-pterodactyl}
Make sure you assign the port to pterodactyl, and on docker, to the docker compose file. See our [port-forwarding](/wiki/geyser/port-forwarding#using-docker-or-pterodactyl) page for fixes.

## Port forwarding issues {#port-forwarding-issues}

Your server does need to be port forwarded to allow connections from outside the local network. See [our port-forwarding guide](/wiki/geyser/port-forwarding/) for more information.

### Using TCP in DNS options/port forwarding instead of UDP {#using-tcp-in-dns-optionsport-forwarding-instead-of-udp}

Minecraft: Java Edition uses TCP for connecting; Minecraft: Bedrock Edition uses UDP. Port forwarding your Bedrock Edition port with only TCP will not work, it has to be UDP. Forwarding your Bedrock Edition port with `TCP/UDP` (both protocols) should also work but is not recommended unless Java Edition and Bedrock Edition is sharing the same port.

### Bedrock port is less than 10000 {#bedrock-port-is-less-than-10000}

Historically, having a Bedrock port that is a lower number will cause issues. Setting it to 10000 or above seems safe.

### Bedrock players can connect *after* hitting the server on a TCP port (e.g. on Java or a website on the same server), OR only people who also play on Java Edition can join from Geyser {#bedrock-players-can-connect-after-hitting-the-server-on-a-tcp-port-eg-on-java-or-a-website-on-the-same-server-or-only-people-who-also-play-on-java-edition-can-join-from-geyser}

This is likely a firewall issue on your server. Try the following workaround:
Attempt to connect to the Bedrock IP and port through a web browser - for example, `http://test.geysermc.org:19132`. It won't work, but then try connecting through Bedrock, and it should work.

Specific host fixes for OVH/SoYouStart can be found [here](/wiki/geyser/port-forwarding#issues-with-specific-vpskvm-providers).

### Changing the `bedrock` `address` in the Geyser config. {#changing-the-bedrock-address-in-the-geyser-config}

Except for a few specific hosting providers, you generally do not need to change this part of the Geyser config. 
However, in rare instances, it does fix issues - for example, when Windows has multiple network adapters (check by running `ipconfig` in cmd), 
it can help to set the `address` to the local IP of the adapter you want to use.

## Using a hosting provider or other location {#using-a-hosting-provider-or-other-location}

### Pterodactyl {#pterodactyl}

If you get this error while using the Pterodactyl Panel, try editing the Geyser config and changing the port to something besides `19132` (e.g. `25566`).

## Hosting Geyser on another computer on the same network {#hosting-geyser-on-another-computer-on-the-same-network}

### Can only connect from the same computer and not anywhere else {#can-only-connect-from-the-same-computer-and-not-anywhere-else}

Your firewall is likely in the way. Try adding an exception to Java, or disable the firewall for testing purposes.

## As a last resort for troubleshooting... {#as-a-last-resort-for-troubleshooting}

Minecraft offers a vanilla Bedrock server [here](https://www.minecraft.net/download/server/bedrock). Downloading, running, and attempting to connect to it may help isolate if the issue is on Geyser's end, or your computer/network's end.

## Using Geyser on the same computer {#using-geyser-on-the-same-computer}

### Windows 10/11 {#windows-1011}

_This only affects people trying to join Geyser from Windows 10/11 Edition with Geyser hosted on the same computer._

This is an issue caused by Loopback restrictions not being lifted. By default, Microsoft Apps have this restriction on all their apps for local connections. Geyser will attempt to resolve this automatically; however, if you're still having connection problems, you can lift it by typing the following in Windows PowerShell in administrator mode: (it should return `OK.` if it worked)
```powershell
CheckNetIsolation LoopbackExempt -a -n="Microsoft.MinecraftUWP_8wekyb3d8bbwe"
```

Should this not work, you can try this set of steps:

1. Hold down Windows Key + R
2. In the prompt, type `hdwwiz.exe`, then press Enter then Next
3. Install the Hardware Manually
4. Choose Network Adapter > Next > Microsoft > "Microsoft KM-TEST Loopback Adapter" then hit Next until it's done.

