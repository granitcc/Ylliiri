import Footer from "../Footer";
import Formcontent from "../Jobs/formsjobscontent";
import GetStarted from "../Jobs/getstardetdinendjobs";
import Beforelastdivone from "../Landing/Beforelastdivone";
import CarouselContainer from "../Landing/CarouselContainer";
import Inmidone from "../Landing/Inmidone";
import Lastdivone from "../Landing/Lastdivone";
import Demo4 from "../LandingPage";
import FirstPricingContent from "./firstpricing";
import HeadPricing from "./headpricin";

function PricingComponents() {
  return (
    <div className="Pricinglanding">
      <HeadPricing />
      <FirstPricingContent />
      <Inmidone />
      <Demo4 />
      <Beforelastdivone />
      <CarouselContainer />
      <div className="lastdiv">
      <Lastdivone />
      </div>
      <Formcontent />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default PricingComponents;
