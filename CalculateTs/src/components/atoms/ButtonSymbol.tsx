type ButtonProps = {
  symbol: string;
  set: (a: string) => void;
};

const ButtonSymbol = ({ symbol, set }: ButtonProps) => {
  return <button  className="buttonSymbol" onClick={() => set(symbol)}>{symbol}</button>;
};

export default ButtonSymbol;
