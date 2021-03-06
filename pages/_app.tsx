import React from 'react';
import Head from 'next/head';
import { UserProvider, useUser } from '@auth0/nextjs-auth0';
import Layout from '../lib/hoagie-ui/Layout';
import Nav from '../lib/hoagie-ui/Nav';
import Footer from '../components/Footer';
import Theme from '../lib/hoagie-ui/Theme';
import '../lib/hoagie-ui/theme.css';
import './index.css';

function Content({ Component, pageProps }) {
    const user = useUser();
    const tabs = [
        { href: '/all', title: 'All' },
        { href: '/marketplace', title: 'Marketplace' },
        { href: '/lostfound', title: 'Lost & Found' },
        { href: '/bulletins', title: 'Bulletins' },
    ]

    return (
        <Theme palette="gray">
            <Layout>
                <Nav name="stuff" tabs={tabs} user={user} beta />
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
        </UserProvider>
    );
}
