import React from 'react'
import Star from '../../assets/svgicon/Star';
import logolg1 from "../../assets/images/logolg1.png";
import logolg2 from "../../assets/images/logolg2.png";
import logoappstore from "../../assets/images/logoappstore.png";
import { FormattedMessage } from 'react-intl';

export default function Lastdivone() {
    return (
        <>
          <div  data-aos="fade-up" className="lastdivone">
              <img src={logoappstore} className="hover-large" />
              <p className="underkos">"<FormattedMessage id="Lastdivone.underkos"/>"</p>
            <Star />
            </div>
        <div data-aos="fade-up" className="lastdivone">
             <img src={logolg1} className="hover-large" />
              <p className="underkos">
                "<FormattedMessage id="Lastdivone.underkoss"/>"
              </p>
          <Star/>
            </div>
            <div  data-aos="fade-up" className="lastdivone">
              <img src={logolg2} className="hover-large" />
              <p className="underkos">
              "<FormattedMessage id="Lastdivone.underkosss"/>"
              </p>
             <Star/>
            </div>
        
      </>
        
    )
}

