'use client';

import {
    majorScale, 
    Pane, 
    Text, 
    Position, 
    Popover, 
    Avatar, 
    TabNavigation, 
    Tab, 
    useTheme,
} from 'evergreen-ui'
import { ComponentType } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import ProfileCard from '../ProfileCard'

interface NavProps {
    /** name of app for hoagie{name} title */
    name: string;
    /** custom component in place of hoagie logo */
    LogoComponent?: ComponentType;
    /** custom component in place of header color strip */
    HeaderComponent?: ComponentType;
    /** list of tab objects for navbar, with title and href fields */
    tabs?: Array<any>;
    /** authenticated user data */
    user?: any;
    /** show 'beta' development disclaimer on hoagie app logo  */
    beta?: boolean;
}

/** Nav is a navbar meant for internal navigations throughout
 *  different Hoagie applications.
 */
function Nav({
    name, LogoComponent, HeaderComponent, tabs = [], user, beta = false,
}:NavProps) {
    const theme = useTheme();
    const router = useRouter();
    const pathname = usePathname();
    const username = user?.name;
    return (
        <Pane elevation={1}>
            {HeaderComponent? <HeaderComponent />
                : <Pane width="100%" height={20} background={theme.colors.blue500} />}
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
                    <Link href="/">
                        <Pane cursor="pointer" position="relative">
                            {LogoComponent? <LogoComponent />
                                : (
                                    <Pane whiteSpace="nowrap">
                                        <Text
                                            is="h2"
                                            display="inline-block"
                                            className="hoagie logo"
                                            color={theme.colors.gray900}
                                        >
                                            hoagie
                                        </Text>
                                        <Text
                                            is="h2"
                                            display="inline-block"
                                            className="hoagie logo"
                                            color={theme.colors.blue500}
                                        >{name}
                                        </Text>
                                        {beta && (
                                            <Text
                                                className="hoagie beta"
                                                position="absolute"
                                                color={theme.colors.gray900}
                                            >
                                                (BETA)
                                            </Text>
                                        )}
                                    </Pane>
                                )}
                        </Pane>
                    </Link>
                    <Pane display="flex" alignItems="center">
                        <TabNavigation>
                            {tabs.map((tab) => (
                                <Link href={tab.href} passHref>
                                    <Tab
                                        key={tab.title}
                                        is="a"
                                        id={tab.title}
                                        isSelected={pathname === tab.href}
                                        appearance="primary"
                                        onSelect={() => router.push(tab.href)}
                                    >
                                        {tab.title}
                                    </Tab>
                                </Link>
                            ))}
                        </TabNavigation>
                        {user?.user && (
                            <Popover
                                content={<ProfileCard user={user} />}
                                position={Position.BOTTOM}
                            >
                                <Avatar
                                    name={username}
                                    style={{ 
                                        cursor: 'pointer', 
                                        border: `2px solid ${theme.colors.blueTint}`,
                                    }}
                                    backgroundColor={theme.colors.blue100}
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
