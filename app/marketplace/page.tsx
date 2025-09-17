import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import PostPage from '@/components/PostPage';

export default withPageAuthRequired(() => (
    <PostPage pageNumber={1} category='marketplace' />
));
