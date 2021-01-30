import React from 'react'
import { FormattedMessage } from 'react-intl';
import photo from "../../assets/images/photo.png";
import xball from '../../assets/images/xball.png'


export default function Contentthird() {
    return (
        <div className="contentt">
        <div className="first">
          <img src={photo} data-aos="fade-up" className="photo" />
          <img src={xball} className="xballlle"  data-aos="fade-left"/>

        </div>
        <div data-aos="fade-up-right" className="second">
          <span className="header"><FormattedMessage id="Contentthird.header" /></span>
          <p className="under">
      <FormattedMessage id="Contentthird.under" />
      <img src={xball} className="xballllee"  data-aos="fade-left"/>

          </p>
        </div>
      </div>
    )
}
