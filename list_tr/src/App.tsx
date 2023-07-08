import React, {FormEvent} from 'react';
import {initialItems} from "./data";

type item = {
    id: number,
    description: string,
    quantity: number,
    packed: boolean

}


function App() {
    return (
        <div className={"app"}>
            <Logo/>
            <From/>
            <PackingList/>
            <Stats/>

        </div>
    );
}

function Logo() {
    return <h1>Random Practice List</h1>
}

function From() {

    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        console.log("Clicked!")
    }

    return <form className={"add-form"} onSubmit={handleSubmit}>

        <h3>Add More Items 🕶️</h3>

        <select>

            {Array.from({length: 12}, (_, i) => i + 1).map(num => {
                return <option key={num} value={num}>{num}</option>
            })}
        </select>
        <input type={"text"} placeholder={"Item"}/>
        <button>Add</button>
    </form>
}

function PackingList() {


    return <div className={"list"}>
        <ul>
            {initialItems.map((item: item) => <Item key={item.id} item={item}/>)}
        </ul>
    </div>
}

function Item({item}: { item: item }) {

    return <li key={item.id}>
        <span style={item.packed ? {textDecoration: "line-through"} : {}}>{item.quantity} {item.description}</span>
        <button style={{color: "white"}}>&times;</button>

    </li>
}

function Stats() {
    return <footer className={"stats"}>

        <em>You have X in your list and already packed X items</em>
    </footer>
}

export default App;
