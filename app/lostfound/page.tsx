import PostPage from '../../components/PostPage';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default withPageAuthRequired(async () => (
    <PostPage
        pageNumber={1}
        category="lost"
    />
));
