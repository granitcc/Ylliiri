import { SidebarRoutee } from "../Sidebar/SidebarElements";
import fading from "../../assets/images/fading.webp";

const IndustriesFristContent = () => {
  const styles = {
    color: "#4F25D5",
  };
  return (
    <div className="IndustriesFristContent">
      <img src={fading} alt="fading" className="fadinginindustries" />
      <h1 className="textcenter" style={styles} data-aos="fade-up">
        Industries At YlliRi
      </h1>

      <p className="textcenter" data-aos="fade-left">
        YlliRi is an IT ousourcing leader that can serve any industry
        succesfully.However,the following is a list of some of the industries we
        exetnsievly support.
      </p>
      <img src={fading} alt="fading" className="fadinginindustriesright" />

      <button className="bbesbuton" data-aos="fade-left">
        Start free trial
      </button>
      <SidebarRoutee to="/"> Watch video {">"} </SidebarRoutee>
    </div>
  );
};

export default IndustriesFristContent;
