import React, { ReactNode } from 'react';

import '@/lib/hoagie-ui/theme.css';
import '@/app/stuff.css';
import { Auth0Provider } from '@auth0/nextjs-auth0';
import { Metadata } from 'next';

import Content from '@/app/Content';
import hoagie from '@/app/hoagie';

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
            <Auth0Provider>
                <body>
                    <Content>{children}</Content>
                </body>
            </Auth0Provider>
        </html>
    );
}
