/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable prefer-object-spread */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */

import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Homepage from "../Homepage/Homepage";
import Problempage from "../Problempage/Problempage";
import Defectpage from "../Defectpage/Defectpage";
import NoGoodspage from "../NoGoodspage/NoGoodspage";
import NumberKeyboard from "../Keyboard/NumberKeyboard";
import ReadyPage from "../ReadyPage/ReadyPage";
import InfoToolTip from "../InfoTooltip/InfoTooltip";
import {
  convertToBoxArray,
  generateUniqueKey,
  getBoxNameByBarcode,
  recommendedBoxes,
  transformMultiplyBarcodes,
} from "../../utils/utils";
import {
  hardcodeData,
  newHardcodeData,
  boxesBarcodes,
} from "../../utils/constants";
import * as Api from "../../utils/Api";

// отпочковать массив товаров из данных от бека
const clonedCardList = Object.assign({}, hardcodeData);
const cardList = clonedCardList.items;
const cardListLength = cardList.length;

// массив всех приходящих с бека штрихкодов
const allBarcodesFromBackend = transformMultiplyBarcodes(hardcodeData.items);

// eslint-disable-next-line no-undef
const boxesList = convertToBoxArray(newHardcodeData.cartons[0].barcode);

function App() {
  const location = useLocation();
  // работа с карточками(товарами)
  const [cards, setCards] = useState(cardList);
  // все введенные с клавиатуры
  const [cardBarcode, setCardBarcode] = useState([]);
  // массив всех объектов проверенных карточек
  const [checkedCards, setCheckedCards] = useState([]);
  const [cardBarcodeDefect, setCardBarcodeDefect] = useState([]);
  const [checkedCardsDefect, setCheckedCardsDefeсt] = useState([]);
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

  // переменные для отслеживания страницы
  const [currentPath, setCurrentPath] = useState(null);
  const [previousPath, setPreviousPath] = useState(null);

  // логика для предыдущей страницы
  useEffect(() => {
    if (location.pathname !== currentPath) {
      setPreviousPath(currentPath);
      setCurrentPath(location.pathname);
    }
  }, [location.pathname]);

  function checkMultiplyBarcodes(data, item, value) {
    if (previousPath === "/main") {
      if (data.includes(Number(value))) {
        const newCardBarcode = [...cardBarcode, Number(value)];
        const newCheckedCards = [...checkedCards, item];
        setCheckedCards(newCheckedCards);
        setCardBarcode(newCardBarcode);
      }
    } else if (data.includes(Number(value))) {
      const newCardBarcodeDefect = [...cardBarcodeDefect, Number(value)];
      const newCheckedCardsDefect = [...checkedCardsDefect, item];
      setCheckedCardsDefeсt(newCheckedCardsDefect);
      setCardBarcodeDefect(newCardBarcodeDefect);
    }
  }

  function checkBarcode(item, value) {
    if (previousPath === "/main") {
      if (item.barcode === Number(value)) {
        const newCardBarcode = [...cardBarcode, item.barcode];
        const newCheckedCards = [...checkedCards, item];
        setCheckedCards(newCheckedCards);
        setCardBarcode(newCardBarcode);
      }
    } else if (item.barcode === Number(value)) {
      const newCardBarcodeDefect = [...cardBarcodeDefect, item.barcode];
      const newCheckedCardsDefect = [...checkedCardsDefect, item];
      setCheckedCardsDefeсt(newCheckedCardsDefect);
      setCardBarcodeDefect(newCardBarcodeDefect);
    }
  }

  function checkCards(value) {
    cards.forEach((item) => {
      const data = item.multiplyBarcodes;
      if (data) {
        checkMultiplyBarcodes(data, item, value);
      } else {
        checkBarcode(item, value);
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

  function handleClickProblemButton() {
    setCardBarcode([]);
    setCardBarcodeDefect([]);
  }

  function closePopup() {
    setIsInfoTooltipPopupOpen(false);
  }

  /* const CardsArraysIsEqual = (a, b) =>
    a.length === b.length &&
    a.every((item, index) =>
      Object.keys(item).every((key) => item[key] === b[index][key]),
    ); */

  // это будет функция которая инициирует гет запрос данных заказа
  function getOrder() {
    console.log("получить заказ");
    /* Api.getOrder()
    .then((res) => {
      console.log(res)
    })
    .catch((err) => console.log(err)) */
  }

  // это будет функция которая отправит собранный заказ на бекенд
  function finishOrder() {
    console.log("завершить заказ");
    /* const data = {
      id: 1232434,
      is_completed: true,
      user_id: '123231434',
      comment: 'все ок',
      used_cartons: [120,130],
    }
    Api.finishOrder(data).then((res) => {
      console.log(res)
    })
    .catch((err) => console.log(err)) */
  }

  const handleKeyboardResult = (value) =>
    // относится ли штрих код к коробкам
    boxesBarcodes.includes(Number(value)) &&
    allBarcodesFromBackend.length === cardBarcode.length
      ? // если да то, выполняется функция checkBoxes
        checkBoxes(value)
      : // если нет то выполняется код ниже (тут будет вызов функции тимура)
        checkCards(value);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage getOrder={getOrder} />} />
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
              cardBarcodeDefect={cardBarcodeDefect}
              finishOrder={finishOrder}
              allBarcodesFromBackend={allBarcodesFromBackend}
            />
          }
        />
        <Route
          path="problempage"
          element={
            <Problempage
              cards={cards}
              checkedCards={checkedCards}
              cardBarcode={cardBarcode}
              handleClickProblemButton={handleClickProblemButton}
            />
          }
        />
        <Route
          path="defectpage"
          element={
            <Defectpage
              cards={cards}
              checkedCards={checkedCards}
              cardBarcode={cardBarcode}
              cardBarcodeDefect={cardBarcodeDefect}
            />
          }
        />
        <Route
          path="nogoodspage"
          element={
            <NoGoodspage
              cards={cards}
              checkedCards={checkedCards}
              cardBarcode={cardBarcode}
            />
          }
        />
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
