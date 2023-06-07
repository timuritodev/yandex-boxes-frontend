import "../App/App.css";
import OrderInformation from "../OrderInformation/OrderInformation";
import ProblemButton from "../ProblemButton/ProblemButton";
import Footer from "../Footer/Footer";
import UniButton from "../UniButton/UniButton";

function Main() {
  return (
    <>
      <main className="main">
        <OrderInformation />
        <ProblemButton />
        <UniButton currentPage="main"/>
      </main>
      <Footer />
    </>
  );
}

export default Main;
