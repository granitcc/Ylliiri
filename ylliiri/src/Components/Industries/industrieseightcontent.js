import slack from "../../assets/images/slack.png";

import hubspot from "../../assets/images/hubspot.webp";

import zapier from "../../assets/images/zapier.png";

import tagletwo from "../../assets/images/tagletwo.png";

import IndustriesSvg from "../../assets/svgicon/Industries/industriessvg";
import bigplanet from "../../assets/images/bigplanet.webp";

import greenplanet from "../../assets/images/greenplanet.webp";

import pinkplanet from "../../assets/images/pinkplanet.webp";

const IndustriesEightContent = () => {
  return (
    <div className="doitcolumn">
      <div className="imdoingrelative">
        <img
          src={greenplanet}
          alt="greenplanet"
          className="greenplanetinindustries1"
        />
        <img
          src={pinkplanet}
          alt="pinkplanet"
          className="pinkplanetinindustries2"
        />
        <img
          src={greenplanet}
          alt="greenplanet"
          className="greenplanetinindustries3"
        />
        <img
          src={pinkplanet}
          alt="pinkplanet"
          className="pinkplanetinindustries4"
        />
        <img
          src={bigplanet}
          alt="bigplanet"
          className="bigplanetinindnustries"
        />
        <img
          src={greenplanet}
          alt="greenplanet"
          className="greenplanetinindustries5"
        />
        <img
          src={greenplanet}
          alt="greenplanet"
          className="greenplanetinindustries6"
        />
        <img
          src={pinkplanet}
          alt="pinkplanet"
          className="pinkplanetinindustries7"
        />

        {/* <img src={pinkplanet} alt="pinkplanet" className="pinkplanetinindustries" /> */}
      </div>

      <div className="flex">
        <div className="IndustriesEightContent" data-aos="fade-left">
          <div className="onsk">
            <div className="imdoingrelative" data-aos="fade-left">
              <img src={hubspot} alt="photoone" className="photoone" />
              <img src={tagletwo} alt="tagletwo" className="tagletwo" />
            </div>
            <h3>HubSpot</h3>
            <p>
              Se the full picture of your customer interacitons by connecting
              your phone to HubSport
            </p>
          </div>
        </div>

        <div className="IndustriesEightContent" data-aos="fade-down">
          <div className="onsk">
            <div className="imdoingrelative" data-aos="fade-down">
              <img src={zapier} alt="photoone" className="photoone" />
              <img src={tagletwo} alt="tagletwo" className="tagletwo" />
            </div>
            <h3>Zapier</h3>
            <p>
              Se the full picture of your customer interacitons by connecting
              your phone to HubSport
            </p>
          </div>
        </div>

        <div className="IndustriesEightContent" data-aos="fade-up">
          <div className="onsk">
            <div className="imdoingrelative" data-aos="fade-up">
              <img src={slack} alt="photoone" className="photoone" />
              <img src={tagletwo} alt="tagletwo" className="tagletwo" />
            </div>
            <h3>Slack</h3>
            <p>
              Se the full picture of your customer interacitons by connecting
              your phone to HubSport
            </p>
          </div>
        </div>
      </div>
      <button className="buttoninindustries">
        Watch video
        <IndustriesSvg />
      </button>
    </div>
  );
};

export default IndustriesEightContent;
