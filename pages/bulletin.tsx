import { useState } from 'react'
import { Pane } from 'evergreen-ui'
import Filter from '../components/Filter';
import Tile from '../components/Tile';
import SearchBar from '../components/SearchBar';
import View from '../components/View';
import { PostData, UserData } from '../types';

export default function BulletinBoard() {
    // TODO: Mandate all tags expressed internally through lowercase;
    // this will be obtained from backend
    const user : UserData = {
        email: 'hoagie@princeton.edu',
        name: 'Hoagie',
    }
    const tile1 : PostData = {
        id: 'product1',
        type: 'sale',
        thumbnail: 'https://i.ebayimg.com/images/g/pUEAAOSwNjJdgndO/s-l300.jpg',
        title: 'Princeton mug',
        description: '',
        link: '',
        tags: ['opportunities'],
        user,
    }
    const tile2 : PostData = {
        id: 'product2',
        type: 'lost',
        thumbnail: 'https://i.ebayimg.com/images/g/pUEAAOSwNjJdgndO/s-l300.jpg',
        title: 'Lost my mug',
        description: 'Not sure what to do',
        link: '',
        tags: ['lost'],
        user,
    }
    const allData : PostData[] = [];
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
                        <Pane
                            display="flex"
                            justifyContent="space-between"
                            flexWrap="wrap"
                        >
                            { data.map((tile) => <Tile tile={tile} />) }
                        </Pane>
                    </Pane>
                </Pane>
            </Pane>
        </View>
    );
}
