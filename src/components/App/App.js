import "./App.css";
import Header from "../Header/Header";
import OrderInformation from "../OrderInformation/OrderInformation";
import ProblemButton from "../ProblemButton/ProblemButton";
import CloseButton from "../CloseButton/CloseButton";

function App() {
  return (
    <>
      <Header />
      <OrderInformation />
      <ProblemButton />
      <CloseButton />
    </>
  );
}

export default App;
