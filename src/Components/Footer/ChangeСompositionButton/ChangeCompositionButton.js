import { Link } from "react-router-dom";

function ChangeCompositionButton() {
  return (
    <Link className="footer__button footer__button_composition" to="{#}">
      <p className="footer__button-text">Изменить состав</p>
    </Link>
  );
}

export default ChangeCompositionButton;
