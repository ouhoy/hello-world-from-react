import React from "react";
import {ItemType} from "./types/itemTypes";

export default function Item({item, onDeleteItem, onToggleItem}: {
    item: ItemType,
    onDeleteItem: (id: number) => void,
    onToggleItem: (id: number) => void,

}) {

    return <li key={item.id}>
        <input type={"checkbox"} value={`${item.packed}`} onChange={() => onToggleItem(item.id)}/>
        <span style={item.packed ? {textDecoration: "line-through"} : {}}>{item.quantity} {item.description}</span>
        <button style={{color: "white"}} onClick={() => onDeleteItem(item.id)}>&times;</button>

    </li>
}