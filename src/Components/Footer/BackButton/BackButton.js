import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="footer__button footer__button_back"
      onClick={() => navigate(-1)}
    >
      <p className="footer__button-text footer__button-text_back">Назад</p>
    </button>
  );
}

export default BackButton;
