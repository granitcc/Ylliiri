import IndustriesFristContent from "./industriesfirstcontent";
import IndustriesSecondContent from "./industriessecondcontent";
import Contentuseformidtwo from "../Landing/Contentuseformidtwo";
import IndustriesThirdContent from "./industriesthirdcontent";
import IndustriesFourthContent from "./industriesfourthcontent";
import IndustriesFifthContetnt from "./industriesfifthcontent";
import IndustriesSixContetn from "./industriessixcontent";
import IndustriesSevenContent from "./industriessevencontent";
import IndustriesEightContent from "./industrieseightcontent";
import Beforelastdivone from "../Landing/Beforelastdivone";
import IndustriesNineContent from "./industriesninecontent";
import Lastdivone from "../Landing/Lastdivone";
import Footer from "../Footer";
import Formcontent from "../Jobs/formsjobscontent";
import GetStarted from "../Jobs/getstardetdinendjobs";
import path from "../../assets/images/path.webp";

const IndustriesComponents = () => {
  return (
    <div className="IndustriesComponents">
      <IndustriesFristContent />
      <IndustriesSecondContent />
      <Contentuseformidtwo /> <br />
      <br />
      <br />
      <br />
      <IndustriesThirdContent />
      <IndustriesFourthContent />
      <IndustriesFifthContetnt />
      <IndustriesSixContetn />
      <IndustriesSevenContent />
      <IndustriesEightContent />
      <Beforelastdivone />
      <IndustriesNineContent />
      <div className="lastdiv">
        <Lastdivone />
      </div>
      <Formcontent />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default IndustriesComponents;
