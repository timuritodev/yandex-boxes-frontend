/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Problempage.css";
import Footer from "../Footer/Footer";
import ProblempageOptionButton from "./ProblempageOptionButton/ProblempageOptionButton";
import ForemanTooltip from "./ForemanTooltip/ForemanTooltip";

function Problempage({ cards, cardBarcode, checkedCards }) {
  const navigate = useNavigate();

  const [IsKeyboardButtonActive, setIsKeyboardButtonActive] = useState(false);
  const [isDefectiveButtonActive, setIsDefectiveButtonActive] = useState(false);
  const [anotherProblem, setAnotherProblem] = useState(false);
  const [isForemanTooltipOpen, setIsForemanTooltipOpen] = useState(false);

  const handleNoGoodsButton = () => {
    navigate("/nogoodspage");
  };

  const handleDefectiveButton = () => {
    // setIsDefectiveButtonActive(true);
    setIsKeyboardButtonActive(true);
    navigate("/defectpage");
  };

  const handleCallBrigButton = () => {
    setIsForemanTooltipOpen(true);
  };

  const handleAnotherProblemButton = () => {
    setAnotherProblem(true);
    setIsKeyboardButtonActive(false);
  };

  const handleDeviceProblem = () => {
    setIsForemanTooltipOpen(true);
  };

  return (
    <>
      <div
        className={`problempage__container ${
          anotherProblem ? "problempage__container_another-problem" : ""
        }`}
      >
        {!anotherProblem && (
          <>
            <ProblempageOptionButton
              name="Нет товара"
              handleButtonClick={handleNoGoodsButton}
            />
            <ProblempageOptionButton
              name="Товар бракованный"
              handleButtonClick={handleDefectiveButton}
            />
            <ProblempageOptionButton
              name="Другая проблема"
              handleButtonClick={handleAnotherProblemButton}
            />
            <ProblempageOptionButton
              name="Позвать бригадира"
              handleButtonClick={handleCallBrigButton}
            />
          </>
        )}
        {anotherProblem && (
          <>
            <ProblempageOptionButton
              name="Сломан монитор"
              handleButtonClick={handleDeviceProblem}
            />
            <ProblempageOptionButton
              name="Сломан сканер"
              handleButtonClick={handleDeviceProblem}
            />
            <ProblempageOptionButton
              name="Сломан принтер"
              handleButtonClick={handleDeviceProblem}
            />
          </>
        )}
      </div>
      <Footer IsKeyboardButtonActive={IsKeyboardButtonActive} />
      <ForemanTooltip isOpen={isForemanTooltipOpen} />
    </>
  );
}

export default Problempage;
