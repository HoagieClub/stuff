import { useRouter } from 'next/router';
import { useEffect } from 'react';
import PostPage from '../../components/PostPage';
import { withMockablePageAuthRequired } from '../../mock/User';

export default withMockablePageAuthRequired(() => {
    const router = useRouter()
    useEffect(() => {
        // eslint-disable-next-line no-restricted-globals
        const queryParams = new URLSearchParams(location.search)

        if (queryParams.has('code')) {
            queryParams.delete('code')
            queryParams.delete('state')
            // TODO: add support for other params to persist using
            // queryParam.toString() or remove the queryParams method
            router.replace('/all', undefined, { shallow: true })
        }
    }, [])
    return <PostPage pageNumber={1} />
});
