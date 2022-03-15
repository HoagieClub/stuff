import {useEffect, useState} from 'react';
import { Pane, Button, Checkbox } from "evergreen-ui";
import { TileData } from './Tile';

// CheckboxModel is an abstraction which incorporates checkbox state and label
class CheckboxModel {
    checked: boolean;
    label: string;

    constructor(checked: boolean, label: string) {
        this.checked = checked;
        this.label = label;
    }
}

export default function Filter({data, onFilter}) {
    
    // Setup checkboxes for each filter section
    const [typeCheckboxes, setTypeCheckboxes] = useState([]);
    const [bulletinCheckboxes, setBulletinCheckboxes] = useState([]);
    const [marketCheckboxes, setMarketCheckboxes] = useState([]);
    const [lostfoundCheckboxes, setLostFoundCheckboxes] = useState([]);

    // Helper function for generating CheckboxModel lists
    const generateCheckboxModelList = (labels: string[]) => {
        return labels.map(label => new CheckboxModel(false, label));
    }

    // Pre-set categories
    const typeLabels = ["Marketplace", "Bulletin", "Lost & Found"];
    const bulletinLabels = ["Opportunity", "Help"];
    const marketLabels = ["Clothing", "Electronics", "School", "Furniture", "Accessories"];
    const lostfoundLabels = ["Lost", "Found"];

    // Setup code for initializing the checkboxes
    useEffect(() => {
        setTypeCheckboxes(generateCheckboxModelList(typeLabels));
        setBulletinCheckboxes(generateCheckboxModelList(bulletinLabels));
        setMarketCheckboxes(generateCheckboxModelList(marketLabels));
        setLostFoundCheckboxes(generateCheckboxModelList(lostfoundLabels));
    }, []);
       
    // Allow element-level changes in state
    const setChecked = (state: boolean, category: string, index: number) => {
        switch(category) {
            case 'Type':
                const newType = [...typeCheckboxes];
                newType[index].checked = state;
                setTypeCheckboxes(newType);
                break;
            case 'Bulletin':
                const newBulletin = [...bulletinCheckboxes];
                newBulletin[index].checked = state;
                setBulletinCheckboxes(newBulletin);
                break;
            case 'Marketplace':
                const newMarket = [...marketCheckboxes];
                newMarket[index].checked = state;
                setMarketCheckboxes(newMarket);
                break;
            case 'Lost & Found':
                const newLostFound = [...lostfoundCheckboxes];
                newLostFound[index].checked = state;
                setLostFoundCheckboxes(newLostFound);
                break;
            default:
                console.log("This should never occur.");
        }
    }
    
    // Filter function; find data which matches currently highlighted checkboxes
    const filter = () => {
        const allCheckboxes = typeCheckboxes.concat(bulletinCheckboxes, marketCheckboxes, lostfoundCheckboxes);

        // Get list of highlighted checkboxes
        const filterCheckboxes = allCheckboxes.filter(checkbox => checkbox.checked == true);
        const filterLength = filterCheckboxes.length;

        if (filterLength == 0){
            onFilter(data);
            return;
        }

        let dataFiltering = (data: TileData) => {
            for (let i = 0; i < filterLength; i++) {
                // Enforce lower case representation of categories
                const tagNames = data.tags.map(name => name.toLowerCase());
                const typeName = ((data.type.toLowerCase().valueOf() == "selling" || data.type.toLowerCase().valueOf() == "student sale") ? "marketplace" : data.type.toLowerCase());

                if (tagNames.includes(filterCheckboxes[i].label.toLowerCase()) || typeName.valueOf() == filterCheckboxes[i].label.toLowerCase().valueOf()) {
                    return true;
                }
            }

            return false;
        }

        // Filter data according to checkboxes
        const filteredData = data.filter((data: TileData) => dataFiltering(data));
        onFilter(filteredData);
    }

    // Helper function for generating UI representation of checkboxes
    const generateCheckboxUI = (title: string, checkboxes: CheckboxModel[]) => {
        return(
            <Pane marginTop = {20}>
                <span style={{fontSize:"20px"}} ><b>{ title }</b></span>
                {checkboxes.map((item: CheckboxModel, index) => <Checkbox label = { item.label } checked = { item.checked } onChange={e => setChecked(e.target.checked, title, index)}/>)}
            </Pane>
        );
    }

    // UI representation of checkboxes
    const typeFilter = generateCheckboxUI("Type", typeCheckboxes);
    const bulletinFilter = generateCheckboxUI("Bulletin", bulletinCheckboxes);
    const marketFilter = generateCheckboxUI("Marketplace", marketCheckboxes);
    const lostfoundFilter = generateCheckboxUI("Lost & Found", lostfoundCheckboxes);

    return (  
        <div>
            <Pane backgroundColor="white" borderRadius={10} width={250} marginTop={25} display="flex" justifyContent="flex-start" flexDirection="column" paddingTop={10} paddingBottom={20} position ="relative" flexWrap="wrap" marginRight={20} >
                <Pane marginTop={20} marginLeft = {20} display="flex" flexDirection="column" alignItems="flex-start" >
                    <span style={{fontSize:"30px"}}><b>Filter</b></span>

                    { typeFilter }
                    { bulletinFilter }
                    { marketFilter }
                    { lostfoundFilter }
                    
                    <Button onClick={() => filter()} size="large" appearance="primary" float="right" marginLeft ={20}> Filter </Button> 
                </Pane>
            </Pane>
        </div>
    );
}