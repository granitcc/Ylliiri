import React, { useEffect } from "react";
import CarouselContainer from "../Landing/CarouselContainer";
import Demo4 from "../LandingPage/index";
import Aos from "aos";
import "aos/dist/aos.css";
import Ssvgcomp from "../../assets/svgicon/Ssvgcomp";
import Lastdivone from "./Lastdivone";
import Seconlandingpage from "./Seconlandingpage";
import Middivone from "./Middivone";
import Inmidone from "./Inmidone";
import Beforelastdivone from "./Beforelastdivone";
import Contentthird from "./Contentthird";
import Contentfourth from "./Contentfourth";
import Contentfifth from "./Contentfifth";
import Contentsix from "./Contentsix";
import Contetnuseformid from "./Contetnuseformid";
import Contentuseformidtwo from "./Contentuseformidtwo";
import Contentfirst from "./Contentfirst";

const Landing = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  return (
    <>
      <div className="alllandingpageinonecontent">
        <div className="landing-page  ">
          <Contentfirst />
          <Contentuseformidtwo />
          <Seconlandingpage />
          <Middivone />
        </div>
        <div className="third-landing-page">
          <Contentthird />
          <Contentfourth />
          <Contentfifth />
          <Contentsix />
          <Contetnuseformid />
          <div>
            <Ssvgcomp />
          </div>
          <Inmidone />
          <Demo4 />
          <Beforelastdivone />
          <div className="gos-in">
            <CarouselContainer />
          </div>
          <div className="lastdiv">
            <Lastdivone />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
