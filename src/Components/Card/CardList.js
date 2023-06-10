import Card from "./Card";
import "./CardList.css";

function CardList({ cards, cardBarcode, checkedCards }) {
  return (
    <section className="cardList">
      {cards.map((item) =>
      (
        <Card
          key={item.id}
          name={item.name}
          barcode={item.barcode}
          picture={item.picture}
          packageType={item.packageType}
          amount={item.amount}
          cardBarcode={cardBarcode}
          checkedCards={checkedCards}
        />
      )
      )}
    </section>
  );
}

export default CardList;
