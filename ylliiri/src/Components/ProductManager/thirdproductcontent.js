import behindeproduct2 from "../../assets/images/behindeproduct2.webp";
import product2 from "../../assets/images/product2.webp";
import pinkplanet from "../../assets/images/pinkplanet.webp";
import greenplanet from "../../assets/images/greenplanet.webp";
const ThirdProductContent = () => {
  return (
    <div className="SecondProductContent doitreverse">
      <div className="doitrelativeas" data-aos="fade-left">
        <img
          src={behindeproduct2}
          alt="behindeproduct2"
          className="behindeproduct1"
          alt="behindeproduct1"
          data-aos="rotate-c"
          className="behindeproduct1"
          duration="3000"
        />
        <img src={product2} alt="product1" className="product1" />
        <img
          src={greenplanet}
          alt="greenplanet"
          className="greenplanetinproduct1"
        />
        <img
          src={pinkplanet}
          alt="pinkplanet"
          className="pinkplanetinproduct1"
        />
      </div>

      <div className="contentproductinleft" data-aos="fade-right">
        <h2>Sync with Google Docs</h2>
        <p>
          Each note is instantly synced to an automatically generated Google
          Docs for that meeting, that you can share with the rest of your team.
        </p>
      </div>
    </div>
  );
};

export default ThirdProductContent;
