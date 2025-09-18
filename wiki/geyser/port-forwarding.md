---
title: 端口转发
description: 有关如何设置 Geyser 所需的 UDP 端口转发的信息。
---

# 端口转发
本页面包含有关如何在自托管时设置 Geyser 工作所需的端口转发的信息。
还有针对特定配置的指南，例如 Docker/Pterodactyl，或特定 VPS/KVM 提供商（如 OVH 或 Oracle Cloud）的指南。 

:::caution

如果您使用的是 Minecraft 服务器托管提供商（例如 Aternos 或 Nodecraft），您应该参考设置页面上的托管提供商设置。

:::

## 在 Linux/Windows/macOS 上的端口转发 {#port-forwarding-on-linuxwindowsmacos}
为了允许其他人在您的服务器上玩，您需要在托管 Geyser 的设备上设置端口转发。
此外，如果您希望服务器可以在您自己的家庭网络之外访问，您还需要在路由器/调制解调器上转发端口（换句话说，允许并将该端口上的流量路由到正确的机器）。
查看[此处](https://www.howtogeek.com/66214/how-to-forward-ports-on-your-router/)或[此处](https://www.lifewire.com/how-to-port-forward-4163829)以获取有用的指南。
请注意：如果您没有静态 IP 地址，您的 IP 地址可能会随时间变化。 

:::info

Some ISPs (Internet Service Providers) block certain ports, or don't allow you to open ports (e.g. by using CGNAT, which doesn't allow you to open a port with a dynamic IP).
Other ISPs may require you to pay extra for a static IP address.   
As an alternative to port forwarding, you can use <a href="/wiki/geyser/playit-gg/">playit.gg</a> to create a tunnel.

:::

### Windows {#windows}
To open a port on Windows, you will need to open the port through the Windows Firewall. There are multiple ways to do this:

- `Powershell` (recommended)

  To open a port on UDP (in our example, port 19132), run the following command in an administrator Powershell:
  ```powershell
  New-NetFirewallRule -DisplayName "Geyser" -Direction Inbound -Protocol UDP -LocalPort 19132 -Action Allow
  ```
  Running this command creates a rule named "Geyser" that allows UDP traffic on port 19132.


- Windows Defender Firewall with Advanced Security (GUI)
  1. Search for "Windows Defender Firewall with Advanced Security" in the start menu, and open it. ([Image](/img/wiki/port-forwarding/windows-1.png))
  2. Click on "Inbound Rules" in the left sidebar. ([Image](/img/wiki/port-forwarding/windows-2.png))
  3. Click on "New Rule..." in the right sidebar. ([Image](/img/wiki/port-forwarding/windows-2.png))
  4. Select "Port" as the rule type and click "Next". ([Example](/img/wiki/port-forwarding/windows-3.png))
  5. Select "UDP" and "Specific local ports", and enter the port you want to open (in our example, 19132). Click "Next". ([Example](/img/wiki/port-forwarding/windows-4.png))
  6. Select "Allow the connection" and click "Next". ([Example](/img/wiki/port-forwarding/windows-5.png))
  7. Select the profiles you want to apply the rule to (e.g. "Domain", "Private", "Public"), and click "Next". ([Example](/img/wiki/port-forwarding/windows-6.png))
  8. Enter a name for the rule (e.g. "Geyser"), and click "Finish". ([Image](/img/wiki/port-forwarding/windows-7.png))

### Linux {#linux}
Different Linux distributions, even different VPS providers ship and configure different firewalls. In the following examples, we will use `19132` as the port to open, but you should replace this with the port you are using for Geyser.

