import "./Main.css";
import OrderInformation from "../OrderInformation/OrderInformation";
import ProblemButton from "../ProblemButton/ProblemButton";
import Footer from "../Footer/Footer";
import UniButton from "../UniButton/UniButton";
import CardList from "../Card/CardList";
import Boxes from "../Boxes/Boxes";

function Main({ cardListLength, boxes, boxBarcode, checkedBoxes, cards, cardBarcode, checkedCards }) {
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
          <Boxes
            boxes={boxes}
            boxBarcode={boxBarcode}
            checkedBoxes={checkedBoxes}
          />
          <CardList 
            cards={cards}
            cardBarcode={cardBarcode}
            checkedCards={checkedCards} />
        </div>
        <div className="main__right-column">
        {isUniButtonActive() ? <UniButton currentPage="main"/> : ''}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Main;

