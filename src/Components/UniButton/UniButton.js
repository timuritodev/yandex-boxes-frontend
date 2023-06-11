import "./UniButton.css";
import { useLocation, useNavigate } from "react-router-dom";

function Button({ currentPage }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (currentPage === "homepage") {
      navigate("/main");
    }
    if (currentPage === "main") {
      navigate("/readypage");
    }
    if (currentPage === "readypage") {
      navigate("/");
    }
    return null;
  };

  const getText = () => {
    if (currentPage === "homepage") {
      return "Начать";
    }
    if (currentPage === "main") {
      return "Закрыть заказ";
    }
    return "Готово";
  };

  const getButtonClass = () => {
    if (location.pathname === "/") {
      return "uniButton__home";
    }
    if (location.pathname === "/main") {
      return "uniButton__main";
    }
    return "uniButton__ready";
  };

  return (
    <button
      className={`button uniButton ${getButtonClass()}`}
      type="button"
      aria-label="button"
      onClick={handleClick}
    >
      {getText()}
    </button>
  );
}

export default Button;
