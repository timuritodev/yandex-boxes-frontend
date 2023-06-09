import "./Boxes.css";
import Box from "./Box/Box";

function Boxes({ boxData }) {
  return (
    <section className="boxes">
      {boxData.map((i) => (
        <Box key={i.id} name={i.name} />
      ))}
    </section>
  );
}

export default Boxes;
