import { FormattedMessage } from "react-intl";
import photo1 from "../../assets/images/photo1.webp";
import greenplanet from "../../assets/images/greenplanet.webp";

export default function Contentfourth() {
  return (
    <div className="content">
      <div data-aos="fade-down-right" className="second firsttt">
        <img
          src={greenplanet}
          alt="llogo"
          className="xxbballi"
          data-aos="fade-left"
        />

        <span data-aos="slide-right" className="header">
          <FormattedMessage id="Contentfourth.header" />
        </span>
        <img
          src={greenplanet}
          alt="llogo"
          className="xixbballi"
          data-aos="fade-left"
        />

        <p className="under">
          <FormattedMessage id="Contentfourth.under" />
        </p>
      </div>
      <div className="first padding">
        <img
          src={photo1}
          alt="llogo"
          data-aos="flip-right"
          className="photo1"
        />
      </div>
    </div>
  );
}
