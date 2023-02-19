import React from 'react';
import Head from 'next/head';
import { Pane, Text, Paragraph } from 'evergreen-ui';
import Layout from '../lib/hoagie-ui/Layout';
import Nav from '../lib/hoagie-ui/Nav';
import Footer from '../lib/hoagie-ui/Footer';
import Theme from '../lib/hoagie-ui/Theme';
import '../lib/hoagie-ui/theme.css';
import './stuff.css';
import { MockableUserProvider, useMockableUser } from '../mock/User';

const RainbowLogo = () => (
    <Pane whiteSpace="nowrap">
        <Text
            is="h2"
            display="inline-block"
            className="hoagie logo"
            color="grey900"
        >
            hoagie
        </Text>
        <Paragraph
            is="h2"
            display="inline-block"
            color="blue500"
            className="hoagie logo rainbow-text"
        >
            stuff
        </Paragraph>
        <Text
            className="hoagie beta"
            position="absolute"
            color="grey900"
        >
            (BETA)
        </Text>
    </Pane>
)

const RainbowHeader = () => (
    <Pane
        width="100%"
        height={20}
        display="flex"
        flexDirection="row"
        style={{
            backgroundImage: `linear-gradient(
                90deg,
                hsl(0deg 73% 75%) 0%,
                hsl(12deg 94% 76%) 19%,
                hsl(22deg 100% 75%) 27%,
                hsl(33deg 100% 74%) 34%,
                hsl(44deg 82% 72%) 41%,
                hsl(69deg 51% 70%) 47%,
                hsl(107deg 44% 75%) 53%,
                hsl(149deg 45% 73%) 59%,
                hsl(175deg 52% 64%) 66%,
                hsl(190deg 77% 57%) 73%,
                hsl(201deg 97% 62%) 81%,
                hsl(225deg 100% 76%) 100%
              )`,
        }}
    >
        {/* <Pane width="20%" height={20} background="red500" />
            <Pane width="20%" height={20} background="yellow300" />
            <Pane width="20%" height={20} background="green300" />
            <Pane width="20%" height={20} background="teal300" />
            <Pane width="20%" height={20} background="rblue300" /> */}
    </Pane>
)

function Content({ Component, pageProps }) {
    const tabs = [
        { href: '/all', title: 'All' },
        { href: '/marketplace', title: 'Marketplace' },
        { href: '/lostfound', title: 'Lost & Found' },
        { href: '/bulletins', title: 'Bulletins' },
    ]
    const user = useMockableUser();

    return (
        <Theme palette="gray">
            <Layout>
                <Nav
                    name="stuff"
                    tabs={tabs}
                    user={user}
                    LogoComponent={RainbowLogo}
                    HeaderComponent={RainbowHeader}
                    beta
                />
                <Component {...pageProps} />
                <Footer href="/contributors" />
            </Layout>
        </Theme>
    );
}

export default function App({ Component, pageProps }) {
    return (
        <MockableUserProvider>
            <Head>
                <title>Stuff by Hoagie</title>
                <meta property="og:image" content="https://stuff.hoagie.io/social.png" />
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <script
                    async
                    // eslint-disable-next-line max-len
                    src="https://www.googletagmanager.com/gtag/js?id=G-2XE860KE6H"
                />
                <script
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{
                        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2XE860KE6H', {
              page_path: window.location.pathname,
            });
          `,
                    }}
                />

            </Head>
            <Content Component={Component} pageProps={pageProps} />
        </MockableUserProvider>
    );
}
