import React, { ReactNode } from 'react';

import '@/lib/hoagie-ui/theme.css';
import '@/app/stuff.css';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Metadata } from 'next';

import Content from '@/app/Content';

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
