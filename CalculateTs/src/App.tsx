import "./App.scss";
import Button from "./components/atoms/button/Button";
import Input from "./components/input/input.tsx";
import ButtonDelete from "./components/atoms/ButtonDelete.tsx";
import ButtonSymbol from "./components/atoms/ButtonSymbol.tsx";
import ButtonEqual from "./components/atoms/ButtonEqual.tsx";
import Cientific from "./components/Cientific.tsx";
import History from "./components/History.tsx";
import { NUMBERS_1_9 } from "./constants/NUMBERS.ts";
import { useState } from "react";

const App = () => {
  const [currentValue, setCurrentValue] = useState("");
  const [calculateValue, setCalculateValue] = useState("0");
  const [handleBracket, setHandleBracket] = useState(false);
  const [history, setHistory] = useState<Array<string>>([]);
  const [toogleCientific, setToogleCientific] = useState(false);

  const handleDelete = () => {
    if (currentValue.length > 0) {
      const lastValue = currentValue[currentValue.length - 1];
      if (lastValue === "(" || lastValue === ")") {
        setHandleBracket(!handleBracket);
      }
      setCurrentValue(currentValue.slice(0, -1));
    }
  };

  const handleAdd = (number: string) => {
    setCurrentValue(currentValue + number);
  };

  const handleClean = () => {
    setCurrentValue("");
  };

  const calculateValueFn = () => {
    const result = eval(currentValue);
    setCalculateValue(result);
    setCurrentValue(result);
    setHistory([...history, currentValue + "=" + result]);
  };

  const setBracket = () => {
    if (handleBracket) {
      setCurrentValue(currentValue + ")");
    } else {
      setCurrentValue(currentValue + "(");
    }
    setHandleBracket(!handleBracket);
  };

  return (
    <body className="bodyContainer">
      {!toogleCientific && <History history={history} />}
      <div className="MainContainer">
        <Input currentValue={currentValue} calculateValue={calculateValue} />
        <div className="contButtons">
          <hr onClick={() => setToogleCientific(!toogleCientific)} className={toogleCientific ? 'hrWidth' : ''} />
        {toogleCientific && <Cientific handleAdd={handleAdd} />}
          <div className="cont1_9">
            {NUMBERS_1_9.map((number: string, index: number) => {
              return (
                <Button
                  key={index}
                  symbol={number}
                  set={(number) => handleAdd(number)}
                />
              );
            })}
            <ButtonDelete deleteFn={handleDelete} />
            <Button symbol={"0"} set={(number) => handleAdd(number)} />
            <ButtonSymbol symbol={"."} set={(symbol) => handleAdd(symbol)} />
          </div>
          <div className="contSymbol">
            <ButtonSymbol symbol={" / "} set={(symbol) => handleAdd(symbol)} />
            <ButtonSymbol symbol={" AC "} set={handleClean} />
            <ButtonSymbol symbol={" x "} set={() => handleAdd("*")} />
            <ButtonSymbol symbol={"()"} set={setBracket} />
            <ButtonSymbol symbol={" - "} set={(symbol) => handleAdd(symbol)} />
            <ButtonSymbol symbol={" % "} set={(symbol) => handleAdd(symbol)} />
            <ButtonSymbol symbol={" + "} set={(symbol) => handleAdd(symbol)} />
            <ButtonEqual calculateFn={calculateValueFn} />
          </div>
        </div>
      </div>
    </body>
  );
};

export default App;
