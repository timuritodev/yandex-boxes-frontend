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
  const [selectedCards, setSelectedCards] = useState([]);

  return (
    <>
      <div className="nogoods__container">
        <div className="main__left-column" />
        <div className="main__center-column">
          <h2 className="nogoods__title">Какого товара нет?</h2>
          <CardList
            cards={cards}
            cardBarcode={cardBarcode}
            checkedCards={checkedCards}
            selectedCards={selectedCards}
            setSelectedCards={setSelectedCards}
          />
        </div>
        <div className="main__right-column">
          <UniButton currentPage="nogoodspage" name="Далее" />
        </div>
      </div>
      <Footer IsKeyboardButtonActive={IsKeyboardButtonActive} />
    </>
  );
}

export default NoGoodspage;
