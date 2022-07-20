export default function Flashcard({position}){
    return (
        <div className="flashcard">
            <span>Pergunta {position}</span>
            <ion-icon name="play-outline" className="icon"></ion-icon>
        </div>
    );
}