import "./ProblemButton.css";
import { useNavigate } from 'react-router-dom';

function HelpButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/problempage');
  };
  return (
    <div className="">
      <button
        className="button problemButton"
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
