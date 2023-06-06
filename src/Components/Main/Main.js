import "../App/App.css";
import OrderInformation from "../OrderInformation/OrderInformation";
import ProblemButton from "../ProblemButton/ProblemButton";
import UniButton from "../UniButton/UniButton";

function Main() {
  return (
    <>
      <OrderInformation />
      <ProblemButton />
      <UniButton currentPage="main"/>
    </>
  );
}

export default Main;
