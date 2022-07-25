import arrow from "./assets/images/setinha.png";
import Option from "./Option";
const options = [
  {
    className: "red-option",
    color: "red line",
    icon: "close-circle",
    text: "Não lembrei",
  },
  {
    className: "orange-option",
    color: "orange line",
    icon: "help-circle",
    text: "Quase não lembrei",
  },
  {
    className: "green-option",
    color: "green line",
    icon: "checkmark-circle",
    text: "Zap!",
  },
];

function Options({
  setTurn,
  setClassQuestion,
  setIcon,
  valueInicial,
  setValueInicial,
  iconsFooter,
  setIconsFooter,
}) {
  return (
    <div className="options">
      {options.map( (element,index) => (
      <Option 
      className={element.className}
      color={element.color}
      icon={element.icon}
      text={element.text}
      setTurn={setTurn}
      setClassQuestion={setClassQuestion}
      setIcon={setIcon}
      setValueInicial={setValueInicial}
      setIconsFooter={setIconsFooter}
      valueInicial={valueInicial}
      iconsFooter={iconsFooter}
      key={index} />
      ))}
    </div>
  );
}
export default function Question({
  side,
  answer,
  setSide,
  showOptions,
  setShowOptions,
  setTurn,
  setClassQuestion,
  setIcon,
  valueInicial,
  setValueInicial,
  iconsFooter,
  setIconsFooter,
}) {
  return (
    <div className="question">
      <p>{side}</p>
      {!showOptions ? (
        <img
          src={arrow}
          alt="turn"
          onClick={() => {
            setSide(answer);
            setShowOptions(true);
          }}
        />
      ) : (
        <Options
          setTurn={setTurn}
          setClassQuestion={setClassQuestion}
          setIcon={setIcon}
          valueInicial={valueInicial}
          setValueInicial={setValueInicial}
          iconsFooter={iconsFooter}
          setIconsFooter={setIconsFooter}
        />
      )}
    </div>
  );
}
