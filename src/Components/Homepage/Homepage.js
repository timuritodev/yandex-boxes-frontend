import "./Homepage.css";
import ProblemButton from "../ProblemButton/ProblemButton";
import UniButton from "../UniButton/UniButton";

function Homepage() {
  return (
    <>
      <h2 className="homepage__title">Сканируйте ячейку <br /> B-09</h2>
      <ProblemButton />
      <UniButton currentPage="homepage" />
    </>
  );
}

export default Homepage;
