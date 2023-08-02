import React from 'react';
import {initialFriends} from "./data";


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
        {initialFriends.map(friend => <li>{friend.name}</li>)}
    </ul>
}

export default App;
