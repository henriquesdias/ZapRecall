function Icon({name}){
    return <ion-icon name={name}></ion-icon>;
}
export default function Footer({valueInicial, numberOfQuestions,iconsFooter}){
    return (
        <footer>
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