import type {NextPage} from 'next';
import Head from 'next/head';

import {Header} from '../components/Header/Header';
import {VerticalSpacer} from '../components/Spacers/VerticalSpacer/VerticalSpacer';
import {HomepageMainContent} from '../components/HomepageMainContent/HomepageMainContent';

const IndexPage: NextPage = () => {
    return (
        <div className="pageContainer">
            <Head>
                <title>Billy Reilly</title>
                <meta name="description" content="Senior Software Engineer" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <VerticalSpacer />
            <Header />
            <VerticalSpacer />
            <HomepageMainContent />
        </div>
    );
};

export default IndexPage;
