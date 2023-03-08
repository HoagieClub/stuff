import PostPage from '../../components/PostPage';
import { withMockablePageAuthRequired } from '../../mock/User';

export default withMockablePageAuthRequired(() => (
    <PostPage
        pageNumber={1}
        category="marketplace"
    />
));
