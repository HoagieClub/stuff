import { useEffect } from 'react';

import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';

import PostPage from '@/components/PostPage';


export default withPageAuthRequired(() => {
    const router = useRouter()
    useEffect(() => {
         
        const queryParams = new URLSearchParams(location.search)

        if (queryParams.has('code')) {
            queryParams.delete('code')
            queryParams.delete('state')
            // TODO: add support for other params to persist using
            // queryParam.toString() or remove the queryParams method
            router.replace('/all')
        }
    }, [router])
    return <PostPage pageNumber={1} />
});
