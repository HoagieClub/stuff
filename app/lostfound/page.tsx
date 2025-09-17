import PostPage from '../../components/PostPage';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

export default withPageAuthRequired(() => (
    <PostPage
        pageNumber={1}
        category="lost"
    />
));
