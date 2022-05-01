import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import PostPage from '../../components/PostPage';
// import { PostData } from '../types';

export default withPageAuthRequired(() => (
    <PostPage
        pageNumber={1}
        category="marketplace"
    />
));
