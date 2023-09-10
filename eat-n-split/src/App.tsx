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
    const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null)

    function handleShowAddFriend() {
        setShowAdFriend(show => !show)
    }

    function handleAddFriend(friend: Friend) {
        setFriends(friends => [...friends, friend])
        setShowAdFriend(false)
    }

    function handleSelection(friend: Friend) {


        setSelectedFriend((current) => {
            if (current) return current.id === friend.id ? null : friend

            return friend
        })
        setShowAdFriend(false)
    }

    return (
        <div className="app">
            <div className={"sidebar"}>
                <FriendsList onSelection={handleSelection} selectedFriend={selectedFriend} friends={friends}/>

                {showAdFriend && <FormAddFriend onAddFriend={handleAddFriend}/>}

                <SubmitButton onClick={handleShowAddFriend}>{showAdFriend ? "Close" : "Add friend"}</SubmitButton>
            </div>
            {selectedFriend && <FormSplitBill selectedFriend={selectedFriend}/>}
        </div>
    );
}

function FriendsList({friends, onSelection, selectedFriend}: {
    friends: Friend [],
    selectedFriend: Friend | null,
    onSelection: (friend: Friend) => void
}) {
    return <ul>
        {friends.map(friend => <Friend onSelection={onSelection} selectedFriend={selectedFriend} friend={friend}
                                       key={friend.id}/>)}
    </ul>
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
function Friend({friend, onSelection, selectedFriend}: {
    friend: Friend,
    selectedFriend: Friend | null,
    onSelection: (friend: Friend) => void
}) {

    let isSelected;
    if (selectedFriend) isSelected = selectedFriend.id === friend.id;


    return <li className={isSelected ? "selected" : ""}>
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
        <SubmitButton onClick={() => onSelection(friend)}>{isSelected ? "Close" : "Select"}</SubmitButton>
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

function FormSplitBill({selectedFriend}: { selectedFriend: Friend }) {

    const [bill, setBill] = useState(0)
    const [paidByUser, setPaidByUser] = useState(0)
    const [payer, setPayer] = useState("user")

    return <form className={"form-split-bill"}>
        <h2>Split a bill with {selectedFriend.name}</h2>
        <label>💰 Bill value</label>
        <input value={bill} onChange={e => setBill(Number(e.target.value))} type={"text"}/>

        <label>💰 Your expense</label>
        <input value={paidByUser} onChange={e => setPaidByUser(Number(e.target.value))} type={"text"}/>

        <label>🧑‍🤝‍🧑{selectedFriend.name}'s expense</label>
        <input type={"text"} disabled/>

        <label>🧑‍🤝‍🧑Who is paying the bill</label>
        <select onChange={e => setPayer(e.target.value)}>
            <option value={"user"}>You</option>
            <option value={"friend"}>{selectedFriend.name}</option>
        </select>

        <SubmitButton>Split bill</SubmitButton>
    </form>
}

export default App;
