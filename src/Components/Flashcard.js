import React from "react";
import Question from "./Question";
export default function Flashcard({position, question, answer,valueInicial,setValueInicial,iconsFooter,setIconsFooter}){
    const [turn, setTurn] = React.useState(true);
    const [side, setSide] = React.useState(question);
    const [icon, setIcon] = React.useState("play-outline");
    const [showOptions, setShowOptions] = React.useState(false);
    const [classQuestion , setClassQuestion] = React.useState('');
    function showQuestion(){
        if (icon === "play-outline") {
            setTurn(!turn)
        }  
    }
    return (
        <>
            {turn ? (
            <div className="flashcard" onClick={showQuestion} >
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
                setValueInicial={setValueInicial}
                iconsFooter={iconsFooter}
                setIconsFooter={setIconsFooter}/>
            )}
        </>
    );
}