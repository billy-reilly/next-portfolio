import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import {ColourSwitcher} from '../ColourSwitcher/ColourSwitcher';

export const Header: React.FC = () => {
    return (
        <header className={styles.container}>
            <div className={`${styles.row} constrainedWidth`}>
                <nav className={styles.siteNav}>
                    <ul className={styles.navList}>
                        <li className={styles.siteHeadingListItem}>
                            <b className={styles.siteHeading}>
                                <Link href="/">
                                    <a>Billy Reilly</a>
                                </Link>
                            </b>
                        </li>

                        {/* <li>
                            <Link href="/blog">
                                <a>Blog</a>
                            </Link>
                        </li> */}
                    </ul>
                </nav>
                <ColourSwitcher />
            </div>
        </header>
    );
};
