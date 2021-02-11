import eclipse from "../../assets/images/eclipse.webp";
import ball from "../../assets/images/ball.webp";
import greenplanet from "../../assets/images/greenplanet.webp";
import bigplanet from "../../assets/images/bigplanet.webp";
import pinkplanet from "../../assets/images/pinkplanet.webp";
const Planets = () => {
  return (
    <div className="doitrelative">
      <img
        src={eclipse}
        alt="eclipse"
        className="Jobseclipsee"
        data-aos="fade-right"
      />
      <img
        src={eclipse}
        alt="eclipse"
        className="Jobseclipse"
        data-aos="fade-right"
      />
      <img src={eclipse} alt="eclipse" className="Jobseclipsee" />
      <img src={bigplanet} alt="eclipse" className="Jobsball" />
      <img src={greenplanet} alt="eclipse" className="Jobsballe" />
      <img src={pinkplanet} alt="eclipse" className="Jobsballee" />
      <img src={ball} alt="eclipse" className="Jobsballeee" />
      <img src={ball} alt="eclipse" className="Jobsballeeee" />
      <img src={ball} alt="eclipse" className="Jobsballeeeee" />
      <img src={ball} alt="eclipse" className="Jobsballeeeeee" />
    </div>
  );
};

export default Planets;
