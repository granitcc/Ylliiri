import behindeproduct3 from "../../assets/images/behindeproduct3.webp";
import product3 from "../../assets/images/product3.webp";
import pinkplanet from "../../assets/images/pinkplanet.webp";
import greenplanet from "../../assets/images/greenplanet.webp";

const FourthProductContent = () => {
  return (
    <div className="SecondProductContent">
      <div className="doitrelativeas" data-aos="fade-left">
        <img
          src={behindeproduct3}
          alt="behindeproduct2"
          className="behindeproduct1"
          alt="behindeproduct1"
          data-aos="rotate-c"
          data-aos-easing="ease-in-sine"
          data-aos-duration="3000"
        />
        <img src={product3} alt="product1" className="product1" />
        <img
          src={pinkplanet}
          alt="greenplanet"
          className="pinkplanetinproduct1"
        />
        <img
          src={greenplanet}
          alt="pinkplanet"
          className="greenplanetinproduct1"
        />
      </div>

      <div className="contentproductinleft" data-aos="fade-right">
        <h2>Enhaced Collaboration</h2>
        <p>
          Sometimes you just need to pair-program,desgine or just get work done
          with your team.With custom views, you can make space for work and let
          Macro drive the most collaborative virtual meeting experince you've
          ever hed.
        </p>
      </div>
    </div>
  );
};

export default FourthProductContent;
