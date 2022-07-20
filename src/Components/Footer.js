export default function Footer({valueInicial, numberOfQuestions}){
    return (
        <footer>
            {valueInicial}/{numberOfQuestions} Concluídos
            <div className="icons">
                <ion-icon name="close-circle"></ion-icon>
                <ion-icon name="checkmark-circle"></ion-icon>
                <ion-icon name="help-circle"></ion-icon>
            </div>
        </footer>
    );
}