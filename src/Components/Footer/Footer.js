/* import "./Footer.css";
import { useLocation } from "react-router-dom";
import NdaBox from "./NdaBox/NdaFox";
import ChangeCompositionButton from "./ChangeСompositionButton/ChangeCompositionButton";
import KeyboardButton from "./KeyboardButton/KeyboardButton";
import BackButton from "./BackButton/BackButton";

function Footer() {
  const location = useLocation();

  return (
    <footer
      className={`footer ${
        location.pathname === "/problempage" ? "footer__anomaly" : ""
      }`}
    >
      <div className="footer__box">
        <div className="button__box">
          {location.pathname === "/main" && (
            <>
              <ChangeCompositionButton />
              <KeyboardButton />
            </>
          )}
          {(location.pathname === "/keyboardpage" ||
            location.pathname === "/problempage") && <BackButton />}
        </div>
      </div>
      <NdaBox />
    </footer>
  );
}

export default Footer; */

import "./Footer.css";
// import { useState } from "react";
import { useLocation } from "react-router-dom";
import NdaBox from "./NdaBox/NdaFox";
import ChangeCompositionButton from "./ChangeСompositionButton/ChangeCompositionButton";
import KeyboardButton from "./KeyboardButton/KeyboardButton";
import BackButton from "./BackButton/BackButton";

function Footer({ IsKeyboardButtonActive }) {
  const location = useLocation();
  // const [keyboardActive, setkeyboardActive] = useState(false);

  return (
    <footer
      className={`footer ${
        location.pathname === "/problempage" ||
        location.pathname === "/defectpage" ||
        location.pathname === "/nogoodspage"
          ? "footer__anomaly"
          : ""
      }`}
    >
      <div className="footer__box">
        <div className="button__box">
          {location.pathname === "/main" && (
            <>
              <ChangeCompositionButton />
              <KeyboardButton />
            </>
          )}
          {location.pathname === "/keyboardpage" ||
          location.pathname === "/problempage" ||
          location.pathname === "/defectpage" ||
          location.pathname === "/nogoodspage" ? (
            <>
              <BackButton />
              {IsKeyboardButtonActive && <KeyboardButton />}
            </>
          ) : null}
        </div>
      </div>
      <NdaBox />
    </footer>
  );
}

export default Footer;
