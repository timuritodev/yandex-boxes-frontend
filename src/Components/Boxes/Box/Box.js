import "./Box.css";
import { styleBoxesMap } from "../../../utils/constants";

function Box({ name, OrderBoxBarcode, UserBoxBarcode }) {
  // eslint-disable-next-line no-unused-vars
  const { boxColor, textColor } = styleBoxesMap[name] || {};

  console.log(OrderBoxBarcode);
  console.log(UserBoxBarcode);

  const boxClasses = `carton ${boxColor}`;
  const textClasses = `carton__name ${textColor}`;

  return (
    <div className={boxClasses}>
      <p className={textClasses}>{name}</p>
    </div>
  );
}

export default Box;
