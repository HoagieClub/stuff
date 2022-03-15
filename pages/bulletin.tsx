import { useEffect, useState } from 'react'
import { Pane } from 'evergreen-ui'
import Filter from "../components/Filter";
import { TileModel } from "../components/Tile";
import SearchBar from "../components/SearchBar";
import TileList from '../components/TileList';



export default function BulletinBoard() {
  const [data, setData] = useState([]);

  // TODO: Mandate all tags expressed internally through lowercase; this will be obtained from backend
  const tile1 = new TileModel("product1", "Student Sale",  "https://i.ebayimg.com/images/g/pUEAAOSwNjJdgndO/s-l300.jpg", "Princeton mug", "Princeton mug", 50, ["Appliances", "Furniture"]);
  const tile2 = new TileModel("product2", "Lost & Found", "https://i.ebayimg.com/images/g/pUEAAOSwNjJdgndO/s-l300.jpg", "Princeton mug", "Princeton mug", 50, ["Furniture"]);
  const tile3 = new TileModel("product3", "Selling", "https://i.ebayimg.com/images/g/pUEAAOSwNjJdgndO/s-l300.jpg", "Princeton mug", "Princeton mug", 50, ["test"]);
  const tile4 = new TileModel("product4", "Bulletin", "https://i.ebayimg.com/images/g/pUEAAOSwNjJdgndO/s-l300.jpg", "Princeton mug", "Princeton mug", 50, ["test"]);

  var dataList = [];
  dataList.push(tile1);
  dataList.push(tile2);
  dataList.push(tile3);
  dataList.push(tile4);
  /***********************************************************************************************************/

  const allData = dataList;

  // Setup code for data
  useEffect(() => {
    setData(dataList);
  }, []);

  return (
    <Pane>
      <Pane display="flex" flexDirection="row">
      <Filter data = {allData} onFilter = {setData}/>
          <Pane display="flex" flexDirection="column">
              <SearchBar />
              <TileList data={ data }/>
          </Pane>
          <Pane width={250}></Pane>
      </Pane>
    </Pane>
  );
}
