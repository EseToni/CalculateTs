type ButtonEqualProps = {
  calculateFn: () => void;
};

const ButtonEqual = ({ calculateFn }: ButtonEqualProps) => {
  return <button className="buttonEqual" onClick={calculateFn}>{"="}</button>;
};

export default ButtonEqual;
