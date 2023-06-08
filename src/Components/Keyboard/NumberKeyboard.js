import "./NumberKeyboard.css";

import { useState } from "react";

const generateUniqueKey = () => Math.random().toString(36).substring(2, 9);

function NumberKeyboard({ onResult }) {
  const [inputValue, setInputValue] = useState("");

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
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div>
        {[...Array(10)].map((_, index) => {
          const key = generateUniqueKey();
          return (
            <button
              key={key}
              type="button"
              onClick={() => handleButtonClick(index)}
            >
              {index}
            </button>
          );
        })}
        <button type="button" onClick={handleBackspaceClick}>
          Backspace
        </button>
        <button type="button" onClick={handleDeleteClick}>
          &#10005;
        </button>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default NumberKeyboard;
