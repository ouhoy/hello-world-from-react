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

    return (
        <div className={styles.pizza}>
            <img src={props.photoName} alt={props.name}/>
            <div>
                <h3>{props.name}</h3>
                <p>{props.ingredients}</p>
            </div>
            <span>{props.price}</span>
        </div>
    )
}

function Header() {
    return <header className={styles.header}>
        <h1>React Pizza App</h1>
    </header>
}

function Menu() {

    pizzaData.forEach(data=>{

    })

    return <main >



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