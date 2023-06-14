/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import { useLocation } from "react-router-dom";
import barcodepic from "../../../images/barcode.svg";
import Progressbar from "../../Progressbar/Progressbar";

function ExpandedCard({
  name,
  barcode,
  picture,
  packageType,
  amount,
  cardBarcode,
  cardBarcodeDefect,
  setSelectedCards,
}) {
  const location = useLocation();

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (location.pathname === "/nogoodspage" && amount === 1) {
      setIsClicked(!isClicked);
      setSelectedCards((prevSelectedCards) => {
        if (prevSelectedCards.includes(barcode)) {
          return prevSelectedCards.filter((card) => card !== barcode);
        }
        return [...prevSelectedCards, barcode];
      });
    }
  };

  // меняем цвет упаковки для каждого товара
  let boxName = "";
  if (packageType === "Пакет") {
    boxName += "box__name_bag";
  } else if (packageType === "Пузырчатая плёнка") {
    boxName += " box__name_buble";
  } else {
    boxName += " box__name_stretch";
  }

  let isBarcodeMatched = false;

  if (location.pathname === "/defectpage") {
    isBarcodeMatched = cardBarcodeDefect.includes(barcode);
  } else {
    isBarcodeMatched = cardBarcode.includes(barcode);
  }

  // проверка для progressbar;
  let count = 0;
  if (isBarcodeMatched) {
    count += 1;
  }

  return (
    <section className="card">
      <div
        className={`card__container ${isBarcodeMatched ? "card__container_green" : ""} ${isClicked ? "card__container_green" : ""}`}
        onClick={handleClick}
      >
        <img className="img__card" alt="" src={picture} />
        <div className="name__container">
          <p className="name__title">{name}</p>
          {amount === 1 && (
            <div className="barcode__container">
              <img className="barcode__img" alt="" src={barcodepic} />
              <p className="barcode__text">{barcode}</p>
            </div>
          )}
        </div>
        <div className="box__container">
          <p className={`box__name ${boxName}`}>{packageType}</p>
          <div className="box__progress-container">
            <p className="box__amount">{amount}шт.</p>
            <Progressbar count={count} amount={amount} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExpandedCard;
