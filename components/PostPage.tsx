import { useRouter } from 'next/router'
import {
    Pane, Spinner, Pagination, Text, Button,
    AddRowTopIcon, TabNavigation, Tab, majorScale, Paragraph, Heading,
} from 'evergreen-ui'
// import Filter from '../components/Filter';
import useSWR from 'swr';
import Link from 'next/link';
import Tile from './Tile';
// import SearchBar from '../components/SearchBar';
import View from './View';
// import { PostData } from '../types';

export default function PostPage({ pageNumber, category = '' }) {
    const router = useRouter()
    const perPage = 6;
    const fetcher = (url: string) => fetch(url).then((r) => r.json())
    const query = `/api/hoagie/stuff?limit=${perPage}&offset=${
        (pageNumber - 1) * perPage}${category !== '' ? `&category=${category}` : ''}`
    const { data, isValidating, error } = useSWR(
        query,
        fetcher,
    )

    if (isValidating) {
        return (
            <View>
                <Link href="/create?type=bulletin">
                    <Button
                        iconBefore={AddRowTopIcon}
                        height={42}
                        marginTop={20}
                        intent="success"
                        appearance="primary"
                    >
                        Create a post
                    </Button>
                </Link>
                <Pane
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    paddingTop={32}
                >
                    <Spinner marginBottom={8} />
                    <Text>Loading posts... Taking too long?
                        <b><a href="/api/auth/logout"> Click here to Relogin</a></b>
                    </Text>
                </Pane>
            </View>
        )
    }
    if (!data) {
        return (
            <View>
                <Link href="/create?type=bulletin">
                    <Button
                        iconBefore={AddRowTopIcon}
                        height={42}
                        marginTop={20}
                        intent="success"
                        appearance="primary"
                    >
                        Create a post
                    </Button>
                </Link>
                <Pane
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    paddingTop={32}
                    paddingBottom={32}
                >
                    <Heading is="h5" size={800} marginBottom={8}>(._.)</Heading>
                    <Paragraph size={400}>
                        It looks like there aren&apos;t any posts right now...
                    </Paragraph>

                </Pane>
            </View>
        )
    }
    if (error) {
        return (
            <View>
                <Pane
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    paddingTop={32}
                >
                    <Spinner />
                    <Text>Looks like there was an error in loading posts...
                        <b><a href="/api/auth/logout"> Click here to Relogin</a></b>
                    </Text>
                </Pane>
            </View>
        )
    }
    return (
        <View>
            <Pane
                paddingTop={majorScale(4)}
                display="flex"
                justifyItems="center"
                className="only-mobile"
            >
                <TabNavigation>
                    {[
                        ['All', '/all'],
                        ['Marketplace', '/marketplace'],
                        ['Lost & Found', '/lostfound'],
                        ['Bulletins', '/bulletins'],
                    ].map((tab) => (
                        <Link
                            href={tab[1]}
                        >
                            <Tab
                                key={tab[0]}
                                is="a"
                                id={tab[0]}
                                isSelected={router ? router.pathname === tab[1] : false}
                            >
                                {tab[0]}
                            </Tab>
                        </Link>
                    ))}
                </TabNavigation>
            </Pane>
            <Link href="/create?type=bulletin">
                <Button
                    iconBefore={AddRowTopIcon}
                    height={42}
                    marginTop={20}
                    intent="success"
                    appearance="primary"
                >
                    Create a post
                </Button>
            </Link>
            <Pane display="flex" flexDirection="row">
                {/* <Filter data={allData} onFilter={setData} /> */}
                <Pane display="flex" flexDirection="column" width="100%">
                    {/* <SearchBar /> */}
                    <Pane
                        display="flex"
                        flexWrap="wrap"
                        width="100%"
                        className="grid"
                    >
                        { data && data.map((tile) => <Tile tile={tile} />) }
                    </Pane>
                </Pane>
            </Pane>
            <Pane
                width="100%"
                display="flex"
                justifyContent="center"
            >
                <Pagination
                    totalPages={data.length === perPage ? pageNumber + 1 : pageNumber}
                    page={pageNumber}
                    onPageChange={(page) => { router.push(`/all/${page}`) }}
                    onNextPage={() => { router.push(`/all/${pageNumber + 1}`) }}
                    onPreviousPage={() => { router.push(`/all/${pageNumber - 1}`) }}
                />
            </Pane>
        </View>
    );
}
