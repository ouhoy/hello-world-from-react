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
        {initialFriends.map(friend => friend.name)}
    </ul>
}

export default App;
