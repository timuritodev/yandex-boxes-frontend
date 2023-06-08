import Card from "./Card";
import "./CardList.css";
import speaker from "../../images/speaker.svg";
import corgi from "../../images/test.jpg";

const data = [
  {
    name: "Очень важная собака, которая улыбается",
    barcode: 1232973912,
    picture: corgi,
    id: 1,
    packageType: "Коробка",
    amount: 2,
  },
  {
    name: "Умная колонка Яндекс Станция Лайт, ультрафиолет",
    barcode: 1237871234,
    picture: speaker,
    id: 2,
    packageType: "Пузырчатая пеленка",
    amount: 3,
  },
  {
    name: "Умная колонка Яндекс Станция Лайт, ультрафиолет",
    barcode: 1237871234,
    picture: speaker,
    id: 3,
    packageType: "Пузырчатая пеленка",
    amount: 1,
  },
  {
    name: "Умная колонка Яндекс Станция Лайт, ультрафиолет",
    barcode: 1237871234,
    picture: speaker,
    id: 4,
    packageType: "Пузырчатая пеленка",
    amount: 1,
  },
  {
    name: "Умная колонка Яндекс Станция Лайт, ультрафиолет",
    barcode: 1237871234,
    picture: speaker,
    id: 5,
    packageType: "Пузырчатая пеленка",
    amount: 1,
  },
  {
    name: "Умная колонка Яндекс Станция Лайт, ультрафиолет",
    barcode: 1237871234,
    picture: speaker,
    id: 6,
    packageType: "Пузырчатая пеленка",
    amount: 1,
  },
];

function CardList({ result }) {
  const saveCardContainerGreenToLocalStorage = (barcode, value) => {
    localStorage.setItem(`cardContainerGreen_${barcode}`, String(value));
  };

  const getCardContainerGreenFromLocalStorage = (barcode) => {
    const value = localStorage.getItem(`cardContainerGreen_${barcode}`);
    return value === "true";
  };

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
