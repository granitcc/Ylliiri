import greenplanet from "../../assets/images/greenplanet.webp";
import bigplanet from "../../assets/images/bigplanet.webp";
import pinkplanet from "../../assets/images/pinkplanet.webp";
import absolutefooter from "../../assets/images/absolutefooter.webp";
import paki from "../../assets/images/paki.webp";

function SigninPage() {
  return (
    <div>
      <div className="singin">
        <img src={absolutefooter} alt="absolutefooter" className="pas" />
        <img src={paki} alt="paki" className="pass" />

        <form className="widi">
          <h2 className="cecki">Login in to Countinue</h2>
          <div class="input-containerr">
            <img
              src={greenplanet}
              className="eksios"
              data-aos="fade-left"
              alt="pas"
            />
            <img
              src={bigplanet}
              className="eksioss"
              data-aos="fade-left"
              alt="pas"
            />

            <i class="fa fa-envelope icon"></i>
            <input
              class="input-field"
              type="text"
              placeholder="Username"
              name="usrnm"
            />
          </div>

          <div class="input-containerr">
            <img src={pinkplanet} alt="pas" className="erriotik" />

            <img src={greenplanet} alt="pas" className="exios" />
            <i class="fa fa-key icon"></i>
            <input
              class="input-field"
              type="password"
              placeholder="Password"
              name="psw"
            />
          </div>
          <div className="radio-check">
            <div>
              <input type="radio" name="check" className="radio" value="true" />{" "}
              Remeber Me
            </div>
            <p className="forgot-pw">Forgot password?</p>
          </div>

          <button type="submit" className="See-Moree">
            Login
          </button>
        </form>

        <div className="radio-check-radio">
          <div className="dont-have-account">Don't have an account?</div>
          <div>
            <p className="sign-up">
              <a href="/singupform">Sign-Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SigninPage;
