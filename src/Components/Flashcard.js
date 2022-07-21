import React from "react";
import Question from "./Question";
export default function Flashcard({position, icon, question, answer}){
    const [turn, setTurn] = React.useState(true);
    const [side, setSide] = React.useState(question);
    const [showOptions, setShowOptions] = React.useState(false);
    return (
        <>
            {turn ? (
            <div className="flashcard" onClick={ () => setTurn(!turn)}>
                <span>Pergunta {position}</span>
                <ion-icon name={icon}></ion-icon>
            </div>
            ) : (
                <Question 
                side={side}
                answer={answer} 
                setSide={setSide}
                showOptions={showOptions}
                setShowOptions={setShowOptions}/>
            )}
        </>
    );
}