import React, { ReactNode } from 'react';

import '@/lib/hoagie-ui/theme.css';
import '@/app/stuff.css';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Metadata } from 'next';

import Content from '@/app/Content';
import { hoagie } from '@/app/hoagie';

export const metadata: Metadata = {
    title: 'Stuff by Hoagie',
};

export default function App({ children }: { children: ReactNode }) {
    return (
        <html lang='en'>
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(${hoagie.toString()})();`,
                    }}
                />
            </head>
            <UserProvider>
                <body>
                    <Content>{children}</Content>
                </body>
            </UserProvider>
        </html>
    );
}
