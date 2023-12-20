
interface IProps {
  currentValue: string;
  calculateValue: string;
}

const Input = ({ currentValue, calculateValue }: IProps) => {
  return (
    <div className="contInput">
      <input type="text" value={currentValue} />
      <h4>{calculateValue}</h4>
    </div>
  );
};

export default Input;
