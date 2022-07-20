import React from "react";
export default function Flashcard({position, icon, question, answer}){
    const [turn, setTurn] = React.useState(true);
    const [side, setSide] = React.useState(question);
    return (
        <>
            {turn ? (
            <div className="flashcard" onClick={ () => setTurn(!turn)}>
                <span>Pergunta {position}</span>
                <ion-icon name={icon}></ion-icon>
            </div>
            ) : (
                <div className="question">
                    <p>{side}</p>
                    <img src="./assets/images/setinha.png" alt="turn" 
                    onClick={ () => setSide(answer)} />
                </div>
            )}
        </>
    );
}