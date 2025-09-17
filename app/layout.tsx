import React from 'react';
import '../lib/hoagie-ui/theme.css';
import './stuff.css';
import Content from '../app/Content';
import { UserProvider, useUser } from '@auth0/nextjs-auth0/client';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Stuff by Hoagie'
}

export default function App({ children }: { children: ReactNode }) {
    return (
        <html lang='en'>
            <UserProvider>
                <body>
                    <Content>{children}</Content>
                </body>
            </UserProvider>
        </html>
    );
}
