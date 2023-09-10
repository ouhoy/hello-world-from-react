import React, {useState} from 'react';
import {initialFriends} from "./data";


interface Friend {
    id: number | string,
    name: string,
    image: string,
    balance: number
}

function App() {
    const [friends, setFriends] = useState([...initialFriends])
    const [showAdFriend, setShowAdFriend] = useState(false)


    function handleShowAddFriend() {
        setShowAdFriend(show => !show)
    }

    function handleAddFriend(friend: Friend) {
        setFriends(friends => [...friends, friend])
        setShowAdFriend(false)
    }

    return (
        <div className="app">
            <div className={"sidebar"}>
                <FriendsList friends={friends}/>
                {showAdFriend && <FormAddFriend onAddFriend={handleAddFriend}/>}
                <SubmitButton onClick={handleShowAddFriend}>{showAdFriend ? "Close" : "Add friend"}</SubmitButton>
            </div>
            <FormSplitBill/>
        </div>
    );
}

function FriendsList({friends}: { friends: Friend [] }) {
    return <ul>
        {friends.map(friend => <Friend friend={friend} key={friend.id}/>)}
    </ul>
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
function Friend({friend}: { friend: Friend }) {
    return <li>
        <img src={friend.image} alt={friend.name}/>
        <h3>{friend.name}</h3>
        {friend.balance < 0 && (<p className={"red"}>
            You owe {friend.name} ${Math.abs(friend.balance)}
        </p>)}
        {friend.balance > 0 && (<p className={"green"}>
            {friend.name} owes you ${Math.abs(friend.balance)}
        </p>)}
        {friend.balance === 0 && (<p>
            You and {friend.name} are even
        </p>)}
        <SubmitButton>Select</SubmitButton>
    </li>
}

function SubmitButton({children, onClick}: { children: string, onClick?: () => void }) {
    return <button onClick={onClick} className={"button"}>{children}</button>
}

function FormAddFriend({onAddFriend}: { onAddFriend: (friend: Friend) => void }) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("https://i.pravatar.cc/48")

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (!name || !image) return;

        const id = crypto.randomUUID()
        const newFriend = {
            name,
            image: `${image}?u=${id}`,
            balance: 0,
            id
        }
        onAddFriend(newFriend)

        setName("")
        setImage("https://i.pravatar.cc/48")


    }

    return <form className={"form-add-friend"} onSubmit={handleSubmit}>
        <label>🧑‍🤝‍🧑Friend name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} type={"text"}/>

        <label>📸Image URL</label>
        <input value={image} onChange={(e) => setImage(e.target.value)} type={"text"}/>

        <SubmitButton>Add</SubmitButton>


    </form>
}

function FormSplitBill() {
    return <form className={"form-split-bill"}>
        <h2>Split a bill with X</h2>
        <label>💰 Bill value</label>
        <input type={"text"}/>

        <label>💰 Your expense</label>
        <input type={"text"}/>

        <label>🧑‍🤝‍🧑X's expense</label>
        <input type={"text"} disabled/>

        <label>🧑‍🤝‍🧑Who is paying the bill</label>
        <select>
            <option value={"user"}>You</option>
            <option value={"friend"}>X</option>
        </select>

        <SubmitButton>Split bill</SubmitButton>
    </form>
}

export default App;
