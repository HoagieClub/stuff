import { Pane, Badge } from "evergreen-ui";

// TileModel organizes all relevant properties for individual tile
interface TileData {
    id: string;
    title: string;
    description: string;
    type: string;
    thumbnail: string;
    amt: number;
    tags: string[];
}

export type { TileData }

export default function Tile ({ tile }) {
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
                position ="relative"
                flexWrap="wrap"
            >
                <Badge marginLeft={0} fontSize = {15}>{tile.type}</Badge>
                <Pane marginTop={20} display="flex" flexDirection="column" alignItems="flex-start">
                    <span style={{fontSize:"20px"}}><b>{tile.title}</b></span>
                    <span style={{fontSize:"15px"}} ><b>${tile.amt}</b></span>
                    <img id="listingImage" src={tile.thumbnail} alt={tile.title} />
                    <Pane paddingTop = {10}>
                        {tile.tags.map(
                            (tag: string) => <Badge marginLeft={0} fontSize = {15}>{tag}</Badge>
                        )}
                    </Pane>
                </Pane>
            </Pane>
        </Pane>
    );
}