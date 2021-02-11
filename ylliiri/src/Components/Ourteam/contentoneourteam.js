import Planets from "../Jobs/planets";
import PlanetsL from "../Jobs/planetsleft";
const Cfirstourteam = () => {
  const styles = {
    color: "#4F25D5",
    textAlign: "center",
  };
  return (
    <div className="JobsPageOne Firstcontetnourteampage">
      <Planets />
      <div>
        <h1 className="textcenter" style={styles} data-aos="fade-up">
          Building the design <br /> of the future.
        </h1>

        <p className="textcenter" data-aos="fade-right">
          We're on the mission to build the world's most delightful ,reliable
          <br /> and smartes desgine.
        </p>
      </div>
      <PlanetsL />
    </div>
  );
};

export default Cfirstourteam;
