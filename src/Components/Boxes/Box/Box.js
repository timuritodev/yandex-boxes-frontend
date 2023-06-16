/* import "./Box.css";
import { styleBoxesMap } from "../../../utils/constants";

function Box({ name, boxBarcode, checkedBoxes }) {
  // eslint-disable-next-line no-unused-vars
  const { boxColor, textColor } = styleBoxesMap[name] || {};

  console.log(checkedBoxes);
  console.log(boxBarcode);

  /* const boxClasses = `carton ${boxColor}`;
  const textClasses = `carton__name ${textColor}`; */

/* const isBarcodeMatched = boxBarcode === checkedBoxes[checkedBoxes.length - 1];

  const boxClasses = `carton ${boxColor} ${
    isBarcodeMatched ? `${boxColor}_active` : ""
  }`;

  const textClasses = `carton__name ${textColor} ${
    isBarcodeMatched ? `${textColor}_active` : ""
  }`;

  return (
    <div className={boxClasses}>
      <p className={textClasses}>{name}</p>
    </div>
  );
}

export default Box; */

/* import { useEffect, useState } from "react";
import "./Box.css";

function Box({ name, boxBarcode, boxes }) {
  const [boxColor, setBoxColor] = useState("");

  console.log(boxBarcode);
  console.log(boxes);

  useEffect(() => {
    // Здесь можно добавить логику для определения цвета карточки на основе boxBarcode
    const color = String(boxBarcode) === "111" ? "red" : "green";
    setBoxColor(color);
  }, [boxBarcode]);

  return (
    <div className={`carton ${boxColor}`}>
      <p className="carton__name">{name}</p>
    </div>
  );
}

export default Box; */

import "./Box.css";
import { styleBoxesMap } from "../../../utils/constants";

function Box({ name, boxBarcode, checkedBoxes }) {
  /* const styleMap = {
    "Коробка YMA": {
      boxColor: "carton_blue",
      textColor: "carton__name_blue",
    },
    "Коробка YMC": {
      boxColor: "carton_green",
      textColor: "carton__name_green",
    },
    "Пакет MYC": {
      boxColor: "carton_lightblue",
      textColor: "carton__name_lightblue",
    },
    "Коробка YMF": {
      boxColor: "carton_orange",
      textColor: "carton__name_orange",
    },
    "Коробка MYF": {
      boxColor: "carton_purple",
      textColor: "carton__name_purple",
    },
    "Пакет MYA": { boxColor: "carton_red", textColor: "carton__name_red" },
    "Пакет MYD": { boxColor: "carton_gray", textColor: "carton__name_gray" },
    "Пакет MYB": {
      boxColor: "carton_darkred",
      textColor: "carton__name_darkred",
    },
    "Пакет MYE": {
      boxColor: "carton_darkyellow",
      textColor: "carton__name_darkyellow",
    },
  }; */

  const { boxColor, textColor } = styleBoxesMap[name] || {};

  const isBarcodeMatched = checkedBoxes.includes(boxBarcode);

  return (
    <div
      className={`carton ${
        isBarcodeMatched ? `${boxColor} ${boxColor}_active` : `${boxColor}`
      }`}
    >
      <p
        className={`carton__name ${
          isBarcodeMatched ? `${textColor}_active` : textColor
        }`}
      >
        {name}
      </p>
    </div>
  );
}

export default Box;
