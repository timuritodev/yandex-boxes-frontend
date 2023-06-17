import "./UniButton.css";
import { useLocation, useNavigate } from "react-router-dom";

function Button({
  currentPage,
  finishDefectprocessing,
  name,
  getOrder,
  finishOrder,
  changeCards,
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (currentPage === "homepage") {
      // это будет функция которая инициирует гет запрос данных заказа
      getOrder();
      navigate("/main");
    }
    if (currentPage === "main") {
      // это будет функция которая отправляет собранный заказ на бекенд
      finishOrder();
      navigate("/readypage");
    }
    if (currentPage === "readypage") {
      navigate("/");
    }
    if (currentPage === "defectpage") {
      finishDefectprocessing();
    }
    if (currentPage === "nogoodspage") {
      changeCards();
    }
    return null;
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
      className={`uniButton ${getButtonClass()}`}
      type="button"
      aria-label="button"
      onClick={handleClick}
    >
      {name}
    </button>
  );
}

export default Button;
