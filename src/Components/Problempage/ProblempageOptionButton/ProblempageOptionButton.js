function ProblempageOptionButton({ handleButtonClick, name }) {
  return (
    <button
      className="button problempage__button"
      type="button"
      aria-label="button"
      onClick={handleButtonClick}
    >
      {name}
    </button>
  );
}

export default ProblempageOptionButton;
