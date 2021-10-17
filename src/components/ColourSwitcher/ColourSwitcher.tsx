import React from 'react';
import cn from 'classnames';
import styles from './ColourSwitcher.module.css';
import {selectRandomArrayElement} from '../../utils/random';

interface Theme {
    name: string;
    hue: string;
}

const themeOptions = [
    {
        name: 'Navy',
        hue: '210deg'
    },
    {
        name: 'Mint',
        hue: '160deg'
    },
    {
        name: 'Orange',
        hue: '40deg'
    },
    {
        name: 'Raspberry',
        hue: '345deg'
    }
];

export const ColourSwitcher: React.FC = () => {
    const [selectedTheme, setSelectedTheme] = React.useState<Theme>(
        themeOptions[0]
    );

    React.useEffect(() => {
        setSelectedTheme(selectRandomArrayElement(themeOptions));
    }, [setSelectedTheme]);

    React.useEffect(() => {
        document.documentElement.style.setProperty(
            '--primary-hue',
            selectedTheme.hue
        );
    }, [selectedTheme]);

    return (
        <div className={styles.container}>
            {themeOptions.map((theme) => (
                <button
                    key={theme.name}
                    style={{backgroundColor: `hsl(${theme.hue} 100% 56%)`}}
                    className={cn(styles.button, {
                        [styles.activeButton]: selectedTheme.name === theme.name
                    })}
                    onClick={() => {
                        setSelectedTheme(theme);
                    }}
                >
                    <span className="visually-hidden">{theme.name} theme</span>
                </button>
            ))}
        </div>
    );
};
