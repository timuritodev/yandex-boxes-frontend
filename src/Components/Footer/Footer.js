import "./Footer.css";
import { Link, useLocation } from "react-router-dom";
import NdaBox from "./NdaBox/NdaFox";

function Footer() {
  const location = useLocation();

  return (
    <footer className="footer">
      <div className="footer__box">
        <div className="button__box">
          {location.pathname === "/main" && (
            <>
              <Link
                className="footer__button footer__button_composition"
                to="{#}"
              >
                <p className="footer__button-text">Изменить состав</p>
              </Link>
              <Link
                className="footer__button footer__button_keyboard"
                to="/keyboardpage"
              >
                <p className="footer__button-text footer__button-text_keyboard">
                  Ввести с клавиатуры
                </p>
              </Link>
            </>
          )}
          {location.pathname === "/keyboardpage" && (
            <Link className="footer__button footer__button_back" to="/main">
              <p className="footer__button-text footer__button-text_back">
                Назад
              </p>
            </Link>
          )}
        </div>
      </div>
      <NdaBox />
    </footer>
  );
}

export default Footer;
