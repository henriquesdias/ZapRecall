function Options({setTurn,setClassQuestion,setIcon,valueInicial,setValueInicial,iconsFooter,setIconsFooter}){
    return (
    <div className="options">
        <div className="red-option"  onClick={ () => {
            setTurn(true);
            setClassQuestion('red line');
            setIcon('close-circle');
            setValueInicial(valueInicial + 1);
            setIconsFooter([...iconsFooter,"close-circle"]);
            }}>
            Não lembrei
        </div>
        <div className="orange-option"  onClick={ () => {
            setTurn(true)
            setClassQuestion('orange line');
            setIcon('help-circle');
            setValueInicial(valueInicial + 1);
            setIconsFooter([...iconsFooter,"help-circle"]);
            }}>
            Quase não lembrei
        </div>
        <div className="green-option"  onClick={ () => {
        setTurn(true);
        setClassQuestion('green line');
        setIcon('checkmark-circle');
        setValueInicial(valueInicial + 1);
        setIconsFooter([...iconsFooter,"checkmark-circle"]);
        }}>
            Zap!
        </div>
    </div>        
    );
}
export default function Question({
    side, answer,setSide, showOptions,setShowOptions
    ,setTurn,setClassQuestion,setIcon,valueInicial,setValueInicial,iconsFooter,setIconsFooter}
    ){
    return (
    <div className="question">
        <p>{side}</p>
        {!showOptions ? (
            <img src="./assets/images/setinha.png" alt="turn" 
            onClick={ () =>{ 
            setSide(answer);
            setShowOptions(true)}} />
        ): (
            <Options setTurn={setTurn}
            setClassQuestion={setClassQuestion}
            setIcon={setIcon}
            valueInicial={valueInicial}
            setValueInicial={setValueInicial}
            iconsFooter={iconsFooter}
            setIconsFooter={setIconsFooter}/>
        )} 
    </div>        
    );
}