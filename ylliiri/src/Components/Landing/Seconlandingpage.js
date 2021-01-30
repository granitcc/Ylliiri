import React from "react";
import fade from "../../assets/images/fade.png";
import Gridcontainericon from "./Gridcontainericon";
import fading from "../../assets/images/fading.png";
import { FormattedMessage } from "react-intl";
import miniball from '../../assets/images/miniball.png'
import xball from '../../assets/images/xball.png'

function Seconlandingpage() {
  return (
    <div className="second-landing-page">
      <div data-aos="fade-up" className="content">
        <img src={fade} className="fade" />
        <span className="header">
          <img src={xball} data-aos="fade-right"  className="xensk"/>
          <img  src={miniball} className="miniballies" data-aos="fade-left" />
          <img  src={miniball} className="miniballiesk" data-aos="fade-left" />

          <FormattedMessage id="Secondlandingpage.second-landing-page"/>
        </span>
        <p className="under">
        <FormattedMessage id="Secondlandingpage.under" />
        </p>
        <button className="See-More">See More</button>
      </div>

      <Gridcontainericon />
      <img src={fading} className="fadding" />
      {/* <img src={xball} className="ball" />
<img src={xball} className="balll" />
<img src={miniball} className="miniball" />
<img src={miniball} className="minibball" />  */}
    </div>
  );
}

export default Seconlandingpage;
