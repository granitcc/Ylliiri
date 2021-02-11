import industriessixphoto from "../../assets/images/industriessixphoto.webp";
import absolutesixindustries from "../../assets/images/absolutesixindustries.webp";
import pinkplanet from "../../assets/images/pinkplanet.webp";

import greenplanet from "../../assets/images/greenplanet.webp";

import bigplanet from "../../assets/images/bigplanet.webp";

const IndustriesSixContetn = () => {
  return (
    <div className="SecondProductContent">
      <img src={greenplanet} alt="pinkplanet" className="pinkplanetinproduct" />
      <div className="doitrelativeas" data-aos="fade-left">
        <img
          src={industriessixphoto}
          alt="behindeproduct1"
          className="behindeproduct1 hovers"
          data-aos="fade-left"
        />
        <img
          src={absolutesixindustries}
          alt="behindeproduct1"
          className="absolutesixindustries"
          data-aos="flip-left"
        />
      </div>
      <img src={bigplanet} alt="greenplanet" className="greenplanetinproduct" />
      <img src={pinkplanet} alt="bigplanet" className="bigplanetinproduct" />

      <div className="contentproductinleft" data-aos="fade-right">
        <h2>YlliRi IT Solutions for Finacial Services</h2>
        <p>
          The finacncial services industry is highly regulated, so a company's
          IT and business teams are ware of the role that theri complicance team
          plays in the IT investment process.In today's high-tech environment,
          finacncial services are exposed to many cyber.{" "}
        </p>
      </div>
    </div>
  );
};

export default IndustriesSixContetn;
