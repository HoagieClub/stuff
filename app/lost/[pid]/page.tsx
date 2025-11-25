'use client';

import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import PostPage from '@/components/PostPage';

type Params = {
    params: { pid: string };
};

export default withPageAuthRequired(() => {
    return <PostPage category='lost' />;
});
