import "./Main.css";
import OrderInformation from "../OrderInformation/OrderInformation";
import ProblemButton from "../ProblemButton/ProblemButton";
import Footer from "../Footer/Footer";
import UniButton from "../UniButton/UniButton";
import CardList from "../Card/CardList";
import Boxes from "../Boxes/Boxes";

function Main({ boxes, boxBarcode, checkedBoxes, cards, cardBarcode, checkedCards }) {
  return (
    <>
      <main className="main">
        <div>
          <OrderInformation />
          <ProblemButton />
        </div>
        <div>
          <Boxes
            boxes={boxes}
            boxBarcode={boxBarcode}
            checkedBoxes={checkedBoxes}
          />
          <CardList
            cards={cards}
            cardBarcode={cardBarcode}
            checkedCards={checkedCards}
          />
        </div>
        <UniButton currentPage="main" />
      </main>
      <Footer />
    </>
  );
}

export default Main;
