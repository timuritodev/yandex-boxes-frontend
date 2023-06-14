/* eslint-disable no-else-return */
/* eslint-disable prefer-const */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */

import "./Card.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import barcodepic from "../../images/barcode.svg";
import Progressbar from "../Progressbar/Progressbar";
import ExpendedCard from "./ExpandedCard/ExpandedCard";

function Card({
  name,
  barcode,
  picture,
  packageType,
  amount,
  cardBarcode,
  cardBarcodeDefect,
  checkedCards,
  selectedCards,
  setSelectedCards,
  dataForMultiplyBarcodes,
}) {
  const location = useLocation();

  const [expanded, setExpanded] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (location.pathname === "/nogoodspage" && amount === 1) {
      setIsClicked(!isClicked);
      setSelectedCards((prevSelectedCards) => {
        if (prevSelectedCards.includes(barcode)) {
          return prevSelectedCards.filter((card) => card !== barcode);
        } else {
          return [...prevSelectedCards, barcode];
        }
      });
    }
  };

  const handleExpand = () => {
    setExpanded(!expanded);
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
        {amount > 1 && (
          <div
            className={`expand__button ${
              expanded ? "expanded__button_open" : ""
            }`}
            role="button"
            onClick={handleExpand}
            tabIndex={0}
          >
            <span
              className={`expand__button_icon ${
                expanded ? "expanded__button_icon_open" : ""
              }`}
            >
              ▼
            </span>
          </div>
        )}
      </div>
      {amount > 1 && expanded && (
        <div className="expanded__cards">
          {dataForMultiplyBarcodes.map((i, index) => (
            <ExpendedCard
              key={index}
              name={name}
              barcode={i}
              picture={null}
              packageType={packageType}
              amount={1}
              cardBarcode={cardBarcode}
              cardBarcodeDefect={cardBarcodeDefect}
              selectedCards={selectedCards}
              setSelectedCards={setSelectedCards}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Card;
