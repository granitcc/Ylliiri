import behindeproduct1 from "../../assets/images/behindeproduct1.webp";
import product1 from "../../assets/images/product1.webp";
import pinkplanet from "../../assets/images/pinkplanet.webp";
import greenplanet from "../../assets/images/greenplanet.webp";
import bigplanet from "../../assets/images/bigplanet.webp";

const SecondProductContent = () => {
  return (
    <div className="SecondProductContent">
      <img src={pinkplanet} alt="pinkplanet" className="pinkplanetinproduct" />
      <div className="doitrelativeas" data-aos="fade-left">
        <img
          src={behindeproduct1}
          alt="behindeproduct1"
          data-aos="rotate-c"
          className="behindeproduct1"
          duration="3000"
          data-aos-easing="ease-in-sine"
        />
        <img
          src={product1}
          alt="product1"
          data-aos="rotate-c"
          className="product1"
        />
      </div>
      <img
        src={greenplanet}
        alt="greenplanet"
        className="greenplanetinproduct"
      />
      <img src={bigplanet} alt="bigplanet" className="bigplanetinproduct" />

      <div className="contentproductinleft" data-aos="fade-right">
        <h2>Notes that work for you</h2>
        <p>
          Join us, talk with us, and you will be amazed by the result tha will
          give you
        </p>
      </div>
    </div>
  );
};

export default SecondProductContent;
