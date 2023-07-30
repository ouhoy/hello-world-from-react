import React from "react";
import {ItemType} from "./types/itemTypes";


export default function Stats({items}: { items: ItemType[] }) {
    if (!items.length) return <footer className={"stats"}><p><em>Add some items to the list!</em></p></footer>
    const packedItems = items.filter(item => item.packed)
    const percentage = Math.round((packedItems.length / items.length) * 100)
    return <footer className={"stats"}><em>
        {percentage === 100 ? `You are good to go` : `You have ${items.length} in your list and already packed ${packedItems.length} items ${percentage}%`}
    </em>
    </footer>
}