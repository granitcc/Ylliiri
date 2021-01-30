import React from 'react'
import { FormattedMessage } from 'react-intl';
import logo11 from "../../assets/images/logo11.png";
import logo22 from "../../assets/images/logo22.png";
import logo33 from "../../assets/images/logo33.png";
import stick from "../../assets/images/stick.png";

function Inmidone() {
    return (
        <>
        <div className="mid">
            <p className="fmid">How it Wroks</p>
          </div>
          <div className="alr-end">
            <div className="alr-firs">
              <img src={logo11} className="logoo" />
              <p className="get"><FormattedMessage id="Inmidone.get"/></p>
            </div>
            <img src={stick} className="stick" />
            <div className="alr-firs">
              <img src={logo22} className="logoo" />
              <p className="get"><FormattedMessage id="Inmidone.get"/></p>
            </div>
            <img src={stick} className="stick" />
            <div className="alr-firs">
              <img src={logo33} className="logoo" />
              <p className="get"><FormattedMessage id="Inmidone.get"/></p>
            </div>
          </div>

          <p className="d"><FormattedMessage id="inmidone.d" /></p>

          <div className="switch">
            <p className="sin"><FormattedMessage id="inmidone.sin" /></p>

            <p className="sin"><FormattedMessage id="Inmidone.sintwo" /></p>
            <p className="sin"><FormattedMessage id="Inmidone.sintthree" /></p>
          </div>

          <div className="Questions">
            <div classname="questionfirst">
              <div>
                <p className="i"><FormattedMessage id="Inmidone.i"/></p>
                <p className="ii"><FormattedMessage id="Inmidone.ii" /></p>
              </div>
            </div>
          </div>
          {/* <div>
     {readMore && extraContentt}
      <button className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2>
      </button></div> */}
</>
    )
}

export default Inmidone
