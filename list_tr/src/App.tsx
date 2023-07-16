import React, {FormEvent, useState} from 'react';
import {initialItems} from "./data";

type item = {
    id: number,
    description: string,
    quantity: number,
    packed: boolean

}

function App() {

    const [items, setItems] = useState<item[]>([...initialItems])

    // We need to left up the state to the closes parent component
    function handleAddItems(item: item): void {


        setItems((c: item[]) => [...c, item])
    }

    function handelDelete(id: number) {
        setItems(items => items.filter(item => item.id !== id))
    }

    return (
        <div className={"app"}>
            <Logo/>
            <From onAddItems={handleAddItems}/>
            <PackingList items={items} onDeleteItem={handelDelete}/>
            <Stats/>

        </div>
    );
}

function Logo() {
    return <h1>Random Practice List</h1>
}


function From({onAddItems}: { onAddItems: (item: item) => void }) {

    const [description, setDescription] = useState("")
    const [quantity, setQuantity] = useState(1)


    function handleSubmit(e: FormEvent) {
        e.preventDefault()

        if (!description) return

        const newItem: item = {id: initialItems.length + 1, description, quantity, packed: false}
        initialItems.push(newItem)


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

function PackingList({items, onDeleteItem}: { items: item[], onDeleteItem: (id: number) => void }) {


    return <div className={"list"}>
        <ul>
            {items.map((item: item) => <Item key={item.id} item={item} onDeleteItem={onDeleteItem}/>)}
        </ul>
    </div>
}

function Item({item, onDeleteItem}: { item: item, onDeleteItem: (id: number) => void }) {

    return <li key={item.id}>
        <span style={item.packed ? {textDecoration: "line-through"} : {}}>{item.quantity} {item.description}</span>
        <button style={{color: "white"}} onClick={() => {
            onDeleteItem(item.id);
            console.log(initialItems)
            initialItems.push({id: initialItems.length + 1, description: "Hola", packed: false, quantity: 12})
        }}>&times;</button>

    </li>
}

function Stats() {
    return <footer className={"stats"}>

        <em>You have X in your list and already packed X items</em>
    </footer>
}

export default App;
