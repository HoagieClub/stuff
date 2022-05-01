import {
    Spinner, Pane,
} from 'evergreen-ui'
import { useUser } from '@auth0/nextjs-auth0';
import DigestForm from './DigestForm';
import View from '../View';

export default function MailForm({
    onSend, errorMessage, success,
    digest = { status: 'unused' }, onDelete = (() => {}),
    loading = false,
}) {
    const { isLoading } = useUser();
    if (isLoading || loading) { return <Spinner /> }

    return (
        <View>
            <Pane
                display="flex"
                justifyContent="center"
            >
                <Pane
                    maxWidth={800}
                >
                    <DigestForm
                        onSend={onSend}
                        errorMessage={errorMessage}
                        success={success}
                        digest={digest}
                        onDelete={onDelete}
                    />
                </Pane>
            </Pane>
        </View>
    );
}
