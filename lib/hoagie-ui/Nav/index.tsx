import {
    majorScale, Pane, Text, Position, Popover, Avatar, TabNavigation, Tab, useTheme,
} from 'evergreen-ui'
import { ComponentType } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ProfileCard from '../ProfileCard'

interface NavProps {
    /** name of app for hoagie[name] title */
    name: string;
    /** custom component in place of hoagie logo */
    logoComponent?: ComponentType;
    /** list of tab objects for navbar, with title and href fields */
    tabs?: Array<any>;
    /** authenticated user data */
    user?: any;
    /** show 'beta' WIP disclaimer on app title  */
    beta?: boolean;
}

/** Nav is a navbar meant for internal navigations throughout
 *  different Hoagie applications.
 */
const Nav = ({
    name, logoComponent, tabs = [], user, beta = false,
}:NavProps) => {
    const theme:any = useTheme();
    const router = useRouter();
    const username = (
        user === undefined || user.user === undefined || user.isLoading
    ) ? 'Tammy Tiger' : user.user.name;

    const rainbow = [
        'red300',
        'yellow300',
        'green300',
        'teal300',
        'rblue300',
    ]

    return (
        <Pane elevation={1}>
            <Pane
                width="100%"
                height={20}
                background="blue400"
                display="flex"
                flexDirection="row"
            >
                {
                    rainbow.map((color) => (
                        <Pane width="20%" height={20} background={color} />
                    ))
                }
            </Pane>
            <Pane
                display="flex"
                justifyContent="center"
                width="100%"
                height={majorScale(9)}
                background="white"
            >
                <Pane
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    width="100%"
                    height="100%"
                    maxWidth={1200}
                    paddingX={majorScale(5)}
                    fontSize={25}
                >
                    <Link href="/all">
                        <Pane cursor="pointer" className="hoagie">
                            {logoComponent || (
                                <Pane>hoagie
                                    <b>
                                        {name.split('').map((l, i) => (
                                            <Text
                                                fontSize={24}
                                                fontWeight="bold"
                                                fontFamily="Nunito"
                                                color={rainbow[i]}
                                            >
                                                {l}
                                            </Text>
                                        ))}
                                    </b>
                                    {beta
                                && <Text className="beta" color="blue800">beta</Text>}
                                </Pane>
                            )}
                        </Pane>
                    </Link>
                    <Pane display="flex" alignItems="center">
                        <TabNavigation className="hide-on-mobile">
                            {tabs.map((tab) => (
                                <Link href={tab.href} passHref>
                                    <Tab
                                        key={tab.title}
                                        is="a"
                                        id={tab.title}
                                        isSelected={
                                            router ? router.pathname === tab.href : false
                                        }
                                    >
                                        {tab.title}
                                    </Tab>
                                </Link>
                            ))}
                        </TabNavigation>
                        {(user !== undefined && user.user !== undefined) && (
                            <Popover
                                content={
                                    <ProfileCard user={user} />
                                }
                                position={Position.BOTTOM}
                            >
                                <Avatar
                                    name={username}
                                    style={{ cursor: 'pointer' }}
                                    color={theme.title}
                                    size={40}
                                    marginLeft={majorScale(4)}
                                />
                            </Popover>
                        ) }
                    </Pane>
                </Pane>
            </Pane>
        </Pane>
    )
}

export default Nav
