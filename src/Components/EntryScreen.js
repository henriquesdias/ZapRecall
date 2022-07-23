import Flashcards from "./ScreenFlashcards";
import React from "react";
export default function EntryScreen(){
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
    );
}