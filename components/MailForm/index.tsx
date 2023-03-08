import {
    Spinner, Pane,
} from 'evergreen-ui'
import DigestForm from './DigestForm';
import View from '../View';
import { useMockableUser } from '../../mock/User';

export default function MailForm({
    onSend, errorMessage, success,
    digest = { status: 'unused' }, onDelete = (() => {}),
    loading = false,
}) {
    const { isLoading } = useMockableUser();
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
