import "./Box.css";

function Box({ name }) {
  const styleMap = {
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
  };

  const { boxColor, textColor } = styleMap[name] || {};

  const boxClasses = `carton ${boxColor}`;

  const textClasses = `carton__name ${textColor}`;

  return (
    <div className={boxClasses}>
      <p className={textClasses}>{name}</p>
    </div>
  );
}

export default Box;
