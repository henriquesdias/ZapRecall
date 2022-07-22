import React from "react";
import Question from "./Question";
export default function Flashcard({position, question, answer}){
    const [turn, setTurn] = React.useState(true);
    const [side, setSide] = React.useState(question);
    const [classQuestion , setClassQuestion] = React.useState('');
    const [showOptions, setShowOptions] = React.useState(false);
    const [icon, setIcon] = React.useState("play-outline");
    return (
        <>
            {turn ? (
            <div className="flashcard" onClick={ () => setTurn(!turn)}>
                <span className={classQuestion}>Pergunta {position}</span>
                <ion-icon name={icon}></ion-icon>
            </div>
            ) : (
                <Question 
                side={side}
                answer={answer} 
                setSide={setSide}
                showOptions={showOptions}
                setShowOptions={setShowOptions}
                turn={turn}
                setTurn={setTurn}
                setClassQuestion={setClassQuestion}
                setIcon={setIcon}/>
            )}
        </>
    );
}