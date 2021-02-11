import absolutefirstphoneindustries from "../../assets/images/absolutefirstphoneindustries.webp";
import absolutesecondphoneindustries from "../../assets/images/absolutesecondphoneindustries.webp";
import behndephoneindustries from "../../assets/images/behndephoneindustries.webp";
import greenplanet from "../../assets/images/greenplanet.webp";

const IndustriesFourthContent = () => {
  return (
    <div className="SecondProductContent">
      {/* <img src={pinkplanet} alt="pinkplanet" className="pinkplanetinproduct"/> */}
      <div className="doitrelativeas" data-aos="fade-left">
        <img
          src={behndephoneindustries}
          alt="behindeproduct1"
          className="behndephoneindustries"
          data-aos="rotate-c"
          data-aos-easing="ease-in-sine"
          data-aos-duration="3500"
        />
        <img
          src={absolutefirstphoneindustries}
          alt="product1"
          className="absolutefirstphoneindustries"
          data-aos="flip-left"
        />
        <img
          src={absolutesecondphoneindustries}
          alt="product1"
          className="absolutesecondphoneindustries"
          data-aos="flip-left"
        />
      </div>
      {/* <img src={greenplanet} alt="greenplanet" className="greenplanetinproduct"/>
      <img src={bigplanet} alt="bigplanet" className="bigplanetinproduct"/> */}

      <div
        className="contentproductinleft doitrelativeas"
        data-aos="fade-right"
      >
        <h2>YlliRi IT Solutions for Telecommunications</h2>
        <p>
          Both the telecomunations and media industries have changed
          dramatically,espacially with the evolution of new IT systems and
          infracstructures.What's next,anyone can speculate.Despite the dramatic
          changes,telecom is still here and thriving.
        </p>
        <img
          src={greenplanet}
          alt="greenplanet"
          className="greenplanethirdindustries"
        />
      </div>
    </div>
  );
};

export default IndustriesFourthContent;
