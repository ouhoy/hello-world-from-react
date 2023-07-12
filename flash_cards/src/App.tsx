import React from 'react';
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
    return <div className={"flashcards"}>

        {questions.map((question: question) => (
            <div key={question.id}>

                <p>{question.question}</p>

            </div>
        ))}

    </div>;
}


export default App;
