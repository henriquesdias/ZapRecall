import React from "react";
export default function Flashcard({position, icon, question}){
    const [turn, setTurn] = React.useState(true);
    return (
        <>
            {turn ? (
            <div className="flashcard" onClick={ () => setTurn(!turn)}>
                <span>Pergunta {position}</span>
                {icon}
            </div>
            ) : (
                <div className="question">
                    <p>{question}</p>
                    <img src="./assets/images/setinha.png" alt="turn" />
                </div>
            )}
        </>
    );
}