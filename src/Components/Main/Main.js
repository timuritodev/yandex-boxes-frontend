import "../App/App.css";
import OrderInformation from "../OrderInformation/OrderInformation";
import ProblemButton from "../ProblemButton/ProblemButton";
import Footer from "../Footer/Footer";
import UniButton from "../UniButton/UniButton";
import Boxes from "../Boxes/Boxes";

function Main() {
  return (
    <>
      <main className="main">
        <Boxes />
        <OrderInformation />
        <ProblemButton />
        <UniButton currentPage="main" />
      </main>
      <Footer />
    </>
  );
}

export default Main;
