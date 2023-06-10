import Card from "./Card";
import "./CardList.css";

function CardList({ result, cards }) {
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
          result={result}
        />
      )
      )}
    </section>
  );
}

export default CardList;
