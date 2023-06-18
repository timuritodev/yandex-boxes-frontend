/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable prefer-object-spread */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */

import "./App.css";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
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
import ProblempageMain from "../Problempage/ProblempageMain/ProblempageMain";
import NotFound from "../NotFound/NotFound";
import {
  convertToBoxArray,
  generateUniqueKey,
  getBoxNameByBarcode,
  recommendedBoxes,
  transformMultiplyBarcodes,
} from "../../utils/utils";
import { boxesBarcodes, convertData } from "../../utils/constants";
import * as Api from "../../utils/Api";
import Loader from "../Loader/Loader";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  /* работа с карточками(товарами) */

  const [cards, setCards] = useState([]);
  const [cardBarcode, setCardBarcode] = useState([]);
  // массив всех объектов проверенных карточек
  const [checkedCards, setCheckedCards] = useState([]);
  // что то для 'есть проблема
  const [cardBarcodeDefect, setCardBarcodeDefect] = useState([]);
  // что то для 'есть проблема
  const [checkedCardsDefect, setCheckedCardsDefeсt] = useState([]);

  /* работа с попапом */

  const [InfoTooltipText, setInfoTooltipText] = useState("Что-то пошло не так");
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false);

  /* работа с коробками */

  // штрих код который отправляется в компонент коробки для выбора стиля
  const [boxBarcode, setBoxBarcode] = useState(0);
  // коробки, которые рендерятся
  const [boxes, setBoxes] = useState([]);
  // список отсканированных коробок
  const [checkedBoxes, setCheckedBoxes] = useState([]);
  // массив всех приходящих с бека штрихкодов, переработанный в нужный нам формат
  const [allBarcodesFromBackend, setAllBarcodesFromBackend] = useState([]);

  /* переменные для отслеживания страницы */

  const [currentPath, setCurrentPath] = useState(null);
  const [previousPath, setPreviousPath] = useState(null);

  /* стейт для комментария, который отправится на бек */

  const [comment, setComment] = useState("");

  /* стейт для айди заказа */

  const [orderId, setOrderId] = useState(0);

  /* стейт для бека — уокплектован заказ или возникла проблема */

  const [orderIsCompleted, setOrderIsCompleted] = useState(true);

  const [isLoader, setIsLoader] = useState(false);

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
      setInfoTooltipText("Нельзя отсканировать больше 9 коробок");
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
      setComment(`Выбрана нерекомендованная упаковка`);
    }
  }

  function handleClickProblemButton() {
    setCardBarcode([]);
    setCardBarcodeDefect([]);
  }

  function closePopup() {
    setIsInfoTooltipPopupOpen(false);
  }

  function sendStatusAboutFail() {
    setComment(`бракованный товар`);
    setOrderIsCompleted(false);
    const data = {
      id: orderId,
      is_completed: orderIsCompleted,
      user_id: "123231434",
      comment,
      used_cartons: checkedBoxes,
    };
    Api.finishOrder(data)
      .then((res) => {})
      .catch((err) => {
        setInfoTooltipText(`${err}`);
        setIsInfoTooltipPopupOpen(true);
      });
  }

  // это будет функция которая инициирует гет запрос данных заказа
  function getOrder() {
    setIsLoader(true);
    Api.getOrder()
      .then((res) => {
        console.log(res);
        const dataFromBackend = convertData(res);
        const clonedCardList = Object.assign({}, dataFromBackend);
        const cardList = clonedCardList.items;
        const transformesApiData = convertData(res);
        const arrayBarcodesFromBackend = transformMultiplyBarcodes(
          transformesApiData.items,
        );
        setCards(cardList);
        setBoxes(convertToBoxArray(res.cartons[0].barcode));
        setAllBarcodesFromBackend(arrayBarcodesFromBackend);
        setOrderId(res.order_id);
        navigate("/main");
      })
      .catch((err) => {
        setInfoTooltipText(`${err}`);
        setIsInfoTooltipPopupOpen(true);
      })
      .finally(() => {
        setIsLoader(false);
      });
  }

  // это будет функция которая отправит собранный заказ на бекенд
  function finishOrder() {
    localStorage.clear();
    const data = {
      id: orderId,
      is_completed: orderIsCompleted,
      user_id: "123231434",
      comment: "",
      used_cartons: checkedBoxes,
    };
    Api.finishOrder(data)
      .then((res) => {
        navigate("/readypage");
      })
      .catch((err) => {
        setInfoTooltipText(`${err}`);
        setIsInfoTooltipPopupOpen(true);
      });
  }

  const handleKeyboardResult = (value) => {
    // Определение переменных для проверок
    const isBoxBarcode = boxesBarcodes.includes(Number(value));
    let isDuplicateBarcode = false;
    if (previousPath === "/defectpage") {
      isDuplicateBarcode = cardBarcodeDefect.includes(Number(value));
    } else {
      isDuplicateBarcode = cardBarcode.includes(Number(value));
    }
    const isValidBarcode = allBarcodesFromBackend.includes(Number(value));

    if (allBarcodesFromBackend.length === cardBarcode.length) {
      if (isBoxBarcode) {
        // Если штрих-код относится к коробкам и выполнено условие длины всех штрих-кодов
        // манипулируем веткой про коробки
        checkBoxes(value);
      } else {
        setInfoTooltipText("Нет коробок с таким штрих-кодом");
        setIsInfoTooltipPopupOpen(true);
      }
    } else if (isDuplicateBarcode) {
      // Если штрих-код уже присутствует в массиве
      setInfoTooltipText("Нельзя сканировать штрих-код дважды");
      setIsInfoTooltipPopupOpen(true);
    } else if (!isValidBarcode) {
      // Если штрих-код не существует в заказе
      setInfoTooltipText("Такого штрих-кода нет в заказе");
      setIsInfoTooltipPopupOpen(true);
    } else {
      // Выполняется проверка товаров
      checkCards(value);
    }
  };

  function clearState() {
    setCheckedBoxes([]);
    setAllBarcodesFromBackend([]);
    setAllBarcodesFromBackend([]);
    setCardBarcode([]);
    setCheckedCards([]);
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage getOrder={getOrder} />} />
        <Route
          path="main"
          element={
            isLoader ? (
              <Loader />
            ) : (
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
            )
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
        <Route path="problempage-main" element={<ProblempageMain />} />
        <Route
          path="defectpage"
          element={
            <Defectpage
              cards={cards}
              checkedCards={checkedCards}
              cardBarcode={cardBarcode}
              cardBarcodeDefect={cardBarcodeDefect}
              sendStatusAboutFail={sendStatusAboutFail}
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
              allBarcodesFromBackend={allBarcodesFromBackend}
            />
          }
        />
        <Route
          path="readypage"
          element={<ReadyPage clearState={clearState} />}
        />
        <Route
          path="keyboardpage"
          element={<NumberKeyboard onResult={handleKeyboardResult} />}
        />
        <Route path="*" element={<NotFound />} />
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
