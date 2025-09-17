import { useState } from 'react';

import {
    Button, Pane, Heading, Text, Alert,
    majorScale, Dialog, InfoSignIcon, Spinner,
} from 'evergreen-ui';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation'

import ErrorMessage from '@/components/ErrorMessage';
import ExistingDigest from '@/components/MailForm/ExistingDigest';
import SuccessPage from '@/components/MailForm/SuccessPage';

import { GenericForm, LostAndFoundForm, SaleForm } from './Forms';

export default function DigestForm({
    onSend,
    errorMessage,
    success,
    digest,
    onDelete,
}) {
    const router = useRouter();
    const [showConfirm, setShowConfirm] = useState(false)
    const [desc, setDesc] = useState('')
    const [name, setName] = useState('')
    const [link, setLink] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    const queryParams = useSearchParams()
    const category = queryParams.get('type') ?? 'bulletin'

    const categoryDefaults = {
        sale: [],
        lost: ['lost'],
        selling: [],
        bulletin: ['announcement'],
    }
    const [tags, setTags] = useState(categoryDefaults[category])
    if (digest.status === 'used') {
        return (
            <ExistingDigest
                errorMessage={errorMessage}
                digest={digest}
                onDelete={onDelete}
            />
        );
    }
    if (!digest.status) {
        return <Spinner />;
    }
    const Form = (
        <Pane>
            <Heading
                size={800}
                marginTop={majorScale(4)}
                marginBottom={majorScale(2)}
            >Create a Post
            </Heading>
            <ErrorMessage text={errorMessage} />
            <Alert
                intent="none"
                title="This post will be added to Hoagie Stuff and will also
                included in the upcoming Hoagie Stuff Digest email."
            >
                Your post will be bundled with others in a weekly digest email as well
                as listed on the Hoagie Stuff platform for 10 days.
                Digest emails are sent at noon every Tuesday, Thursday and Saturday.
            </Alert>
            <Heading
                size={600}
                marginTop={30}
            >Select Post Type
            </Heading>
            <Pane
                paddingTop={15}
                paddingBottom={10}
                display="flex"
            >
                <Button
                    appearance={category === 'bulletin' ? 'primary' : 'default'}
                    onClick={() => {
                        setTags(['announcement'])
                        router.push('/create?type=bulletin')
                    }}
                >Anything
                </Button>
                <Button
                    marginLeft={10}
                    appearance={category === 'sale' ? 'primary' : 'default'}
                    onClick={() => {
                        setTags([])
                        router.push('/create?type=sale')
                    }}
                >Student Sale
                </Button>

                <Button
                    marginLeft={10}
                    appearance={category === 'lost' ? 'primary' : 'default'}
                    onClick={() => {
                        setTags(['lost'])
                        router.push('/create?type=lost')
                    }}
                >Lost & Found
                </Button>
            </Pane>
            <br />
            {
                category === 'sale' && (
                    <SaleForm
                        desc={desc}
                        link={link}
                        setDesc={setDesc}
                        setLink={setLink}
                        setTags={setTags}
                    />
                )
            }
            {
                category === 'lost' && (
                    <LostAndFoundForm
                        name={name}
                        desc={desc}
                        thumbnail={thumbnail}
                        setName={setName}
                        setDesc={setDesc}
                        setThumbnail={setThumbnail}
                        setTags={setTags}
                    />
                )
            }
            {
                category === 'bulletin' && (
                    <GenericForm
                        name={name}
                        desc={desc}
                        setName={setName}
                        setDesc={setDesc}
                        setTags={setTags}
                    />
                )
            }
            <Pane
                paddingTop={20}
            >
                <Button
                    onClick={() => setShowConfirm(true)}
                    size="large"
                    appearance="primary"
                    float="right"
                >
                    Submit
                </Button>
                <Link href="/all">
                    <Button size="large" float="left">Back</Button>
                </Link>
            </Pane>
            <br />
            <Dialog
                isShown={showConfirm}
                hasHeader={false}
                hasClose={false}
                onConfirm={async () => {
                    await onSend({
                        title: name,
                        description: desc,
                        category,
                        link,
                        tags,
                        thumbnail,
                    });
                    setShowConfirm(false);
                }}
                onCloseComplete={() => setShowConfirm(false)}
                confirmLabel="Add Message"
                intent="warning"
            >
                <Pane
                    marginTop={35}
                    marginBottom={20}
                    fontFamily="Nunito"
                    display="flex"
                    alignItems="center"
                >
                    <InfoSignIcon marginRight={10} />
                    <Text>You are about to add your message
                        to the weekly Hoagie Digest service.
                    </Text>
                </Pane>
                <Text>
                    Once you click <b>Submit</b>, Hoagie will append your
                    message in the upcoming weekly digest email.
                    This is sent to
                    <b> all residential college listservs on your behalf</b>.
                    Your NetID will be included with your message regardless
                    of the content.
                </Text>
                <Alert
                    intent="warning"
                    title="Use this tool responsibly"
                    marginTop={20}
                >
                    If Hoagie Digest is used to send offensive,
                    intentionally misleading or harmful messages,
                    the user will be banned from the platform
                    and, if necessary, reported to the University.
                </Alert>
            </Dialog>
        </Pane>
    )
    return success ? <SuccessPage digest /> : Form;
}
