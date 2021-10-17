import React from 'react';
import styles from './HomepageMainContent.module.css';
import {TruchetTileGrid} from '../TruchetTileGrid/TruchetTileGrid';
import {VerticalSpacer} from '../Spacers/VerticalSpacer/VerticalSpacer';
import {IntroWords} from '../IntroWords/IntroWords';

export const HomepageMainContent: React.FC = () => {
    return (
        <main className={styles.mainContainer}>
            <div className={`fullBleedWidth`}>
                <div className={styles.heroContainer}>
                    <div
                        className={`${styles.heroColumn} ${styles.heroGenerativeArtColumn}`}
                    >
                        <TruchetTileGrid />
                    </div>
                    <div
                        className={`${styles.heroColumn} ${styles.heroTextColumn}`}
                    >
                        <h1 className={styles.heroTextTitle}>
                            Hey, I&apos;m Billy 👋
                        </h1>
                        <p className={styles.heroTextSubTitle}>
                            A full stack software engineer based in London,
                            currently working at{' '}
                            <a
                                className={`primaryLink`}
                                href="https://dazn.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                DAZN
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </div>
            <div className={`constrainedWidth`}>
                <VerticalSpacer />
                <IntroWords />
                <VerticalSpacer />
                <div
                    style={{
                        backgroundColor: 'hsl(var(--primary-hue) 80% 90%)',
                        margin: '30px 0',
                        height: '300px',
                        borderRadius: '4px'
                    }}
                ></div>
                <div
                    style={{
                        backgroundColor: 'hsl(var(--primary-hue) 80% 90%)',
                        margin: '30px 0',
                        height: '300px',
                        borderRadius: '4px'
                    }}
                ></div>
                <div
                    style={{
                        backgroundColor: 'hsl(var(--primary-hue) 80% 90%)',
                        margin: '30px 0',
                        height: '300px',
                        borderRadius: '4px'
                    }}
                ></div>
                <div
                    style={{
                        backgroundColor: 'hsl(var(--primary-hue) 80% 90%)',
                        margin: '30px 0',
                        height: '300px',
                        borderRadius: '4px'
                    }}
                ></div>
                <div
                    style={{
                        backgroundColor: 'hsl(var(--primary-hue) 80% 90%)',
                        margin: '30px 0',
                        height: '300px',
                        borderRadius: '4px'
                    }}
                ></div>
            </div>
        </main>
    );
};
