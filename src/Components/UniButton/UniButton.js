import "./UniButton.css";
import { useLocation, useNavigate } from "react-router-dom";

function Button({ currentPage }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate("/main");
  };

  const getText = () => {
    if (currentPage === "homepage") {
      return "Начать";
    }
    if (currentPage === "main") {
      return "Закрыть заказ";
    }
    return "";
  };

  return (
    <button
      className={`button uniButton ${
        location.pathname === "/" ? "uniButton__home" : "uniButton__main"
      }`}
      type="button"
      aria-label="button"
      onClick={handleClick}
    >
      {getText()}
    </button>
  );
}

export default Button;
