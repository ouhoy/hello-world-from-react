import React from "react"
import ReactDOM from "react-dom/client"
import pizzaData from "./data.js";
import styles from "./index.css"

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
    return (<div className={styles.container}>

        <Header/>
        <Menu/>
        <Menu/>
        <Footer/>
    </div>);
}

function Header() {
    return <header className={styles.header}>
        <h1>React Pizza App</h1>
    </header>
}

function Menu() {
    return <main className={styles.menu}>

        <Pizza/>

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