import React from "react";
import fade from "../../assets/images/fade.webp";
import Gridcontainericon from "./Gridcontainericon";
import fading from "../../assets/images/fading.webp";
import { FormattedMessage } from "react-intl";
import greenplanet from "../../assets/images/greenplanet.webp";
import pinkplanet from "../../assets/images/pinkplanet.webp";
import bigplanet from "../../assets/images/bigplanet.webp";

function Seconlandingpage() {
  return (
    <div className="second-landing-page">
      <div data-aos="fade-up" className="content">
        <img src={fade} alt="bigplanet" className="fade" />
        <span className="header">
          <img
            src={pinkplanet}
            alt="bigplanet"
            data-aos="fade-right"
            className="xensk"
          />
          <img
            src={greenplanet}
            alt="bigplanet"
            className="miniballies"
            data-aos="fade-left"
          />
          <img
            src={bigplanet}
            alt="bigplanet"
            className="miniballiesk"
            data-aos="fade-left"
          />

          <FormattedMessage id="Secondlandingpage.second-landing-page" />
        </span>
        <p className="under">
          <FormattedMessage id="Secondlandingpage.under" />
        </p>
        <button className="See-More">See More</button>
      </div>

      <Gridcontainericon />
      <img src={fading} alt="fading" className="fadding" />
      {/* <img src={xball} className="ball" />
<img src={xball} className="balll" />
<img src={miniball} className="miniball" />
<img src={miniball} className="minibball" />  */}
    </div>
  );
}

export default Seconlandingpage;
