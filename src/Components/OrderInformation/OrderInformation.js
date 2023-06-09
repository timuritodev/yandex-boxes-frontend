import "./OrderInformation.css";

function OrderInformation({ goodsCount }) {
  return (
    <div className="orderInformation__container">
      <h1 className="orderInformation__title">Сканировать из B-09</h1>
      <div className="orderInformation__sub-container">
        <p className="orderInformation__text">{goodsCount} товаров</p>
      </div>
      <div className="orderInformation__sub-container">
        <p className="orderInformation__text">Почта России</p>
      </div>
    </div>
  );
}

export default OrderInformation;
