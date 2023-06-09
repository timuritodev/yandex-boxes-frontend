import "./Main.css";
import OrderInformation from "../OrderInformation/OrderInformation";
import ProblemButton from "../ProblemButton/ProblemButton";
import Footer from "../Footer/Footer";
import UniButton from "../UniButton/UniButton";
import CardList from "../Card/CardList";
import Boxes from "../Boxes/Boxes";

function Main({ result, boxData, goodsCount, getFromLocalStorage, saveToLocalStorage}) {
  return (
    <>
      <main className="main">
        <div>
          <OrderInformation goodsCount={goodsCount} />
          <ProblemButton />
        </div>
        <div>
          <Boxes boxData={boxData} />
          <CardList result={result} getFromLocalStorage={getFromLocalStorage} saveToLocalStorage={saveToLocalStorage}/>
        </div>
        <UniButton currentPage="main" />
      </main>
      <Footer />
    </>
  );
}

export default Main;
