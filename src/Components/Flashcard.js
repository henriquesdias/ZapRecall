import React from "react";
import Question from "./Question";
export default function Flashcard({position, question, answer,valueInicial,setValueInicial}){
    const [turn, setTurn] = React.useState(true);
    const [side, setSide] = React.useState(question);
    const [icon, setIcon] = React.useState("play-outline");
    const [showOptions, setShowOptions] = React.useState(false);
    const [classQuestion , setClassQuestion] = React.useState('');
    return (
        <>
            {turn ? (
            <div className="flashcard" onClick={ () =>{
                if (icon === "play-outline") {
                    setTurn(!turn)
                }
            }}>
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
                setIcon={setIcon}
                valueInicial={valueInicial}
                setValueInicial={setValueInicial}/>
            )}
        </>
    );
}