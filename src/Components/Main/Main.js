import React from "react";
import "./Main.css";
import OrderInformation from "../OrderInformation/OrderInformation";
import ProblemButton from "../ProblemButton/ProblemButton";
import Footer from "../Footer/Footer";
import UniButton from "../UniButton/UniButton";
import CardList from "../Card/CardList";
import Boxes from "../Boxes/Boxes";

function Main({ result, boxes, boxBarcode, checkedBoxes }) {
  // подсчет кол-ва товара
  const [itemCount, setItemCount] = React.useState(0);

  const handleItemCountChange = (count) => {
    setItemCount(count);
  };

  return (
    <>
      <main className="main">
        <div className="main__left-column">
          <OrderInformation itemCount={itemCount} />
          <ProblemButton />
        </div>
        <div className="main__center-column">
          <Boxes
            boxes={boxes}
            boxBarcode={boxBarcode}
            checkedBoxes={checkedBoxes}
          />
          <CardList result={result} onItemCountChange={handleItemCountChange} />
        </div>
        <div className="main__right-column">
          <UniButton currentPage="main" />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Main;
