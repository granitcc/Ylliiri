import Planets from "./planets";
import { PlanetsL } from "./planetsleft";

function Jobsfirstcontent() {
  const styles = {
    color: "#4F25D5",
  };
  return (
    <div className="JobsPageOne">
      <Planets />
      <div>
        <h1 className="textcenter" style={styles} data-aos="fade-up">
          Join us on our mission
        </h1>

        <p className="textcenter" data-aos="fade-left">
          We have a lofty vision,and we'll need an all-star team to bring it to
          life.
        </p>

        <p className="textcenter" data-aos="fade-right">
          We're on the mission to build the world's most delighful,reliable
          <br /> and smartes desgine.
        </p>
      </div>
      <PlanetsL />
    </div>
  );
}

export default Jobsfirstcontent;
