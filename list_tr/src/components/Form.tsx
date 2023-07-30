import React, {FormEvent, useState} from "react";
import {ItemType} from "../types/itemTypes";

export default function From({onAddItems, itemsLength}: { onAddItems: (item: ItemType) => void, itemsLength: number }) {

    const [description, setDescription] = useState("")
    const [quantity, setQuantity] = useState(1)


    function handleSubmit(e: FormEvent) {
        e.preventDefault()

        if (!description) return
        const newItem: ItemType = {id: itemsLength + 1, description, quantity, packed: false}


        onAddItems(newItem)

        // Rest form
        setQuantity(1)
        setDescription("")
    }

    return <form className={"add-form"} onSubmit={handleSubmit}>

        <h3>Add More Items 🕶️</h3>

        <select value={quantity} onChange={e => setQuantity(+e.target.value)}>

            {Array.from({length: 12}, (_, i) => i + 1).map(num => {
                return <option key={num} value={num}>{num}</option>
            })}
        </select>
        <input type={"text"} placeholder={"Item"} value={description} onChange={e => setDescription(e.target.value)}/>
        <button>Add</button>
    </form>
}