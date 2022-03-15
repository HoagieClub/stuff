import { Pane, Button, Badge, Checkbox } from "evergreen-ui";

// TileModel organizes all relevant properties for individual tile
class TileModel {
    id: string;
    type: string;
    productUrl: string;
    alt: string;
    name: string;
    amt: number;
    tagNames: string[];

    constructor(id: string, type: string, productUrl: string, alt: string, name: string, amt: number, tagNames: string[]) {
        this.id = id;
        this.type = type;
        this.productUrl = productUrl;
        this.alt = alt;
        this.name = name; 
        this.amt = amt;
        this.tagNames = tagNames;
    }
}

export { TileModel };

export default function Tile ({ tile }) {

    // For items, display associated categories
    let categories = [];

    categories.push(<Badge fontSize = {15}>{tile.tagNames[0]}</Badge>);
    for (let i = 1; i < tile.tagNames.length; i++) {
        categories.push(<Badge marginLeft = {10} fontSize = {15}>{tile.tagNames[i]}</Badge>);
    }

    return (
        <Pane>
            <Pane backgroundColor="white" borderRadius={20} width={250} marginTop={20} display="flex" justifyContent="flex-start" flexDirection="column" alignItems="center" paddingTop={10} paddingBottom={20} position ="relative" flexWrap="wrap">
                <Badge marginLeft={0} fontSize = {15}>{tile.type}</Badge>
                <Pane marginTop={20} display="flex" flexDirection="column" alignItems="flex-start">
                    <span style={{fontSize:"20px"}}><b>{tile.name}</b></span>
                    <span style={{fontSize:"15px"}} ><b>${tile.amt}</b></span>
                    <img id="listingImage" src={tile.productUrl} alt={tile.alt} />
                    <Pane paddingTop = {10}>{categories}</Pane>
                </Pane>
            </Pane>
        </Pane>
    );
}