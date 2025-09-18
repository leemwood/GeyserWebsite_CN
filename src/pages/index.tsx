import clsx from 'clsx';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import HeroImage from '@site/static/img/site/geyser.png';

import styles from './index.module.scss';
import Translate from '@docusaurus/Translate';

function HomepageHeader() {
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className={styles.heroContent}>
                <img src={HeroImage} alt="Geyser Logo" className={styles.heroImage}/>
                <img src={HeroImage} alt="Geyser Logo" className={styles.heroImageBackgroundBlur}/>
                <div className={styles.textSection}>
                    <Heading as="h1" className="hero__title">
                        <Translate id='pages.main.title'>革新你的Minecraft服务器</Translate>
                    </Heading>
                    <p className="hero__subtitle">
                        <Translate id='pages.main.subtitle'>让Minecraft基岩版玩家加入你的Java版服务器</Translate>
                    </p>
                </div>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    return (
        <Layout
            title="Geyser"
            description="让Minecraft基岩版玩家加入你的Java版服务器。"
        >
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}