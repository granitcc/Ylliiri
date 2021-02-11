import teamone from "../../assets/images/teamone.webp";
import teamtwo from "../../assets/images/teamtwo.webp";
import teamthird from "../../assets/images/teamthird.webp";
import teamfour from "../../assets/images/teamfour.webp";
import teamfifth from "../../../src/assets/images/teamfifth.webp";
import Hiring from "../../assets/svgicon/OurTeamicon/hiring";
import miniball from "../../assets/images/miniball.webp";

import largeball from "../../assets/images/largeball.webp";

const Team = () => {
  const team = [
    {
      name: "Delilah Mellor",
      proffesion: "Engineering",
      img: teamone,
    },
    {
      name: "Faizah Sandoval",
      proffesion: "Product Desginer",
      img: teamtwo,
    },
    {
      name: "Nathan Delgado",
      proffesion: "Product Desginer",
      img: teamthird,
    },
    {
      name: "kaya Kirkland",
      proffesion: "Product Desginer",
      img: teamfour,
    },
    {
      name: "Delilah Mellor",
      proffesion: "Engineering",
      img: teamfifth,
    },
  ];

  return (
    <>
      <div className="teamcontainer" data-aos="fade-down">
        {team.map((team) => (
          <div className="itemteam">
            <img src={team.img} alt="team" />

            <h3>{team.name}</h3>

            <p>{team.proffesion}</p>
          </div>
        ))}
        <div className="itemteam" data-aos="fade-down">
          <div className="dosomepadding">
            <Hiring />
            <img
              src={largeball}
              alt="miniball"
              className="teamhiringminiball"
            />
            <img
              src={miniball}
              alt="miniball"
              className="tteamhiringminiball"
            />
          </div>
          <button className="teambutton">Join Us</button>
        </div>
      </div>
    </>
  );
};

export default Team;
