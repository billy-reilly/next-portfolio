import React from 'react';
import styles from './IntroWords.module.css';

export const IntroWords = () => {
    const experienceStartDate = 1472688000000; // 01/09/2021
    const yearsOfExperience =
        new Date(new Date().getTime() - experienceStartDate).getFullYear() -
        1970;
    return (
        <>
            <p className={styles.paragraph}>
                I&apos;ve been working across the web stack for over{' '}
                {yearsOfExperience} years, using technologies such as React,
                Node, Typescript and AWS.
            </p>
            <p className={styles.paragraph}>
                I like breaking down <b>complex problems</b>, rapid{' '}
                <b>prototyping</b>, iterating on <b>experiments</b> and most of
                all putting <b>exciting new features</b> in front of users.
            </p>
        </>
    );
};
