import "./Card.css";
import barcodepic from "../../images/barcode.svg";

function Card({name, barcode, picture, packageType, amount}) {
  return (
    <section className="card">
      <div className="card__container">
          <img className="img__card" alt="" src={picture}/>
        <div className="name__container">
          <p className="name__title">{name}</p>
          <div className="barcode__container">
            <img className="barcode__img" alt="" src={barcodepic}/>
            <p className="barcode__text">{barcode}</p>
          </div>
        </div>
        <div className="box__container">
          <p className="box__name">{packageType}</p>
          <p className="box__amount">{amount}шт.</p>
        </div>
      </div>
    </section>
  );
}

export default Card;
