import Flashcards from "./ScreenFlashcards";
import React from "react";
export default function EntryScreen(){
    const [showInicialScreen , seTshowInicialScreen] = React.useState(true);
    return (
      <>
        {showInicialScreen ? (
          <div className="entry-screen">
            <img src="./assets/images/logo.png" alt="zap recall" />
            <h1>ZapRecall</h1>
            <div onClick={() => seTshowInicialScreen(false)}>
              Iniciar Recall
            </div>
          </div>
        ) : (
          <Flashcards />
        )}
      </>
    );
}