import "./UniButton.css";
import { useNavigate } from 'react-router-dom';

function Button({ currentPage }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/main');
  };

  const getText = () => {
    if (currentPage === "homepage") {
      return "Начать";
    } if (currentPage === "main") {
      return "Закрыть заказ";
    }
      return "";
  };

  return (
    <div className="">
      <button className="button uniButton" type="button" aria-label="button" onClick={handleClick}>
        {getText()}
      </button>
    </div>
  );
}

export default Button;
