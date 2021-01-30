import React, { Component } from "react";

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FormattedMessage } from "react-intl";
import Reviewleft from "../../assets/svgicon/Footersvgicon/Reviewleft";
import miniball from '../../assets/images/miniball.png'
import Footercompfirst from "./FooterComp";
import { FooterCompSecond } from "./FooterCompS";
import FooterComponentThird from "./FooterCompTh";
import absolutefooter from '../../assets/images/absolutefooter.png'
import paki from '../../assets/images/paki.png'

import CallToggle from "../../CallToggle";
const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="footer-element-mid">
          <div className="review-left">
            <Reviewleft />
          </div>

          <div className="fotter-first-element-div">
            <ul>
              {" "}
              <span className="color">
                <FormattedMessage id="Footer.Company" />
              </span>
              <li>
                <FormattedMessage id="Footer.Terms" />
              </li>
              <li>
                <FormattedMessage id="Footer.Privacy" />
              </li>
              <li>
                <FormattedMessage id="Footer.Protiction" />
              </li>
              <li>
                <FormattedMessage id="Footer.FAQ" />
              </li>
              <li>
                <FormattedMessage id="Footer.Agency" />
              </li>
              <li>
                <FormattedMessage id="Footer.Brand" />
              </li>
              <li>
                <FormattedMessage id="Footer.Marketing" />
              </li>
            </ul>
          </div>

          <div className="fotter-first-element-div">
            <ul>
              {" "}
              <span className="color">
                <FormattedMessage id="Footer.Company" />
              </span>
              <li>
                <FormattedMessage id="Footer.Terms" />
              </li>
              <li>
                <FormattedMessage id="Footer.Privacy" />
              </li>
              <li>
                <FormattedMessage id="Footer.Protiction" />
              </li>
              <li>
                <FormattedMessage id="Footer.FAQ" />
              </li>
              <li>
                <FormattedMessage id="Footer.Agency" />
              </li>
              <li>
                <FormattedMessage id="Footer.Brand" />
              </li>
              <li>
                <FormattedMessage id="Footer.Marketing" />
              </li>
            </ul>
          </div>

          <div className="fotter-first-element-div">
            <ul>
              {" "}
              <span className="color">
                <FormattedMessage id="Footer.Company" />
              </span>
              <li>
                <FormattedMessage id="Footer.Terms" />
              </li>
              <li>
                <FormattedMessage id="Footer.Privacy" />
              </li>
              <li>
                <FormattedMessage id="Footer.Protiction" />
              </li>
              <li>
                <FormattedMessage id="Footer.FAQ" />
              </li>
              <li>
                <FormattedMessage id="Footer.Agency" />
              </li>
              <li>
                <FormattedMessage id="Footer.Brand" />
              </li>
              <li>
                <FormattedMessage id="Footer.Marketing" />
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="Footer-end">
          <div className="footer-end-first">
          <img src={miniball} className="miniballek" />
            <Footercompfirst />
             <img src={miniball} className="miniballek1" />
            <div className="doItflex">
              <strong>Light{"|"}Dark</strong>
              <CallToggle />
            </div>
            <img src={miniball} className="miniballek5" />
            <img src={miniball} className="miniballek3" />
            <FooterCompSecond />
             <img src={miniball} className="miniballek4" />
            <FooterComponentThird />
            <img src={miniball} className="miniballek2" />
            <img src={absolutefooter} className="absolutefooter"/>

            <img src={paki} className="absolutefooteer"/>

          </div>
          <div className="social">
           <div className="socialone">
            <span className="social-item">
              <FaFacebook />
            </span>
            <span className="social-item">
              <FaTwitter />
            </span>
            <span className="social-item">
              <FaInstagram />
            </span>
            <span className="social-item">
              <FaYoutube />
            </span></div>
            <div classsName="socialtwo">
            Copyright © {new Date().getFullYear()} ylliri. All rights reserved.
            </div>
          </div>
       
        </div>
        {/* <div className="ilusion">
          <div className="ilusionleft">
           <img src={pass} className="pass1" />
          </div>
          <div className="ilusionright">
          <img src={pas} className="pass2" />

          </div>
        </div> */}
      </div>
    </>
  );
};
export default Footer;
