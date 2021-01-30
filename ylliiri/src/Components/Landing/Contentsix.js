import React from 'react'
import { FormattedMessage } from 'react-intl';
import photo1 from "../../assets/images/photo1.png";
import absolutephone from '../../assets/images/absolutephone.png'

export default function Contentsix() {
    return (
        <div className="content">
            <div data-aos="fade-down-right" className="second firsttt">
              <span className="header"><FormattedMessage id="Contentsix.header" /></span>
              <p data-aos="fade-down-left" className="under">
               <FormattedMessage id="Contetnsix.under"/>
              </p>
            </div>
            <div className="first padding">
              <img src={photo1} data-aos="fade-up" className="photo12" />
              <img src={absolutephone} className="absolutephone"/>
            </div>
          </div>
    )
}
