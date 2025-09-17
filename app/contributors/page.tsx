 
import {
    Heading, Pane, Avatar,
} from 'evergreen-ui';

import View from '@/components/View';

const core = [
    {
        firstName: 'Gagik',
        lastName: 'Amaryan',
        title: 'President',
        image: 'https://i.imgur.com/teeWI0a.jpg',
    },
    {
        firstName: 'Dennis',
        lastName: 'Jacob',
        title: 'Head of Project Development',
        image: '',
    },
    {
        firstName: 'Ananya',
        lastName: 'Grover',
        title: 'Software Developer Member',
         
        image: 'https://storage.googleapis.com/tally-response-assets/r0pMer/620070f2-96b9-4857-a414-9477560451b7',
    },
    {
        firstName: 'Edmund',
        lastName: 'Young',
        title: 'Software Developer Member',
         
        image: 'https://storage.googleapis.com/tally-response-assets/r0pMer/41032d4b-6671-419c-babf-7f382b516d81',
    },
    {
        firstName: 'Liam',
        lastName: 'Esparraguera',
        title: 'Vice-President',
        image: 'https://i.imgur.com/bDQXeNp.png',
    },
].sort((a, b) => ((a.firstName > b.firstName) ? 1 : -1))

const MemberCard = ({ member }) => (
    <Pane width="300px" marginX="30px" marginY="5px">
        <Pane float="left">
            <Avatar
                color="purple"
                size={100}
                src={member.image}
                name={`${member.firstName} ${member.lastName}`}
            />
        </Pane>
        <Pane
            float="right"
            height="100px"
            display="flex"
            alignItems="center"
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
            width="200px"
        >
            <Heading size={700}>{member.firstName} {member.lastName}</Heading>
            <br />
            {/* <Text width="150px" size={500}>{member.title}</Text> */}
        </Pane>
    </Pane>
)

const MemberSection = ({ members }) => (
    <Pane
        width="100%"
        display="flex"
        flexWrap="wrap"
    >
        {
            members.map((member, index) => <MemberCard key={index} member={member} />)
        }
    </Pane>
)

export default function Contributors(){ 
    return (
    <View>
        <Pane
            paddingX={20}
            paddingY={50}
        >
            <Heading
                size={700}
                fontWeight={500}
            >
                Hoagie Stuff was made by the Purple Team in Hoagie Club.
            </Heading>
            <br />
            Here are all the members who contributed to its development.
            <Pane
                paddingY={30}
            >
                <MemberSection members={core} />
            </Pane>
            Hoagie Design Guide was made in collaboration with
            <b><a href="https://www.princetonresinde.com/" target="_blank" rel="noopener noreferrer"> Princeton ReSinDe</a></b>.
            <br /><br />
            Want to learn more about the Hoagie as a student club?
            Fill out our
            <b><a href="https://tally.so/r/mVzojm" target="_blank" rel="noopener noreferrer"> member interest form </a></b>
            and check out
            <b><a href="https://club.hoagie.io" target="_blank" rel="noopener noreferrer"> club.hoagie.io</a></b>.
        </Pane>
    </View>
)};
