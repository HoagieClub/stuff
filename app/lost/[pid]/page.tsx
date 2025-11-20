'use client';

import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import PostPage from '@/components/PostPage';

type Params = {
    params: { pid: string };
};

export default withPageAuthRequired(({ params }: Params) => {
    const { pid } = params;
    const pageNumber = pid ? parseInt(pid, 10) : 1;
    return <PostPage pageNumber={pageNumber} category='lost' />;
});
