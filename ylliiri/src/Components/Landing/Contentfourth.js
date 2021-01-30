import React from 'react'
import { FormattedMessage } from 'react-intl';
import photo1 from "../../assets/images/photo1.png";
import largeball from '../../assets/images/largeball.png'
import xball from '../../assets/images/xball.png'


export default function Contentfourth() {
    return (
      
        <div className="content">
        <div data-aos="fade-down-right" className="second firsttt">
        <img src={largeball} className="xxbballi"  data-aos="fade-left"/>

          <span data-aos="slide-right" className="header">
           <FormattedMessage id="Contentfourth.header" />
          </span>
          <img src={largeball} className="xixbballi"  data-aos="fade-left"/>

          <p className="under">
           <FormattedMessage id="Contentfourth.under"/>
          </p>
        </div>
        <div className="first padding">
          <img src={photo1} data-aos="fade-up" className="photo1" />
        </div>
      </div>
    )
}
