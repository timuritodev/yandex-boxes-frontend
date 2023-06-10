/* eslint-disable no-unused-vars */
import "./Progressbar.css";

function Progressbar({ amount }) {

const progressPercentage = 10;
// Math.round((count / amount) * 100);

  return (
    <div>
      <div className="progress-bar">
        <div className="progress-bar-inner" style={{ width: `${progressPercentage}%` }} />
      </div>
    </div>
  );
}

export default Progressbar;
