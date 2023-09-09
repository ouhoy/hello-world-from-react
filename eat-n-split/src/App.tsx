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
        <div className="App">
            <div className={"sidebar"}>
                <FriendsList/>
            </div>
        </div>
    );
}

function FriendsList() {
    return <ul>
        {initialFriends.map(friend => <Friend friend={friend} key={friend.id}/>)}
    </ul>
}

function Friend({friend}: { friend: Friend }) {
    return <li>{friend.name}</li>
}

export default App;
