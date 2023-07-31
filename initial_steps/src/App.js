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

                <StepMessage step={steps}>{messages[steps - 1]}</StepMessage>
                <div className="buttons">

                    <Button onClick={handlePrevious} textColor={"white"}
                            bgColor={`${steps === 1 ? "#9d9d9d" : "#7f5bf3"}`}>⬅️ Previous</Button>
                    <Button onClick={handleNext} textColor={"white"}
                            bgColor={`${steps >= messages.length ? "#9d9d9d" : "#7f5bf3"}`}>Next
                        ➡️</Button>

                </div>

            </div>)}
        </>
    )


}

function Button({textColor, bgColor, onClick, children}) {
    return <button style={{backgroundColor: `${bgColor}`, color: `${textColor}`}} onClick={onClick}>{children}</button>
}

function StepMessage({step, children}) {
    return <div className="message"><h2>Step {step}:</h2><p>{children}</p></div>
}