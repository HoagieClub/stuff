import {
    Pane, Badge, Button, InfoSignIcon, ArrowTopRightIcon,
} from 'evergreen-ui';

export default function Tile({ tile }) {
    // assign colors to badges
    let col = '';
    if (tile.type === 'Student Sale') {
        col = 'red';
    } else if (tile.type === 'Lost & Found') {
        col = 'green';
    } else if (tile.type === 'Bulletin') {
        col = 'purple';
    } else {
        col = 'yellow';
    }
    const colData: any = col;

    // Buttons
    let b1text = '';
    if (col === 'red') {
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
                <Badge color={colData} marginLeft={12} fontSize={15}>{tile.type}</Badge>
                <Pane
                    marginTop={20}
                    marginLeft={12}
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                >
                    <span style={{ fontSize: '20px' }}><b>{tile.title}</b></span>
                    <span style={{ fontSize: '15px' }}><b>${tile.amt}</b></span>
                    <img id="listingImage" src={tile.thumbnail} alt={tile.title} />
                    <Pane
                        paddingTop={15}
                        fontSize="15px"
                    >
                        {tile.description}
                    </Pane>
                    <Pane paddingTop={10}>
                        {tile.tags.map(
                            (tag: string) => (
                                <Badge color={colData} fontSize={15}>
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
