import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Homepage from "../Homepage/Homepage";
import Problempage from "../Problempage/Problempage";
import NumberKeyboard from "../Keyboard/NumberKeyboard";
// eslint-disable-next-line no-unused-vars
import {
  convertToBoxArray,
  generateUniqueKey,
  getBoxNameByBarcode,
  // eslint-disable-next-line no-unused-vars
} from "../../utils/utils";
import { hardcodeData, boxesBarcodes } from "../../utils/constants";

const boxesList = convertToBoxArray(hardcodeData.carton);

function App() {
  // eslint-disable-next-line no-unused-vars
  const [KeyboardResult, setKeyboardResult] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [OrderBoxBarcode, setOrderBoxBarcode] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [boxes, setBoxes] = useState(boxesList);

  // массив коробок которые были проверены — для отправки бекам
  const checkedBoxes = [];

  function checkBoxes(value) {
    const foundItem = boxes.find((item) => Number(item) === Number(value));
    if (foundItem) {
      setOrderBoxBarcode(+foundItem);
      checkedBoxes.push(+foundItem);
    } else {
      // здесь нужна проверка есть ли вообще указанный штрих код в массиве со штрих кодами
      const newBox = {
        id: generateUniqueKey(),
        name: getBoxNameByBarcode(+value),
        barcode: +value,
      };
      setBoxes([newBox, ...boxes]);
      checkedBoxes.push(+value);
    }
  }

  const handleKeyboardResult = (value) =>
    boxesBarcodes.includes(Number(value))
      ? checkBoxes(value)
      : setKeyboardResult(value);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="main"
          element={
            <Main
              result={KeyboardResult}
              boxes={boxes}
              OrderBoxBarcode={OrderBoxBarcode}
            />
          }
        />
        <Route path="problempage" element={<Problempage />} />
        <Route
          path="keyboardpage"
          element={<NumberKeyboard onResult={handleKeyboardResult} />}
        />
        <Route path="*" element={<h2>Страницы не существует</h2>} />
      </Routes>
    </div>
  );
}

export default App;
