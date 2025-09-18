---
title: 将 Geyser 与控制台结合使用
description: 有关如何将 Geyser 与控制台结合使用的信息，包括如何在控制台版本的基岩版上加入服务器。
---

# 将 Geyser 与控制台结合使用

所有控制台都可以通过一些变通方法加入第三方服务器——包括 Geyser 服务器。Xbox One、Nintendo Switch 和 PS4 系统可以使用名为 BedrockConnect 的第三方程序加入第三方服务器。有关该程序的技术信息，包括如何运行您自己的设置，请参阅他们的 [GitHub 存储库](https://github.com/Pugmatt/BedrockConnect) (*该程序不隶属于 GeyserMC*)。也可以使用其他方法。

<!--还有一个工具，任何人都可以设置，允许您通过将用户添加到您的朋友列表来连接到服务器 - [FriendConnect](https://github.com/jrcarl624/FriendConnect) 和 [MCXboxBroadcast](https://github.com/rtm516/MCXboxBroadcast)。后者甚至可以设置为 Geyser 扩展。-->

:::note

用于 BedrockConnect 的主 IP 通常在控制台上被阻止，
如果您在更改 DNS 后遇到互联网连接或加入服务器的问题，
请考虑使用 [BedrockConnect Github 页面](https://github.com/Pugmatt/BedrockConnect)上的其他 BedrockConnect 服务器之一，
或[公共 GeyserConnect](https://www.geyserconnect.net)，它允许连接到 Java 和基岩服务器。

:::
## Xbox One {#xbox-one}

（视频链接如下）

[![Xbox One BedrockConnect](https://img.youtube.com/vi/g8mHvasVHMs/0.jpg)](https://www.youtube.com/watch?v=g8mHvasVHMs)

## Nintendo Switch {#nintendo-switch}

（视频链接如下）

[![Nintendo Switch BedrockConnect](https://img.youtube.com/vi/zalT_oR1nPM/0.jpg)](https://www.youtube.com/watch?v=zalT_oR1nPM)

文字说明：
1. 从 Nintendo Switch 主机的 HOME 菜单中选择“系统设置”。
2.  选择“互联网”，然后选择“互联网设置”。您的 Nintendo Switch 主机将自动搜索附近的 Wi-Fi 信号。
3.  从“已注册网络”下的网络列表中选择您的网络。
4.  选择“更改设置”，然后向下滚动并选择“DNS 设置”。
5.  选择“手动”。
6.  使用 A 按钮选择“主要 DNS”，然后按住 B 按钮删除 DNS（默认为零）。
7.  输入首选主要 DNS 的 BedrockConnect IP（可在 [BedrockConnect Github 页面](https://github.com/Pugmatt/BedrockConnect)上找到多个区域选项）。
8.  使用 A 按钮选择“次要 DNS”，然后按住 B 按钮删除现有 DNS。
9.  输入次要 DNS。建议使用 Google 或 Cloudfare 的 IP（8.8.8.8 或 1.1.1.1）。

## PlayStation 4 {#playstation-4}

1. 前往您的 PS4 主屏幕。
2. 前往“设置”。
3. 前往“网络”。
4. 选择“设置互联网连接”。
5. 如果您使用的是有线互联网，请选择“使用 LAN 电缆”，否则请选择“使用 Wi-Fi”。
6. 选择自定义网络创建模式。
7. 选择自动 IP 地址。
8. 对于 DHCP 主机名，请确保选择不指定。
9. 在 DNS 设置下，选择手动。
10. 输入 BedrockConnect IP 作为首选主 DNS（可以在 [BedrockConnect GitHub 页面](https://github.com/Pugmatt/BedrockConnect) 上找到多个区域选项），并输入 Google 或 Cloudflare 的 IP 作为辅助 DNS（8.8.8.8 或 1.1.1.1）。

## 替代方法 {#alternative-methods}

如果您更愿意尝试在另一台设备上模拟网络上的 LAN 游戏，以下是操作方法。

*请注意，此方法不适用于 Nintendo Switch。*

### 使用 PC {#using-a-pc}
如果您有 PC，可以使用 [Phantom](https://github.com/jhead/phantom)。

### 使用 Android 设备 {#using-an-android-device}
如果您有 Android 设备，您有几个选项：
- [BedrockTogether](https://play.google.com/store/apps/details?id=pl.extollite.bedrocktogetherapp)
- [MC Lan Proxy（试用版）](https://play.google.com/store/apps/details?id=com.luzenna.mineproxydroidtrial)
- [MC Lan Proxy（付费版）](https://play.google.com/store/apps/details?id=com.luzenna.mineproxydroid)
- [MC 服务器连接器](https://play.google.com/store/apps/details?id=com.smokiem.mcserverconnector)

### 使用 iOS 设备 {#using-an-ios-device}
如果您有 iOS 14+ 设备，可以使用 [BedrockTogether](https://apps.apple.com/app/bedrocktogether/id1534593376)。
