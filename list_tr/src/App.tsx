import React, {useState} from 'react';
import Logo from "./Logo";
import From from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import {ItemType} from "./types/itemTypes";


function App() {

    const [items, setItems] = useState<ItemType[]>([])

    // We need to left up the state to the closes parent component
    function handleAddItems(item: ItemType): void {


        setItems((c: ItemType[]) => [...c, item])
    }

    function handelDelete(id: number) {
        setItems(items => items.filter(item => item.id !== id))
    }

    function handelToggle(id: number) {
        setItems(items => items.map(item => item.id === id ? {...item, packed: !item.packed} : item))
    }

    return (
        <div className={"app"}>
            <Logo/>
            <From onAddItems={handleAddItems} itemsLength={items.length}/>
            <PackingList items={items} setItems={setItems} onToggleItem={handelToggle} onDeleteItem={handelDelete}/>
            <Stats items={items}/>

        </div>
    );
}


export default App;
