// import React from "react";
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
  return (
    <section className="cardList">
      {cards.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          barcode={item.barcode}
          picture={item.picture}
          packageType={item.packageType}
          amount={item.amount}
          multiplyBarcodes={item.multiplyBarcodes || []}
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
