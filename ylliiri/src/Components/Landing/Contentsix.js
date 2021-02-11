import { FormattedMessage } from "react-intl";
import photo1 from "../../assets/images/photo1.webp";
import absolutephone from "../../assets/images/absolutephone.webp";
import pinkplanet from "../../assets/images/pinkplanet.webp";

export default function Contentsix() {
  return (
    <div className="content">
      <div data-aos="fade-down-right" className="second firsttt">
        <span className="header">
          <FormattedMessage id="Contentsix.header" />
        </span>
        <p data-aos="fade-down-left" className="under">
          <FormattedMessage id="Contetnsix.under" />
        </p>
      </div>
      <div className="first padding">
        <img
          src={pinkplanet}
          alt="llogo"
          className="pinkplanetpink"
          data-aos="flip-left"
        />

        <img
          src={photo1}
          alt="llogo"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
          className="photo12"
        />
        <img src={absolutephone} alt="llogo" className="absolutephone" />
      </div>
    </div>
  );
}
