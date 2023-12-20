type ButtonProps = {
  symbol: string;
  set: (a: string) => void;
};

const Button = ({ symbol, set }: ButtonProps) => {
  return <button className="buttonNumber" onClick={() => set(symbol)}>{symbol}</button>;
};

export default Button;
