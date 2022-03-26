import React from 'react';
import Head from 'next/head';
import { UserProvider, useUser } from '@auth0/nextjs-auth0';
import Layout from '../lib/hoagie-ui/Layout';
import Nav from '../lib/hoagie-ui/Nav';
import Tile from '../components/Tile';
import Footer from '../components/Footer';
import Theme from '../lib/hoagie-ui/Theme';
import '../lib/hoagie-ui/theme.css';

function Content({ Component, pageProps }) {
    const user = useUser();
    tileData example = {
        id: 'hello',
        title: 'Example',
        description: 'stuff',
        type: 'sell',
        thumbnail: 'string',
        amt: 3,
        tags: 'string[]',
    };

    return (
        <Theme palette="gray">
            <Layout>
                <Nav name="stuff" user={user} />
                <Component {...pageProps} />
                <Tile {...tileProps} />
                <Footer />
            </Layout>
        </Theme>
    );
}

export default function App({ Component, pageProps }) {
    return (
        <UserProvider>
            <Head>
                <title>Stuff by Hoagie</title>
            </Head>
            <Content Component={Component} pageProps={pageProps} />
        </UserProvider>
    );
}