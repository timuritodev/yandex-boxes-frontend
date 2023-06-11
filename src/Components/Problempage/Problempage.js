/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./Problempage.css";
import Footer from "../Footer/Footer";

function Problempage() {
  const [IsKeyboardButtonActive, setIsKeyboardButtonActive] = useState(true);

  return (
    <>
      <div className="problempage__container">
        <button
          className="button problempage__button"
          type="button"
          aria-label="button"
        >
          Товар бракованный
        </button>
        <button
          className="button problempage__button"
          type="button"
          aria-label="button"
        >
          Позвать бригадира
        </button>
      </div>
      <Footer IsKeyboardButtonActive={IsKeyboardButtonActive} />
    </>
  );
}

export default Problempage;
