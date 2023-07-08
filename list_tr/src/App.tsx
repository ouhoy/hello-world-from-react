import React from 'react';


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
    return <div className={"add-form"}>

        <h3>Need something?</h3>

    </div>
}

function PackingList() {
    return <div className={"list"}>
        LIST
    </div>
}

function Stats() {
    return <footer className={"stats"}>

        <em>You have X in your list and already packed X items</em>
    </footer>
}

export default App;
