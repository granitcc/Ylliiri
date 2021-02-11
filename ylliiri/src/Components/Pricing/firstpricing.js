import PricingSvgX, {
  PricingSvgY,
} from "../../assets/svgicon/Pricing/pricingsvg";
import greenplanet from "../../assets/images/greenplanet.webp";
import pinkplanet from "../../assets/images/pinkplanet.webp";
import bigplanet from "../../assets/images/bigplanet.webp";

const FirstPricingContent = () => {
  const color = {
    backgroundColor: "#1B1D24",
    height: "1.5px",
    border: "none",
    width: "100%",
  };
  const Standart = {
    color: "#70CAE6",
  };
  const Premium = {
    color: "#E68283",
  };
  const EnterPrise = {
    color: "#A883E6",
  };
  const color1 = {
    color: "#FFF",
  };
  const color2 = {
    color: "#A883E6",
  };
  const dolittelpadding = {
    paddingLeft: "2rem",
  };
  return (
    <div className="FirstPricingContent">
      <div className="gridcontainerpricing">
        <div className="itemoneinpricing">
          <div className="ppplanets">
            <img
              src={greenplanet}
              alt="greenplanet"
              className="greenplanetinpricing"
            />
            <img
              src={pinkplanet}
              alt="greenplanet"
              className="pinkplanetinpricing"
            />
            <img
              src={pinkplanet}
              alt="greenplanet"
              className="pinkplanetinpricing1"
            />
            <img
              src={bigplanet}
              alt="greenplanet"
              className="bignplanetinpricing1"
            />
            <img
              src={greenplanet}
              alt="greenplanet"
              className="greenplanetinpricing1"
            />
            <img
              src={bigplanet}
              alt="greenplanet"
              className="bignplanetinpricing"
            />
            <img
              src={pinkplanet}
              alt="greenplanet"
              className="pinkplanetinpricing2"
            />
          </div>
        </div>
        <div className="itemoneinpricing" data-aos="flip-down">
          <div className="dosomething donothing">
            <h2 style={Standart}>Standart</h2>
            <span style={color1} className="doitrow">
              <h1>$10</h1>
              <sup>usd</sup>
            </span>
            <h6>per month/user</h6>{" "}
          </div>
          <br />
          <button className="See-More pricingbtn">Strat free Trial</button>
          <hr style={color} />
          <h6>The essentials to get you up and running.</h6>
        </div>

        <div className="itemoneinpricing colorPremium" data-aos="flip-up">
          <div className="dosomething">
            <h2 style={Premium}>Premium</h2>
            <span style={color1} className="doitrow">
              <h1>$10</h1>
              <sup>usd</sup>
            </span>
            <h6>per month/user</h6>{" "}
          </div>
          <br />
          <button className="See-More pricingbtn">Strat free Trial</button>
          <hr style={color} />
          <h6>The essentials to get you up and running.</h6>
        </div>
        <div className="itemoneinpricing" data-aos="flip-down">
          <div className="dosomething">
            <h2 style={EnterPrise}>Enterprise</h2>
            <h1> </h1>
            <h1> </h1>

            <h6>Price customized based on your needs.</h6>
            <br />
            <br />
          </div>
          <br />
          <button className="See-More pricingbtndark">
            <p class="fa fa-envelope-o" aria-hidden="true"></p> Contact Sales
          </button>
          <hr style={color} />
          <h6>The essentials to get you up and running.</h6>
        </div>
      </div>

      <div className="gridcontainerpricingg">
        <div
          className="itemoneinpricingg"
          style={dolittelpadding}
          data-aos="flip-up"
        >
          <h4 style={color2}>Core Features</h4>
          <h5>Fonts</h5>
          <h5>Duration</h5>
          <h5>Icons</h5>
          <h5>Native</h5>
          <h5>Main screen</h5>
        </div>
        <div
          className="itemoneinpricingg doitcenter"
          style={color1}
          data-aos="flip-down"
        >
          <h6>{""}</h6>
          <h5>Unlimited *</h5>
          <h5>3-4 weeks</h5>
          <h5>20-40 Icons</h5>
          <h5>
            <PricingSvgX />
          </h5>
          <h5>
            <PricingSvgY />
          </h5>
        </div>
        <div
          className="itemoneinpricingg doitcenter colorPremiumm"
          style={color1}
          data-aos="flip-down"
        >
          <h6>{""}</h6>

          <h5>Unlimited *</h5>
          <h5>2-3 weeks</h5>
          <h5>200 Icons</h5>
          <h5>
            <PricingSvgY />
          </h5>
          <h5>
            <PricingSvgY />
          </h5>
        </div>
        <div className="itemoneinpricingg doitcenter" style={color1}>
          <h6>{""}</h6>

          <h5>Unlimited *</h5>
          <h5>1-2 weeks</h5>
          <h5>400+ Icons</h5>
          <h5>
            <PricingSvgY />
          </h5>
          <h5>
            <PricingSvgY />
          </h5>
        </div>
      </div>
    </div>
  );
};

export default FirstPricingContent;
