import React from 'react';
import { UserProvider, useUser } from '@auth0/nextjs-auth0';
import Layout from '../lib/hoagie-ui/Layout';
import Nav from '../lib/hoagie-ui/Nav';
import Footer from '../components/Footer';
import Theme from '../lib/hoagie-ui/Theme';
import "../lib/hoagie-ui/theme.css"
import Head from 'next/head';

function Content({ Component, pageProps }) {
  const user = useUser();

  return (
      <Theme palette="gray">
          <Layout>
              <Nav name="stuff" user={user} />
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