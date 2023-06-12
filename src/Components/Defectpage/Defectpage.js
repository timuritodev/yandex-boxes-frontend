/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "./Defectpage.css";
import Footer from "../Footer/Footer";
import CardList from "../Card/CardList";

function Defectpage({ cards, cardBarcode, checkedCards, setCardBarcode }) {

  const [IsKeyboardButtonActive, setIsKeyboardButtonActive] = useState(true);

  console.log(cardBarcode);

  return (
    <>
      <div className="defectpage__container">
        <CardList
          cards={cards}
          cardBarcode={cardBarcode}
          checkedCards={checkedCards}
        />
      </div>
      <Footer IsKeyboardButtonActive={IsKeyboardButtonActive} />
    </>
  );
}

export default Defectpage;


/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Defectpage.css";
// import Footer from "../Footer/Footer";
// import CardList from "../Card/CardList";
// import UniButton from "../UniButton/UniButton";

// function Defectpage({ cards, cardBarcode, checkedCards, setCardBarcode }) {
//   const navigate = useNavigate();

//   const [IsKeyboardButtonActive, setIsKeyboardButtonActive] = useState(true);

//   useEffect(() => {
//     const isFirstRedirect = localStorage.getItem("isFirstRedirect");

//     if (!isFirstRedirect) {
//       setCardBarcode([]);
//       localStorage.setItem("isFirstRedirect", "true");
//     }
//   }, []);

//   return (
//     <>
//       <div className="defectpage__container">
//         <h2 className="defectpage__title">Сканируйте<br/>бракованный товар</h2>
//         <CardList
//           cards={cards}
//           cardBarcode={cardBarcode}
//           checkedCards={checkedCards}
//         />
//         {cardBarcode.length !== 0 && <UniButton currentPage="defectpage"/>}
//       </div>
//       <Footer IsKeyboardButtonActive={IsKeyboardButtonActive} />
//     </>
//   );
// }

// export default Defectpage;

