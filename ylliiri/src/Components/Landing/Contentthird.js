import { FormattedMessage } from "react-intl";
import photo from "../../assets/images/photo.webp";
import greenplanet from "../../assets/images/greenplanet.webp";

export default function Contentthird() {
  return (
    <div className="contentt">
      <div className="first">
        <img
          src={photo}
          alt="llogo"
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
          className="photo"
        />
        <img
          src={greenplanet}
          alt="llogo"
          className="xballlle"
          data-aos="fade-left"
        />
      </div>
      <div data-aos="fade-up-right" className="second">
        <span className="header">
          <FormattedMessage id="Contentthird.header" />
        </span>
        <p className="under">
          <FormattedMessage id="Contentthird.under" />
          <img
            src={greenplanet}
            alt="llogo"
            className="xballllee"
            data-aos="fade-left"
          />
        </p>
      </div>
    </div>
  );
}
