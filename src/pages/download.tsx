import React from 'react';
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import { faTowerCell, faFileZipper } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeroBanner from '@site/src/components/HeroBanner';
import HeroBackground from '@site/static/img/site/split-background.webp';
import PaperSpigotIcon from '@site/static/img/icons/paper.png';
import VelocityIcon from '@site/static/img/icons/velocity.png';
import WaterfallBungeeCordIcon from '@site/static/img/icons/waterfall.svg';
import FabricIcon from '@site/static/img/icons/fabric.png';
import NeoForgeIcon from '@site/static/img/icons/neoforge.png';
import ViaProxyIcon from '@site/static/img/icons/viaproxy.png';
import StandaloneIcon from '@site/static/img/icons/geyser.png';
import PlatformIcon from '@site/src/components/PlatformIcon';
import { ProjectDownload } from '@site/src/components/ProjectDownload';
import { Collapsibles, Collapsible } from '@site/src/components/Collapsibles';
import Layout from '@theme/Layout';
import Translate from '@docusaurus/Translate';

const DownloadPage: React.FC = () => (
    <>
        <HeroBanner
            title={<Translate id='pages.download.title'>下载</Translate>}
            subheading={<Translate id='pages.download.subheading'>下载我们各种项目的最新版本。</Translate>}
            backgroundImage={HeroBackground}
        />

        <Tabs queryString="project">
            <TabItem value="geyser" label="Geyser" default>
                <ProjectDownload
                    projectId="geyser"
                    description={<Translate id='pages.download.description.geyser'>一个桥接/代理工具，允许您使用Minecraft基岩版连接到Minecraft Java版服务器。</Translate>}
                    setup="/wiki/geyser/setup"
                    downloadsInfo={{
                        bungeecord: <PlatformIcon svg={WaterfallBungeeCordIcon} text="BungeeCord" />,
                        fabric: <PlatformIcon img={FabricIcon} text="Fabric" />,
                        neoforge: <PlatformIcon img={NeoForgeIcon} text="NeoForge" />,
                        spigot: <PlatformIcon img={PaperSpigotIcon} text="Spigot/Paper" />,
                        standalone: <PlatformIcon img={StandaloneIcon} text="独立版" />,
                        velocity: <PlatformIcon img={VelocityIcon} text="Velocity" />,
                        viaproxy: <PlatformIcon img={ViaProxyIcon} text="ViaProxy" />,
                    }}
                />
            </TabItem>
            <TabItem value="floodgate" label="Floodgate">
                <ProjectDownload
                    projectId="floodgate"
                    description={<Translate id='pages.download.description.floodgate'>混合模式插件，允许Geyser连接加入在线模式服务器。</Translate>}
                    setup="/wiki/floodgate/setup"
                    downloadsInfo={{
                        bungee: <PlatformIcon svg={WaterfallBungeeCordIcon} text="BungeeCord" />,
                        spigot: <PlatformIcon img={PaperSpigotIcon} text="Spigot/Paper" />,
                        velocity: <PlatformIcon img={VelocityIcon} text="Velocity" />,
                        fabric: <PlatformIcon img={FabricIcon} text="Fabric" />,
                        neoforge: <PlatformIcon img={NeoForgeIcon} text="NeoForge" />
                    }}
                    additionalDownloads={{
                        fabric: {
                            url: "https://modrinth.com/mod/floodgate",
                            file: "floodgate-fabric.jar"
                        },
                        neoforge: {
                            url: "https://modrinth.com/mod/floodgate",
                            file: "floodgate-neoforge.jar"
                        }
                    }}
                />
            </TabItem>
            <TabItem value="other-projects" label="其他项目">
                <Collapsibles>
                    <Collapsible
                        title='GeyserOptionalPack'
                        subtitle={<Translate id='pages.download.description.geyseroptionalpack'>一个可选的基岩版资源包，用于扩展Geyser功能。</Translate>}
                        id='geyseroptionalpack'
                        inner={
                            <ProjectDownload
                                projectId="geyseroptionalpack"
                                setup='/wiki/other/geyseroptionalpack'
                                downloadsInfo={{
                                    geyseroptionalpack: <><FontAwesomeIcon icon={faFileZipper} /> GeyserOptionalPack</>,
                                }}
                                gridColumns={1}
                            />
                        }
                    />
                    <Collapsible
                        title='ThirdPartyCosmetics'
                        subtitle={<Translate id='pages.download.description.thirdpartycosmetics'>一个扩展，用于在Java玩家上加载耳朵和其他第三方装饰</Translate>}
                        id='thirdpartycosmetics'
                        inner={
                            <ProjectDownload
                                projectId="thirdpartycosmetics"
                                setup='/wiki/other/thirdpartycosmetics'
                                downloadsInfo={{
                                    thirdpartycosmetics: <><FontAwesomeIcon icon={faFileZipper} /> ThirdPartyCosmetics</>,
                                }}
                                gridColumns={1}
                            />
                        }
                    />
                    <Collapsible
                        title='Hurricane'
                        subtitle={<Translate id='pages.download.description.hurricane'>一个插件，为Geyser玩家提供各种变通方法，通过修改服务器来实现其目标。</Translate>}
                        id='hurricane'
                        inner={
                            <ProjectDownload
                                projectId="hurricane"
                                setup='/wiki/other/hurricane'
                                downloadsInfo={{
                                    spigot: <PlatformIcon img={PaperSpigotIcon} text="Spigot/Paper" />,
                                }}
                                gridColumns={1}
                            />
                        }
                    />
                    <Collapsible
                        title='GeyserConnect'
                        subtitle={<Translate id='pages.download.description.geyserconnect'>一个Geyser扩展，允许玩家连接到不同的Java或Geyser服务器。</Translate>}
                        id='geyserconnect'
                        inner={
                            <ProjectDownload
                                projectId="geyserconnect"
                                setup='/wiki/other/geyserconnect'
                                downloadsInfo={{
                                    geyserconnect: <><FontAwesomeIcon icon={faTowerCell} /> GeyserConnect</>,
                                }}
                                gridColumns={1}
                            />
                        }
                    />
                    <Collapsible
                        title='Rainbow'
                        subtitle={<Translate id='pages.download.description.rainbow'>一个Minecraft模组，用于生成Geyser物品映射和基岩版资源包，与Geyser的自定义物品API(v2)一起使用。</Translate>}
                        id='rainbow'
                        tags={['测试版']}
                        inner={
                            <ProjectDownload
                                projectId="rainbow"
                                setup='/wiki/other/rainbow'
                                downloadsInfo={{
                                    rainbow: <PlatformIcon img={FabricIcon} text="Fabric" />,
                                }}
                                gridColumns={1}
                            />
                        }
                    />
                    <Collapsible
                        title='Hydraulic'
                        subtitle={<Translate id='pages.download.description.hydraulic'>Geyser的配套模组，允许基岩版玩家加入模组化的Minecraft Java版服务器。</Translate>}
                        id='hydraulic'
                        tags={['测试版']}
                        inner={
                            <ProjectDownload
                                projectId="hydraulic"
                                setup='/wiki/other/hydraulic'
                                downloadsInfo={{
                                    fabric: <PlatformIcon img={FabricIcon} text="Fabric" />,
                                    neoforge: <PlatformIcon img={NeoForgeIcon} text="NeoForge" />,
                                }}
                                gridColumns={1}
                                warning={ // Remove when Item API V2 is merged!
                                    <>
                                        <Translate id='pages.download.warning.hydraulic'>
                                           运行Hydraulic需要Geyser的预览版本，您可以在下方下载Item API V2预览版：
                                        </Translate>
                                        <p>
                                           <a href="https://download.geysermc.org/v2/projects/geyserpreview/versions/pr.5189/builds/latest/downloads/fabric">Fabric</a>
                                           <span>, </span>
                                           <a href="https://download.geysermc.org/v2/projects/geyserpreview/versions/pr.5189/builds/latest/downloads/neoforge">NeoForge</a>
                                        </p>
                                    </>
                                }
                            />
                        }
                    />
                    <Collapsible
                        title='Thunder'
                        subtitle={<Translate id='pages.download.description.thunder'>一个Java应用程序，用于将简单的Java版资源包转换为基岩版资源包。</Translate>}
                        id='thunder'
                        tags={['测试版']}
                        inner={
                            <ProjectDownload
                                projectId="thunder"
                                setup='/wiki/other/thunder'
                                downloadsInfo={{
                                    thunder: <><FontAwesomeIcon icon={faFileZipper} /> Thunder</>,
                                }}
                                gridColumns={1}
                            />
                        }
                    />
                </Collapsibles>
            </TabItem>
        </Tabs>
    </>
);

export default function Download(): JSX.Element {
    return (
        <Layout
            title={`下载`}
            description="下载我们各种项目的最新版本。"
        >
            <main>
                <div className="container container--fluid margin-vert--lg">
                    <DownloadPage />
                </div>
            </main>
        </Layout>
    )
}