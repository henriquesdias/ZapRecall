import React from "react";
import Flashcard from "./Flashcard";
import Footer from "./Footer";
const flashcards = [
    {
        question: 'O que é JXS ?',
        answer: 'Uma extensão de linguagem do JavaScript'
    },
    {
        question: 'O React é ...',
        answer: 'Uma biblioteca javaScript para construção de interfaces'    
    },
    {
        question: 'Componentes devem iniciar com...',
        answer: 'letra maiúscula'
    },
    {
        question:'Podemos colocar (...) dentro do JSX',
        answer: 'expressões'
    },
    {
        question: 'O ReactDOM nos ajuda ...',
        answer: 'interagindo com o DOM para colocar componentes React na mesma'
    },
    {
        question:'Usamos o npm para ...',
        answer: ' gerenciar os pacotes necessários e suas dependências'
    },
    {
        question: 'Usamos props para ...',
        answer: ' passar diferentes informações para componentes'
    },
    {
        question: 'Usamos estado (state) para ...',
        answer: 'dizer para o React quais informações devem renderizar a tela novamente, quando atualizadas'
    }
]
function Top(){
    return (
        <div className="top">
            <img src="./assets/images/logo-pequeno.png" alt="zap recall" />
            <span>ZapRecall</span>
        </div>
    );
}
function randomize(){
    return Math.random() - 0.5;
}
export default function Flashcards(){
    const deck = [...flashcards];
    const [valueInicial , setValueInicial] = React.useState(0);
    const [iconsFooter, setIconsFooter] = React.useState([]);
    deck.sort(randomize);
    return (
        <>
            <Top/>
            <div>
                {deck.map( (element,index) => 
                    (
                        <Flashcard 
                        key={index}
                        position={index + 1}
                        question={element.question}
                        answer={element.answer}
                        setValueInicial={setValueInicial}
                        valueInicial={valueInicial}
                        iconsFooter={iconsFooter}
                        setIconsFooter={setIconsFooter} />
                    )
                )}
            </div>
            <Footer 
            valueInicial={valueInicial} 
            numberOfQuestions={flashcards.length}
            iconsFooter={iconsFooter}
            />
        </>
        
    );
}