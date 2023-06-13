import Card from "./Card";
import "./CardList.css";

function CardList({
  cards,
  cardBarcode,
  checkedCards,
  cardBarcodeDefect,
  selectedCards,
  setSelectedCards,
}) {
  console.log(cards);
  return (
    <section className="cardList">
      {cards.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          barcodes={
            item.multiplyBarcodes ? [...item.multiplyBarcodes] : [item.barcode]
          }
          picture={item.picture}
          packageType={item.packageType}
          amount={item.amount}
          cardBarcode={cardBarcode}
          cardBarcodeDefect={cardBarcodeDefect}
          checkedCards={checkedCards}
          selectedCards={selectedCards}
          setSelectedCards={setSelectedCards}
        />
      ))}
    </section>
  );
}

export default CardList;
