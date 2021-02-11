import behindeindustries from "../../assets/images/behindeindustries.webp";

import pinkplanet from "../../assets/images/pinkplanet.webp";

import path from "../../assets/images/path.webp";

const IndustriesSecondContent = () => {
  return (
    <div className="IndustriesSecondContent">
      <img src={path} alt="path" className="pathinindustriesleft" />

      <img src={pinkplanet} alt="pinkplanet" className="pinkplanetinsencond" />
      <img src={pinkplanet} alt="pinkplanet" className="pinkplanetinsencond1" />
      <img src={pinkplanet} alt="pinkplanet" className="pinkplanetinsencond2" />

      <img
        src={behindeindustries}
        alt="behindeindustries"
        className="behindeindustries"
        data-aos="rotate-y"
        data-aos-duration="3000"
      />
      <img
        src={pinkplanet}
        alt="pinkplanet"
        data-aos="fade-right"
        className="pinkplanetinsencondright"
      />
      <img src={path} alt="path" className="pathinindustries" />
    </div>
  );
};

export default IndustriesSecondContent;
