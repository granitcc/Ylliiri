import React from 'react'
import { FormattedMessage } from 'react-intl';
import logo1 from "../../assets/images/logo1.png";
import logo2 from "../../assets/images/logo2.png";
import logo3 from "../../assets/images/logo3.png";
import logo4 from "../../assets/images/logo4.png";
import logo5 from "../../assets/images/logo5.png";
import logo6 from "../../assets/images/logo6.png";

function Gridcontainericon() {
    return (
        <div data-aos="fade-right" class="grid-container">
        <div class="grid-item">
          <img src={logo1} />
          <p className="logo"><FormattedMessage id="Gridcontainer.one" /></p>{" "}
        </div>
        <div class="grid-item">
          <img src={logo2} className="killerofheightt" />
          <p className="logo"><FormattedMessage id="Gridcontainer.two" /></p>{" "}
        </div>
        <div class="grid-item">
          <img src={logo3} />
          <p className="logo"><FormattedMessage id="Gridcontainer.three" /></p>
        </div>
        <div class="grid-item">
          <img src={logo4} />
          <p className="logo"><FormattedMessage id="Gridcontainer.fourth" /></p>
        </div>
        <div class="grid-item">
          <img src={logo5} />
          <p className="logo"><FormattedMessage id="Gridcontainer.fifth" /></p>
        </div>
        <div class="grid-item">
          <img src={logo6} className="killerofheight" />
          <p className="logo"><FormattedMessage id="Gridcontainer.six" /></p>
        </div>
      </div>
    )
}

export default Gridcontainericon
