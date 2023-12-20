import ButtonCientific from "./atoms/ButtonCientific";

const Cientific = ({ handleAdd }: { handleAdd: (n: string) => void }) => {
  return (
    <div className="contCientific">
      <ButtonCientific symbol="π" set={handleAdd} />
      <ButtonCientific symbol="e" set={handleAdd} />
      <ButtonCientific symbol="x2" set={handleAdd} />
      <ButtonCientific symbol="x3" set={handleAdd} />
      <ButtonCientific symbol="xy" set={handleAdd} />
      <ButtonCientific symbol="x/-" set={handleAdd} />
      <ButtonCientific symbol="Rad" set={handleAdd} />
      <ButtonCientific symbol="√x" set={handleAdd} />
      <ButtonCientific symbol="3√x" set={handleAdd} />
      <ButtonCientific symbol="y√x" set={handleAdd} />
      <ButtonCientific symbol="x!" set={handleAdd} />
      <ButtonCientific symbol="log" set={handleAdd} />
      <ButtonCientific symbol="sin" set={handleAdd} />
      <ButtonCientific symbol="cos" set={handleAdd} />
      <ButtonCientific symbol="tan" set={handleAdd} />
      <ButtonCientific symbol="1/x" set={handleAdd} />
      <ButtonCientific symbol="ln" set={handleAdd} />
      <ButtonCientific symbol="sinh" set={handleAdd} />
      <ButtonCientific symbol="cosh" set={handleAdd} />
      <ButtonCientific symbol="tanh" set={handleAdd} />
    </div>
  );
};

export default Cientific;
