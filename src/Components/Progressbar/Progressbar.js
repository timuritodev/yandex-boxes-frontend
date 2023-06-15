/* eslint-disable no-unused-vars */
import "./Progressbar.css";

function Progressbar({ amount }) {
const progressPercentage = Math.round((1 / amount) * 100);

// console.log("count", count)
// console.log("amount", amount)

  return (
    <div>
      <div className="progress-bar">
        <div className="progress-bar-inner" style={{ width: `${progressPercentage}%` }} />
      </div>
    </div>
  );
}

export default Progressbar;
