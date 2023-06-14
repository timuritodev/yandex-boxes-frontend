/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NoGoodspage.css";
import Footer from "../Footer/Footer";
import CardList from "../Card/CardList";
import UniButton from "../UniButton/UniButton";

function NoGoodspage({ cards, cardBarcode, checkedCards }) {
  const [IsKeyboardButtonActive, setIsKeyboardButtonActive] = useState(false);
  const [selectedCards, setSelectedCards] = useState([]);
  const [fakeCards, setFakeCards] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const newFakeCards = [];
    selectedCards.forEach((selectedCard) => {
      cards.forEach((item) => {
        if (item.barcode === selectedCard) {
          newFakeCards.push(item);
        }
      });
    });
    setFakeCards(newFakeCards);
  }, [selectedCards, cards, flag]);

  const changeCards = () => {
    setFlag(true);
  };

  return (
    <>
      <div className="nogoods__container">
        <div className="main__left-column" />
        <div className="main__center-column">
          <h2 className="nogoods__title">Какого товара нет?</h2>
          {flag ? (
            <CardList
              cards={fakeCards}
              cardBarcode={cardBarcode}
              checkedCards={checkedCards}
              selectedCards={selectedCards}
              setSelectedCards={setSelectedCards}
            />
          ) : (
            <CardList
              cards={cards}
              cardBarcode={cardBarcode}
              checkedCards={checkedCards}
              selectedCards={selectedCards}
              setSelectedCards={setSelectedCards}
            />
          )}
        </div>
        <div className="main__right-column">
          <UniButton currentPage="nogoodspage" name="Далее" changeCards={changeCards} />
        </div>
      </div>
      <Footer IsKeyboardButtonActive={IsKeyboardButtonActive} />
    </>
  );
}

export default NoGoodspage;
