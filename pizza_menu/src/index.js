import React from "react"
import ReactDOM from "react-dom/client"
import pizzaData from "./data.js";

function Pizza() {

    return (
        <div>
            <img src={pizzaData[0].photoName} alt={pizzaData[0].name}/>
            <h3>{pizzaData[0].name}</h3>
            <p>{pizzaData[0].ingredients}</p>
            <p><b>{pizzaData[0].price}</b></p>
        </div>
    )
}

function App() {
    return (<div>

        <Header/>
        <Menu/>
        <Menu/>
        <Footer/>
    </div>);
}

function Header() {
    return <h1>React Pizza App</h1>
}

function Menu() {
    return <div>

        <Pizza/>

    </div>
}

function Footer() {
    return <footer>All rights are acknowledged</footer>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)