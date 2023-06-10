/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */

import "./Card.css";
import { useState } from "react";
import barcodepic from "../../images/barcode.svg";
import Progressbar from "../Progressbar/Progressbar";

function Card({ name, barcode, picture, packageType, amount, result, cardContainerGreen, count }) {
  const [expanded, setExpanded] = useState(false);
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

  return (
    <section className="card">
      <div className={`card__container ${cardContainerGreen ? "card__container_green" : ""}`}>
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
          <div>
            <p className="box__amount">{amount}шт.</p>
            <Progressbar count={count} amount={amount}/>
          </div>
        </div>
        {amount > 1 && (
          <div
            className={`expand__button ${expanded ? "expanded__button_open" : ""
              }`}
            role="button"
            onClick={handleExpand}
            tabIndex={0}
          >
            <span
              className={`expand__button_icon ${expanded ? "expanded__button_icon_open" : ""
                }`}
            >
              ▼
            </span>
          </div>
        )}
      </div>
      {amount > 1 && expanded && (
        <div className="expanded__cards">
          {[...Array(amount)].map((_, index) => (
            <Card
              key={index}
              name={name}
              barcode={barcode}
              picture={null}
              packageType={packageType}
              amount={1}
              result={result}
              cardContainerGreen={cardContainerGreen}
              count={count}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Card;
