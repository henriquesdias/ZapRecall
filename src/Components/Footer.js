function Icon({name}){
    return <ion-icon name={name}></ion-icon>;
}
export default function Footer({valueInicial, numberOfQuestions,iconsFooter}){
    let textResult = "Você não esqueceu de nenhum flashcard!";
    let emoticonResult = "./assets/images/party.png"
    let text = "Parabéns!"
    const failed = iconsFooter.indexOf("close-circle") !== -1;
    return (
        <footer>
            {(valueInicial === numberOfQuestions) ? 
            (
                <>
                    <div>
                    <img src={emoticonResult} alt="emoji" />  
                    <span>{text}</span>
                    </div>
                    <p>{textResult}</p>
                </>
            )
            : ''}
            {valueInicial}/{numberOfQuestions} Concluídos
            <div className="icons">
                {iconsFooter.map( (icon,index) => (<Icon name={icon} key={index} />))}
            </div>
        </footer>
    );
}

          {/* <ion-icon name="close-circle"></ion-icon>
                <ion-icon name="checkmark-circle"></ion-icon>
                <ion-icon name="help-circle"></ion-icon> */}