export default function Option({
  className,
  color,
  icon,
  text,
  setTurn,
  setClassQuestion,
  setIcon,
  setValueInicial,
  setIconsFooter,
  valueInicial,
  iconsFooter,
}) {
  return (
    <div
      className={className}
      onClick={() => {
        setTurn(true);
        setClassQuestion(color);
        setIcon(icon);
        setValueInicial(valueInicial + 1);
        setIconsFooter([...iconsFooter, icon]);
      }}
    >
      {text}
    </div>
  );
}
