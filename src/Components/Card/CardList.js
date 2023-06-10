import Card from "./Card";
import "./CardList.css";
import { hardcodeData } from '../../utils/constants';

// eslint-disable-next-line prefer-object-spread
const clonedData = Object.assign({}, hardcodeData);
const data = clonedData.items;
// сохранения отсканированного товара в localstorage
function CardList({ result }) {
  const saveCardContainerGreenToLocalStorage = (barcode, value) => {
    localStorage.setItem(`cardContainerGreen_${barcode}`, String(value));
  };

  const getCardContainerGreenFromLocalStorage = (barcode) => {
    const value = localStorage.getItem(`cardContainerGreen_${barcode}`);
    return value === "true";
  };

// подсчет кол-ва товара
  return (
    <section className="cardList">
      {data.map((item) => {
        // eslint-disable-next-line eqeqeq
        const cardContainerGreen = result == item.barcode || getCardContainerGreenFromLocalStorage(item.barcode);
        saveCardContainerGreenToLocalStorage(item.barcode, cardContainerGreen);
        return (
          <Card
            key={item.id}
            name={item.name}
            barcode={item.barcode}
            picture={item.picture}
            packageType={item.packageType}
            amount={item.amount}
            result={result}
            cardContainerGreen={cardContainerGreen}
          />
        );
      })}
    </section>
  );
}

export default CardList;
