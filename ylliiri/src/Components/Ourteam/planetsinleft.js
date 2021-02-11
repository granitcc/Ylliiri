import eclipse from "../../assets/images/eclipse.webp";
import ball from "../../assets/images/ball.webp";
import greenplanet from "../../assets/images/greenplanet.webp";
import bigplanet from "../../assets/images/bigplanet.webp";
import pinkplanet from "../../assets/images/pinkplanet.webp";

const PlanetsLeft = () => {
  return (
    <div className="doitrelative">
      <img
        src={eclipse}
        alt="exlio"
        className="eclipseleft"
        data-aos="fade-left"
      />
      <img
        src={eclipse}
        alt="exlio"
        className="eclipseleftt"
        data-aos="fade-left"
      />
      <img src={eclipse} alt="exlio" className="eclipseleftt" />
      <img src={bigplanet} alt="ball" className="ballinleft" />
      <img src={greenplanet} alt="ball" className="ballinleftt" />
      <img src={pinkplanet} alt="ball" className="ballinlefttt" />
      <img src={ball} alt="ball" className="ballinleftttt" />
      <img src={ball} alt="ball" className="ballinlefttttt" />
      <img src={ball} alt="ball" className="ballinleftttttt" />
    </div>
  );
};

export default PlanetsLeft;
