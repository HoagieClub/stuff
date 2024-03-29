import { useState, useEffect } from 'react';
import router from 'next/router';
import { Spinner } from 'evergreen-ui';
import useSWR, { useSWRConfig } from 'swr';
import MailForm from '../../components/MailForm';
import ErrorMessage from '../../components/ErrorMessage';
import View from '../../components/View';
import { withMockablePageAuthRequired } from '../../mock/User';

export default withMockablePageAuthRequired(() => {
    const { mutate } = useSWRConfig()
    const [errorMessage, setErrorMessage] = useState('')
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const fetcher = (url: string) => fetch(url).then((r) => r.json())
    const { data, error } = useSWR(
        '/api/hoagie/stuff/user',
        fetcher,
    )

    const addDigest = async (digestData) => {
        const response = await fetch('/api/hoagie/stuff/user', {
            body: JSON.stringify(digestData),
            method: 'POST',
        });

        if (!response.ok) {
            const errorText = await response.text();
            setErrorMessage(`There was an issue with your email. ${errorText}`);
        } else {
            setSuccess(true);
        }
    }

    const deleteDigest = async () => {
        setSuccess(false)
        setLoading(true)
        const response = await fetch('/api/hoagie/stuff/user', {
            body: null,
            method: 'DELETE',
        });

        if (!response.ok) {
            const errorText = await response.text();
            setErrorMessage(`There was an issue while performing the deletion. 
            ${errorText}`);
            setLoading(false)
        } else {
            // mutate causes useSWR to re-fetch the data,
            // allowing the form to be updated after the digest is deleted
            setLoading(false)
            mutate('/api/hoagie/stuff/user')
        }
    }

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

    // TODO: Handle error properly.
    if (!data) {
        <View>
            <Spinner />
        </View>
    }
    if (error) {
        return (
            <View>
                <ErrorMessage text="Some issue occured connecting
                to Hoagie Stuff Digest, try again later or contact hoagie@princeton.edu
                if it does not get resolved."
                />
            </View>
        )
    }
    return (
        <MailForm
            success={success}
            onSend={addDigest}
            errorMessage={errorMessage}
            loading={loading}
            digest={data}
            onDelete={deleteDigest}
        />
    );
});
