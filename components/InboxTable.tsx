import { Table } from 'evergreen-ui';

export default function InboxTable({ data }) {
    return (
        <Table
            marginTop={20}
        >
            <Table.Head>
                <Table.SearchHeaderCell
                    // eslint-disable-next-line no-console
                    onChange={(value) => console.log(value)}
                    placeholder="Search by email..."
                    flexBasis={200}
                    flexShrink={0}
                    flexGrow={0}
                />
                <Table.TextHeaderCell flexBasis={300} flexShrink={0} flexGrow={0}>
                    Subject
                </Table.TextHeaderCell>
                <Table.TextHeaderCell>Preview of Content</Table.TextHeaderCell>
            </Table.Head>
            <Table.Body height={240}>
                {data.map((email) => (
                    <Table.Row
                        key={email.id}
                        isSelectable
                        // eslint-disable-next-line no-alert
                        onSelect={() => alert(email.content)}
                        height={50}
                    >
                        <Table.TextCell flexBasis={200} flexShrink={0} flexGrow={0}>
                            {email.sender}
                        </Table.TextCell>
                        <Table.TextCell flexBasis={300} flexShrink={0} flexGrow={0}>
                            {email.title}
                        </Table.TextCell>
                        <Table.TextCell>{email.content}</Table.TextCell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>

    );
}
