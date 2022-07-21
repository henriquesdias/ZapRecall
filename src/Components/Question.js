export default function Question({side, answer,setSide, showOptions,setShowOptions}){
    return (
    <div className="question">
        <p>{side}</p>
        {!showOptions ? (
            <img src="./assets/images/setinha.png" alt="turn" 
            onClick={ () =>{ 
            setSide(answer);
            setShowOptions(true)}} />
        ): (
            <div className="options">
                <div className="red-option">
                    Não lembrei
                </div>
                <div className="orange-option">
                    Quase não lembrei
                </div>
                <div className="green-option">
                    Zap!
                </div>
            </div>
        )}
    </div>        
    );
}