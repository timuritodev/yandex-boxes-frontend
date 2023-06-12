/* eslint-disable no-unused-vars */

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NoGoodspage.css";
import Footer from "../Footer/Footer";
import CardList from "../Card/CardList";
import UniButton from "../UniButton/UniButton";

function NoGoodspage({ cards, cardBarcode, checkedCards }) {
  const navigate = useNavigate();

  const [IsKeyboardButtonActive, setIsKeyboardButtonActive] = useState(false);

  return (
    <>
      <div className="nogoods__container">
        <h2 className="nogoods__title">Какого товара нет?</h2>
        <div className="main__center-column">
          <CardList
            cards={cards}
            cardBarcode={cardBarcode}
            checkedCards={checkedCards}
          />
        </div>
        {cardBarcode.length !== 0 && <UniButton currentPage="defectpage" />}
      </div>
      <Footer IsKeyboardButtonActive={IsKeyboardButtonActive} />
    </>
  );
}

export default NoGoodspage;
