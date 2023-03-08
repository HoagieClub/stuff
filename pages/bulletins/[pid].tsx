import { useRouter } from 'next/router'
import PostPage from '../../components/PostPage';
import View from '../../components/View';
import { withMockablePageAuthRequired } from '../../mock/User';

export default withMockablePageAuthRequired(() => {
    const router = useRouter()
    const { pid } = router.query
    if (pid === undefined || typeof pid !== 'string') {
        return <View>Invalid page</View>
    }
    const pageNumber = (pid || '') === '' ? 1 : parseInt(pid, 10)
    return (
        <PostPage pageNumber={pageNumber} category="bulletin" />
    )
});
