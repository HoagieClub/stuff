'use client';

import React, { ReactNode } from 'react';

import { useUser } from '@auth0/nextjs-auth0';
import { Pane, Text, Paragraph } from 'evergreen-ui';
import { Metadata } from 'next';

import Layout from '@/lib/hoagie-ui/Layout';
import Nav from '@/lib/hoagie-ui/Nav';
import Theme from '@/lib/hoagie-ui/Theme';

import '@/lib/hoagie-ui/theme.css';
import '@/app/stuff.css';

export const metadata: Metadata = {
    title: 'Stuff by Hoagie',
};

export default function Content({
    children,
}: {
    children: ReactNode;
}): React.JSX.Element {
    const tabs = [
        { href: '/all', title: 'All' },
        { href: '/marketplace', title: 'Marketplace' },
        { href: '/lost', title: 'Lost & Found' },
        { href: '/bulletins', title: 'Bulletins' },
    ];
    const { user } = useUser();

    return (
        <Theme palette='gray'>
            <Layout>
                <Nav
                    name='stuff'
                    tabs={tabs}
                    user={user?.user}
                />
                {children}
            </Layout>
        </Theme>
    );
}
