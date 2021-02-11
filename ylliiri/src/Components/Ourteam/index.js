import Jobsvg from "../../assets/svgicon/JobsSvgicon/companiesjobs";
import Footer from "../Footer";
import Formcontent from "../Jobs/formsjobscontent";
import GetStarted from "../Jobs/getstardetdinendjobs";
import Divoneinjobs from "../Jobs/lastdivoneinjobs";
import Contetnuseformid from "../Landing/Contetnuseformid";
import Cfirstourteam from "./contentoneourteam";
import Secondcontentourteam from "./secondourteam";
import Team from "./team";
const OurteamPage = () => {
  const h22job = {
    color: "#4F25D5",
    paddingTop: "4rem",
    textAlign: "center",
    justifyContent: "center",
    marginTop: "3rem",
  };
  return (
    <div>
      <Cfirstourteam />
      <Secondcontentourteam />
      <Team />
      <Contetnuseformid />
      <div className="doinmid">
        <Jobsvg />
      </div>
      <h2 style={h22job}>THE #1 Company for desgin</h2>
      <Divoneinjobs />
      <Formcontent />
      <div className="doinmid">
        <GetStarted />
      </div>
      <Footer />
    </div>
  );
};

export default OurteamPage;
