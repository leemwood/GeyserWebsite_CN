import { translate } from "@docusaurus/Translate"
import { Providers } from "../types/providers"

// Do not modify the structure of this file without updating the extraction logic in create-providers-json.ts

const descriptionTemplates = {
    default: translate({
        id: 'providers.templates.default',
        message: "Enable `clone-remote-port` (or manually set `bedrock port` to the Java port), and connect with the Java IP and port."
    }),
    ipAndPort: translate({
        id: 'providers.templates.ip_and_port',
        message: "Enable `clone-remote-port` (or manually set `bedrock port` to the Java port), uncomment `bedrock address`, and change `0.0.0.0` to your Java server's IP. Connect with the Java IP and port."
    }),
    forwardingOption: translate({
        id: 'providers.templates.forwarding_option',
        message: "Offers a working port forwarding option."
    }),
    javaIp: translate({
        id: 'providers.templates.java_ip',
        message: "Make sure your remote address is 'auto', uncomment `bedrock address`, and change `0.0.0.0` to your Java server's IP."
    })
}

export const providersData: Providers = {
    built_in: [
        {
            name: 'Apex Hosting',
            url: 'https://apexminecrafthosting.com/',
            description: translate({
                id: 'providers.provider.apex_hosting.description',
                message: "全自动安装。在面板中进入自定义选项卡，在'Geyser 自动安装程序'选项下选择'启用'。然后，重启服务器并使用您的 Java IP 和端口连接。查看 [Apex 的文章](https://apexminecrafthosting.com/geysermc/) 获取更多详细信息。"
            })
        },
        {
            name: 'Arth Hosting',
            url: 'https://arthmc.xyz/',
            description: translate({
                id: 'providers.provider.arth_hosting.description',
                message: "Geyser is installed and configured on all servers by default. You can disable it in the 'Manage Plugins' menu."
            })
        },
        {
            name: 'Aternos',
            url: 'https://aternos.org/',
            description: translate({
                id: 'providers.provider.aternos.description',
                message: "在 Aternos 插件列表中安装 Geyser，并使用您的 Java IP 和端口连接到服务器。查看 [Aternos 的文章](https://support.aternos.org/hc/en-us/articles/360051047631) 获取更多详细信息。注意：Aternos 会自动安装最新版本的插件，但不会自动更新。要在 Aternos 上更新 Geyser，只需重新安装插件（无需卸载插件/删除插件文件）即可。"
            })
        },
        {
            name: 'Cloud Nord',
            url: 'https://cloudnord.net/',
            description: translate({
                id: 'providers.provider.cloud_nord.description',
                message: "Go to their [Crossplay Server](https://cloudnord.net/minecraftcrossplay-server-hosting/) hosting section and order your server. Instructions on how to join are provided."
            })
        },
        {
            name: 'CreeperHost',
            url: 'https://www.creeperhost.net/',
            description: translate({
                id: 'providers.provider.creeperhost.description',
                message: "Has a toggle within the control panel to automatically enable Geyser. May not be enabled by default, so you may need to toggle it and restart the server."
            })
        },
        {
            name: 'Cubes Hosting',
            url: 'https://www.cubes.host/',
            description: translate({
                id: 'providers.provider.cubes_hosting.description',
                message: "使用插件管理器安装 Geyser。然后重启服务器，Geyser 将在额外的端口上运行 - 您可以在服务器控制台中查看。可以通过支持工单设置 Geyser-Standalone。"
            })
        },
        {
            name: 'exaroton',
            url: 'https://exaroton.com/',
            description: translate({
                id: 'providers.provider.exaroton.description',
                message: "在 exaroton 插件列表中安装 Geyser，并使用您的 Java IP 和端口连接到服务器。查看 [exaroton 的文章](https://support.exaroton.com/hc/en-us/articles/360019857918-Geyser) 获取更多详细信息。"
            })
        },
        {
            name: 'GGServers',
            url: 'https://ggservers.com',
            description: translate({
                id: 'providers.provider.ggservers.description',
                message: "Can be installed to any server from their auto plugin setups. No further configuration needed."
            })
        },
        {
            name: 'Lilypad',
            url: 'https://lilypad.gg',
            description: translate({
                id: 'providers.provider.lilypad.description',
                message: "更改服务器软件时勾选'启用基岩版跨平台游戏？'选项以自动安装和配置 Geyser + Floodgate。获取更多详细信息，请访问 [lilypad.gg/bedrock](https://lilypad.gg/bedrock)。"
            })
        },
        {
            name: 'MCServerHost',
            url: 'https://mcserverhost.com/',
            description: translate({
                id: 'providers.provider.mcserverhost.description',
                message: "Under the server configuration, select 'Crossplay' to automatically install Geyser and Floodgate. Join with the connection address. To update Geyser and Floodgate, replace the plugin jars in the server manager and restart the server."
            })
        },
        {
            name: 'Minefort',
            url: 'https://minefort.com/',
            description: translate({
                id: 'providers.provider.minefort.description',
                message: "在服务器仪表板中的'连接支持'下，确保已启用'允许基岩版'。然后通过 `play.minefort.com` 连接并使用 `/server [servername]` 加入，或通过 `[servername].minefort.com` 连接。"
            })
        },
        {
            name: 'Minehut',
            url: 'https://minehut.com/',
            description: translate({
                id: 'providers.provider.minehut.description',
                message: "Connect via `bedrock.minehut.com` and do `/join [servername]`, or connect directly via `[servername].bedrock.minehut.gg`."
            })
        },
        {
            name: 'OMGServ',
            url: 'https://www.omgserv.com/en/',
            description: translate({
                id: 'providers.provider.omgserv.description',
                message: "Select Geyser in the [Install Menu](https://i.imgur.com/Gewpsrq.png), it will be automatically installed. You can enable floodgate in the [server properties on the dashboard](https://i.imgur.com/jg5mzNj.png)."
            })
        },
        {
            name: 'Physgun',
            url: 'https://physgun.com/',
            description: descriptionTemplates.default
        },
        {
            name: 'PiglinHost',
            url: 'https://piglinhost.com/',
            description: translate({
                id: 'providers.provider.piglinhost.description',
                message: "从 [跨平台服务器页面](https://piglinhost.com/minecraft-java-hosting.html) 订购。或者，通过创建 [支持工单](https://billing.piglinhost.com/submitticket.php?step=2&deptid=5) 或通过 Discord 联系他们的支持团队获取安装和配置帮助。"
            })
        },
        {
            name: 'Play Hosting',
            url: 'https://play.hosting',
            description: translate({
                id: 'providers.provider.playhosting.description',
                message: "更改服务器软件时勾选'启用基岩版跨平台游戏？'选项以自动安装和配置 Geyser + Floodgate。获取更多详细信息，请访问 [help.play.hosting/minecraft/crossplay](https://help.play.hosting/minecraft/crossplay)。"
            })
        },
        {
            name: 'Pufferfish Host',
            url: 'https://pufferfish.host/',
            description: translate({
                id: 'providers.provider.pufferfish_host.description',
                message: "Geyser is installed and configured on all servers by default."
            })
        },
        {
            name: 'Server.pro',
            url: 'https://server.pro',
            description: translate({
                id: 'providers.provider.server.pro.description',
                message: "Different instructions for different plans: On VPS, select Geyser in the [Service Type Menu](https://i.imgur.com/loSNmvu.png), Floodgate can be enabled on the dashboard configuration. For manual installation: Using a Premium or Free plan, use the same port as your Java server for the Bedrock port in the configuration file and connect that; for the Free plan, also enable the `clone-remote-port` option. If you are using a PRO or a VPS plan, you can use any port, which can be opened on the Firewall tab."
            })
        },
        {
            name: 'Snakecraft Hosting',
            url: 'https://snakecrafthosting.com/',
            description: translate({
                id: 'providers.provider.snakecraft_hosting.description',
                message: "Select 'Paper + Geyser with Floodgate' under the Jar Type at checkout to install the Geyser plugin. Players will Connect with the same IP and port as you would on Java."
            })
        },
        {
            name: 'SRKHOST',
            url: 'https://www.srkhost.eu/',
            description: translate({
                id: 'providers.provider.srkhost.description',
                message: "You can enable Geyser on the version changer page. Geyser will run on the given port by the host."
            })
        },
        {
            name: 'VemoxHost',
            url: 'https://vemoxhost.com/',
            description: translate({
                id: 'providers.provider.vemox_hosting.description',
                message: "Full automatic installation. Go to one of the panel options and select the option to enable GeyserMC. Then, restart and connect to your server using your Java IP and port."
            })
        },
        {
            name: 'Virtual Gladiators',
            url: 'https://virtualgladiators.com/',
            description: translate({
                id: 'providers.provider.virtual_gladiators.description',
                message: "Find the plugin in the control panel under the 'VG Recommended' category and restart your server. IP and port are the same as Java."
            })
        },
        {
            name: 'WiseHosting',
            url: 'https://wisehosting.com',
            description: translate({
                id: 'providers.provider.wisehosting.description',
                message: "提供自动和手动安装两种方式。在游戏面板的`属性`选项卡中找到 GeyserMC 预设。然后，点击`安装`并重启服务器。查看 [跨平台 FAQ](https://help.wisehosting.com/en/articles/13-how-to-install-geysermc-java-bedrock-crossplay-to-your-server) 获取更多详细信息。"
            })
        },
        {
            name: 'ZapHosting',
            url: 'https://zap-hosting.com/en/',
            description: translate({
                id: 'providers.provider.zaphosting.description',
                message: "Find the plugin in the control panel and restart your server. IP and port are the same as Java."
            })
        },
        {
            name: '365Hosts',
            url: 'https://365hosts.com',
            description: translate({
                id: 'providers.provider.365hosts.description',
                message: "Go to their [Minecraft: Crossplay](https://www.365hosts.com/gaming/crossplayminecraft) hosting section and order your server. Instructions on how to join are provided."
            })
        }
    ],
    support: [
        {
            name: 'Akliz',
            url: 'https://www.akliz.net/',
            description: descriptionTemplates.forwardingOption
        },
        {
            name: 'Aquatis',
            url: 'https://aquatis.host/',
            description: translate({
                id: 'providers.provider.aquatis.description',
                message: "需要打开支持工单以获取 UDP 端口，然后将其用作 `bedrock port`。"
            })
        },
        {
            name: 'BisectHosting',
            url: 'https://www.bisecthosting.com/',
            description: translate({
                id: 'providers.provider.bisecthosting.description',
                message: "您必须拥有带专用 IP 的方案。在 Geyser 配置中，取消注释 `bedrock address` 并将其设置为服务器的公共 IP（例如 `address: 51.79.129.18`）。保持端口为 `19132`。在主页选项卡下，选择'启用 UDP 网络'并重启服务器。查看 Bisect 的 [文章](https://www.bisecthosting.com/clients/index.php?rp=/knowledgebase/193/How-to-install-Geyser-and-Floodgate-on-a-Minecraft-Java-server.html) 获取完整说明。如果在按照这些说明操作后仍无法连接，请联系 Bisect 支持，因为他们据称在某些节点上禁用了 UDP。"
            })
        },
        {
            name: 'Birdflop',
            url: 'https://birdflop.com/',
            description: translate({
                id: 'providers.provider.birdflop.description',
                message: "Open an allocation in the networks tab. If you have a dedicated IP, you can open a ticket to request allocation of the default Bedrock port (19132). Update the config to use the allocated port and restart the server."
            })
        },
        {
            name: 'Bloom.Host',
            url: 'https://www.bloom.host/',
            description: translate({
                id: 'providers.provider.bloomhost.description',
                message: "查看 [Bloom 的文档](https://docs.bloom.host/plugins/geysermc/) 获取设置指南。"
            })
        },
        {
            name: 'Clovux',
            url: 'https://clovux.net/',
            description: descriptionTemplates.javaIp
        },
        {
            name: 'Consulhosting',
            url: 'https://consulhosting.nl/',
            description: descriptionTemplates.default
        },
        {
            name: 'Craft-Hosting',
            url: 'https://craft-hosting.ru/',
            description: translate({
                id: 'providers.provider.craft-hosting.description',
                message: "Set the Bedrock port to the Java server's port and connect with that port; note that this provider appears to only provide service in Russia."
            })
        },
        {
            name: 'DedicatedMC',
            url: 'https://dedicatedmc.io/',
            description: translate({
                id: 'providers.provider.dedicatedmc.description',
                message: "查看 [DedicatedMC 的文档](https://docs.dedicatedmc.io/plugins-mods/how-to-install-geysermc/) 获取具体设置指南。"
            })
        },
        {
            name: 'ElfIDC',
            url: 'https://www.elfidc.com/',
            description: translate({
                id: 'providers.provider.elfidc.description',
                message: "When placing an order, choose Paper/Spigot + Geyser, which will automatically install the Geyser plugin. Connect with the Java server's IP and port. Note: This provider only provides service in China."
            })
        },
        {
            name: 'EnviroMC',
            url: 'https://enviromc.host/',
            description: descriptionTemplates.default
        },
        {
            name: 'ExtraVM',
            url: 'https://extravm.com/',
            description: descriptionTemplates.javaIp
        },
        {
            name: 'FadeHost',
            url: 'https://fadehost.com/',
            description: translate({
                id: 'providers.provider.fadehost.description',
                message: "将基岩版端口设置为 Java 服务器的端口，并使用该端口连接。或者，购买专用 IP 地址以支持不同的端口。"
            })
        },
        {
            name: 'FakaHeda',
            url: 'https://fakaheda.eu/',
            description: translate({
                id: 'providers.provider.fakaheda.description',
                message: "Set the `bedrock port` in the config to the Java server's port or use one of the available ports allocated to your server, and connect with that port."
            })
        },
        {
            name: 'FalixNodes',
            url: 'https://falixnodes.net/',
            description: translate({
                id: 'providers.provider.falixnodes.description',
                message: "Open a port yourself on the network page in the game panel, then use that port in the bedrock section of the Geyser config."
            })
        },
        {
            name: 'Ferox Hosting',
            url: 'https://feroxhosting.nl',
            description: translate({
                id: 'providers.provider.ferox_hosting.description',
                message: "在面板中自行开放端口，并查看 [知识库文章](https://feroxhosting.nl/kb/) 了解如何安装和配置 Geyser。"
            })
        },
        {
            name: 'Fluctis Hosting',
            url: 'https://fluctishosting.com',
            description: descriptionTemplates.default
        },
        {
            name: 'FREAKHOSTING',
            url: 'https://freakhosting.com/',
            description: descriptionTemplates.default
        },
        {
            name: 'FreeMcServer.net',
            url: 'https://freemcserver.net',
            description: descriptionTemplates.default
        },
        {
            name: 'Fusion Hosting',
            url: 'https://fusionhostingltd.co.uk',
            description: translate({
                id: 'providers.provider.fusion_hosting.description',
                message: "Get Geyser as a plugin. Use the same port as your Java server for the Bedrock port in your config (either by setting it yourself, or enabling “clone-remote-port”) and connect with the same IP and port as you would on Java or create a port in the Network tab on the panel & use this for Geyser."
            })
        },
        {
            name: 'GameHosting.it',
            url: 'https://www.gamehosting.it/',
            description: descriptionTemplates.default
        },
        {
            name: 'GameProHost',
            url: 'https://gameprohost.com/',
            description: descriptionTemplates.default
        },
        {
            name: 'GPortal',
            url: 'https://www.g-portal.com/',
            description: translate({
                id: 'providers.provider.gportal.description',
                message: "You have to adjust the port according to your query port. Scheme: Query port: xxx65. The ports from xxx66 to xxx70 are available. For example, if your query port is 12365, then Geyser can only run under the port range 12366-12370. Furthermore, you have to change the 'Bedrock' 'address' in the Geyser config to your IP address. You can find it above your query port. Don't forget to delete the # in front of `address'."
            })
        },
        {
            name: 'Heavynode',
            url: 'https://www.heavynode.com/',
            description: translate({
                id: 'providers.provider.heavynode.description',
                message: "在控制面板的网络部分自行开放端口。端口 `19132` 仅适用于专用 IP（联系支持），否则您需要使用随机分配的端口。要解决位于加拿大和英国的服务器的进一步连接问题，请使用 [这里](https://wiki.geysermc.org/geyser/port-forwarding/#ovh-and-soyoustart) 找到的信息联系他们的支持团队。"
            })
        },
        {
            name: 'Hicoria',
            url: 'https://hicoria.com/en/',
            description: translate({
                id: 'providers.provider.hicoria.description',
                message: "Use one of the available ports allocated for your server for the Bedrock port in your config and connect with that port."
            })
        },
        {
            name: 'Hosterfy',
            url: 'https://www.hosterfy.com/',
            description: translate({
                id: 'providers.provider.hosterfy.description',
                message: "Use the same port as your Java server for the Bedrock port in your config (either by setting it yourself, or enabling `clone-remote-port`) and connect with the same IP and port as you would on Java. You can also ask for a new port."
            })
        },
        {
            name: 'HostEZ',
            url: 'https://hostez.io/minecraft',
            description: translate({
                id: 'providers.provider.hostez.description',
                message: "支持 Geyser 插件自行安装或应要求安装并使用其专用端口。"
            })
        },
        {
            name: 'Host Havoc',
            url: 'https://hosthavoc.com/minecraft',
            description: descriptionTemplates.default
        },
        {
            name: 'Hosting-Minecraft',
            url: 'https://hosting-minecraft.pro/',
            description: translate({
                id: 'providers.provider.hosting-minecraft.description',
                message: 'Create a new port in the "Allocations" tab and use that port in the config.'
            })
        },
        {
            name: 'HumbleServers',
            url: 'https://humbleservers.com/',
            description: translate({
                id: 'providers.provider.humbleservers.description',
                message: "Set the Bedrock port to the Java server's port, or to one of the two extra ports, and connect with that port. If the subdomain doesn't work, use your regular numbered IP address."
            })
        },
        {
            name: 'KeKsHost',
            url: 'https://kekshost.com/en/',
            description: translate({
                id: 'providers.provider.kekshost.description',
                message: "Use the default bedrock port (19132) and the server ip to connect on Bedrock edition. No changes to the Geyser config are needed. You can also ask for a new port and use it instead."
            })
        },
        {
            name: 'Kinetic Hosting',
            url: 'https://kinetichosting.net/',
            description: translate({
                id: 'providers.provider.kinetic_hosting.description',
                message: "在网络和端口页面中开放端口，并将该端口设置为 Geyser 配置中的 `bedrock port`。或者，通过在配置中启用 `clone-remote-port` 选项来使用 Java 服务器的端口。使用与 Java 版相同的 IP 和您选择的端口进行连接。更多信息请参见主机的 [支持文章](https://www.kinetichosting.net/articles/minecraft-java/plugins/geyser)。"
            })
        },
        {
            name: 'MC-HOST24.de',
            url: 'https://mc-host24.de/',
            description: descriptionTemplates.ipAndPort
        },
        {
            name: 'MCFORFREE.DE',
            url: 'https://mcforfree.de/',
            description: translate({
                id: 'providers.provider.mcforfree.de.description',
                message: 'Create an extra port in the game panel, then change the `port` in the `bedrock` section to the newly created port. To connect on Bedrock edition, use the Java server\'s IP and the port you\'ve created. It may take a few minutes for the port to become active.'
            })
        },
        {
            name: 'MCPEhost.ru',
            url: 'https://mcpehost.ru',
            description: translate({
                id: 'providers.provider.mcpehost.ru.description',
                message: "Create an additional port in the server settings and enable UDP protocol, then use that as the `bedrock port` in the config. Connect with the Java IP and that new port."
            })
        },
        {
            name: 'Meloncube',
            url: 'https://www.meloncube.net/',
            description: translate({
                id: 'providers.provider.meloncube.description',
                message: "联系支持团队获取用于 Geyser 的 UDP 端口。将该端口设置为 `bedrock port`，并使用该端口连接。"
            })
        },
        {
            name: 'MineStrator',
            url: 'https://minestrator.com/',
            description: descriptionTemplates.default
        },
        {
            name: 'Minecraft-Hosting.pro',
            url: 'https://www.minecraft-hosting.pro/',
            description: descriptionTemplates.default
        },
        {
            name: 'Modrinth Servers',
            url: 'https://modrinth.com/servers',
            description: translate({
                id: 'providers.provider.modrinth.description',
                message: "查看 [Modrinth 的文档](https://support.modrinth.com/en/articles/10986613-adding-geyser-to-your-server) 获取具体设置指南。"
            })
        },
        {
            name: 'Netbela',
            url: 'https://netbela.nl/store/minecraft',
            description: translate({
                id: 'providers.provider.netbela.description',
                message: "Install Geyser with the dedicated Plugin installer. Use the same port as your Java server in your config. Connect with the same address and port as your Java server."
            })
        },
        {
            name: 'NFOservers',
            url: 'https://nfoservers.com/',
            description: translate({
                id: 'providers.provider.nfoservers.description',
                message: "Uncomment and set `bedrock address` to the server IP in the Geyser config file. As an alternative, you can run Geyser standalone separately on an Unmanaged VDS."
            })
        },
        {
            name: 'Nitrado',
            url: 'https://nitrado.net',
            description: translate({
                id: 'providers.provider.nitrado.description',
                message: "将 Geyser 作为插件安装。将 Java 服务器的端口加 4。查看 [这里](https://wiki.nitrado.net/en/How_to_install_GeyserMC_and_Floodgate) 获取具体设置指南。"
            })
        },
        {
            name: 'Nodecraft',
            url: 'https://nodecraft.com',
            description: translate({
                id: 'providers.provider.nodecraft.description',
                message: "Use the default server port and `0.0.0.0` or your server IP as the host address."
            })
        },
        {
            name: 'OrionNodes',
            url: 'https://orionnodes.com',
            description: translate({
                id: 'providers.provider.orionnodes.description',
                message: "Open a port yourself from the network page in the game panel, use that port in the bedrock section of the Geyser config."
            })
        },
        {
            name: 'PaperNodes',
            url: 'https://papernodes.com/',
            description: translate({
                id: 'providers.provider.papernodes.description',
                message: 'Enable clone-remote-port (or manually set the Bedrock port to the Java port), and connect with the Java IP and port. Alternatively, you can contact the host to request an additional port or a dedicated IP.'
            })
        },
        {
            name: 'Pebblehost',
            url: 'https://pebblehost.com/',
            description: translate({
                id: 'providers.provider.pebblehost.description',
                message: "启用 `clone-remote-port`（或手动将 `bedrock port` 设置为 Java 端口），并使用 Java IP 和端口连接。查看 [此视频](https://youtu.be/v9lC80UBZF4) 获取 PebbleHost 特定教程。"
            })
        },
        {
            name: 'PlanetNode',
            url: 'https://planetnode.net',
            description: descriptionTemplates.default
        },
        {
            name: 'PUBCS',
            url: 'https://pubcs.com',
            description: translate({
                id: 'providers.provider.pubcs.description',
                message: "将基岩版端口设置为 Java 服务器的端口，并使用该端口连接，或升级到包含专用 IP 地址的方案以支持不同的端口。"
            })
        },
        {
            name: 'RamShard',
            url: 'https://ramshard.com/',
            description: descriptionTemplates.default
        },
        {
            name: 'Redline Hosting',
            url: 'https://redlinehosting.net/',
            description: descriptionTemplates.default
        },
        {
            name: 'Revivenode',
            url: 'https://revivenode.com/',
            description: translate({
                id: 'providers.provider.revivenode.description',
                message: "将 `bedrock port` 设置为 Java 服务器的端口（可以手动设置，或启用 `clone-remote-port`）。您还可以在 `network tab` 中创建辅助端口并使用该端口。要解决随机的 `无法连接` 问题，请查看 [这里](https://wiki.geysermc.org/geyser/port-forwarding/#ovh-and-soyoustart)。"
            })
        },
        {
            name: 'ScalaCube',
            url: 'https://scalacube.com/',
            description: descriptionTemplates.ipAndPort
        },
        {
            name: 'Shockbyte',
            url: 'https://shockbyte.com/',
            description: translate({
                id: 'providers.provider.shockbyte.description',
                message: "The port will be automatically set after you download Geyser and restart the server. Connect with the same IP and port as on Java. For Geyser Standalone installation instructions, see [here](https://shockbyte.com/billing/knowledgebase/173/Introduction-to-GeyserMCorDragonProxy-How-GeyserMC-Works.html)."
            })
        },
        {
            name: 'Skynode.pro',
            url: 'https://skynode.pro/',
            description: translate({
                id: 'providers.provider.skynode.pro.description',
                message: "Go to 'Server Details', add a new port, and set the `bedrock port` in your config to that port. Connect with it and the Java server's address."
            })
        },
        {
            name: 'Sparked Host',
            url: 'https://sparkedhost.com',
            description: descriptionTemplates.default
        },
        {
            name: 'STIPE',
            url: 'https://stipe.com.au/',
            description: translate({
                id: 'providers.provider.stipe.description',
                message: "Set the Bedrock port to the Java server's port and connect with that port; note that this provider only provides service in Australia."
            })
        },
        {
            name: 'SyntexHosting',
            url: 'https://syntexhosting.com/',
            description: translate({
                id: 'providers.provider.syntexhosting.description',
                message: "Set the Bedrock port to the Java server's port and connect with that port, or request a (free) additional port."
            })
        },
        {
            name: 'The Minecraft Hosting',
            url: 'https://theminecrafthosting.com/',
            description: translate({
                id: 'providers.provider.the_minecraft hosting.description',
                message: "Try using `19132` as the Bedrock port, if that does not work, use the same Java server's port for the `bedrock port` in your config and connect with that port and the Java server's IP."
            })
        },
        {
            name: 'TNAHosting',
            url: 'https://tnahosting.net/',
            description: descriptionTemplates.default
        },
        {
            name: 'TurboHost',
            url: 'https://turbohost.nl/',
            description: descriptionTemplates.default
        },
        {
            name: 'UltimateSRV',
            url: 'https://ultimatesrv.com/',
            description: descriptionTemplates.default
        },
        {
            name: 'VexyHost',
            url: 'https://vexyhost.com/',
            description: descriptionTemplates.default
        },
        {
            name: 'Volcano Hosting',
            url: 'https://www.volcanohosting.net/',
            description: descriptionTemplates.default
        },
        {
            name: 'VoltHosting',
            url: 'https://www.volthosting.co.uk/',
            description: translate({
                id: 'providers.provider.volthosting.description',
                message: "启用 clone-remote-port（或手动将基岩版端口设置为 Java 端口），并使用 Java IP 和端口连接。或者，申请额外端口，或购买专用 IP 地址。如果您仍然遇到问题，请 [联系 VoltHosting 支持](https://volthosting.co.uk/contact.html) 获取进一步帮助。"
            })
        },
        {
            name: 'Vultam',
            url: 'https://vultam.net/',
            description: translate({
                id: 'providers.provider.vultam.description',
                message: "在 Geyser 配置中启用 `clone-remote-port`，并使用 Java IP 和端口连接。或者，从控制面板的网络部分为您的服务器分配额外端口，并将其设置为 Geyser 配置中的 `bedrock.port`。使用该端口从基岩版连接。如需帮助，请联系 [Vultam 支持](https://clients.vultam.net/submitticket.php?step=2&deptid=1)。"
            })
        },
        {
            name: 'Wasabi Hosting',
            url: 'https://wasabihosting.com',
            description: translate({
                id: 'providers.provider.wasabihosting.description',
                message: "Install Geyser with the plugin installer. Use the same port as your Java server in the Geyser config. Connect with the same address and port as your Java server."
            })
        },
        {
            name: "Wepwawet",
            url: "https://wepwawet.net/",
            description: translate({
                id: 'providers.provider.wepwawet.description',
                message: "Add a new port in the Network tab. Use this new port as the bedrock port."
            })
        },
        {
            name: 'WinterNode',
            url: 'https://winternode.com',
            description: translate({
                id: 'providers.provider.winternode.description',
                message: "Set the Bedrock port to the Java server's port and connect with that port. Alternatively, request an additional port, or buy a dedicated IP address."
            })
        },
        {
            name: 'WitherHosting',
            url: 'https://witherhosting.com/',
            description: translate({
                id: 'providers.provider.witherhosting.description',
                message: "使用 Java 服务器的端口，或在面板中的端口管理器创建端口并将其用于基岩版。参考主机的 [支持文章](https://support.witherhosting.com/en/article/how-to-install-and-use-geysermc-1xn5l6v/) 获取更多信息。"
            })
        }
    ],
    no_support: [
        {
            name: 'MyArena',
            url: 'https://www.myarena.ru/',
            description: translate({
                id: 'providers.provider.myarena.description',
                message: "Does seem to be working, but the Java version is too old in order for Geyser to run properly."
            })
        },
        {
            name: 'NiCraft',
            url: 'https://www.ni-host.com/',
            description: translate({
                id: 'providers.provider.nicraft.description',
                message: "不提供基岩版支持，并受到 [防火墙配置问题](https://wiki.geysermc.org/geyser/port-forwarding/#ovh-and-soyoustart) 的影响，这阻止了大多数玩家加入。"
            })
        },
        {
            name: 'Feather',
            url: 'https://feathermc.com/',
            description: translate({
                id: 'providers.provider.feather.description',
                message: "他们的代理网络不支持 UDP。因此，不支持 Geyser。作为替代方案，请设置 paper 服务器，例如使用 playit.gg 而不是端口转发。"
            })
        }
    ]
}
