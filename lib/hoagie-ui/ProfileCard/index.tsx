import { majorScale, Link, Heading, Card, Avatar, useTheme} from "evergreen-ui"

interface CardProps {
    /** authenticated user data */
    user: any;
}

/** ProfileCard is a profile card meant for display of user information
 *  throughout different Hoagie applications.
 */
const ProfileCard = ({user}:CardProps) => {
    const theme = useTheme();
    const username = (user === undefined || user.user === undefined || user.isLoading) ? "Tammy Tiger" : user.user.name;
    const email = (user === undefined || user.user === undefined || user.isLoading) ? "hoagie@princeton.edu" : user.user.email;

    return (
        <Card elevation={1} background="gray50" padding={majorScale(3)} maxWidth={majorScale(30)}
        borderRadius={8} display="flex" flexDirection="column" alignItems="center">
            <Avatar name={username} color={theme.title} size={40}/>
            <Heading size={500} marginTop={majorScale(1)} textAlign="center">
                {username}
            </Heading>
            <Link href={"mailto:" + email} color="neutral" size={300}
            marginTop={2}>
                ({email})
            </Link>
        </Card>
    )
}

export default ProfileCard