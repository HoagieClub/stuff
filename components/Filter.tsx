import { useState } from 'react';
import {
    Pane, Button, Checkbox, Text,
} from 'evergreen-ui';
import { PostData, TagTypes } from '../types';

function objMap(obj:any, func:any) {
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, func(k, v)]));
}

// eslint-disable-next-line no-unused-vars
type FilterPair = [{ label: TagTypes, checked: boolean}, (e:any) => void];

interface FilterObject {
    [key: string]: FilterPair[];
}

export default function Filter({ data, onFilter }) {
    // Pre-set categories
    const labels = {
        Type: ['Marketplace', 'Bulletin', 'Lost & Found'],
        Bulletin: ['Opportunity', 'Help'],
        Marketplace: ['Clothing', 'Electronics', 'School', 'Furniture', 'Accessories'],
        'Lost & Found': ['Lost', 'Found'],
    }

    const filters:FilterObject = objMap(
        labels, (_, v) => v.map((label:string) => useState({
            checked: false, label: label.toLowerCase(),
        })),
    )

    // Filter function; find data which matches currently highlighted checkboxes
    const filter = () => {
        const allCheckboxes = Object.values(filters).flat()

        // Get list of highlighted checkboxes
        const filterCheckboxes = allCheckboxes.filter(
            (checkbox) => checkbox[0].checked === true,
        );

        if (filterCheckboxes.length === 0) {
            onFilter(data);
            return;
        }

        // TODO: switch to useSWR update. This does not work.
        const filteredData = data.filter((
            (tile: PostData) => {
                for (let i = 0; i < allCheckboxes.length; i += 1) {
                    const checkbox = allCheckboxes[i];
                    if (checkbox[0].checked === true) {
                        return tile.tags.includes(checkbox[0].label);
                    }
                    return !tile.tags.includes(checkbox[0].label);
                }
                return true;
            }
        ))
        // // // Filter data according to checkboxes
        // // const filteredData = data.filter((data: PostData) => dataFiltering(data));
        onFilter(filteredData);
    }

    // Helper function for generating UI representation of checkboxes
    const generateCheckboxUI = (title: string, f:FilterPair[]) => (
        <Pane marginTop={20}>
            <Text fontSize={20}><b>{ title }</b></Text>
            {f.map(([item, setItem]) => (
                <Checkbox
                    label={item.label}
                    checked={item.checked}
                    onChange={(e) => setItem({
                        checked: e.target.checked,
                        label: item.label,
                    })}
                />
            ))}
        </Pane>
    )

    return (
        <div>
            <Pane
                backgroundColor="white"
                borderRadius={10}
                width={250}
                marginTop={25}
                display="flex"
                justifyContent="flex-start"
                flexDirection="column"
                paddingTop={10}
                paddingBottom={20}
                position="relative"
                flexWrap="wrap"
                marginRight={20}
            >
                <Pane
                    marginTop={20}
                    marginLeft={20}
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                >
                    <Text fontSize={40}><b>Filter</b></Text>
                    {
                        Object.entries(filters).map(
                            ([title, boxes]) => generateCheckboxUI(title, boxes),
                        )
                    }
                    <Button
                        onClick={() => filter()}
                        size="large"
                        appearance="primary"
                        float="right"
                        marginLeft={20}
                    > Filter
                    </Button>
                </Pane>
            </Pane>
        </div>
    );
}
