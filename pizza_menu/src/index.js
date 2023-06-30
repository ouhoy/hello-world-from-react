import React from "react"
import ReactDOM from "react-dom/client"
import pizzaData from "./data.js";
import styles from "./index.css"


function App() {
    return (<div className={styles.container}>

        <Header/>
        <Menu/>
        <Footer/>
    </div>);
}

function Pizza(props) {
    pizzaData = props.pizzaData
    console.log(pizzaData)
    return (
        <div className={styles.pizza}>
            <img src={pizzaData.photoName} alt={pizzaData.name}/>
            <div>
                <h3>{pizzaData.name}</h3>
                <p>{pizzaData.ingredients}</p>
            </div>
            <span>{pizzaData.price}</span>
        </div>
    )
}

function Header() {
    return <header className={styles.header}>
        <h1>React Pizza App</h1>
    </header>
}

function Menu() {


    return <main className={styles.menu}>
        <div>
            {pizzaData.map(pizza => (<Pizza pizzaData={pizza}/>))}
        </div>


    </main>
}

function Footer() {
    return <footer className={styles.footer}>All rights are acknowledged</footer>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)