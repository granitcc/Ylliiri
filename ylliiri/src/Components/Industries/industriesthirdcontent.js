import { FormattedMessage } from "react-intl";
import logo11 from "../../assets/images/logo11.webp";
import logo22 from "../../assets/images/logo22.webp";
import logo33 from "../../assets/images/logo33.webp";
import stick from "../../assets/images/stick.webp";

const IndustriesThirdContent = () => {
  return (
    <>
      <div className="mid">
        <p className="fmid">How it Wroks</p>
      </div>
      <div className="alr-end">
        <div className="alr-firs">
          <img
            src={logo11}
            alt="logo"
            className="logoo"
            data-aos="zoom-out-up"
          />
          <p className="get">
            <FormattedMessage id="Inmidone.get" />
          </p>
        </div>
        <img src={stick} className="stick" />
        <div className="alr-firs">
          <img
            src={logo22}
            alt="logo"
            className="logoo"
            data-aos="zoom-out-up"
          />
          <p className="get">
            <FormattedMessage id="Inmidone.get" />
          </p>
        </div>
        <img src={stick} className="stick" />
        <div className="alr-firs">
          <img
            src={logo33}
            alt="logo"
            className="logoo"
            data-aos="zoom-out-up"
          />
          <p className="get">
            <FormattedMessage id="Inmidone.get" />
          </p>
        </div>
      </div>
    </>
  );
};

export default IndustriesThirdContent;
