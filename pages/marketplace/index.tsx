import PostPage from '../../components/PostPage';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default withPageAuthRequired(() => (
    <PostPage
        pageNumber={1}
        category="marketplace"
    />
));
