import Jobsvg from "../../assets/svgicon/JobsSvgicon/companiesjobs";
import Heart from "../../assets/svgicon/JobsSvgicon/heart";
import Contetnuseformid from "../Landing/Contetnuseformid";
import Jobssecond from "./jobseconds";
import Jobsfirstcontent from "./JobsFirst";
import Jobsthird from "./jobsthird";
import Divoneinjobs from "./lastdivoneinjobs";
import Formcontent from "./formsjobscontent";
import GetStarted from "./getstardetdinendjobs";
import Footer from "../Footer";
const h2job = {
  color: "#4F25D5",
  paddingTop: "4rem",
};

const JobsPage = () => {
  return (
    <>
      <div className="JobsPage">
        <Jobsfirstcontent />
        <Heart />
        <Jobssecond />
        <Jobsthird />
        <Contetnuseformid />
        <Jobsvg />
        <h2 style={h2job}>THE #1 Company for desgin</h2>
        <Divoneinjobs />
        <Formcontent />
        <GetStarted />
        <Footer />
      </div>
    </>
  );
};

export default JobsPage;
