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
export default function Flashcards(){
    return (
        <>
            <Top/>
            <div>
                {flashcards.map( (element,index) => 
                    (
                        <Flashcard 
                        key={index}
                        position={index + 1}
                        icon={<ion-icon name="play-outline"></ion-icon>}
                        question={element.question} />
                    )
                )}
            </div>
            <Footer valueInicial="0" numberOfQuestions={flashcards.length}/>
        </>
        
    );
}