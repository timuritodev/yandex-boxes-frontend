/* eslint-disable react/jsx-no-bind */
/* eslint-disable prefer-object-spread */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Homepage from "../Homepage/Homepage";
import Problempage from "../Problempage/Problempage";
import NumberKeyboard from "../Keyboard/NumberKeyboard";
import ReadyPage from "../ReadyPage/ReadyPage";
import InfoToolTip from "../InfoTooltip/InfoTooltip";
import {
  convertToBoxArray,
  generateUniqueKey,
  getBoxNameByBarcode,
  recommendedBoxes,
} from "../../utils/utils";
import { hardcodeData, boxesBarcodes } from "../../utils/constants";

// отпочковать массив товаров из данных от бека
const clonedCardList = Object.assign({}, hardcodeData);
const cardList = clonedCardList.items;
const cardListLength = cardList.length;

const boxesList = convertToBoxArray(hardcodeData.carton);

function App() {
  const [cards, setCards] = useState(cardList);
  const [cardBarcode, setCardBarcode] = useState([]);
  const [checkedCards, setCheckedCards] = useState([]);

  const [InfoTooltipText, setInfoTooltipText] = useState(
    "Сканируйте маркировку",
  );
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false);

  const [KeyboardResult, setKeyboardResult] = useState("");

  // штрих код который отправляется в компонент коробки для выбора стиля
  const [boxBarcode, setBoxBarcode] = useState(0);
  // список всех коробок
  const [boxes, setBoxes] = useState(boxesList);
  // список отсканированных коробок
  const [checkedBoxes, setCheckedBoxes] = useState([]);

  function checkCards(value) {
    cardList.forEach((item) => {
      if (item.barcode === Number(value)) {
        const newCardBarcode = [...cardBarcode, item.barcode];
        const newCheckedCards = [...checkedCards, item];
        setCheckedCards(newCheckedCards);
        setCardBarcode(newCardBarcode);
      }
    });
  }

  function checkBoxes(value) {
    // определяем является ли отсканированная только что коробка той что была порекомендована системой
    const foundItem = recommendedBoxes.find(
      (item) => item.barcode === Number(value),
    );
    // если да то
    if (foundItem) {
      // отправляем штрих код в ребенка для выбора цвета коробки
      setBoxBarcode(foundItem.barcode);
      // добавляем штрих код в список отсканированных
      // checkedBoxes.push(+foundItem);
      setCheckedBoxes([foundItem.barcode, ...checkedBoxes]);
      // если нет то
    } else if (checkedBoxes.length > 8) {
      setIsInfoTooltipPopupOpen(true);
      setInfoTooltipText("нельзя отсканировать больше 9 коробок");
    } else {
      // записываем введенный штрих код для выбора цвета коробки
      setBoxBarcode(+value);
      // если коробка пришла от упаковщика, добалвяем ее в массив
      const newBox = {
        id: generateUniqueKey(),
        name: getBoxNameByBarcode(+value),
        barcode: +value,
      };
      setBoxes([newBox, ...boxes]);
      // и добавляем ее в массив отсканированных
      // checkedBoxes.push(+value);
      setCheckedBoxes([+value, ...checkedBoxes]);
    }
  }

  function closePopup() {
    setIsInfoTooltipPopupOpen(false);
  }

  const CardsArraysIsEqual = (a, b) =>
    a.length === b.length &&
    a.every((item, index) =>
      Object.keys(item).every((key) => item[key] === b[index][key]),
    );

  const handleKeyboardResult = (value) =>
    // относится ли штрих код к коробкам
    boxesBarcodes.includes(Number(value)) &&
    CardsArraysIsEqual(cards, checkedCards)
      ? // если да то, выполняется функция checkBoxes
        checkBoxes(value)
      : // если нет то выполняется код ниже (тут будет вызов функции тимура)
        checkCards(value);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="main"
          element={
            <Main
              cardListLength={cardListLength}
              boxes={boxes}
              boxBarcode={boxBarcode}
              checkedBoxes={checkedBoxes}
              cards={cards}
              checkedCards={checkedCards}
              cardBarcode={cardBarcode}
            />
          }
        />
        <Route path="problempage" element={<Problempage />} />
        <Route path="readypage" element={<ReadyPage />} />
        <Route
          path="keyboardpage"
          element={<NumberKeyboard onResult={handleKeyboardResult} />}
        />
        <Route path="*" element={<h2>Страницы не существует</h2>} />
      </Routes>
      <InfoToolTip
        onClose={closePopup}
        isOpen={isInfoTooltipPopupOpen}
        text={InfoTooltipText}
      />
    </div>
  );
}

export default App;
