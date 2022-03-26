import React from 'react';
import Head from 'next/head';
import { UserProvider, useUser } from '@auth0/nextjs-auth0';
import Layout from '../lib/hoagie-ui/Layout';
import Nav from '../lib/hoagie-ui/Nav';
import Footer from '../components/Footer';
import Theme from '../lib/hoagie-ui/Theme';
import '../lib/hoagie-ui/theme.css';

function Content({ Component, pageProps }) {
    const user = useUser();
    const tabs = [{href: '/home', title: "Home"}, {href: '/about', title: "About"}, {href: '/logout', title: "Logout"}] 

    return (
        <Theme palette="gray">
            <Layout>
                <Nav name="stuff" tabs= {tabs} user={user} />
                <Component {...pageProps} />
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
