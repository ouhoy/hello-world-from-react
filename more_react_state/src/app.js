import {useState} from "react";

export default function App() {
    return (<div>
        <Counter/>

    </div>)
}


function Counter() {
    const [count, setCounter] = useState(0);
    const [doubler, setDoubler] = useState(1);
    const date = new Date()

    date.setDate(date.getDate() + count)


    return (<div style={{marginTop: "5%"}}>

        <center style={{display: "flex", flexDirection: "column", alignItems: "center",}}>
            <input type={"range"} min={0} max={10} value={doubler} onChange={e=>setDoubler(+e.target.value)}/>
            <button onClick={() => setCounter(num => num - doubler)}>-</button>

            <span style={{margin: "0 16px"}}>Count: {count}</span>

            <button onClick={() => setCounter(num => num + doubler)}>+</button>

            <p>{date.toDateString()}</p>

            <button onClick={() => setDoubler(double => double - 1)}>-</button>
            <span style={{margin: "0 16px"}}>Doubler: {doubler}</span>
            <button onClick={() => setDoubler(double => double + 1)}>+</button>

        </center>


    </div>)

}