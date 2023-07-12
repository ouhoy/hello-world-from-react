import React, {useState} from 'react';
import {questions} from "./data";

type question = {
    id: number,
    question: string,
    answer: string
}

function App() {
    return (
        <div className="App">
            <FlashCards/>
        </div>
    );
}


function FlashCards() {

    const [selectedId, setSelectedId] = useState(0)

    return <div className={"flashcards"}>

        {questions.map((question: question) => (

            <div onClick={()=>{setSelectedId(question.id)}} key={question.id} className={question.id === selectedId? "selected": ""}>

                <p>{question.id === selectedId ? question.answer : question.question}</p>

            </div>
        ))}

    </div>;
}


export default App;
