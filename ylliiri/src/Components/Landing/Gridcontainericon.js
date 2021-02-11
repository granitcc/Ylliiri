import React from "react";
import { FormattedMessage } from "react-intl";
import logo1 from "../../assets/images/logo1.webp";
import logo2 from "../../assets/images/logo2.webp";
import logo3 from "../../assets/images/logo3.webp";
import logo4 from "../../assets/images/logo4.webp";
import logo5 from "../../assets/images/logo5.webp";
import logo6 from "../../assets/images/logo6.webp";

function Gridcontainericon() {
  return (
    <div data-aos="fade-right" class="grid-container">
      <div class="grid-item">
        <img src={logo1} alt="llogo" />
        <p className="logo">
          <FormattedMessage id="Gridcontainer.one" />
        </p>{" "}
      </div>
      <div class="grid-item">
        <img src={logo2} alt="llogo" className="killerofheightt" />
        <p className="logo">
          <FormattedMessage id="Gridcontainer.two" />
        </p>{" "}
      </div>
      <div class="grid-item">
        <img src={logo3} alt="llogo" />
        <p className="logo">
          <FormattedMessage id="Gridcontainer.three" />
        </p>
      </div>
      <div class="grid-item">
        <img src={logo4} alt="llogo" />
        <p className="logo">
          <FormattedMessage id="Gridcontainer.fourth" />
        </p>
      </div>
      <div class="grid-item">
        <img src={logo5} alt="llogo" />
        <p className="logo">
          <FormattedMessage id="Gridcontainer.fifth" />
        </p>
      </div>
      <div class="grid-item">
        <img src={logo6} alt="llogo" className="killerofheight" />
        <p className="logo">
          <FormattedMessage id="Gridcontainer.six" />
        </p>
      </div>
    </div>
  );
}

export default Gridcontainericon;
