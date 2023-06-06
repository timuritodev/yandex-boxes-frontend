import "./Problempage.css";

function Problempage() {
  return (
    <div className="problempage__container">
      <button className="button problempage__button" type="button" aria-label="button">
        Товар бракованный
      </button>
      <button className="button problempage__button" type="button" aria-label="button">
        Позвать бригадира
      </button>
    </div>
  );
}

export default Problempage;
