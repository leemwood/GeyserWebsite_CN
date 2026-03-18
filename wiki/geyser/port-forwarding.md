---
title: 端口转发
description: 有关如何设置 Geyser 所需的 UDP 端口转发的信息。
---

# 端口转发
本页面包含在自托管时设置 Geyser 所需的端口转发的信息。
还有针对特定配置（如 Docker/Pterodactyl）或特定 VPS/KVM 提供商（如 OVH 或 Oracle Cloud）的指南。

:::caution

如果您使用的是 Minecraft 服务器托管提供商（例如 Aternos 或 Nodecraft），您应该参考[设置](/wiki/geyser/setup)页面上的托管提供商设置。

:::

## 在 Linux/Windows/macOS 上进行端口转发 {#在-linuxwindowsmacos-上进行端口转发}
要允许其他人加入您的服务器，您需要在托管 Geyser 的设备上设置端口转发。
此外，如果希望服务器可以从您自己的家庭网络外部访问，您需要在路由器/调制解调器上进行端口转发（换句话说，允许并将该端口上的流量路由到正确的机器）。
请参阅[此处](https://www.howtogeek.com/66214/how-to-forward-ports-on-your-router/)或[此处](https://www.lifewire.com/how-to-port-forward-4163829)获取有用的指南。
请注意：如果您没有静态 IP 地址，您的 IP 地址可能会随时间变化。

:::info

一些 ISP（互联网服务提供商）会阻止某些端口，或者不允许您打开端口（例如使用 CGNAT，它不允许您使用动态 IP 打开端口）。
其他 ISP 可能要求您额外付费才能获得静态 IP 地址。
作为端口转发的替代方案，您可以使用 <a href="/wiki/geyser/playit-gg/">playit.gg</a> 创建隧道。

:::

### Windows {#windows}
要在 Windows 上打开端口，您需要通过 Windows 防火墙打开该端口。有多种方法可以执行此操作：

- `Powershell`（推荐）

  要在 UDP 上打开端口（在我们的示例中为端口 19132），请在管理员 Powershell 中运行以下命令：
  ```powershell
  New-NetFirewallRule -DisplayName "Geyser" -Direction Inbound -Protocol UDP -LocalPort 19132 -Action Allow
  ```
  运行此命令会创建一个名为"Geyser"的规则，允许 UDP 流量通过端口 19132。


- Windows Defender 防火墙高级安全（GUI）
  1. 在开始菜单中搜索"Windows Defender 防火墙高级安全"，然后打开它。（[图片](/img/wiki/port-forwarding/windows-1.png)）
  2. 点击左侧边栏中的"入站规则"。（[图片](/img/wiki/port-forwarding/windows-2.png)）
  3. 点击右侧边栏中的"新建规则..."。（[图片](/img/wiki/port-forwarding/windows-2.png)）
  4. 选择"端口"作为规则类型，然后点击"下一步"。（[示例](/img/wiki/port-forwarding/windows-3.png)）
  5. 选择"UDP"和"特定本地端口"，然后输入您要打开的端口（在我们的示例中为 19132）。点击"下一步"。（[示例](/img/wiki/port-forwarding/windows-4.png)）
  6. 选择"允许连接"并点击"下一步"。（[示例](/img/wiki/port-forwarding/windows-5.png)）
  7. 选择您要应用规则的文件（e.g. "Domain"、"Private"、"Public"），然后点击"下一步"。（[示例](/img/wiki/port-forwarding/windows-6.png)）
  8. 输入规则的名称（例如"Geyser"），然后点击"完成"。（[图片](/img/wiki/port-forwarding/windows-7.png)）

### Linux {#linux}
不同的 Linux 发行版，甚至是不同的 VPS 提供商，它们附带和配置的防火墙也不同。在以下示例中，我们使用 `19132` 作为要打开的端口，但您应该将其替换为您正在使用的 Geyser 端口。

- `ufw` 是一个简单的防火墙前端，用于 iptables，常用于 Ubuntu 和 Debian。要在 UDP 上打开端口，请运行以下命令：
  ```bash
  sudo ufw allow 19132/udp
  ```
  然后，使用 `sudo ufw reload` 重新加载防火墙，并使用 `sudo ufw status` 查看所有打开的规则。
  更多有用的指南：[DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-setup-a-firewall-with-ufw-on-an-ubuntu-and-debian-cloud-server)，[Baeldung](https://www.baeldung.com/linux/uncomplicated-firewall)

- `firewalld` 通过运行以下命令添加 UDP 端口：
  ```bash
  sudo firewall-cmd --zone=public --permanent --add-port=19132/udp
  ```
  然后，使用 `sudo firewall-cmd --reload` 重新加载防火墙，并使用 `sudo firewall-cmd --list-all` 查看所有打开的规则。
  更多有用的指南：[DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-using-firewalld-on-centos-7)

- `iptables` 是许多 Linux 发行版使用的常见防火墙。要在 UDP 上打开端口，请运行以下命令：
  ```bash
  sudo iptables -A INPUT -p udp --dport 19132 -j ACCEPT
  ```
  然后，使用 `sudo iptables-save` 保存防火墙，并使用 `sudo iptables -L` 查看所有打开的规则。
  更多 iptables 有用的指南：[DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-using-iptables-on-ubuntu-14-04)，[Ubuntu](https://help.ubuntu.com/community/IptablesHowTo)

### macOS {#macos}
您需要在防火墙设置中禁用"阻止所有传入连接"，因为这会阻止任何连接并且不会允许您进行例外。
要允许传入连接，请在出现[这些提示](/img/wiki/port-forwarding/macos_warning.png)时点击"允许"。
如果您仍然遇到问题，请参阅 Apple 的官方指南[此处](https://support.apple.com/guide/mac-help/MH11783)了解如何在 macOS 上打开端口。

## 使用 Docker 或 Pterodactyl {#使用-docker-或-pterodactyl}
除了在服务器的防火墙中进行端口转发（如果适用，还需要在路由器/调制解调器中），您还需要在 Docker/Pterodactyl 中分配端口。

### Pterodactyl {#pterodactyl}
除了端口转发外，请确保在 Pterodactyl panel 的"Network"标签中为服务器分配端口。
有关更多信息，请参阅[此处](https://pterodactyl.io/community/games/minecraft.html#allocations-in-the-panel)。

![Pterodactyl panel, Network section](/img/wiki/port-forwarding/pterodactyl-1.png)

还有一些用于 Pterodactyl 的不同 Geyser eggs，可以在[此处](https://github.com/GeyserMC/pterodactyl-stuff)找到。

:::caution

如果您无法在 Pterodactyl panel 中分配端口，您需要联系您的服务器主机为您分配一个，或者尝试使用现有的端口分配。

:::

### Docker {#docker}
对于 Geyser 在 Docker 下工作（例如使用 [Itzg's Docker image](https://github.com/itzg/docker-minecraft-server)），您需要将 Geyser 端口添加到 docker-compose 文件的 UDP。这通过在 `ports` 部分添加以下内容来完成：
```yaml
ports:
    - "25565:25565"
    - "19132:19132/udp"
```
需要额外的 `/udp` 后缀，以便在 UDP 上暴露端口。如果您想在同一端口上运行 Java 服务器和 Geyser，以下内容可以工作：
```yaml
ports:
    - "25565:25565"
    - "25565:25565/udp"
```
或者，使用 `-p 19132:19132/udp` 标志将另一个端口添加到 docker run 命令。


## 特定 VPS/KVM 提供商的问题 {#特定-vpskvm-提供商的问题}
某些提供商（如 OVH、Oracle Cloud 和 SoYouStart）的防火墙默认/大多数情况下会阻止 UDP 端口。

### OVH 和 SoYouStart {#ovh-和-soyoustart}
默认情况下，OVH 的防火墙需要 TCP ping 到服务器，然后才允许 UDP 连接。这对于 Geyser 是不可能的，因此您需要禁用防火墙。

:::caution

如果您无法访问这些防火墙设置，但被链接到了此页面，请联系您的服务器主机并向他们提供此链接——他们很可能在内部使用 OVH。

:::

**验证/临时解决方法：**

尝试通过 Web 浏览器连接到您服务器 IP 和端口——例如 `http://test.geysermc.org:19132`。连接不会起作用，但然后在同一设备上通过 Bedrock 尝试连接，应该就可以工作了。
或者，先在 Java 版本上连接到服务器，然后用同一设备在 Bedrock 上连接。

**解决方法：**

OVH：
1. 导航到 `Network interfaces`
2. 点击表格中您 IP 的 `...` 按钮 -> 然后 `...` 和 `Configure the GAME firewall` -> `Add rule` -> `Other protocol` ~~(或 `minecraftPocketEdition`（如果可用）~~
3. 将您的 Geyser 端口添加到"outgoing port"。

SoYouStart（OVH 的子公司）：
1. 点击 IP 标签。
2. 点击公共 IP 地址右侧的齿轮；选择"Game mitigation"。
3. 选择"Add a rule"。
4. 在下拉列表中选择"minecraftPocketEdition"并输入目标 UDP 端口。
5. 保存并等待几秒钟以使更改生效。

#### OVH/SoYouStart 游戏防火墙兼容性问题
OVH GAME 过滤器类型 `minecraftPocketEdition` 目前无法工作，您必须使用 `Other` 类型。

如果您想继续使用过滤器类型 `minecraftPocketEdition`，您可以通过在 Java 服务器（或 Geyser Standalone 代理）的启动标志中添加 `-DGeyser.RakSendCookie=false` 来禁用不兼容的安全功能。

有关更多信息，请参阅：
 - [OVH 基础设施路线图上的这个问题](https://github.com/ovh/infrastructure-roadmap/issues/186)
 - [实现导致不兼容的安全功能的拉取请求](https://github.com/GeyserMC/Geyser/pull/4554)

### Oracle Cloud/OCI {#oracle-cloudoci}
默认情况下，Oracle Cloud 会阻止所有传入流量，SSH 和 RDP 除外。必须在 Oracle Cloud 本身和运行 Geyser 的计算实例中解决此问题。

以下步骤假设您使用的是 Java 服务器和 Geyser 的默认端口，应相应进行调整。

1. 在 OCI Console 中找到您的计算实例
2. 点击实例的虚拟云网络（这将在"Instance details"下）
3. 在左侧，选择"Security Lists"
4. 选择安全列表之一。默认情况下只有一个安全列表存在。选择哪个安全列表添加规则并不重要。
5. 选择"Add Ingress Rules"
6. 为 Java 配置规则（可选）
   - 将"Source CIDR"设置为 `0.0.0.0/0`
   - 将"Destination Port Range"设置为 `25565-25565`
   - 选择"Another Ingress Rule"
7. 为 Geyser 配置规则
   - 将"Source CIDR"设置为 `0.0.0.0/0`
   - 将"Destination Port Range"设置为 `19132-19132`
   - 将"IP Protocol"设置为 UDP
8. 选择"Add Ingress Rules"

#### Oracle Linux {#oracle-linux}

运行以下命令以允许 Minecraft 和 Geyser 通过 OS 防火墙：

```bash
sudo firewall-cmd --add-port=25565/tcp --permanent
sudo firewall-cmd --add-port=19132/udp --permanent
sudo firewall-cmd --reload
```

#### Ubuntu {#ubuntu}

运行以下命令以允许 Minecraft 和 Geyser 通过 OS 防火墙：

```bash
sudo ufw allow 25565/tcp
sudo ufw allow 19132/udp
```
