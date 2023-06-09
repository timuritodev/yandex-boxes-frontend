import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Homepage from "../Homepage/Homepage";
import Problempage from "../Problempage/Problempage";
import NumberKeyboard from "../Keyboard/NumberKeyboard";
import { convertToBoxArray } from "../../utils/utils";

// объявление функций для сохранения и получения данных из localStorage
const saveCardContainerGreenToLocalStorage = (barcode, value) => {
  localStorage.setItem(`cardContainerGreen_${barcode}`, String(value));
};

const getCardContainerGreenFromLocalStorage = (barcode) => {
  const value = localStorage.getItem(`cardContainerGreen_${barcode}`);
  return value === "true";
};

function App() {
  const [KeyboardResult, setKeyboardResult] = useState("");

  const boxesForRendering = convertToBoxArray({
    order_id: 54574564,
    carton: 6666,
    items: [],
  });

  const handleKeyboardResult = (value) => {
    console.log(value);
    setKeyboardResult(value);
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
              saveToLocalStorage={saveCardContainerGreenToLocalStorage}
              getFromLocalStorage={getCardContainerGreenFromLocalStorage}
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
