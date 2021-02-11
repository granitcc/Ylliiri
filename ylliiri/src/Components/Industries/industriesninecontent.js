import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import maninindustries from "../../assets/images/maninindustries.webp";

import blackfade from "../../assets/images/blackfade.webp";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflowY: "scroll",
    overflowX: "hidden",
    position: "relative",
    height: "600px",
  },
  paper: {
    borderTopRightRadius: "20px",
    borderBottomLeftRadius: "20px",
    padding: theme.spacing(0),
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#24242C",
    color: "#788CA0",
    padding: "5px",
  },
  // paperi: {
  //     padding: theme.spacing(1),
  //     textAlign: 'center',
  //     alignItems:'center',
  //     justifyContent:'center',
  //     backgroundColor:'#24242C',
  //     color:'#788CA0',
  //     padding:'5px',
  //   },
}));

const IndustriesNineContent = () => {
  const classes = useStyles();
  const data = [
    {
      img: maninindustries,
      name: "Michal Seibel",
      work: "Ceo at Y",
      proffesion: "Combinator",
    },
  ];
  return (
    <div className="doitrelative">
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <Paper className={classes.paper}>
              <p>
                I was looking for UI/UX desgine for my mobile application and
                all my business related catalog. and i found the turumburum over
                the internet which really suits for my business
              </p>
              <div className="autor">
                {/* <img src={maninindustries} alt="images" /> */}
                {data.map((data) => (
                  <img src={data.img} alt="images" />
                ))}

                {data.map((data) => (
                  <h5>{data.name}</h5>
                ))}
                {data.map((data) => (
                  <p>
                    {data.work}
                    <br />
                    {data.proffesion}
                  </p>
                ))}
              </div>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Paper className={classes.paper}>
              <p>
                " I was looking for UI/UX desgine for my mobile application and
                all my business related catalog. and i found the turumburum over
                the internet which really suits for my business"
              </p>
              <div className="autor">
                {/* <img src={maninindustries} alt="images" /> */}
                {data.map((data) => (
                  <img src={data.img} alt="images" />
                ))}

                {data.map((data) => (
                  <h5>{data.name}</h5>
                ))}
                {data.map((data) => (
                  <p>
                    {data.work}
                    <br />
                    {data.proffesion}
                  </p>
                ))}
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper className={classes.paper}>
              <p>
                I was looking for UI/UX desgine for my mobile application and
                all my business related catalog. and i found the turumburum over
                the internet which really suits for my business
              </p>
              <div className="autor">
                {/* <img src={maninindustries} alt="images" /> */}
                {data.map((data) => (
                  <img src={data.img} alt="images" />
                ))}

                {data.map((data) => (
                  <h5>{data.name}</h5>
                ))}
                {data.map((data) => (
                  <p>
                    {data.work}
                    <br />
                    {data.proffesion}
                  </p>
                ))}
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper className={classes.paper}>
              {" "}
              <p>
                " I was looking for UI/UX desgine for my mobile application and
                all my business related catalog. and i found the turumburum over
                the internet which really suits for my business"
              </p>
              <div className="autor">
                {/* <img src={maninindustries} alt="images" /> */}
                {data.map((data) => (
                  <img src={data.img} alt="images" />
                ))}

                {data.map((data) => (
                  <h5>{data.name}</h5>
                ))}
                {data.map((data) => (
                  <p>
                    {data.work}
                    <br />
                    {data.proffesion}
                  </p>
                ))}
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper className={classes.paper}>
              <p>
                " I was looking for UI/UX desgine for my mobile application and
                all my business related catalog. and i found the turumburum over
                the internet which really suits for my business"
              </p>
              <div className="autor">
                {/* <img src={maninindustries} alt="images" /> */}
                {data.map((data) => (
                  <img src={data.img} alt="images" />
                ))}

                {data.map((data) => (
                  <h5>{data.name}</h5>
                ))}
                {data.map((data) => (
                  <p>
                    {data.work}
                    <br />
                    {data.proffesion}
                  </p>
                ))}
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper className={classes.paper}>
              <p>
                I was looking for UI/UX desgine for my mobile application and
                all my business related catalog. and i found the turumburum over
                the internet which really suits for my business
              </p>
              <div className="autor">
                {/* <img src={maninindustries} alt="images" /> */}
                {data.map((data) => (
                  <img src={data.img} alt="images" />
                ))}

                {data.map((data) => (
                  <h5>{data.name}</h5>
                ))}
                {data.map((data) => (
                  <p>
                    {data.work}
                    <br />
                    {data.proffesion}
                  </p>
                ))}
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper className={classes.paper}>
              <p>
                " I was looking for UI/UX desgine for my mobile application and
                all my business related catalog. and i found the turumburum over
                the internet which really suits for my business"
              </p>
              <div className="autor">
                {/* <img src={maninindustries} alt="images" /> */}
                {data.map((data) => (
                  <img src={data.img} alt="images" />
                ))}

                {data.map((data) => (
                  <h5>{data.name}</h5>
                ))}
                {data.map((data) => (
                  <p>
                    {data.work}
                    <br />
                    {data.proffesion}
                  </p>
                ))}
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper className={classes.paper}>
              <p>
                I was looking for UI/UX desgine for my mobile application and
                all my business related catalog. and i found the turumburum over
                the internet which really suits for my business
              </p>
              <div className="autor">
                {/* <img src={maninindustries} alt="images" /> */}
                {data.map((data) => (
                  <img src={data.img} alt="images" />
                ))}

                {data.map((data) => (
                  <h5>{data.name}</h5>
                ))}
                {data.map((data) => (
                  <p>
                    {data.work}
                    <br />
                    {data.proffesion}
                  </p>
                ))}
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <img src={blackfade} className="blackfade" alt="blacfade" />
    </div>
  );
};

export default IndustriesNineContent;
