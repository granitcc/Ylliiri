import React from "react";
import Star from "../../assets/svgicon/Star";
import logolg1 from "../../assets/images/logolg1.webp";
import logolg2 from "../../assets/images/logolg2.webp";
import logoappstore from "../../assets/images/logoappstore.webp";
import { FormattedMessage } from "react-intl";

export default function Lastdivone() {
  return (
    <>
      <div data-aos="fade-up" className="lastdivone">
        <img src={logoappstore} alt="logo" className="hover-large" />
        <p className="underkos">
          "<FormattedMessage id="Lastdivone.underkos" />"
        </p>
        <Star />
      </div>
      <div data-aos="fade-up" className="lastdivone">
        <img src={logolg1} alt="logo" className="hover-large" />
        <p className="underkos">
          "<FormattedMessage id="Lastdivone.underkoss" />"
        </p>
        <Star />
      </div>
      <div data-aos="fade-up" className="lastdivone">
        <img src={logolg2} alt="logo" className="hover-large" />
        <p className="underkos">
          "<FormattedMessage id="Lastdivone.underkosss" />"
        </p>
        <Star />
      </div>
    </>
  );
}
