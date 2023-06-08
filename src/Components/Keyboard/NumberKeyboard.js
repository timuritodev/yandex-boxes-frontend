import "./NumberKeyboard.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NdaBox from "../Footer/NdaBox/NdaFox";

const generateUniqueKey = () => Math.random().toString(36).substring(2, 9);

function NumberKeyboard({ onResult }) {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleButtonClick = (value) => {
    setInputValue((prevValue) => prevValue + value);
  };

  const handleDeleteClick = () => {
    setInputValue("");
  };

  const handleBackspaceClick = () => {
    setInputValue((prevValue) => prevValue.slice(0, -1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onResult(inputValue);
    navigate("/main");
  };

  return (
    <>
      <main className="keyboard">
        <h2 className="keyboard__title">Введите штрихкод товара</h2>
        <form className="keyboard__form-box" onSubmit={handleSubmit}>
          <input
            className="keyboard__input"
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div className="keyboard__buttons-box">
            <div className="keyboard__buttons-numbers">
              {[...Array(9)].map((_, index) => {
                const key = generateUniqueKey();
                return (
                  <button
                    className="keyboard__button"
                    key={key}
                    type="button"
                    onClick={() => handleButtonClick(index + 1)}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
            <div className="keyboard__buttons-options">
              <button
                className="keyboard__button"
                type="button"
                onClick={handleDeleteClick}
              >
                х
              </button>
              <button
                className="keyboard__button"
                type="button"
                onClick={() => handleButtonClick(0)}
              >
                0
              </button>
              <button
                className="keyboard__button"
                type="button"
                onClick={handleBackspaceClick}
              >
                <div className="keyboard__button_backspace-icon" />
              </button>
            </div>
          </div>
          <button className="keyboard__submit-button" type="submit">
            Готово
          </button>
        </form>
      </main>
      <NdaBox />
    </>
  );
}

export default NumberKeyboard;
