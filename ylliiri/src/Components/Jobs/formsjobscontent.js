import blackinback from "../../assets/images/blackinback.webp";

import head from "../../assets/images/head.webp";

import tale from "../../assets/images/tale.webp";

export const Formcontent = () => {
  const bold = {
    fontWeight: "bold",
  };
  const textalign = {
    textAlign: "center",
  };
  return (
    <div className="formcontent">
      <img src={blackinback} alt="black" className="blackinback" />
      <span style={textalign}>
        <h2>Facing the problem?</h2>
        <h1 style={bold}>Let get in touch now</h1>
      </span>
      <form
        action="/action_page.php"
        className="action"
        data-aos="flip-up"
        data-aos-duration="4000"
      >
        <div className="doitcolumn">
          <div class="input-container">
            <i class="fa fa-user icon"></i>
            <input
              class="input-field"
              type="text"
              placeholder="Username"
              name="usrnm"
            />
          </div>

          <div class="input-container">
            <i class="fa fa-envelope icon"></i>
            <input
              class="input-field"
              type="text"
              placeholder="Email"
              name="email"
            />
          </div>

          <div class="input-container">
            <i class="fa fa-file-text icon"></i>
            <textarea
              name="comment"
              form="usrform"
              type="text"
              class="input-field"
              placeholder="Enter text here..."
            ></textarea>
          </div>
        </div>
        <div className="doitcolumn">
          <div class="input-container">
            <i class="fa fa-key icon"></i>
            <input
              class="input-field"
              type="password"
              placeholder="Password"
              name="psw"
            />
          </div>
          <div class="input-container">
            <i class="fa fa-ban icon" />

            <select class="input-field" name="select" for="action">
              <option>"Which problems you are facing"</option>
              <option>two</option>
              <option>three</option>
            </select>
          </div>
        </div>
      </form>
      <button type="submit" class="See-More bttnn">
        SEND
      </button>
      <img src={tale} alt="tale" className="tale" data-aos="fade-down" />
      <img src={head} alt="head" className="head" data-aos="fade-up" />
    </div>
  );
};

export default Formcontent;
