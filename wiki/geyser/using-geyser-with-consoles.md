---
title: 在主机上使用 Geyser
description: 关于如何在主机上使用 Geyser 的信息，包括如何在主机版本的 Bedrock Edition 上加入服务器。
---

# 在主机上使用 Geyser

所有主机都可以通过变通方法加入第三方服务器 - 包括 Geyser 服务器。Xbox One、Nintendo Switch 和 PS4 系统可以使用名为 BedrockConnect 的第三方程序加入第三方服务器。有关该程序的技术信息，包括如何运行您自己的设置，请参阅[他们的 GitHub 仓库](https://github.com/Pugmatt/BedrockConnect)（该程序与 GeyserMC 没有关联）。也有其他方法可以使用。

<!--还有一种工具，任何人都可以设置，允许您通过将用户添加到您的好友列表来连接服务器 - [FriendConnect](https://github.com/jrcarl624/FriendConnect)和 [MCXboxBroadcast](https://github.com/rtm516/MCXboxBroadcast)。后者甚至可以设置为 Geyser 扩展。-->

:::note

BedrockConnect 使用的主要 IP 在主机上经常被阻止，
如果您在更改 DNS 后遇到互联网连接或加入服务器的问题，
请考虑使用 [BedrockConnect Github 页面](https://github.com/Pugmatt/BedrockConnect)上的其他 BedrockConnect 服务器，
或 [Public GeyserConnect](https://www.geyserconnect.net)，它允许连接到 Java 和 Bedrock 服务器。

:::

## Xbox One {#xbox-one}

（视频链接在下方）

[![Xbox One BedrockConnect](https://img.youtube.com/vi/g8mHvasVHMs/0.jpg)](https://www.youtube.com/watch?v=g8mHvasVHMs)

## Nintendo Switch {#nintendo-switch}

（视频链接在下方）

[![Nintendo Switch BedrockConnect](https://img.youtube.com/vi/zalT_oR1nPM/0.jpg)](https://www.youtube.com/watch?v=zalT_oR1nPM)

文字说明：
1. 在 Nintendo Switch 主机的 HOME 菜单中选择"System Settings"。
2. 选择"Internet"，然后选择"Internet Settings"。您的 Nintendo Switch 主机会自动搜索附近的 Wi-Fi 信号。
3. 从"Registered Networks"下的网络列表中选择您的网络。
4. 选择"Change Settings"，然后向下滚动并选择"DNS Settings"。
5. 选择"Manual"。
6. 用 A 按钮选择"Primary DNS"，然后按住 B 按钮删除 DNS（默认为零）。
7. 输入首选 Primary DNS 的 BedrockConnect IP（根据地区的多个选项可以在 [BedrockConnect Github 页面](https://github.com/Pugmatt/BedrockConnect)上找到）。
8. 用 A 按钮选择"Secondary DNS"，然后按住 B 按钮删除现有 DNS。
9. 输入辅助 DNS。建议使用 Google 或 Cloudflare 的 IP（8.8.8.8 或 1.1.1.1）。

## PlayStation 4 {#playstation-4}

1. 进入 PS4 主屏幕。
2. 进入 Settings。
3. 进入 Network。
4. 选择 Set Up Internet connection。
5. 如果您使用有线互联网，请选择"Use LAN Cable"，否则选择"Use Wi-Fi"。
6. 选择 Custom network creation mode。
7. 选择 Automatic IP Address。
8. 对于 DHCP Host Name，请确保选择 Do Not Specify。
9. 在 DNS Settings 下，选择 Manual。
10. 输入首选 Primary DNS 的 BedrockConnect IP（根据地区的多个选项可以在 [BedrockConnect GitHub 页面](https://github.com/Pugmatt/BedrockConnect)上找到），以及 Google 或 Cloudflare 的 IP（8.8.8.8 或 1.1.1.1）作为辅助 DNS。

## 替代方法 {#替代方法}

如果您希望在网络上的另一台设备上模拟 LAN 游戏，方法是这样的。

### MultiPlatform {#multiplatform}

#### Netherlink — 免费且无广告。

- iOS（iOS 12.0 或更高版本）：[在 App Store 下载](https://apps.apple.com/be/app/netherlink/id6747323142?l=en)
- Android：[在 Play Store 下载](https://play.google.com/store/apps/details?id=net.netherdev.netherLink)
- macOS：[下载 DMG](https://github.com/NetherLinkMC/NetherLinkWebsite/raw/refs/heads/main/downloads/apple/NetherLink.dmg)
- Windows：[下载安装程序 (.exe)](https://github.com/NetherLinkMC/NetherLinkWebsite/raw/refs/heads/main/downloads/windows/NetherLinkInstaller.exe)


### 使用 PC {#使用-pc}
*请注意，此方法不适用于 Nintendo Switch。*
- [Phantom](https://github.com/jhead/phantom)。

### 使用 Android 设备 {#使用-android-设备}
如果您有 Android 设备，您有多个选项：
- [BedrockTogether](https://play.google.com/store/apps/details?id=pl.extollite.bedrocktogetherapp)
- [MC Lan Proxy (试用版)](https://play.google.com/store/apps/details?id=com.luzenna.mineproxydroidtrial)
- [MC Lan Proxy (付费版)](https://play.google.com/store/apps/details?id=com.luzenna.mineproxydroid)
- [MC Server Connector](https://play.google.com/store/apps/details?id=com.smokiem.mcserverconnector)

### 使用 iOS 设备 {#使用-ios-设备}
如果您有 iOS 14+ 设备，您可以使用 [BedrockTogether](https://apps.apple.com/app/bedrocktogether/id1534593376)。
