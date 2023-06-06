import "./Footer.css";
import { Link } from "react-router-dom";
import NdaBox from "./NdaBox/NdaFox";

function Footer() {
  return (
    <section className="footer">
      <div className="footer__box">
        <div className="button__box">
          <Link className="footer__button footer__button_composition" to="{#}">
            <p className="footer__button-text">Изменить состав</p>
          </Link>
          <Link className="footer__button footer__button_keyboard" to="{#}">
            <p className="footer__button-text footer__button-text_keyboard">
              Ввести с клавиатуры
            </p>
          </Link>
        </div>
      </div>
      <NdaBox />
    </section>
  );
}

export default Footer;
