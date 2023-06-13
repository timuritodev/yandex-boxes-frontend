import "./Main.css";
import OrderInformation from "../OrderInformation/OrderInformation";
import ProblemButton from "../ProblemButton/ProblemButton";
import Footer from "../Footer/Footer";
import UniButton from "../UniButton/UniButton";
import CardList from "../Card/CardList";
import Boxes from "../Boxes/Boxes";

function Main({
  cardListLength,
  boxes,
  boxBarcode,
  checkedBoxes,
  cards,
  cardBarcode,
  cardBarcodeDefect,
  checkedCards,
}) {
  function isUniButtonActive() {
    return cardListLength === checkedCards.length;
  }

  return (
    <>
      <main className="main">
        <div className="main__left-column">
          <OrderInformation cardListLength={cardListLength} />
          <ProblemButton />
        </div>
        <div className="main__center-column">
          {isUniButtonActive() ? (
            <Boxes
              boxes={boxes}
              boxBarcode={boxBarcode}
              checkedBoxes={checkedBoxes}
            />
          ) : (
            ""
          )}
          <CardList
            cards={cards}
            cardBarcode={cardBarcode}
            cardBarcodeDefect={cardBarcodeDefect}
            checkedCards={checkedCards}
          />
        </div>
        <div className="main__right-column">
          {isUniButtonActive() && checkedBoxes.length >= 1 ? (
            <UniButton currentPage="main" name="Закрыть заказ" />
          ) : (
            ""
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Main;
