import Jobsecondsmallplanetsright from "./jobsecondsmallplanetsleft";
import Jobsmallplanets from "./jobssmallplanetsright";
const Jobssecond = () => {
  return (
    <>
      <div className="Jobssecond">
        <Jobsmallplanets />
        <h2 data-aos="fade-up">Benefits iclude</h2>
        <div className="doitflex">
          <ul>
            <li data-aos="fade-left">Competive Salary</li>
            <li data-aos="fade-right">Meaningful equity</li>
            <li data-aos="fade-left">
              Medical,dental,vision,and mental <br />
              health benifits
            </li>
          </ul>
          <ul>
            <li data-aos="fade-right">Remote friendly enviroment</li>
            <li data-aos="fade-left">Some pretty cool co-workers {":)"}</li>
            <li data-aos="fade-right">And much more</li>
          </ul>
        </div>
        <Jobsecondsmallplanetsright />
      </div>
    </>
  );
};

export default Jobssecond;
