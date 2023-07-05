import messages from "./data";

export default function App() {

    let step = 1;

    return (
        <div className="steps">

            <div className="numbers">
                <div className={step >= 1 ? "active" : ""}>1</div>
                <div className={step >= 2 ? "active" : ""}>2</div>
                <div className={step === 3 ? "active" : ""}>3</div>
            </div>

            <div className="message">Step {step}: {messages[step - 1]}</div>
            <div className="buttons">
                <button style={{backgroundColor: "#7f5bf3", color: "white"}}>Previous</button>
                <button style={{backgroundColor: "#7f5bf3", color: "white"}}>Next</button>
            </div>

        </div>
    )

}

