import React, {FormEvent, useState} from 'react';


type item = {
    id: number,
    description: string,
    quantity: number,
    packed: boolean

}

function App() {

    const [items, setItems] = useState<item[]>([])

    // We need to left up the state to the closes parent component
    function handleAddItems(item: item): void {


        setItems((c: item[]) => [...c, item])
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
            <PackingList items={items} onToggleItem={handelToggle} onDeleteItem={handelDelete}/>
            <Stats items={items}/>

        </div>
    );
}

function Logo() {
    return <h1>Random Practice List</h1>
}


function From({onAddItems, itemsLength}: { onAddItems: (item: item) => void, itemsLength: number }) {

    const [description, setDescription] = useState("")
    const [quantity, setQuantity] = useState(1)


    function handleSubmit(e: FormEvent) {
        e.preventDefault()

        if (!description) return
        const newItem: item = {id: itemsLength + 1, description, quantity, packed: false}


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

function PackingList({items, onDeleteItem, onToggleItem}: {
    items: item[],
    onDeleteItem: (id: number) => void,
    onToggleItem: (id: number) => void,
}) {


    return <div className={"list"}>
        <ul>
            {items.map((item: item) => <Item key={item.id} item={item} onToggleItem={onToggleItem}
                                             onDeleteItem={onDeleteItem}/>)}
        </ul>
    </div>
}

function Item({item, onDeleteItem, onToggleItem}: {
    item: item,
    onDeleteItem: (id: number) => void,
    onToggleItem: (id: number) => void,

}) {

    return <li key={item.id}>
        <input type={"checkbox"} value={`${item.packed}`} onChange={() => onToggleItem(item.id)}/>
        <span style={item.packed ? {textDecoration: "line-through"} : {}}>{item.quantity} {item.description}</span>
        <button style={{color: "white"}} onClick={() => onDeleteItem(item.id)}>&times;</button>

    </li>
}

function Stats({items}: { items: item[] }) {
    if (!items.length) return <footer className={"stats"}><p><em>Add some items to the list!</em></p></footer>
    const packedItems = items.filter(item => item.packed)
    const percentage = Math.round((packedItems.length / items.length) * 100)
    return <footer className={"stats"}><em>
        {percentage === 100 ? `You are good to go` : `You have ${items.length} in your list and already packed ${packedItems.length} items ${percentage}%`}
    </em>
    </footer>
}

export default App;
