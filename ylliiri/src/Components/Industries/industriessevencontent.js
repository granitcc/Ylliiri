import industriessevenimage from "../../assets/images/industriessevenimage.webp";
// import pinkplanet from "../../assets/images/pinkplanet.webp";
// import greenplanet from "../../assets/images/greenplanet.webp";
import bigplanet from "../../assets/images/bigplanet.webp";

const IndustriesSevenContent = () => {
  return (
    <div className="SecondProductContent doitreverse">
      <div className="doitrelativeas" data-aos="fade-left">
        <img
          src={industriessevenimage}
          alt="behindeproduct1"
          className="behindeproduct1 hovers"
          data-aos="rotate-c"
          data-aos-easing="ease-in-sine"
          data-aos-duration="3500"
        />
        <img src={bigplanet} alt="pinkplanet" className="pinkplanetinproduct" />
      </div>
      {/* <img src={greenplanet} alt="greenplanet" className="greenplanetinproduct"/> */}
      {/* <img src={pinkplanet} alt="bigplanet" className="bigplanetinproduct"/> */}

      <div className="contentproductinleft" data-aos="fade-right">
        <h2>YlliRi IT Solutions for Telecommunications</h2>
        <p>
          Both the telecomunations and media industries have changed
          dramatically,espacially with the evolution of new IT systems and
          infracstructures.What's next,anyone can speculate.Despite the dramatic
          changes,telecom is still here and thriving.
        </p>
      </div>
    </div>
  );
};

export default IndustriesSevenContent;
