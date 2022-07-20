import React from "react";
import Flashcards from "./ScreenFlashcards";
export default function App(){
    const [screen , setScreen] = React.useState(true);
    return (
        <>
            {screen ? (
                <div className="entry-screen">
                    <img src="./assets/images/logo.png" alt="zap recall" />
                    <h1>ZapRecall</h1>
                    <div onClick={() => setScreen(false)}>
                        Iniciar Recall
                    </div>
                </div>
            ) : (
                <Flashcards/>
            )}
        </>

    )
};