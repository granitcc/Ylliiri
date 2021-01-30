import React from 'react'
import { FormattedMessage } from 'react-intl';
import photo2 from "../../assets/images/photo2.png";


export default function Contentfifth() {
    return (
        <div className="contentt">
        <div className="first padding">
          <img src={photo2} data-aos="fade-up" className="photo" />
        </div>
        <div data-aos="fade-down-right" className="second ">
          <span className="header"><FormattedMessage id="Contentfifth.header" /></span>
          <p data-aos="fade-down-left" className="under">
            <FormattedMessage id="Contentfifth.under" />
          </p>
        </div>
      </div>
    )
}
