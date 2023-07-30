import React, {useState} from "react";
import Item from "./Item";
import {ItemType} from "../types/itemTypes";

export default function PackingList({items, setItems, onDeleteItem, onToggleItem}: {
    items: ItemType[],
    setItems: Function,
    onDeleteItem: (id: number) => void,
    onToggleItem: (id: number) => void,
}) {

    const [sortBy, setSortBy] = useState("input")
    let sortedItems;

    if (sortBy === "input") sortedItems = items;
    if (sortBy === "description") sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description))
    if (sortBy === "packed") sortedItems = items.slice().sort((a, b) => Number(b.packed) - Number(a.packed))
    return <div className={"list"}>
        <ul>
            {sortedItems?.map((item: ItemType) => <Item key={item.id} item={item} onToggleItem={onToggleItem}
                                                    onDeleteItem={onDeleteItem}/>)}
        </ul>
        <div className={"actions"}>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value={"input"}>Input</option>
                <option value={"description"}>Alphabetically</option>
                <option value={"packed"}>Packed Status</option>
            </select>
            <button onClick={() => {
                setItems([])
            }}>Clear List
            </button>
        </div>

    </div>
}