- `ufw` is a simple firewall front-end for iptables that is commonly used on Ubuntu and Debian. To open a port on UDP, run the following command:
  ```bash
  sudo ufw allow 19132/udp
  ```
  Then, reload the firewall with `sudo ufw reload`, and see all open rules with `sudo ufw status`.   
  Further helpful guides: [DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-setup-a-firewall-with-ufw-on-an-ubuntu-and-debian-cloud-server), [Baeldung](https://www.baeldung.com/linux/uncomplicated-firewall)

- `firewalld` Add a port on UDP by running:
  ```bash
  sudo firewall-cmd --zone=public --permanent --add-port=19132/udp
  ``` 
  Then, reload the firewall with `sudo firewall-cmd --reload`, and see all open rules with `sudo firewall-cmd --list-all`.   
  Further helpful guides: [DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-using-firewalld-on-centos-7)

- `iptables` is a common firewall that is used on many Linux distributions. To open a port on UDP, run the following command:
  ```bash
  sudo iptables -A INPUT -p udp --dport 19132 -j ACCEPT
  ```
  Then, save the firewall with `sudo iptables-save`, and see all open rules with `sudo iptables -L`.   
  Further helpful guides for iptables: [DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-using-iptables-on-ubuntu-14-04), [Ubuntu](https://help.ubuntu.com/community/IptablesHowTo)

### macOS {#macos}
You will need to disable `Block all incoming connections` in your Firewall settings, as that will block any connections and won't allow you to make exceptions. 
To allow incoming connections, click `Allow` when getting [these prompts](/img/wiki/port-forwarding/macos_warning.png).
If you are still facing issues, see Apple's official guide [here](https://support.apple.com/guide/mac-help/MH11783) to open a port on macOS.

## Using Docker or Pterodactyl {#using-docker-or-pterodactyl}
In addition to port forwarding the port in your server's firewall (and, if applicable, your router/modem), you will need to assign the port in Docker/Pterodactyl.

### Pterodactyl {#pterodactyl}
Make sure to allocate the port to the server in the Pterodactyl panel's `Network` tab, additionally to port forwarding the port. 
See [here](https://pterodactyl.io/community/games/minecraft.html#allocations-in-the-panel) for more information.

![Pterodactyl panel, Network section](/img/wiki/port-forwarding/pterodactyl-1.png)

There are also different Geyser eggs for Pterodactyl, which can be found [here](https://github.com/GeyserMC/pterodactyl-stuff).

:::caution

If you are not able to allocate ports in the Pterodactyl panel, you will need to contact your server host to allocate one for you or try to use an existing port allocation.

:::

### Docker {#docker}
For Geyser to work under Docker (e.g. using [Itzg's Docker image](https://github.com/itzg/docker-minecraft-server)), you will need to add the Geyser port on UDP to the docker-compose file. This is done by adding the following to the `ports` section:
```yaml
ports:
    - "25565:25565"
    - "19132:19132/udp"
```
The additional `/udp` suffix is required so that the port is exposed on UDP. If you want to run the Java server and Geyser on the same port, the following would work:
```yaml
ports:
    - "25565:25565"
    - "25565:25565/udp"
```
Alternatively, add another port with the `-p 19132:19132/udp` flag to the docker run command.


## Issues with specific VPS/KVM providers {#issues-with-specific-vpskvm-providers}
Some providers, such as OVH, Oracle Cloud, and SoYouStart, have a firewall that blocks UDP ports by default/in most cases.

### OVH and SoYouStart {#ovh-and-soyoustart}
By default, OVHs firewall requires a TCP ping to the server before allowing UDP connections. This is not possible with Geyser, so you will need to disable the firewall.

:::caution

If you do not have access to these firewall settings, but got linked to this page, please contact your server host and provide them with this link - they are likely using OVH internally.

:::

**To verify/temporary work around it:** 

Attempt to connect to your servers IP and port through a web browser - for example, `http://test.geysermc.org:19132`. Connecting won't work, but then try connecting through Bedrock on that same device, and it should work.
Alternatively, try connecting to the server first on Java edition, then on Bedrock with the same device.

**To resolve it:**

OVH:
1. Navigate to `Network interfaces`
2. Click on the `...` button on the table for your IP -> then `...` and `Configure the GAME firewall` -> `Add rule` -> `Other protocol` ~~(or `minecraftPocketEdition` if available)~~
3. Add your Geyser port into `outgoing port`.

SoYouStart (subsidiary of OVH):
1. Click the IP tab.
2. Click the gear at the right of the public IP address; select "Game mitigation".
3. Pick "Add a rule".
4. Select "minecraftPocketEdition" in the dropdown list and enter the target UDP ports.
5. Save and wait a few seconds for the changes to come into effect.

#### OVH/SoYouStart Game Firewall Incompatibility Issue
The OVH GAME filter type `minecraftPocketEdition` currently does not work and you must use the `Other` type.  

If you would like to continue using the filter type `minecraftPocketEdition`, you may disable the incompatible security feature by adding `-DGeyser.RakSendCookie=false` to your Java server's (or Geyser Standalone proxy's) startup flags.

For more information see:  
 - [This issue on OVH's infrastructure roadmap](https://github.com/ovh/infrastructure-roadmap/issues/186)  
 - [The pull request which implemented the security feature that caused the incompatibility](https://github.com/GeyserMC/Geyser/pull/4554)

### Oracle Cloud/OCI {#oracle-cloudoci}
By default, Oracle Cloud will block all incoming traffic except for SSH and RDP. This must be resolved within Oracle Cloud itself and the Compute Instance running Geyser.

The steps below assume that you are using the default ports for the Java server and Geyser, and should be adjusted accordingly.

1. Find your Compute Instance in the OCI Console
2. Click on the instances Virtual Cloud Network (this will be under "Instance details")
3. On the left-hand side, select "Security Lists"
4. Select one of the security lists. By default only one security list will exist. It doesn't matter which security list we add the rules to.
5. Select "Add Ingress Rules"
6. Configure rules for Java (optional)
   - Set "Source CIDR" to `0.0.0.0/0`
   - Set "Destination Port Range" to `25565-25565`
   - Select "Another Ingress Rule"
7. Configure rules for Geyser
   - Set "Source CIDR" to `0.0.0.0/0`
   - Set "Destination Port Range" to `19132-19132`
   - Set "IP Protocol" to UDP
8. Select "Add Ingress Rules"

#### Oracle Linux {#oracle-linux}

Run the following commands to allow Minecraft and Geyser through the OS firewall:

```bash
sudo firewall-cmd --add-port=25565/tcp --permanent
sudo firewall-cmd --add-port=19132/udp --permanent
sudo firewall-cmd --reload
```

#### Ubuntu {#ubuntu}

1. Remove/comment out `-A INPUT -j REJECT --reject-with icmp-host-prohibited` in the `/etc/iptables/rules.v4` file.
2. Run the following commands to fix `ufw`:
```bash
sudo -i
iptables-restore < /etc/iptables/rules.v4
```
