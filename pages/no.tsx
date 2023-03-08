import { useEffect } from 'react';
import { majorScale, Pane } from 'evergreen-ui';
import router from 'next/router';
import { withMockablePageAuthRequired } from '../mock/User';

export default withMockablePageAuthRequired(() => {
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

    return (
        <>
            <Pane
                display="flex"
                flexWrap="wrap"
                justifyContent="center"
                marginY={majorScale(4)}
                paddingX={majorScale(3)}
            />
        </>
    );
});
