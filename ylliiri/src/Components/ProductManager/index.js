import FourthProductContent from "./fourthproductcontetn";
import Pfirstcontent from "./productfirstcontent";
import SecondProductContent from "./secondproductcontent";
import ThirdProductContent from "./thirdproductcontent";
import fading from "../../assets/images/fading.webp";
import Divoneinjobs from "../Jobs/lastdivoneinjobs";
import GetStarted from "../Jobs/getstardetdinendjobs";
import Footer from "../Footer";
import Formcontent from "../Jobs/formsjobscontent";
const ProductManagerComponent = () => {
  const h2job = {
    color: "#4F25D5",
    paddingTop: "4rem",
  };

  return (
    <div className="ProductManagerComponent">
      <Pfirstcontent />
      <SecondProductContent />
      <img src={fading} alt="fading" className="fadinginproduct" />
      <ThirdProductContent />
      <img src={fading} alt="fading" className="fadinginproduct1" />
      <FourthProductContent />
      <h2 style={h2job}>THE #1 Company for desgin</h2>
      <Divoneinjobs />
      <Formcontent />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default ProductManagerComponent;
