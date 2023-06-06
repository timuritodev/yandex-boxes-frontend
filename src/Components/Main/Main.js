import "../App/App.css";
import OrderInformation from "../OrderInformation/OrderInformation";
import ProblemButton from "../ProblemButton/ProblemButton";
import CloseButton from "../CloseButton/CloseButton";
import Footer from "../Footer/Footer";

function Main() {
  return (
    <>
      <main className="main">
        <OrderInformation />
        <ProblemButton />
        <CloseButton />
      </main>
      <Footer />
    </>
  );
}

export default Main;
