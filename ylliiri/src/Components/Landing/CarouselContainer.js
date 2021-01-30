import React, { Component } from "react";
import Slider from "react-slick";
import "../../styles/pages/Home/Carouselhome/_slick.scss";
import "../../styles/pages/Home/Carouselhome/_slickTheme.scss";
import Ssv from "../../assets/images/Ssv.png";
import Sssv from "../../assets/images/Sssv.png";
import { FormattedMessage } from "react-intl";


export default class CarouselContainer extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      // centerPadding: "15px",
      slidesToShow: 1,
      speed: 500,
      nextArrow: false,
      prevArrow: false,
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="hellki">
            <div className="underhellki">
              <p>
              <FormattedMessage id="CarouselContainer.first" />
              </p>
              <div className="tresk">
                {" "}
                <img src={Ssv} className="Ssv" />
              </div>
              <div className="twoinone">
                <p className="doitbold">Michal Seibeld</p>
                <p>@SquareFlaier</p>
              </div>
            </div>
          </div>
          <div className="hellki">
            <div className="underhellki">
              <p>
              <FormattedMessage id="CarouselContainer.first" />

              </p>
              <div className="tresk">
                {" "}
                <img src={Sssv} className="Ssv" />
              </div>

              <div className="twoinone">
                <p className="doitbold">Michal Seibeld</p>
                <p>@SquareFlaier</p>
              </div>
            </div>
          </div>
          <div className="hellki">
            <div className="underhellki">
              <p>
              <FormattedMessage id="CarouselContainer.first" />

              </p>
              <div className="tresk">
                {" "}
                <img src={Sssv} className="Ssv" />
              </div>

              <div className="twoinone">
                <p className="doitbold">Michal Seibeld</p>
                <p>@SquareFlaier</p>
              </div>
            </div>
          </div>
          <div className="hellki">
            <div className="underhellki">
              <p>
              <FormattedMessage id="CarouselContainer.first" />

              </p>
              <div className="tresk">
                {" "}
                <img src={Ssv} className="Ssv" />
              </div>

              <div className="twoinone">
                <p className="doitbold">Michal Seibeld</p>
                <p>@SquareFlaier</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
