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
  const [UserBoxBarcode, setUserBoxBarcode] = useState(0);

  const boxesForRendering = convertToBoxArray(hardcodeData);
  const barcodeArray = convertToBarcodeArray(hardcodeData);
  const checkedBoxes = [];

  console.log(boxesForRendering);

  const handleKeyboardResult = (value) => {
    // это все в случае коробки — для карточек нужна другая ветка сценария, можно их отделить друг от друга с помощью проверки, входит ли value в список штрихкодов, которые есть у коробок
    const foundItem = barcodeArray.find(
      (item) => Number(item) === Number(value),
    );
    if (foundItem) {
      setOrderBoxBarcode(+foundItem);
      checkedBoxes.push(+foundItem);
      // отправить значение, чтобы написать логику стилей для коробки, предложенной системой
      // добавить в массив выбранных в итоге коробок
    }
    // иначе добавить новую коробку в массив boxdata из которого генерятся коробки
    // добавить упаковку в массив который поедет обратно
    setUserBoxBarcode(value);
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
              boxData={boxesForRendering}
              OrderBoxBarcode={OrderBoxBarcode}
              UserBoxBarcode={UserBoxBarcode}
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
