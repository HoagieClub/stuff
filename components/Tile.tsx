import { Pane, Badge, Button, InfoSignIcon, ArrowTopRightIcon } from 'evergreen-ui'
import Image from 'next/image'

// Badge colors
const typeToColor = new Map([
    ['Student Sale', 'red'],
    ['Lost & Found', 'green'],
    ['Bulletin', 'purple'],
    ['Selling', 'yellow'],
])

export default function Tile({ tile }) {
    // Buttons
    let b1text = '';
    if (tile.type === 'Student Sale') {
        b1text = 'Open Slides';
    } else {
        b1text = 'Contact';
    }

    return (
        <Pane>
            <Pane
                backgroundColor="white"
                borderRadius={10}
                width={250}
                marginTop={20}
                display="flex"
                paddingTop={10}
                paddingBottom={20}
                position="relative"
                flexWrap="wrap"
            >
                <Badge
                    color={typeToColor.get(tile.type)}
                    marginLeft={12}
                    fontSize={15}
                >{tile.type}
                </Badge>
                <Pane
                    marginTop={20}
                    marginLeft={12}
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                >
                    <span style={{ fontSize: '20px' }}><b>{tile.title}</b></span>
                    <span style={{
                        fontSize: '30px',
                        position: 'absolute',
                        top: 0,
                        right: 10,
                    }}
                    >
                        <b>${15}
                        </b>
                    </span>
                    <Image
                        src={tile.thumbnail}
                        alt={tile.title}
                        width={500}
                        height={500}
                    />
                    <Pane
                        paddingTop={15}
                        fontSize="15px"
                    >
                        {tile.description}
                    </Pane>
                    <Pane paddingTop={10}>
                        {tile.tags.map(
                            (tag: string) => (
                                <Badge color={typeToColor.get(tile.type)} fontSize={15}>
                                    {tag}
                                </Badge>
                            ),
                        )}
                    </Pane>
                </Pane>
                <Button
                    marginLeft={12}
                    marginTop={15}
                    size="medium"
                    iconBefore={ArrowTopRightIcon}
                >
                    {b1text}
                </Button>
                <Button
                    marginLeft={10}
                    marginTop={15}
                    marginRight={12}
                    size="medium"
                    iconBefore={InfoSignIcon}
                >
                    Read More
                </Button>
            </Pane>
        </Pane>
    );
}
