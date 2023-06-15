/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */

import { useState, useEffect } from "react";
import "./Defectpage.css";
import Footer from "../Footer/Footer";
import CardList from "../Card/CardList";
import UniButton from "../UniButton/UniButton";
import boxPic from "../../images/defect_box_picture.png";

function Defectpage({ cards, cardBarcode, cardBarcodeDefect, checkedCards }) {
  const [IsKeyboardButtonActive, setIsKeyboardButtonActive] = useState(true);
  const [isDefectProcessingFinished, setIsDefectProcessingFinished] =
    useState(false);

  // console.log(cardBarcodeDefect.length);

  function finishDefectprocessing() {
    setIsDefectProcessingFinished(true);
    setIsKeyboardButtonActive(false);
  }

  return (
    <>
      <div className="defectpage__container">
        <div className="main__left-column" />
        <div
          className={`main__center-column ${
            isDefectProcessingFinished ? `defectpage__center-column` : ``
          }`}
        >
          {!isDefectProcessingFinished && (
            <>
              <h3 className="defectpage__title">
                Сканируйте бракованный товар
              </h3>
              <CardList
                cards={cards}
                cardBarcode={cardBarcode}
                cardBarcodeDefect={cardBarcodeDefect}
                checkedCards={checkedCards}
              />
            </>
          )}
          {isDefectProcessingFinished && (
            <>
              <img
                src={boxPic}
                alt="изображение коробки"
                className="defectpage__pic"
              />
              <h3 className="defectpage__title defectpage__title_finish">
                Положите бракованные товары в тару
              </h3>
            </>
          )}
        </div>
        <div className="main__right-column">
          {cardBarcodeDefect.length !== 0 ? (
            <UniButton
              currentPage="defectpage"
              // eslint-disable-next-line react/jsx-no-bind
              finishDefectprocessing={finishDefectprocessing}
              name={isDefectProcessingFinished ? "Готово" : "Далее"}
            />
          ) : null}
        </div>
      </div>
      <Footer IsKeyboardButtonActive={IsKeyboardButtonActive} />
    </>
  );
}

export default Defectpage;
