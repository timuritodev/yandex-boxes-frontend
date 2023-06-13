/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */

import { useState, useEffect } from "react";
import "./Defectpage.css";
import Footer from "../Footer/Footer";
import CardList from "../Card/CardList";
import UniButton from "../UniButton/UniButton";

function Defectpage({ cards, cardBarcode, cardBarcodeDefect, checkedCards }) {
  const [IsKeyboardButtonActive, setIsKeyboardButtonActive] = useState(true);

  console.log(cardBarcodeDefect.length)

  return (
    <>
      <div className="defectpage__container">
        <div className="main__center-column">
          <CardList
            cards={cards}
            cardBarcode={cardBarcode}
            cardBarcodeDefect={cardBarcodeDefect}
            checkedCards={checkedCards}
          />
        </div>
        {cardBarcodeDefect.length !== 0 ? <UniButton currentPage="main" /> : null}
      </div>
      <Footer IsKeyboardButtonActive={IsKeyboardButtonActive} />
    </>
  );
}

export default Defectpage;
