import { FormattedMessage } from "react-intl";
import fade from "../../assets/images/fade.webp";
import girl from "../../assets/images/girl.webp";
import path1 from "../../assets/images/path1.webp";
import Ellipse398 from "../../assets/images/Ellipse398.webp";
import fading from "../../assets/images/fading.webp";
import greenplanet from "../../assets/images/greenplanet.webp";
import bigplanet from "../../assets/images/bigplanet.webp";
import pinkplanet from "../../assets/images/pinkplanet.webp";
export default function Contentfirst() {
  return (
    <div className="row">
      <img src={fading} className="Ellipsee" />
      <div data-aos="fade-up" className="content">
        <img src={fade} className="fade" />
        <span className="header">GRAPHIC DESGINE AGENCY</span>

        <p className="under ">
          <FormattedMessage id="Contentfirst.text" />
        </p>
        <button className="See-More ">See More</button>
      </div>
      {/* className="geshk" */}
      <div className="relative">
        <img src={Ellipse398} alt="llogo" className="Ellipse" />
        <img src={girl} alt="llogo" className="girl" />
        <img
          src={pinkplanet}
          alt="llogo"
          className="miniballi"
          data-aos="fade-left"
        />
        <img
          src={pinkplanet}
          alt="llogo"
          className="miniball"
          data-aos="fade-right"
        />
        <img
          src={greenplanet}
          alt="llogo"
          className="xballe"
          data-aos="fade-left"
        />
        <img src={bigplanet} alt="llogo" className="behindegirl" />
        <img
          src={greenplanet}
          alt="llogo"
          className="xballi"
          data-aos="fade-right"
        />
        <img
          src={pinkplanet}
          alt="llogo"
          className="xball"
          data-aos="fade-left"
        />
        <img src={path1} alt="llogo" div className="path1" />
      </div>
    </div>
  );
}
