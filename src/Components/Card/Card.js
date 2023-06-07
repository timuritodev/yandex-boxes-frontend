import "./Card.css";
import barcodepic from "../../images/barcode.svg";
import speakerpic from "../../images/test.jpg";

function Header() {
  return (
    <section className="card">
      <div className="card__container">
          <img className="img__card" alt="" src={speakerpic}/>
        <div className="name__container">
          <p className="name__title">Умная колонка Яндекс Станция Лайт, ультрафиолет</p>
          <div className="barcode__container">
            <img className="barcode__img" alt="" src={barcodepic}/>
            <p className="barcode__text">1234567823432</p>
          </div>
        </div>
        <div className="box__container">
          <p className="box__name">Крафтовая бумага</p>
          <p className="box__amount">1шт.</p>
        </div>
      </div>
    </section>
  );
}

export default Header;
