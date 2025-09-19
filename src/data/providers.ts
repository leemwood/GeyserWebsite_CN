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
                message: "Geyser已默认安装并配置在所有服务器上。您可以在'管理插件'菜单中禁用它。"
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
                message: "前往他们的[跨平台服务器](https://cloudnord.net/minecraftcrossplay-server-hosting/)托管部分并订购您的服务器。提供了加入说明。"
            })
        },
        {
            name: 'CreeperHost',
            url: 'https://www.creeperhost.net/',
            description: translate({
                id: 'providers.provider.creeperhost.description',
                message: "在控制面板中有一个切换开关来自动启用Geyser。可能默认未启用，因此您可能需要切换它并重启服务器。"
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
                message: "可以从他们的自动插件设置安装到任何服务器。无需进一步配置。"
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
                message: "在服务器配置下，选择'跨平台'以自动安装Geyser和Floodgate。使用连接地址加入。要更新Geyser和Floodgate，请在服务器管理器中替换插件jar文件并重启服务器。"
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
                message: "通过`bedrock.minehut.com`连接并执行`/join [servername]`，或直接通过`[servername].bedrock.minehut.gg`连接。"
            })
        },
        {
            name: 'OMGServ',
            url: 'https://www.omgserv.com/en/',
            description: translate({
                id: 'providers.provider.omgserv.description',
                message: "在[安装菜单](https://i.imgur.com/Gewpsrq.png)中选择Geyser，它将自动安装。您可以在[仪表板上的服务器属性](https://i.imgur.com/jg5mzNj.png)中启用floodgate。"
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
                message: "Geyser默认安装并配置在所有服务器上。"
            })
        },
        {
            name: 'Server.pro',
            url: 'https://server.pro',
            description: translate({
                id: 'providers.provider.server.pro.description',
                message: "不同方案的不同说明：在VPS上，在[服务类型菜单](https://i.imgur.com/loSNmvu.png)中选择Geyser，可以在仪表板配置中启用Floodgate。对于手动安装：使用高级或免费方案时，在配置文件中将Bedrock端口设置为与Java服务器相同的端口并连接；对于免费方案，还要启用`clone-remote-port`选项。如果您使用的是PRO或VPS方案，可以使用任何端口，可以在防火墙选项卡中打开。"
            })
        },
        {
            name: 'Snakecraft Hosting',
            url: 'https://snakecrafthosting.com/',
            description: translate({
                id: 'providers.provider.snakecraft_hosting.description',
                message: "在结账时在Jar类型下选择'Paper + Geyser with Floodgate'以安装Geyser插件。玩家将使用与Java版相同的IP和端口连接。"
            })
        },
        {
            name: 'Sparked Host',
            url: 'https://sparkedhost.com/',
            description: translate({
                id: 'providers.provider.sparked_host.description',
                message: '您可以在版本更改页面上启用Geyser。Geyser将在主机提供的端口上运行。'
            })
        },
        {
            name: 'Stipe Hosting',
            url: 'https://stipehosting.com/',
            description: translate({
                id: 'providers.provider.stipe_hosting.description',
                message: '全自动安装。进入面板选项之一，选择启用GeyserMC的选项。然后，重启并使用您的Java IP和端口连接到服务器。'
            })
        },
        {
            name: 'Triassic Hosting',
            url: 'https://triassichosting.com/',
            description: translate({
                id: 'providers.provider.triassic_hosting.description',
                message: '在控制面板的“VG推荐”类别下找到插件并重启服务器。IP和端口与Java版相同。'
            })
        },
        {
            name: 'VillagerHost',
            url: 'https://villagerhost.net/',
            description: translate({
                id: 'providers.provider.villagerhost.description',
                message: '提供自动和手动安装两种方式。在游戏面板的`属性`选项卡中找到 GeyserMC 预设。然后，点击`安装`并重启服务器。查看 [跨平台 FAQ](https://help.wisehosting.com/en/articles/13-how-to-install-geysermc-java-bedrock-crossplay-to-your-server) 获取更多详细信息。'
            })
        },
        {
            name: 'WinterNode',
            url: 'https://winternode.com/',
            description: translate({
                id: 'providers.provider.winternode.description',
                message: '在控制面板中找到插件并重启服务器。IP和端口与Java版相同。'
            })
        },
        {
            name: 'XHost',
            url: 'https://xhost.is/',
            description: translate({
                id: 'providers.provider.xhost.description',
                message: '需要打开支持工单以获取 UDP 端口，然后将其用作 `bedrock port`。'
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
                message: "在服务器配置下，选择'跨平台'以自动安装Geyser和Floodgate。使用连接地址加入。要更新Geyser和Floodgate，请在服务器管理器中替换插件jar文件并重启服务器。"
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
                message: "通过`bedrock.minehut.com`连接并执行`/join [servername]`，或直接通过`[servername].bedrock.minehut.gg`连接。"
            })
        },
        {
            name: 'OMGServ',
            url: 'https://www.omgserv.com/en/',
            description: translate({
                id: 'providers.provider.omgserv.description',
                message: "在[安装菜单](https://i.imgur.com/Gewpsrq.png)中选择Geyser，它将自动安装。您可以在[仪表板上的服务器属性](https://i.imgur.com/jg5mzNj.png)中启用floodgate。"
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
                message: "Geyser默认安装并配置在所有服务器上。"
            })
        },
        {
            name: 'Server.pro',
            url: 'https://server.pro',
            description: translate({
                id: 'providers.provider.server.pro.description',
                message: "不同方案的不同说明：在VPS上，在[服务类型菜单](https://i.imgur.com/loSNmvu.png)中选择Geyser，可以在仪表板配置中启用Floodgate。对于手动安装：使用高级或免费方案时，在配置文件中将Bedrock端口设置为与Java服务器相同的端口并连接；对于免费方案，还要启用`clone-remote-port`选项。如果您使用的是PRO或VPS方案，可以使用任何端口，可以在防火墙选项卡中打开。"
            })
        },
        {
            name: 'Snakecraft Hosting',
            url: 'https://snakecrafthosting.com/',
            description: translate({
                id: 'providers.provider.snakecraft_hosting.description',
                message: "在结账时在Jar类型下选择'Paper + Geyser with Floodgate'以安装Geyser插件。玩家将使用与Java版相同的IP和端口连接。"
            })
        },
        {
            name: 'SRKHOST',
            url: 'https://www.srkhost.eu/',
            description: translate({
                id: 'providers.provider.srkhost.description',
                message: "您可以在版本更改页面上启用 Geyser。Geyser 将在主机提供的端口上运行。"
            })
        },
        {
            name: 'VemoxHost',
            url: 'https://vemoxhost.com/',
            description: translate({
                id: 'providers.provider.vemox_hosting.description',
                message: "全自动安装。进入面板选项之一，选择启用 GeyserMC 的选项。然后，重启并使用您的 Java IP 和端口连接到服务器。"
            })
        },
        {
            name: 'Virtual Gladiators',
            url: 'https://virtualgladiators.com/',
            description: translate({
                id: 'providers.provider.virtual_gladiators.description',
                message: "在控制面板的“VG 推荐”类别下找到插件并重启服务器。IP 和端口与 Java 版相同。"
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
                message: "在控制面板中找到插件，然后重新启动您的服务器。IP 和端口与 Java 相同。"
            })
        },
        {
            name: '365Hosts',
            url: 'https://365hosts.com',
            description: translate({
                id: 'providers.provider.365hosts.description',
                message: "转到他们的 [Minecraft：跨平台](https://www.365hosts.com/gaming/crossplayminecraft) 托管部分并订购您的服务器。提供了如何加入的说明。"
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
                message: "在网络选项卡中打开分配。如果您有专用 IP，可以打开工单以请求分配默认的基岩版端口 (19132)。更新配置以使用分配的端口，然后重新启动服务器。"
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
                message: "将基岩版端口设置为 Java 服务器的端口，并使用该端口连接；请注意，此提供商似乎仅在俄罗斯提供服务。"
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
                message: "下单时，选择 Paper/Spigot + Geyser，这将自动安装 Geyser 插件。使用 Java 服务器的 IP 和端口连接。注意：此提供商仅在中国提供服务。"
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
                message: "将配置中的 `bedrock port` 设置为 Java 服务器的端口，或使用分配给您的服务器的可用端口之一，并使用该端口连接。"
            })
        },
        {
            name: 'FalixNodes',
            url: 'https://falixnodes.net/',
            description: translate({
                id: 'providers.provider.falixnodes.description',
                message: "在游戏面板中的网络页面上自行打开端口，然后在 Geyser 配置的基岩版部分中使用该端口。"
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
                message: "将 Geyser 作为插件获取。在配置中为基岩版端口使用与 Java 服务器相同的端口（通过自行设置或启用 `clone-remote-port`），并使用与 Java 版相同的 IP 和端口连接，或在面板的网络选项卡中创建端口并用于 Geyser。"
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
                message: "您需要根据查询端口调整端口。方案：查询端口：xxx65。端口 xxx66 到 xxx70 可用。例如，如果您的查询端口是 12365，那么 Geyser 只能在端口范围 12366-12370 下运行。此外，您需要将 Geyser 配置中的 'Bedrock' 'address' 更改为您的 IP 地址。您可以在查询端口上方找到它。不要忘记删除 `address` 前面的 #。",
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
                message: "使用为您的服务器分配的可用端口之一作为配置中的基岩版端口，并使用该端口连接。"
            })
        },
        {
            name: 'Hosterfy',
            url: 'https://www.hosterfy.com/',
            description: translate({
                id: 'providers.provider.hosterfy.description',
                message: "在配置中为基岩版端口使用与 Java 服务器相同的端口（通过自行设置或启用 `clone-remote-port`），并使用与 Java 版相同的 IP 和端口连接。您也可以申请新端口。"
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
                message: '在“分配”选项卡中创建新端口，并在配置中使用该端口。'
            })
        },
        {
            name: 'HumbleServers',
            url: 'https://humbleservers.com/',
            description: translate({
                id: 'providers.provider.humbleservers.description',
                message: "将基岩版端口设置为 Java 服务器的端口，或两个额外端口之一，并使用该端口连接。如果子域名不起作用，请使用您的常规数字 IP 地址。"
            })
        },
        {
            name: 'KeKsHost',
            url: 'https://kekshost.com/en/',
            description: translate({
                id: 'providers.provider.kekshost.description',
                message: "使用默认基岩版端口 (19132) 和服务器 IP 在基岩版上连接。无需更改 Geyser 配置。您也可以申请新端口并使用它。"
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
                message: '在游戏面板中创建额外端口，然后将 `bedrock` 部分中的 `port` 更改为新创建的端口。要在基岩版上连接，请使用 Java 服务器的 IP 和您创建的端口。端口可能需要几分钟才能激活。'
            })
        },
        {
            name: 'MCPEhost.ru',
            url: 'https://mcpehost.ru',
            description: translate({
                id: 'providers.provider.mcpehost.ru.description',
                message: "在服务器设置中创建额外端口并启用 UDP 协议，然后将其用作配置中的 `bedrock port`。使用 Java IP 和新端口连接。"
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
                message: "使用专用插件安装程序安装 Geyser。在配置中使用与 Java 服务器相同的端口。使用与 Java 服务器相同的地址和端口连接。"
            })
        },
        {
            name: 'NFOservers',
            url: 'https://nfoservers.com/',
            description: translate({
                id: 'providers.provider.nfoservers.description',
                message: "取消注释并在 Geyser 配置文件中将 `bedrock address` 设置为服务器 IP。或者，您可以在非托管 VDS 上单独运行 Geyser 独立版。"
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
                message: "使用默认服务器端口和 `0.0.0.0` 或您的服务器 IP 作为主机地址。"
            })
        },
        {
            name: 'OrionNodes',
            url: 'https://orionnodes.com',
            description: translate({
                id: 'providers.provider.orionnodes.description',
                message: "在游戏面板的网络页面自行开放端口，在 Geyser 配置的基岩版部分使用该端口。"
            })
        },
        {
            name: 'PaperNodes',
            url: 'https://papernodes.com/',
            description: translate({
                id: 'providers.provider.papernodes.description',
                message: '启用 clone-remote-port（或手动将基岩版端口设置为 Java 端口），并使用 Java IP 和端口连接。或者，您可以联系主机申请额外端口或专用 IP。'
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
                message: "下载 Geyser 并重启服务器后，端口将自动设置。使用与 Java 版相同的 IP 和端口连接。有关 Geyser 独立版安装说明，请参见 [此处](https://shockbyte.com/billing/knowledgebase/173/Introduction-to-GeyserMCorDragonProxy-How-GeyserMC-Works.html)。"
            })
        },
        {
            name: 'Skynode.pro',
            url: 'https://skynode.pro/',
            description: translate({
                id: 'providers.provider.skynode.pro.description',
                message: "进入“服务器详情”，添加新端口，并在配置中将 `bedrock port` 设置为该端口。使用该端口和 Java 服务器地址连接。"
            })
        },
        {
            name: 'Sparked Host',
            url: 'https://sparkedhost.com/',
            description: translate({
                id: 'providers.provider.sparked_host.description',
                message: '您可以在版本更改页面上启用Geyser。Geyser将在主机提供的端口上运行。'
            })
        },
        {
            name: 'Stipe Hosting',
            url: 'https://stipehosting.com/',
            description: translate({
                id: 'providers.provider.stipe_hosting.description',
                message: '全自动安装。进入面板选项之一，选择启用GeyserMC的选项。然后，重启并使用您的Java IP和端口连接到服务器。'
            })
        },
        {
            name: 'Triassic Hosting',
            url: 'https://triassichosting.com/',
            description: translate({
                id: 'providers.provider.triassic_hosting.description',
                message: '在控制面板的“VG推荐”类别下找到插件并重启服务器。IP和端口与Java版相同。'
            })
        },
        {
            name: 'VillagerHost',
            url: 'https://villagerhost.net/',
            description: translate({
                id: 'providers.provider.villagerhost.description',
                message: '提供自动和手动安装两种方式。在游戏面板的`属性`选项卡中找到 GeyserMC 预设。然后，点击`安装`并重启服务器。查看 [跨平台 FAQ](https://help.wisehosting.com/en/articles/13-how-to-install-geysermc-java-bedrock-crossplay-to-your-server) 获取更多详细信息。'
            })
        },
        {
            name: 'WinterNode',
            url: 'https://winternode.com/',
            description: translate({
                id: 'providers.provider.winternode.description',
                message: '在控制面板中找到插件并重启服务器。IP和端口与Java版相同。'
            })
        },
        {
            name: 'XHost',
            url: 'https://xhost.is/',
            description: translate({
                id: 'providers.provider.xhost.description',
                message: '需要打开支持工单以获取 UDP 端口，然后将其用作 `bedrock port`。'
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
                message: "在服务器配置下，选择'跨平台'以自动安装Geyser和Floodgate。使用连接地址加入。要更新Geyser和Floodgate，请在服务器管理器中替换插件jar文件并重启服务器。"
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
                message: "通过`bedrock.minehut.com`连接并执行`/join [servername]`，或直接通过`[servername].bedrock.minehut.gg`连接。"
            })
        },
        {
            name: 'OMGServ',
            url: 'https://www.omgserv.com/en/',
            description: translate({
                id: 'providers.provider.omgserv.description',
                message: "在[安装菜单](https://i.imgur.com/Gewpsrq.png)中选择Geyser，它将自动安装。您可以在[仪表板上的服务器属性](https://i.imgur.com/jg5mzNj.png)中启用floodgate。"
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
                message: "Geyser默认安装并配置在所有服务器上。"
            })
        },
        {
            name: 'Server.pro',
            url: 'https://server.pro',
            description: translate({
                id: 'providers.provider.server.pro.description',
                message: "不同方案的不同说明：在VPS上，在[服务类型菜单](https://i.imgur.com/loSNmvu.png)中选择Geyser，可以在仪表板配置中启用Floodgate。对于手动安装：使用高级或免费方案时，在配置文件中将Bedrock端口设置为与Java服务器相同的端口并连接；对于免费方案，还要启用`clone-remote-port`选项。如果您使用的是PRO或VPS方案，可以使用任何端口，可以在防火墙选项卡中打开。"
            })
        },
        {
            name: 'Snakecraft Hosting',
            url: 'https://snakecrafthosting.com/',
            description: translate({
                id: 'providers.provider.snakecraft_hosting.description',
                message: "在结账时在Jar类型下选择'Paper + Geyser with Floodgate'以安装Geyser插件。玩家将使用与Java版相同的IP和端口连接。"
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
                message: "在控制面板中找到插件并重启服务器。IP 和端口与 Java 版相同。"
            })
        },
        {
            name: '365Hosts',
            url: 'https://365hosts.com',
            description: translate({
                id: 'providers.provider.365hosts.description',
                message: "前往他们的 [Minecraft: Crossplay](https://www.365hosts.com/gaming/crossplayminecraft) 托管部分并订购服务器。提供了如何加入的说明。"
            })
        },
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
                message: "将配置中的 `bedrock port` 设置为 Java 服务器的端口，或使用分配给您的服务器的可用端口之一，并使用该端口连接。"
            })
        },
        {
            name: 'FalixNodes',
            url: 'https://falixnodes.net/',
            description: translate({
                id: 'providers.provider.falixnodes.description',
                message: "在游戏面板中的网络页面上自行开放端口，然后在 Geyser 配置的基岩版部分中使用该端口。"
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
                message: "将 Geyser 作为插件获取。在配置中为基岩版端口使用与 Java 服务器相同的端口（通过自行设置或启用 `clone-remote-port`），并使用与 Java 版相同的 IP 和端口连接，或在面板的网络选项卡中创建端口并用于 Geyser。"
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
                message: "在配置中使用分配给您的服务器的可用端口之一作为基岩版端口，并使用该端口连接。"
            })
        },
        {
            name: 'Hosterfy',
            url: 'https://www.hosterfy.com/',
            description: translate({
                id: 'providers.provider.hosterfy.description',
                message: "在配置中为基岩版端口使用与 Java 服务器相同的端口（通过自行设置或启用 `clone-remote-port`），并使用与 Java 版相同的 IP 和端口连接。您也可以申请新端口。"
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
                message: '在“分配”选项卡中创建新端口，并在配置中使用该端口。'
            })
        },
        {
            name: 'HumbleServers',
            url: 'https://humbleservers.com/',
            description: translate({
                id: 'providers.provider.humbleservers.description',
                message: "将基岩版端口设置为 Java 服务器的端口，或两个额外端口之一，并使用该端口连接。如果子域名不起作用，请使用您的常规数字 IP 地址。"
            })
        },
        {
            name: 'KeKsHost',
            url: 'https://kekshost.com/en/',
            description: translate({
                id: 'providers.provider.kekshost.description',
                message: "使用默认基岩版端口 (19132) 和服务器 IP 在基岩版上连接。无需更改 Geyser 配置。您也可以申请新端口并使用它。"
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
                message: '在游戏面板中创建额外端口，然后将 `bedrock` 部分中的 `port` 更改为新创建的端口。要在基岩版上连接，请使用 Java 服务器的 IP 和您创建的端口。端口可能需要几分钟才能激活。'
            })
        },
        {
            name: 'MCPEhost.ru',
            url: 'https://mcpehost.ru',
            description: translate({
                id: 'providers.provider.mcpehost.ru.description',
                message: "在服务器设置中创建额外端口并启用 UDP 协议，然后将其用作配置中的 `bedrock port`。使用 Java IP 和新端口连接。"
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
                message: "使用专用插件安装程序安装 Geyser。在配置中使用与 Java 服务器相同的端口。使用与 Java 服务器相同的地址和端口连接。"
            })
        },
        {
            name: 'NFOservers',
            url: 'https://nfoservers.com/',
            description: translate({
                id: 'providers.provider.nfoservers.description',
                message: "取消注释并在 Geyser 配置文件中将 `bedrock address` 设置为服务器 IP。或者，您可以在非托管 VDS 上单独运行 Geyser 独立版。"
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
                message: "使用默认服务器端口和 `0.0.0.0` 或您的服务器 IP 作为主机地址。"
            })
        },
        {
            name: 'OrionNodes',
            url: 'https://orionnodes.com',
            description: translate({
                id: 'providers.provider.orionnodes.description',
                message: "在游戏面板的网络页面自行开放端口，在 Geyser 配置的基岩版部分使用该端口。"
            })
        },
        {
            name: 'PaperNodes',
            url: 'https://papernodes.com/',
            description: translate({
                id: 'providers.provider.papernodes.description',
                message: "启用 clone-remote-port（或手动将基岩版端口设置为 Java 端口），并使用 Java IP 和端口连接。或者，您可以联系主机申请额外端口或专用 IP。"
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
                message: "下载 Geyser 并重启服务器后，端口将自动设置。使用与 Java 版相同的 IP 和端口连接。有关 Geyser 独立版安装说明，请参见 [此处](https://shockbyte.com/billing/knowledgebase/173/Introduction-to-GeyserMCorDragonProxy-How-GeyserMC-Works.html)。"
            })
        },
        {
            name: 'Skynode.pro',
            url: 'https://skynode.pro/',
            description: translate({
                id: 'providers.provider.skynode.pro.description',
                message: "进入“服务器详情”，添加新端口，并在配置中将 `bedrock port` 设置为该端口。使用该端口和 Java 服务器地址连接。"
            })
        },
        {
            name: 'Sparked Host',
            url: 'https://sparkedhost.com/',
            description: descriptionTemplates.default
        },
        {
            name: 'STIPE',
            url: 'https://stipe.com.au/',
            description: translate({
                id: 'providers.provider.stipe.description',
                message: "将基岩版端口设置为 Java 服务器的端口，并使用该端口连接；请注意，此提供商仅在澳大利亚提供服务。"
            })
        },
        {
            name: 'SyntexHosting',
            url: 'https://syntexhosting.com/',
            description: translate({
                id: 'providers.provider.syntexhosting.description',
                message: "将基岩版端口设置为 Java 服务器的端口，并使用该端口连接，或申请（免费）额外端口。"
            })
        },
        {
            name: 'The Minecraft Hosting',
            url: 'https://theminecrafthosting.com/',
            description: translate({
                id: 'providers.provider.the_minecraft hosting.description',
                message: "尝试使用 `19132` 作为基岩版端口，如果不起作用，请在配置中将 `bedrock port` 设置为与 Java 服务器相同的端口，并使用该端口和 Java 服务器的 IP 连接。"
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
                message: "使用插件安装程序安装 Geyser。在 Geyser 配置中使用与 Java 服务器相同的端口。使用与 Java 服务器相同的地址和端口连接。"
            })
        },
        {
            name: "Wepwawet",
            url: "https://wepwawet.net/",
            description: translate({
                id: 'providers.provider.wepwawet.description',
                message: "在网络选项卡中添加新端口。将此新端口用作基岩版端口。"
            })
        },
        {
            name: 'WinterNode',
            url: 'https://winternode.com/',
            description: translate({
                id: 'providers.provider.winternode.description',
                message: "在 Geyser 配置中启用 `clone-remote-port`，并使用 Java IP 和端口连接。或者，从控制面板的网络部分为您的服务器分配额外端口，并将其设置为 Geyser 配置中的 `bedrock.port`。使用该端口从基岩版连接。如需帮助，请联系 [WinterNode 支持](https://winternode.com/support/contact.php)。"
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
                message: "似乎可以工作，但 Java 版本太旧，无法正常运行 Geyser。"
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
};
