import "./UniButton.css";
import { useLocation, useNavigate } from "react-router-dom";

function Button({ currentPage, finishDefectprocessing, changeCards, name }) {
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
      className={`button uniButton ${getButtonClass()}`}
      type="button"
      aria-label="button"
      onClick={handleClick}
    >
      {name}
    </button>
  );
}

export default Button;
