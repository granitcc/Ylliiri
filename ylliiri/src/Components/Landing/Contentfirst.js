import React from 'react'
import { FormattedMessage } from 'react-intl';
import fade from "../../assets/images/fade.png";
import girl from "../../assets/images/girl.png";
import behindegirl from '../../assets/images/behindegirl.png'
import path1 from "../../assets/images/path1.png";
import Ellipse398 from '../../assets/images/Ellipse398.png'
import fading from '../../assets/images/fading.png'
import largeball from '../../assets/images/largeball.png'
import miniball from '../../assets/images/miniball.png'
import xball from '../../assets/images/xball.png'
export default function Contentfirst() {
    return (
        <div className="row">
           <img src={fading} className="Ellipsee" />
        <div data-aos="fade-up" className="content">
          <img src={fade} className="fade" />
          <span className="header">GRAPHIC DESGINE AGENCY</span>
         
          <p className="under ">
         
          <FormattedMessage id="Contentfirst.text"/>
          </p>
          <button className="See-More ">See More</button>
        </div>
        {/* className="geshk" */}
        <div className="relative">
        <img src={Ellipse398} className="Ellipse" />
        <img src={girl} className="girl" />
        <img  src={miniball} className="miniballi" data-aos="fade-left" />
       <img  src={miniball} className="miniball"   data-aos="fade-right"  />
       <img src={xball} className="xballe"         data-aos="fade-left"/>
        <img src={behindegirl} className="behindegirl" />
        <img src={largeball} className="xballi"  data-aos="fade-right"/>
       <img src={largeball} className="xball"  data-aos="fade-left"/>
        <img src={path1} div className="path1"   /></div>
      </div>

    )
}
