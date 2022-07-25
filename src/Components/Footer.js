import happy from "./assets/images/party.png";
import sad from "./assets/images/sad.png";
function Icon({ name }) {
  return <ion-icon name={name}></ion-icon>;
}
export default function Footer({
  valueInicial,
  numberOfQuestions,
  iconsFooter,
}) {
  let textResult = "Você não esqueceu de nenhum flashcard!";
  let emoticonResult = happy;
  let text = "Parabéns!";
  const failed = iconsFooter.indexOf("close-circle") !== -1;
  if (failed) {
    emoticonResult = sad;
    textResult = "Ainda falta alguns... Mas não desanime!";
    text = "Putz...";
  }
  return (
    <footer>
      {valueInicial === numberOfQuestions ? (
        <>
          <div>
            <img src={emoticonResult} alt="emoji" />
            <span>{text}</span>
          </div>
          <p>{textResult}</p>
        </>
      ) : (
        ""
      )}
      {valueInicial}/{numberOfQuestions} Concluídos
      <div className="icons">
        {iconsFooter.map((icon, index) => (
          <Icon name={icon} key={index} />
        ))}
      </div>
    </footer>
  );
}
