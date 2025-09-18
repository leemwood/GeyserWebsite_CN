import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.scss';
import Crossplatform0Img from '@site/static/img/site/crossplatform_0.png';
import Crossplatform1Img from '@site/static/img/site/crossplatform_1.png';
import Crossplatform2Img from '@site/static/img/site/crossplatform_2.png';
import Translate from '@docusaurus/Translate';

type FeatureItem = {
    title: string;
    image?: string;
    description: JSX.Element;
    index?: number;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Geyser是什么？',
        image: Crossplatform2Img,
        description: (
            <>
                <Translate id="components.homepage_features.1">Geyser是一个允许Minecraft基岩版客户端加入Minecraft Java版服务器的程序，实现了两个游戏版本之间的真正跨平台游戏。这个项目的最终目标是让Minecraft基岩版用户能够尽可能无缝地加入Minecraft Java版服务器。</Translate>
            </>
        ),
    },
    {
        title: '它是如何工作的？',
        image: Crossplatform1Img,
        description: (
            <>
                <Translate id='components.homepage_features.features.2'>Geyser充当基岩版客户端和Java版服务器之间的翻译器。它接收来自基岩版客户端的数据，并将其转换为Java服务器能够理解的格式，反之亦然。Geyser可以与任何现代Minecraft版本兼容，既可以作为插件安装，也可以作为独立程序运行。</Translate>
            </>
        ),
    },
    {
        title: '随时随地加入',
        image: Crossplatform0Img,
        description: (
            <>
                <Translate id='components.homepage_features.features.3'>Geyser可以让Windows 10/11、iOS、Android甚至游戏主机上的基岩版客户端加入服务器。Geyser适用于各种主机提供商，也可以作为独立代理加入任何Minecraft服务器！如果你是服务器所有者，你可以安装我们的Floodgate插件，允许通过Xbox Live认证的基岩版用户无需Java版账号即可加入！</Translate>
            </>
        ),
    },
];

function Feature({ title, image, description, index }: FeatureItem) {
    const Content = () => (
        <div className="text--left padding-horiz--md">
            <Heading as="h3">{title}</Heading>
            <p>{description}</p>
        </div>
    );
    const Image = () => (
        image &&
        <div className="column text--left">
            <img src={image} alt={title} />
        </div>
    );
    return (
        <div className={clsx('column')}>
            {index % 2 === 0 ? <><Image /><Content /></> : <><Content /><Image /></>}
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}