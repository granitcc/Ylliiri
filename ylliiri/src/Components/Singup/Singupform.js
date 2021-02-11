import React from "react";
import Selectcombobox from "./Selectcombobox";
import greenplanet from "../../assets/images/greenplanet.webp";
import bigplanet from "../../assets/images/bigplanet.webp";
import absolutefooter from "../../assets/images/pas.webp";
import paki from "../../assets/images/paki.webp";
// function Singupform()
class Singupform extends React.Component {
  render() {
    return (
      <>
        <div className="singin singupip" onSubmit={this.handleSubmit}>
          <img src={absolutefooter} alt="pas" className="pas" />
          <img src={paki} alt="pas" className="pass" />
          <img
            src={bigplanet}
            className="absotoo"
            alt="pas"
            data-aos="fade-left"
          />
          <img
            src={greenplanet}
            className="absotooo"
            alt="pas"
            data-aos="fade-left"
          />

          <form className="widi" onSubmit={this.handleSubmit}>
            <h2 className="cecki">Login in to Countinue</h2>
            <div class="input-containerr">
              <i class="fa fa-envelope icon"></i>
              <input
                class="input-field"
                type="text"
                placeholder="email"
                name="email"
              />
            </div>
            <div class="input-containerr">
              <i class="fa fa-user icon"></i>
              <input
                class="input-field"
                type="text"
                placeholder="username"
                name="usrnm"
              />
            </div>
            <div></div>

            <div class="input-containerr">
              <i class="fa fa-key icon"></i>
              <input
                class="input-field"
                type="password"
                placeholder="Password"
                name="psw"
              />
            </div>
            <div className="select-one">
              <Selectcombobox />
            </div>

            <button type="submit" className="See-Moree">
              Login
            </button>
          </form>

          <div className="radio-check-radio">
            <div className="dont-have-account">Already have an account?</div>
            <div>
              <p className="sign-up">
                <a href="../signin">Signin</a>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Singupform;
