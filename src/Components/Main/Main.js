import "./Main.css";
import OrderInformation from "../OrderInformation/OrderInformation";
import ProblemButton from "../ProblemButton/ProblemButton";
import Footer from "../Footer/Footer";
import UniButton from "../UniButton/UniButton";
import CardList from "../Card/CardList";

function Main({result}) {
  return (
    <>
      <main className="main">
        <div>
          <OrderInformation />
          <ProblemButton />
        </div>
          <CardList result={result}/>
          <UniButton currentPage="main" />
      </main>
      <Footer />
    </>
  );
}

export default Main;