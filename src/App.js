import './App.css';
import {useEffect, useState} from "react";


function App() {

    const [advice, setAdvice] = useState("")
    const [counter, setCounter] = useState(0)

    async function getAdvice() {

        const result = await fetch("https://api.adviceslip.com/advice");
        const data = await result.json();
        setAdvice(data.slip.advice)
        setCounter(counter + 1)
        return data
    }

    useEffect(() => {
        getAdvice()
    }, [])

    return (
        <div className="App">
            <h4>{advice}</h4>
            <button onClick={getAdvice}>Get Advice</button>
            <Message count={counter} />

        </div>
    );
}

function Message(props) {
    return (
        <p>You have seen {props.count} advices</p>
    )
}

export default App;
