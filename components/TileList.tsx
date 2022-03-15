import { Pane } from "evergreen-ui";
import Tile from "./Tile";

export default function TileList ({ data }) {

    // Display data as Tiles
    var tiles = [];
    for (let i = 0; i < data.length; i++) {
        tiles.push(<Tile tile={ data[i] }/>);
    }

    return (
        <Pane display="flex" justifyContent="space-between" width="800px" flexWrap="wrap">
            { tiles }
        </Pane>
    );
}