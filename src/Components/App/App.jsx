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
  convertData,
} from "../../utils/constants";
import * as Api from "../../utils/Api";

// массив всех приходящих с бека штрихкодов
// const allBarcodesFromBackend = transformMultiplyBarcodes(hardcodeData.items);

// eslint-disable-next-line no-undef
// const boxesList = convertToBoxArray(newHardcodeData.cartons[0].barcode);

function App() {
  const location = useLocation();

  /* работа с карточками(товарами) */

  const [cards, setCards] = useState([]);
  // все введенные с клавиатуры
  const [cardBarcode, setCardBarcode] = useState([]);
  // массив всех объектов проверенных карточек
  const [checkedCards, setCheckedCards] = useState([]);
  // что то для 'есть проблема
  const [cardBarcodeDefect, setCardBarcodeDefect] = useState([]);
  // что то для 'есть проблема
  const [checkedCardsDefect, setCheckedCardsDefeсt] = useState([]);

  /* работа с попапом */

  const [InfoTooltipText, setInfoTooltipText] = useState(
    "Сканируйте маркировку",
  );
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false);

  /* пока непонятная переменная */

  const [KeyboardResult, setKeyboardResult] = useState("");

  /* работа с коробками */

  // штрих код который отправляется в компонент коробки для выбора стиля
  const [boxBarcode, setBoxBarcode] = useState(0);
  // рекомендуемые коробки, которые приходят с бека
  const [boxes, setBoxes] = useState([]);
  // список отсканированных коробок
  const [checkedBoxes, setCheckedBoxes] = useState([]);
  // массив всех приходящих с бека штрихкодов, переработанный в нужный нам формат
  const [allBarcodesFromBackend, setAllBarcodesFromBackend] = useState([]);

  /* переменные для отслеживания страницы */

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
    // отпочковать массив товаров из данных от бека
    const dataFromBackend = convertData(newHardcodeData);
    const clonedCardList = Object.assign({}, dataFromBackend);
    const cardList = clonedCardList.items;
    const cardListLength = cardList.length;
    // записываем рекомендуемую коробку
    // вместо newHardcodeData будет res
    const perfectBox = convertToBoxArray(newHardcodeData.cartons[0].barcode);
    // записываем в массив все штрихкоды коробок из бека для проверок
    const transformesApiData = convertData(newHardcodeData);
    // записываем в массив все штрихкоды коробок из бека для проверок
    const arrayBarcodesFromBackend = transformMultiplyBarcodes(
      transformesApiData.items,
    );
    setCards(cardList);
    setBoxes(perfectBox);
    setAllBarcodesFromBackend(arrayBarcodesFromBackend);
    /* Api.getOrder()
    .then((res) => {
      //весь код выше должен быть здесь
      console.log(res)
    })
    .catch((err) => console.log(err)) */
  }

  // это будет функция которая отправит собранный заказ на бекенд
  function finishOrder() {
    setCheckedBoxes([]);
    console.log("завершить заказ");
    /* const data = {
      id: 1232434,
      is_completed: true,
      user_id: '123231434',
      comment: '',
      used_cartons: checkedBoxes,
    }
    Api.finishOrder(data).then((res) => {
      console.log(res)
    })
    .catch((err) => console.log(err)) */
  }

  const handleKeyboardResult = (value) => {
    // Определение переменных для проверок
    const isBoxBarcode = boxesBarcodes.includes(Number(value));
    const isDuplicateBarcode = cardBarcode.includes(Number(value));
    const isValidBarcode = allBarcodesFromBackend.includes(Number(value));

    if (isBoxBarcode && allBarcodesFromBackend.length === cardBarcode.length) {
      // Если штрих-код относится к коробкам и выполнено условие длины всех штрих-кодов
      // манипулируем веткой про коробки
      checkBoxes(value);
    } else if (isDuplicateBarcode) {
      // Если штрих-код уже присутствует в массиве
      setInfoTooltipText("Нельзя сканировать штрих-код дважды");
      setIsInfoTooltipPopupOpen(true);
    } else if (!isValidBarcode) {
      // Если штрих-код не существует в заказе
      setInfoTooltipText("Такого штрих-кода в заказе нет");
      setIsInfoTooltipPopupOpen(true);
    } else {
      // Выполняется проверка товаров
      checkCards(value);
    }
  };

  console.log(boxes);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage getOrder={getOrder} />} />
        <Route
          path="main"
          element={
            <Main
              cardListLength={cards.length}
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
