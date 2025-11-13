'use client';

import {
    Pane,
    Spinner,
    Pagination,
    Text,
    Button,
    AddRowTopIcon,
    Paragraph,
    Heading,
} from 'evergreen-ui';
import Link from 'next/link';
import useSWRInfinite from 'swr/infinite';
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

import Tile from '@/components/Tile';
import View from '@/components/View';

export default function PostPage({ pageNumber, category = '' }) {
    const router = useRouter();
    const perPage = 9;
    const fetcher = useCallback((url: string) => fetch(url).then(r => r.json()), []);
    
    const [finished, setFinished] = useState(false);
    const [loadingMore, setLoadingMore] = useState(false);

    const getKey = useCallback((pageIndex: number, previousPageData: any) => {
        if (previousPageData && previousPageData.length === 0) return null;
        return `/api/hoagie/stuff?limit=${perPage}&offset=${pageIndex * perPage}${
        category ? `&category=${category}` : ''
        }`;
    }, [category]);

    const { data, error, size, setSize, isValidating } = useSWRInfinite(getKey, fetcher, {
        revalidateFirstPage: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });

    useEffect(() => {
        if (!data) return;
        const lastPage = data[data.length - 1];
        if (Array.isArray(lastPage) && lastPage.length === 0 && !finished) {
        setFinished(true);
        }
    }, [data, finished]);

    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (!inView || finished || loadingMore || isValidating) return;
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        const lastPage = data?.[data.length - 1];
        if (!lastPage || lastPage.length === 0) return;

        timeoutRef.current = setTimeout(async () => {
        setLoadingMore(true);
        await setSize(prev => prev + 1);
        setLoadingMore(false);
        }, 200);
    }, [inView, finished, loadingMore, isValidating, data, setSize]);

    const posts = useMemo(() => data?.flat().filter(Boolean) || [], [data]);

    const renderContent = () => {
        return (
            <View>
                <Link href='/create?type=bulletin'>
                    <Button
                        iconBefore={AddRowTopIcon}
                        height={42}
                        marginTop={20}
                        intent='success'
                        appearance='primary'
                    >
                        Create a post
                    </Button>
                </Link>
                <Pane
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    flexDirection='column'
                    paddingTop={32}
                >
                    <Spinner marginBottom={8} />
                    <Text>
                        Loading posts... Taking too long?
                        <b>
                            <a href='/api/auth/logout'>
                                {' '}
                                Click here to Relogin
                            </a>
                        </b>
                    </Text>
                </Pane>
            </View>
        );
    }
    if (!data) {
        return (
            <View>
                <Link href='/create?type=bulletin'>
                    <Button
                        iconBefore={AddRowTopIcon}
                        height={42}
                        marginTop={20}
                        intent='success'
                        appearance='primary'
                    >
                        Create a post
                    </Button>
                </Link>
                <Pane
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    flexDirection='column'
                    paddingTop={32}
                    paddingBottom={32}
                >
                    <Heading is='h5' size={800} marginBottom={8}>
                        (._.)
                    </Heading>
                    <Paragraph size={400}>
                        It looks like there aren&apos;t any posts right now...
                    </Paragraph>
                </Pane>
            </View>
        );
    }
    if (error) {
        return (
            <View>
                <Pane
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    flexDirection='column'
                    paddingTop={32}
                >
                    <Spinner />
                    <Text>
                        Looks like there was an error in loading posts...
                        <b>
                            <a href='/api/auth/logout'>
                                {' '}
                                Click here to Relogin
                            </a>
                        </b>
                    </Text>
                </Pane>
            </View>
        );
    }
    return (
        <View>
            <Link href='/create?type=bulletin'>
                <Button
                    iconBefore={AddRowTopIcon}
                    height={42}
                    marginTop={20}
                    intent='success'
                    appearance='primary'
                >
                    Create a post
                </Button>
            </Link>
            <Pane display='flex' flexDirection='row'>
                {/* <Filter data={allData} onFilter={setData} /> */}
                <Pane display='flex' flexDirection='column' width='100%'>
                    {/* <SearchBar /> */}
                    <Pane
                        display='flex'
                        flexWrap='wrap'
                        width='100%'
                        className='grid'
                    >
                        {data &&
                            data.map((tile, index) => (
                                <Tile key={index} tile={tile} />
                            ))}
                    </Pane>
                </Pane>
            </Pane>
            <Pane width='100%' display='flex' justifyContent='center'>
                <Pagination
                    totalPages={
                        data.length === perPage ? pageNumber + 1 : pageNumber
                    }
                    page={pageNumber}
                    onPageChange={(page) => {
                        router.push(
                            `/${category === '' ? 'all' : category}/${page}`
                        );
                    }}
                    onNextPage={() => {
                        router.push(
                            `/${category === '' ? 'all' : category}/${pageNumber + 1}`
                        );
                    }}
                    onPreviousPage={() => {
                        router.push(
                            `/${category === '' ? 'all' : category}/${pageNumber - 1}`
                        );
                    }}
                />
            </Pane>
        </View>
    );
}
