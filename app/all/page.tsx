'use client';

import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import PostPage from '@/components/PostPage';

export default withPageAuthRequired(() => {
    return <PostPage pageNumber={1} />;
});
