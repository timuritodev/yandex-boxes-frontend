import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Homepage from "../Homepage/Homepage";
import Problempage from "../Problempage/Problempage";
import NumberKeyboard from "../Keyboard/NumberKeyboard";
import { convertToBoxArray, convertToBarcodeArray } from "../../utils/utils";
import { hardcodeData } from "../../utils/constants";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [KeyboardResult, setKeyboardResult] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [OrderBoxBarcode, setOrderBoxBarcode] = useState(0);

  // массив коробок которые были проверены — для отправки бекам
  const checkedBoxes = [];

  console.log(convertToBoxArray(hardcodeData.carton));

  const handleKeyboardResult = (value) => {
    // это все в случае коробки — для карточек нужна другая ветка сценария, можно их отделить друг от друга с помощью проверки, входит ли value в список штрихкодов, которые есть у коробок
    const foundItem = convertToBarcodeArray(hardcodeData).find(
      (item) => Number(item) === Number(value),
    );
    if (foundItem) {
      setOrderBoxBarcode(+foundItem);
      checkedBoxes.push(+foundItem);
    }
    convertToBoxArray(+value);
    checkedBoxes.push(+value);
  };

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
              boxData={convertToBoxArray(hardcodeData.carton)}
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
