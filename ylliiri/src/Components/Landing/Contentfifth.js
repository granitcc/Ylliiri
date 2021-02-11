import photo2absolute from "../../assets/images/photo2absolute.webp";
import photo22absolute from "../../assets/images/photo22absolute.webp";
import bigplanet from "../../assets/images/bigplanet.webp";

import { FormattedMessage } from "react-intl";
import photo2 from "../../assets/images/photo2.webp";

export default function Contentfifth() {
  return (
    <div className="contentt">
      <div className="first padding">
        <img
          src={photo2absolute}
          alt="llogo"
          data-aos="flip-left"
          className="photo2absolute"
        />
        <img src={bigplanet} alt="pinkplanet" className="pinkipinkplanet" />
        <img src={photo2} alt="llogo" data-aos="fade-left" className="photo" />
        <img
          src={photo22absolute}
          alt="llogo"
          data-aos="flip-right"
          className="photo22absolute"
        />
      </div>
      <div data-aos="fade-down-right" className="second ">
        <span className="header">
          <FormattedMessage id="Contentfifth.header" />
        </span>
        <p data-aos="fade-down-left" className="under">
          <FormattedMessage id="Contentfifth.under" />
        </p>
      </div>
    </div>
  );
}
