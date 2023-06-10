// import { useState, useEffect } from 'react';
// import { cardsData } from '../../utils/constants';
// import Card from "./Card";
// import "./CardList.css";

// function CardList({ result, getFromLocalStorage, saveToLocalStorage }) {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let totalCount = 0;
//     cardsData.forEach((item) => {
//       // eslint-disable-next-line eqeqeq
//       if (result == item.barcode) {
//         totalCount += 1;
//       }
//     });
//     setCount(totalCount);
//   }, [result]);

//   return (
//     <section className="cardList">
//       {cardsData.map((item) => {
//         // eslint-disable-next-line eqeqeq
//         const cardContainerGreen = result == item.barcode || getFromLocalStorage(item.barcode);
//         saveToLocalStorage(item.barcode, cardContainerGreen);

//         return (
//           <Card
//             key={item.id}
//             name={item.name}
//             barcode={item.barcode}
//             picture={item.picture}
//             packageType={item.packageType}
//             amount={item.amount}
//             result={result}
//             cardContainerGreen={cardContainerGreen}
//             count={count}
//           />
//         );
//       })}
//       <p>Count: {count}</p>
//     </section>
//   );
// }

// export default CardList;

import { cardsData } from '../../utils/constants';
import Card from "./Card";
import "./CardList.css";

function CardList({ result, getFromLocalStorage, saveToLocalStorage }) {
  let count = 0;

  return (
    <section className="cardList">
      {cardsData.map((item) => {
        // eslint-disable-next-line eqeqeq
        const cardContainerGreen = result == item.barcode || getFromLocalStorage(item.barcode);
        saveToLocalStorage(item.barcode, cardContainerGreen);

        // eslint-disable-next-line eqeqeq
        if (result == item.barcode) {
          count+=1;
        }

        return (
          <Card
            key={item.id}
            name={item.name}
            barcode={item.barcode}
            picture={item.picture}
            packageType={item.packageType}
            amount={item.amount}
            result={result}
            cardContainerGreen={cardContainerGreen}
            count={count}
          />
        );
      })}
    </section>
  );
}

export default CardList;
