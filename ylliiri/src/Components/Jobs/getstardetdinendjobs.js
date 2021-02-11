import greenplanet from "../../assets/images/greenplanet.webp";

import bigplanet from "../../assets/images/bigplanet.webp";

import pinkplanet from "../../assets/images/pinkplanet.webp";

const GetStarted = () => {
  return (
    <div className="getstarted">
      <img
        src={greenplanet}
        alt="img"
        className="ggrenplanet"
        data-aos="fade-left"
      />
      <img
        src={pinkplanet}
        alt="img"
        className="ppinkplanet"
        data-aos="fade-right"
      />

      <div className="oneinget" data-aos="fade-left">
        <h1 className="freestart fontsize">
          Free start, and affordable as you grow.
        </h1>
        <span className="buttnsinget">
          <button className="buttoningetone">Get Started</button>
          <button className="buttoningettwo">Contact</button>
        </span>
      </div>
      <div className="twoinget" data-aos="fade-left">
        <h4 className="fontsizee">
          One Pricin plang start 30$/months.Whicheverplan you chose ,the first 7
          days are on us .Try us and when your convinced get start!.
        </h4>
      </div>
      <img
        src={bigplanet}
        alt="img"
        className="bbiigplanet"
        data-aos="fade-up"
      />
    </div>
  );
};

export default GetStarted;
