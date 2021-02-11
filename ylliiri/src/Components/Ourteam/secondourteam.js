import Flower from "../../assets/svgicon/JobsSvgicon/flower";
import miniball from "../../assets/images/miniball.webp";
import Heart from "../../assets/svgicon/JobsSvgicon/heart";
const Secondcontentourteam = () => {
  const styles = {
    color: "#4F25D5",
  };
  return (
    <>
      <div className="allinones">
        <div className="grid-containera" data-aos="flip-left">
          <div className="grid-itema">
            <Flower />
          </div>
          <div className="grid-itema">
            <h2 style={styles}>Builders/Definers</h2>
          </div>
          <div className="grid-itema">
            <p>
              {" "}
              The goal of a designer is to listen observe,
              understand,sympathize,empathize and glean insight that enable him
              or her to make the invisibile. If you;re going to try,go akk tge
              way.There is no other feeliong like that.Twitter Logo you will be
              alone the gods,andthe night will flame with fire.Tou will ride lif
              straight to perfect laughter.It's the only good fight there is.
            </p>
          </div>
        </div>
        <div className="grid-containera" data-aos="flip-up">
          <div className="grid-itema">
            <img src={miniball} alt="miniball" className="miniballourteam" />
          </div>
          <div className="grid-itema">
            <h2 style={styles}>Simplicity/Quality</h2>
          </div>
          <div className="grid-itema">
            {" "}
            <p>
              {" "}
              The goal of a designer is to listen observe,
              understand,sympathize,empathize and glean insight that enable him
              or her to make the invisibile. If you;re going to try,go akk tge
              way.There is no other feeliong like that.Twitter Logo you will be
              alone the gods,andthe night will flame with fire.Tou will ride lif
              straight to perfect laughter.It's the only good fight there is.
            </p>
          </div>
        </div>
        <div className="grid-containera" data-aos="flip-right">
          <div className="grid-itema">
            <Heart />
          </div>
          <div className="grid-itema">
            <h2 style={styles}>Delight/Joy</h2>
          </div>
          <div className="grid-itema">
            {" "}
            <p>
              {" "}
              The goal of a designer is to listen observe,
              understand,sympathize,empathize and glean insight that enable him
              or her to make the invisibile. If you;re going to try,go akk tge
              way.There is no other feeliong like that.Twitter Logo you will be
              alone the gods,andthe night will flame with fire.Tou will ride lif
              straight to perfect laughter.It's the only good fight there is.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Secondcontentourteam;
