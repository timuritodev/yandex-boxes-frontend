/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Problempage.css";
import Footer from "../Footer/Footer";

function Problempage({ cards, cardBarcode, checkedCards, handleButtonClick }) {
  const navigate = useNavigate();

  const [IsKeyboardButtonActive, setIsKeyboardButtonActive] = useState(true);

  const [isDefectiveButtonActive, setIsDefectiveButtonActive] = useState(false);
  const [isCallBrigButtonActive, setIsCallBrigButtonActive] = useState(false);

  const handleNoGoodsButton = () => {
    navigate("/nogoodspage")
  };

  const handleDefectiveButton = () => {
    // setIsDefectiveButtonActive(true);
    handleButtonClick();
    navigate("/defectpage")
  };

  const handleCallBrigButton = () => {
    setIsCallBrigButtonActive(true);
  };

  return (
    <>
      <div className="problempage__container">
        <button
          className="button problempage__button"
          type="button"
          aria-label="button"
          onClick={handleNoGoodsButton}
        >
          Нет товара
        </button>
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
      </div>
      <Footer IsKeyboardButtonActive={IsKeyboardButtonActive} />
    </>
  );
}

export default Problempage;
