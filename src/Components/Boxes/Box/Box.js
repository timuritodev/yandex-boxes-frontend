/* import "./Box.css";

function Box({ name }) {
  return (
    <div className="box">
      <p className="box__name">{name}</p>
    </div>
  );
}

export default Box; */

import "./Box.css";

function Box({ name }) {
  const styleMap = {
    "Коробка YMA": { boxColor: "box_blue", textColor: "box__name_blue" },
    "Коробка YMC": { boxColor: "box_green", textColor: "box__name_green" },
    "Пакет MYC": {
      boxColor: "box_lightblue",
      textColor: "box__name_lightblue",
    },
    "Коробка YMF": { boxColor: "box_orange", textColor: "box__name_orange" },
    "Коробка MYF": { boxColor: "box__purple", textColor: "box__name_purple" },
    "Пакет MYA": { boxColor: "box_red", textColor: "box__name_red" },
    "Пакет MYD": { boxColor: "box_gray", textColor: "box__name_gray" },
    "Пакет MYB": { boxColor: "box_darkred", textColor: "box__name_darkred" },
    "Пакет MYE": {
      boxColor: "box_darkyellow",
      textColor: "box__name_darkyellow",
    },
  };

  const { boxColor, textColor } = styleMap[name] || {};

  return (
    <div className={`box ${boxColor}`}>
      <p className={`box__name ${textColor}`}>{name}</p>
    </div>
  );
}

export default Box;
