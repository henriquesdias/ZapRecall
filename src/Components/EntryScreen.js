import Flashcards from "./ScreenFlashcards";
import React from "react";
import logo from "./assets/images/logo.png";
export default function EntryScreen(){
    const [showInicialScreen , seTshowInicialScreen] = React.useState(true);
    return (
      <>
        {showInicialScreen ? (
          <div className="entry-screen">
            <img src={logo} alt="zap recall" />
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