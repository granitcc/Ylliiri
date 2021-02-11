import React from "react";
import Star from "../../assets/svgicon/Star";
import logolg1 from "../../assets/images/logolg1.webp";
import logolg2 from "../../assets/images/logolg2.webp";
import logoappstore from "../../assets/images/logoappstore.webp";
import { FormattedMessage } from "react-intl";
import Ellipse398 from "../../assets/images/Ellipse398.webp";

const Divoneinjobs = () => {
  return (
    <div className="dooitflex">
      <img src={Ellipse398} alt="img" className="ellipsee" />
      <div data-aos="fade-up" className="lastdivone">
        <img src={logoappstore} alt="llogo" className="hover-large" />
        <p className="underkos">
          "<FormattedMessage id="Lastdivone.underkos" />"
        </p>
        <Star />
      </div>
      <div data-aos="fade-up" className="lastdivone">
        <img src={logolg1} alt="llogo" className="hover-large" />
        <p className="underkos">
          "<FormattedMessage id="Lastdivone.underkoss" />"
        </p>
        <Star />
      </div>
      <div data-aos="fade-up" className="lastdivone">
        <img src={logolg2} alt="llogo" className="hover-large" />
        <p className="underkos">
          "<FormattedMessage id="Lastdivone.underkosss" />"
        </p>
        <Star />
      </div>
      <img src={Ellipse398} alt="img" className="ellipseee" />
    </div>
  );
};

export default Divoneinjobs;
