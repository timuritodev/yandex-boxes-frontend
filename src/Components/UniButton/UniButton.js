import "./UniButton.css";

function Button({ currentPage }) {
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
      <button className="button uniButton" type="button" aria-label="button">
        {getText()}
      </button>
    </div>
  );
}

export default Button;
