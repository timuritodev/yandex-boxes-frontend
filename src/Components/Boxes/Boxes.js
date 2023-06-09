import "./Boxes.css";
import Box from "./Box/Box";

function Boxes({ boxData, OrderBoxBarcode }) {
  return (
    <section className="boxes">
      {boxData.map((i) => (
        <Box key={i.id} name={i.name} OrderBoxBarcode={OrderBoxBarcode} />
      ))}
    </section>
  );
}

export default Boxes;
