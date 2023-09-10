import React from 'react';
import {initialFriends} from "./data";


interface Friend {
    id: number,
    name: string,
    image: string,
    balance: number
}

function App() {
    return (
        <div className="app">
            <div className={"sidebar"}>
                <FriendsList/>
                <FormAddFriend/>
                <SubmitButton>Add friend</SubmitButton>
            </div>
            <FormSplitBill/>
        </div>
    );
}

function FriendsList() {
    return <ul>
        {initialFriends.map(friend => <Friend friend={friend} key={friend.id}/>)}
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

function SubmitButton({children}: { children: string }) {
    return <button className={"button"}>{children}</button>
}

function FormAddFriend() {
    return <form className={"form-add-friend"}>
        <label>🧑‍🤝‍🧑Friend name</label>
        <input type={"text"}/>

        <label>📸Image URL</label>
        <input type={"text"}/>

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
