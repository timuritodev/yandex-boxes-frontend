import { cardsData } from '../../utils/constants';
import Card from "./Card";
import "./CardList.css";

function CardList({ result, getFromLocalStorage, saveToLocalStorage }) {
  return (
    <section className="cardList">
      {cardsData.map((item) => {
        // eslint-disable-next-line eqeqeq
        const cardContainerGreen = result == item.barcode || getFromLocalStorage(item.barcode);
        saveToLocalStorage(item.barcode, cardContainerGreen);
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
