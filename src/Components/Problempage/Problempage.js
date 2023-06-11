/* eslint-disable no-unused-vars */
import { useState } from "react";
import CardList from "../Card/CardList";
import "./Problempage.css";
import Footer from "../Footer/Footer";

function Problempage({cards, cardBarcode, checkedCards}) {
  const [IsKeyboardButtonActive, setIsKeyboardButtonActive] = useState(true);
  
  const [isDefectiveButtonActive, setIsDefectiveButtonActive] = useState(false);
  const [isCallBrigButtonActive, setIsCallBrigButtonActive] = useState(false);

  const handleDefectiveButton = () => {
    setIsDefectiveButtonActive(true);
  };

  const handleCallBrigButton = () => {
    setIsCallBrigButtonActive(true);
  };

  return (
    <div className="problempage__container">
      {isDefectiveButtonActive ? (
        <CardList
          cards={cards}
          cardBarcode={cardBarcode}
          checkedCards={checkedCards}
        />
      ) : (
        <>
          <button
            className="button problempage__button"
            type="button"
            aria-label="button"
            onClick={handleDefectiveButton}
          >
            Товар бракованный
          </button>
          <button
            className="button problempage__button"
            type="button"
            aria-label="button"
            onClick={handleCallBrigButton}
          >
            Позвать бригадира
          </button>
        </>
      )}
    </div>
    <Footer IsKeyboardButtonActive={IsKeyboardButtonActive} />
  );
}

export default Problempage;
