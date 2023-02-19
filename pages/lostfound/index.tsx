import PostPage from '../../components/PostPage';
import { withMockablePageAuthRequired } from '../../mock/User';
// import { PostData } from '../types';

export default withMockablePageAuthRequired(() => (
    <PostPage
        pageNumber={1}
        category="lost"
    />
));
