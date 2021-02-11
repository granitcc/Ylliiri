import Flower from "../../assets/svgicon/JobsSvgicon/flower";
import fading from "../../assets/images/fading.webp";

import ball from "../../assets/images/ball.webp";

const Jobsthird = (props) => {
  const jobs = [
    {
      name: "Full Stack Enginer",
      place: "Austin / Boston / LA / NYC / SF / Remote",
    },
    { name1: "Full Stack", place1: "Austin / Boston / LA / NYC / SF / Remote" },
  ];

  const styles = {
    color: "#4F25D5",
    textAlign: "center",
  };

  return (
    <div className="Jobthird">
      <h1 style={styles} data-aos="fade-up">
        Open Position in Engineering
      </h1>
      <div className="Openposition">
        <img src={fading} alt="fading" className="Jobsfading" />
        <img src={ball} alt="fading" className="balljobs" />

        <div className="Positionfirst" data-aos="flip-up">
          <div className="flexdirection">
            <Flower />
            <span className="positioncontent">
              {" "}
              {jobs.map((jobs) => (
                <h4 key={jobs.name}>{jobs.name}</h4>
              ))}
              {jobs.map((jobs) => (
                <p key={jobs.place}>{jobs.place}</p>
              ))}
              <img src={ball} alt="fading" className="balljobss" />
            </span>
          </div>
          <button className="Jobsbuton" onClick="submit">
            Apply Now
          </button>
        </div>
        <div className="Positionfirst" data-aos="flip-right">
          <div className="flexdirection">
            <Flower />
            <span className="positioncontent">
              {" "}
              {jobs.map((jobs) => (
                <h4 key={jobs.name1}>{jobs.name1}</h4>
              ))}
              {jobs.map((jobs) => (
                <p key={jobs.place1}>{jobs.place1}</p>
              ))}
            </span>{" "}
          </div>
          <button className="Jobsbuton" onClick="submit">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jobsthird;
