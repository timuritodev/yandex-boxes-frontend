import React from "react";
import "./Main.css";
import OrderInformation from "../OrderInformation/OrderInformation";
import ProblemButton from "../ProblemButton/ProblemButton";
import Footer from "../Footer/Footer";
import UniButton from "../UniButton/UniButton";
import CardList from "../Card/CardList";

function Main({result}) {
  // подсчет кол-ва товара
  const [itemCount, setItemCount] = React.useState(0);

  const handleItemCountChange = (count) => {
    setItemCount(count);
  };

  return (
    <>
      <main className="main">
        <div>
          <OrderInformation itemCount={itemCount}/>
          <ProblemButton />
        </div>
          <CardList result={result} onItemCountChange={handleItemCountChange}/>
          <UniButton currentPage="main" />
      </main>
      <Footer />
    </>
  );
}

export default Main;
