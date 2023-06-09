import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Homepage from "../Homepage/Homepage";
import Problempage from "../Problempage/Problempage";
import NumberKeyboard from "../Keyboard/NumberKeyboard";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [KeyboardResult, setKeyboardResult] = useState("");

  console.log(KeyboardResult);

  const boxData = [
    {
      id: 1,
      name: "Коробка YMA",
      barcode: 444,
    },
    {
      id: 2,
      name: "Коробка YMC",
      barcode: 5555,
    },
    {
      id: 3,
      name: "Пакет MYC",
      barcode: 6666,
    },
    {
      id: 4,
      name: "Коробка YMF",
      barcode: 777,
    },
    {
      id: 5,
      name: "Коробка MYF",
      barcode: 888,
    },
    {
      id: 6,
      name: "Пакет MYA",
      barcode: 999,
    },
    {
      id: 7,
      name: "Пакет MYD",
      barcode: 344,
    },
    {
      id: 8,
      name: "Пакет MYB",
      barcode: 56565,
    },
    {
      id: 9,
      name: "Пакет MYE",
      barcode: 6756,
    },
  ];

  const handleKeyboardResult = (value) => {
    // console.log(value);
    setKeyboardResult(value);
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="main"
          element={<Main result={KeyboardResult} boxData={boxData} />}
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
