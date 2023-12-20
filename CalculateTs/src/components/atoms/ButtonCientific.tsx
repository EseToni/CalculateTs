type ButtonProps = {
  symbol: string;
  set: (a: string) => void;
};

const ButtonCientific = ({ symbol, set }: ButtonProps) => {
  return (
    <button className="buttonCientific" onClick={() => set(symbol)}>
      {symbol}
    </button>
  );
};

export default ButtonCientific;
