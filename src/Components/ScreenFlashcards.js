import React from "react";
import Flashcard from "./Flashcard";
import Footer from "./Footer";
import logoSmaller from "./assets/images/logo-pequeno.png";
import flashcards from "./Data.js"
function Top() {
  return (
    <div className="top">
      <img src={logoSmaller} alt="zap recall" />
      <span>ZapRecall</span>
    </div>
  );
}
function randomize() {
  return Math.random() - 0.5;
}
const deck = flashcards.sort(randomize);
export default function Flashcards() {
  const [iconsFooter, setIconsFooter] = React.useState([]);
  const [valueInicial, setValueInicial] = React.useState(0);
  return (
    <>
      <Top />
      <div>
        {deck.map((element, index) => (
          <Flashcard
            key={index}
            question={element.question}
            answer={element.answer}
            position={index + 1}
            setValueInicial={setValueInicial}
            valueInicial={valueInicial}
            iconsFooter={iconsFooter}
            setIconsFooter={setIconsFooter}
          />
        ))}
      </div>
      <Footer
        valueInicial={valueInicial}
        numberOfQuestions={flashcards.length}
        iconsFooter={iconsFooter}
      />
    </>
  );
}
