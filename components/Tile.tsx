import {
    Pane, Badge, Button, InfoSignIcon, ArrowTopRightIcon,
    Text, EnvelopeIcon, Dialog, Heading,
} from 'evergreen-ui'
import Image from 'next/image'
import { useState } from 'react'

// Badge colors
const categoryToColor = new Map<string, any>([
    ['sale', 'red'],
    ['lost', 'green'],
    ['bulletin', 'purple'],
    ['selling', 'yellow'],
])

const categoryToName = new Map<string, any>([
    ['sale', 'Student Sale'],
    ['lost', 'Lost & Found'],
    ['bulletin', 'Bulletin'],
    ['selling', 'Selling'],
])

export default function Tile({ tile }) {
    const [showModal, setShowModal] = useState(false)
    // Buttons
    let b1text = 'Contact';
    // const link = tile.link ? tile.link : `mailto:${tile.email}`;
    const link = tile.category === 'lost' || tile.category === 'found' ? `mailto:${tile.email}` : tile.link;
    if (tile.category === 'sale' && tile.link) {
        b1text = 'Open Slides';
    }
    const b1Icon = tile.category === 'lost' || tile.category === 'found' ? EnvelopeIcon : ArrowTopRightIcon;

    // Make sure descrpition does not overflow
    let description = tile.description.length > 300
        ? `${tile.description.substring(0, 300)}...`
        : tile.description;

    const tags = tile.tags?.length > 2 ? tile.tags.slice(0, 2) : tile.tags;

    let title = <span className="bold">{tile.title}</span>;



    if (tile.category === 'lost') {
        if (!tile.thumbnail) {
            description = tile.description.length > 150
                ? `${tile.description.substring(0, 150)}...`
                : tile.description;
            description = (
                <>
                    <span className="bold">{tile.tags[0].toUpperCase()}: </span>
                    {tile.title}<br /><br />
                    {description}
                </>
            )
        } else {
            title = (
                <Pane marginTop={-18} width="100%" className="limited">
                    <span className="bold">{tile.tags[0].toUpperCase()}: </span>
                    {tile.title}
                </Pane>
            );
        }
    }
    const contentPadding = 15;

    const thumbnail = (
        tile.thumbnail && (
            <>
                <Pane
                    paddingX={15}
                    paddingY={15}
                    display="flex"
                    alignItems="center"
                >
                    <Pane
                        width="100%"
                    >
                        <Text
                            fontSize={20}
                            fontWeight={500}
                            fontFamily="Inter"
                            marginLeft={5}
                            width="100%"
                            overflow="hidden"
                            textOverflow="ellipsis"
                            whiteSpace="nowrap"
                        >{title}
                        </Text>
                    </Pane>
                </Pane>
                <Image
                    src={tile.thumbnail}
                    alt={tile.title}
                    width={500}
                    height={200}
                    objectFit="cover"
                />
            </>
        )
    )

    const categorySection = (
        <Pane
            paddingX={contentPadding}
            paddingTop={10}
        >
            <Badge
                paddingY={15}
                paddingX={10}
                color={categoryToColor.get(tile.category)}
            >
                <Pane
                    marginTop={-7}
                    fontSize={14}
                >
                    {categoryToName.get(tile.category)}
                </Pane>
            </Badge>
        </Pane>
    )

    const descriptionSection = (
        <Pane
            height={180}
        >
            {
                thumbnail
            }
            {
                !tile.thumbnail && (
                    <Pane
                        height={180}
                        paddingTop={15}
                        paddingX={contentPadding}
                        fontSize="18px"
                        lineHeight="24px"
                    >
                        {description}
                    </Pane>
                )
            }
        </Pane>
    )

    const tagsSection = (tagsToShow) => (
        <Pane
            paddingTop={10}
            paddingX={contentPadding}
        >
            {tagsToShow?.map(
                (tag: string) => (
                    <Badge
                        color={categoryToColor.get(tile.category)}
                        paddingY={10}
                        paddingX={10}
                        fontSize={13}
                        marginRight={10}
                    >
                        <Pane marginTop={-8}>{tag}</Pane>
                    </Badge>
                ),
            )}
            {tile.tags?.length > 3 && <span>...</span>}
        </Pane>
    )

    return (
        <Pane>
            <Pane
                backgroundColor="white"
                borderRadius={10}
                width={360}
                height={380}
                marginTop={20}
                paddingTop={10}
                paddingBottom={20}
                position="relative"
            >
                {/* Category */}
                {categorySection}
                {/* Price information */}
                {
                    tile.info?.price
                    && (
                        <span style={{
                            fontSize: '25px',
                            position: 'absolute',
                            top: 20,
                            right: 40,
                        }}
                        >
                            ${tile.info.price}
                        </span>
                    )
                }
                {/* Image or Description section */}
                {descriptionSection}
                <Pane
                    paddingTop={30}
                    paddingX={contentPadding}
                >
                    <span style={{ fontWeight: 600 }}>From: </span>
                    {tile.user?.email === '' ? tile.email : tile.user.email}
                </Pane>
                {tagsSection(tags)}
                <Pane
                    position="absolute"
                    width="100%"
                    bottom={0}
                    borderTop="1px solid #e6e6e6"
                    display="flex"
                >
                    <Pane
                        width="50%"
                        height="100%"
                        display="flex"
                        alignItems="center"
                        borderRight="1px solid #e6e6e6"
                        paddingBottom={15}
                    >
                        <Pane width="100%">
                            <a href={link} target="_blank" rel="noreferrer">
                                <Button
                                    marginTop={10}
                                    width="100%"
                                    appearance="minimal"
                                    iconBefore={b1Icon}
                                >
                                    {b1text}
                                </Button>
                            </a>
                        </Pane>
                    </Pane>
                    <Pane
                        display="flex"
                        alignItems="center"
                        height="100%"
                        width="50%"
                    >
                        <Button
                            width="100%"
                            marginTop={10}
                            appearance="minimal"
                            iconBefore={InfoSignIcon}
                            onClick={() => setShowModal(true)}
                        >
                            Details
                        </Button>
                    </Pane>
                </Pane>
            </Pane>
            <Dialog
                isShown={showModal}
                title="Post Details"
                onCloseComplete={() => setShowModal(false)}
                confirmLabel={b1text}
                onConfirm={() => { window.open(link) }}
            >
                {categorySection}
                {thumbnail}
                {
                    tile.description && (
                        <Pane
                            paddingTop={15}
                            paddingX={contentPadding}
                            fontSize="18px"
                            lineHeight="24px"
                        >
                            {tile.description}
                        </Pane>
                    )
                }
                {tagsSection(tile.tags)}
                <Pane
                    paddingTop={15}
                    paddingX={contentPadding}
                    lineHeight="25px"
                >
                    <Heading size={600} marginBottom={10}>Contact Details</Heading>
                    <b>Name:</b> {tile.user?.name === '' ? tile.name : tile.user.name}
                    <br />
                    <b>Email:</b> {tile.user?.email === '' ? tile.email : tile.user.email}
                </Pane>
            </Dialog>
        </Pane>
    );
}