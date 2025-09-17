import PostPage from '../../../components/PostPage';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

type Params = {
    params: { pid: string}
};

export default withPageAuthRequired(async function Page({ params }: Params) {
    const { pid } = params;
    const pageNumber = pid ? parseInt(pid, 10) : 1;
    return <PostPage pageNumber={pageNumber} category="lost" />;
}  as any );
