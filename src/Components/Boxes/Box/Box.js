import "./Box.css";
import { styleBoxesMap } from "../../../utils/constants";

function Box({ name }) {
  const { boxColor, textColor } = styleBoxesMap[name] || {};

  const boxClasses = `carton ${boxColor}`;
  const textClasses = `carton__name ${textColor}`;

  return (
    <div className={boxClasses}>
      <p className={textClasses}>{name}</p>
    </div>
  );
}

export default Box;
