import messages from "./data";
import {useState} from "react";

export default function App() {
    const [steps, setSteps] = useState(1)
    const [isOpen, setIsOpen] = useState(true)

    function handlePrevious() {
        if (steps === 1) return;
        setSteps(step => step - 1)
    }

    function handleNext() {
        if (steps >= messages.length) return
        setSteps(step => step + 1)
    }

    return (
        <>
            <button className="close" onClick={() => {
                setIsOpen(open => !open)
            }}>&times;</button>
            {isOpen && (<div className="steps">

                <div className="numbers">
                    <div className={steps >= 1 ? "active" : ""}>1</div>
                    <div className={steps >= 2 ? "active" : ""}>2</div>
                    <div className={steps === 3 ? "active" : ""}>3</div>
                </div>

                <div className="message">Step {steps}: {messages[steps - 1]}</div>
                <div className="buttons">
                    <button style={{backgroundColor: "#7f5bf3", color: "white"}} onClick={handlePrevious}>Previous
                    </button>
                    <button style={{backgroundColor: "#7f5bf3", color: "white"}} onClick={handleNext}>Next
                    </button>
                </div>

            </div>)}
        </>
    )


}
