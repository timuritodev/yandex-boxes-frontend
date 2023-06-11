import "./Homepage.css";
import ProblemButton from "../ProblemButton/ProblemButton";
import UniButton from "../UniButton/UniButton";

function Homepage() {
  return (
    <section className="homepage">
      <ProblemButton />
      <h2 className="homepage__title">
        Сканируйте ячейку <br /> B-09
      </h2>
      <div className="homepage__button-box">
        <UniButton currentPage="homepage" />
      </div>
    </section>
  );
}
export default Homepage;
