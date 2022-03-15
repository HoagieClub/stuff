import { Pane, SearchInput, Button } from 'evergreen-ui';

export default function SearchBar() {
    return (
        <Pane>
            <Pane
                backgroundColor="white"
                borderRadius={10}
                marginTop={40}
                height={150}
                display="flex"
                justifyContent="center"
                flexDirection="column"
                alignItems="flex-start"
                paddingTop={10}
                paddingLeft={20}
            >
                <Pane
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                    width="100%"
                    textAlign="left"
                >
                    <span style={{ fontSize: '30px' }}><b>Items for Sale</b></span>
                </Pane>
                <Pane marginTop={20} display="flex" justifyContent="center">
                    <SearchInput placeholder="Search" />
                    <Button
                        size="large"
                        appearance="primary"
                        float="right"
                        marginLeft={20}
                    >
                        Options
                    </Button>
                </Pane>
            </Pane>
        </Pane>
    );
}
