import photoinindustresfifth from "../../assets/images/photoinindustresfifth.webp";
import pinkplanet from "../../assets/images/pinkplanet.webp";

import bigplanet from "../../assets/images/bigplanet.webp";

import greenplanet from "../../assets/images/greenplanet.webp";

const IndustriesFifthContetnt = () => {
  return (
    <div className="SecondProductContent doitreverse">
      <img src={pinkplanet} alt="pinkplanet" className="pinkplanetinproduct" />
      <div className="doitrelativeas" data-aos="fade-left">
        <img
          src={photoinindustresfifth}
          alt="behindeproduct1"
          className="behindeproduct1 hovers"
        />
      </div>
      <img
        src={greenplanet}
        alt="greenplanet"
        className="greenplanetinproduct"
      />
      <img src={bigplanet} alt="bigplanet" className="bigplanetinproduct" />

      <div className="contentproductinleft" data-aos="fade-right">
        <h2>IT Solutions for Media & Communications</h2>
        <p>
          The media and communations industries are rapidaly changing and
          evoling.Each year the Global Media Report world conference generates a
          lot of interest,discussing changing dynamics.It is attended
          enthusiastically be experts who have an interest in the..
        </p>
      </div>
    </div>
  );
};

export default IndustriesFifthContetnt;
