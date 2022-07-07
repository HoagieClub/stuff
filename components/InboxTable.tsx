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
                    flexBasis={400}
                    flexShrink={0}
                    flexGrow={0}
                />
                <Table.TextHeaderCell flexBasis={500} flexShrink={0} flexGrow={0}>
                    Subject
                </Table.TextHeaderCell>
                <Table.TextHeaderCell>Date</Table.TextHeaderCell>
            </Table.Head>
            <Table.Body height={240}>
                {data.map((email) => {
                    const { date } = email; // 2009-11-10
                    const month = date.toLocaleString('default', { month: 'short' });
                    const day = date.getDay();
                    return (
                        <Table.Row
                            key={email.id}
                            isSelectable
                            // eslint-disable-next-line no-alert
                            onSelect={() => alert(email.content)}
                            height={50}
                        >
                            <Table.TextCell flexBasis={400} flexShrink={0} flexGrow={0}>
                                {email.sender}
                            </Table.TextCell>
                            <Table.TextCell flexBasis={500} flexShrink={0} flexGrow={0}>
                                {email.title}
                            </Table.TextCell>
                            <Table.TextCell>{month} {day}</Table.TextCell>
                        </Table.Row>
                    )
                })}
            </Table.Body>
        </Table>

    );
}
