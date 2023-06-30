import React from "react"
import ReactDOM from "react-dom/client"
import pizzaData from "./data.js";
import "./index.css"

function App() {
    return (<div className="container">

        <Header/>
        <Menu/>
        <Footer/>
    </div>);
}


function Pizza(props) {
    const pizzaObj = props.pizzaData

    return (
        <li className="pizza">
            <img src={pizzaObj.photoName} alt={pizzaData.name}/>
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
            </div>
            <span>{pizzaObj.price}</span>
        </li>
    )
}

function Header() {
    return <header className="header">
        <h1>React Pizza App</h1>
    </header>
}

function Menu() {


    return <main className="menu">
        <ul className="pizzas">
            {pizzaData.map(pizza => (<Pizza pizzaData={pizza} key={pizza.name}/>))}
        </ul>


    </main>
}

function Footer() {

    const time = new Date().getHours()
    const OPEN_HOUR = 9
    const CLOSE_HOUR = 22

    const isOpen = OPEN_HOUR <= time && time <= CLOSE_HOUR
    const customerFace = isOpen ? ":)" : ":(";

    return <footer className="footer">
        <div className="order">
            <p>The store is {isOpen ? "open" : "closed"} right now {customerFace}</p>
            <button className="btn">Order</button>

        </div>
    </footer>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)