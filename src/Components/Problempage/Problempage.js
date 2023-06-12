/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Problempage.css";
import Footer from "../Footer/Footer";

function Problempage({ cards, cardBarcode, checkedCards }) {
  const navigate = useNavigate();

  const [IsKeyboardButtonActive, setIsKeyboardButtonActive] = useState(true);

  const [isDefectiveButtonActive, setIsDefectiveButtonActive] = useState(false);
  const [isCallBrigButtonActive, setIsCallBrigButtonActive] = useState(false);

  cardBarcode= [];

  const handleDefectiveButton = () => {
    // setIsDefectiveButtonActive(true);
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
