import { useSearchParams } from 'next/navigation'
import PostPage from '../../components/PostPage';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default withPageAuthRequired(() => {
    const queryParams = useSearchParams()
    const pid = queryParams.get('pid') ?? ''
    const pageNumber = pid === '' ? 1 : parseInt(pid, 10)
    return (
        <PostPage pageNumber={pageNumber} />
    )
});