import React from 'react';
import { Pane, Text, Paragraph } from 'evergreen-ui';
import Layout from '../lib/hoagie-ui/Layout';
import Nav from '../lib/hoagie-ui/Nav';
import Footer from '../lib/hoagie-ui/Footer';
import Theme from '../lib/hoagie-ui/Theme';
import '../lib/hoagie-ui/theme.css';
import './stuff.css';
import { useUser } from '@auth0/nextjs-auth0/client';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Stuff by Hoagie'
}

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

export default function Content({ children }: { children: ReactNode }): JSX.Element {
    const tabs = [
        { href: '/all', title: 'All' },
        { href: '/marketplace', title: 'Marketplace' },
        { href: '/lostfound', title: 'Lost & Found' },
        { href: '/bulletins', title: 'Bulletins' },
    ]
    const user = useUser();

    return (
        <Theme palette="gray">
            <Layout>
                <Nav
                    name="stuff"
                    tabs={tabs}
                    user={user?.user}
                    LogoComponent={RainbowLogo}
                    HeaderComponent={RainbowHeader}
                    beta
                />
                {children}
                <Footer href="/contributors" />
            </Layout>
        </Theme>
    );
}