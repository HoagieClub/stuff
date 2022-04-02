// eslint-disable-next-line no-unused-vars
import View from '../components/View';
import { MailData } from '../types';
import InboxTable from '../components/InboxTable';

export default function EmailList() {
    // TODO: Mandate all tags expressed internally through lowercase;
    // this will be obtained from backend
    const email1 : MailData = {

        sender: 'Ananya Grover',
        title: 'Sample Email Title',
        email: 'ananyag@princeton.edu',
        // Could be different from sender
        name: 'hoagieclub',
        content: 'This is content of email',
    }

    const email2 : MailData = {

        sender: 'Gagik Amaryan',
        title: 'Hoagie Meeting Today',
        email: 'gagik@princeton.edu',
        // Could be different from sender
        name: 'hoagieclub 2.0',
        content: 'Theatre Intime is a fully student-run theatre company,'
        + ' based on the 200-seat Hamilton Murray Theater. Every year, Intime'
        + ' produces a full season of about 5 student-directed main stage plays,'
        + ' and next year YOU could be one of those directors! We’ve been producing'
        + ' student theater here at Princeton since 1920, and with our own theater'
        + ' and tech shop, we are here to support your directing dreams and play'
        + ' production needs!',
    }

    const allData : MailData[] = [];
    allData.push(email1);
    allData.push(email2);

    return (
        <View>
            <InboxTable data={allData} />
        </View>
    )
}
