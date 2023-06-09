import "./Boxes.css";
import Box from "./Box/Box";

function Boxes({ boxes, OrderBoxBarcode }) {
  return (
    <section className="boxes">
      {boxes.map((i) => (
        <Box key={i.id} name={i.name} OrderBoxBarcode={OrderBoxBarcode} />
      ))}
    </section>
  );
}

export default Boxes;
