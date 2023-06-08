import "./ProblemButton.css";
import { useLocation, useNavigate } from 'react-router-dom';

function HelpButton() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate('/problempage');
  };
  return (
    <div className="">
      <button
        className={`button problemButton ${location.pathname === "/" ? "problemButton__home" : "problemButton__main"}`}
        type="button"
        aria-label="button"
        onClick={handleClick}
      >
        Есть проблема
      </button>
    </div>
  );
}

export default HelpButton;
