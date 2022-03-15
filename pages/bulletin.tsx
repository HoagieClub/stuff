import { useState } from 'react'
import { Pane } from 'evergreen-ui'
import Filter from '../components/Filter';
import Tile, { TileData } from '../components/Tile';
import SearchBar from '../components/SearchBar';
import View from '../components/View';

export default function BulletinBoard() {
    // TODO: Mandate all tags expressed internally through lowercase;
    // this will be obtained from backend
    const tile1 : TileData = {
        id: 'product1',
        type: 'Student Sale',
        thumbnail: 'https://i.ebayimg.com/images/g/pUEAAOSwNjJdgndO/s-l300.jpg',
        title: 'Princeton mug',
        description: '',
        amt: 50,
        tags: ['Appliances', 'Furniture'],
    }
    const tile2 : TileData = {
        id: 'product2',
        type: 'Student Sale',
        thumbnail: 'https://i.ebayimg.com/images/g/pUEAAOSwNjJdgndO/s-l300.jpg',
        title: 'Princeton mug',
        description: '',
        amt: 50,
        tags: ['Appliances', 'Furniture'],
    }
    const allData : TileData[] = [];
    allData.push(tile1);
    allData.push(tile2);

    const [data, setData] = useState(allData);

    return (
        <View>
            <Pane display="flex" flexDirection="row">
                <Filter data={allData} onFilter={setData} />
                <Pane display="flex" flexDirection="column">
                    <SearchBar />
                    <Pane display="flex" justifyContent="space-between" flexWrap="wrap">
                        { data.map((tile) => <Tile tile={tile} />) }
                    </Pane>
                </Pane>
            </Pane>
        </View>
    );
}
