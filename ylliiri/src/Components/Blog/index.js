import React from "react";
import { FormattedDate } from "react-intl";
import bigblog from "../../assets/images/bigblog.webp";
import miniblog from "../../assets/images/miniblog.webp";
import Footer from "../Footer";
import Beforelastdivone from "../Landing/Beforelastdivone";
import CarouselContainer from "../Landing/CarouselContainer";
import Lastdivone from "../Landing/Lastdivone";
import Demo4 from "../LandingPage";
// import miniblog1 from "../../assets/images/miniblog1.webp"
function BlogPage() {
  // const people = [
  //     { img:bigblog,
  //       title:"We've raised $14m to bring the best businnes phone app to the massess",
  //       desc:"It's Crayzy to think that today remote world , a busniss  phone is still assosieted with landing...",
  //       currentdate:<FormattedDate/>
  //     }
  //   ];

  const blogus = [
    {
      id: 1,
      image: bigblog,
      title:
        "We've raised $14m to bring the best businnes phone app to the massess",
      desc:
        "It's Crayzy to think that today remote world , a busniss  phone is still assosieted with landing...",
    },
  ];

  const blogu = [
    // {
    //   id: 1,
    //   image: bigblog,
    //   title:
    //     "We've raised $14m to bring the best businnes phone app to the massess",
    //   desc:
    //     "It's Crayzy to think that today remote world , a busniss  phone is still assosieted with landing...",
    // },
    {
      id: 2,
      images: miniblog,
      titles: "20 Things Mos People Learn to Late in Life",
      descs:
        "Life is a journey of twist and turns,peaks and valleys,mountaines t clim and oceans to explore",
      autore: "By Adam Adams Nov 17,2019",
    },
    // {
    //   id: 3,
    //   imagess: miniblog1,
    //   titless: "20 Things Mos People Learn to Late in Life",
    //   descss:
    //     "Life is a journey of twist and turns,peaks and valleys,mountaines t clim and oceans to explore",
    //   autores: "By Adam Adams Nov 17,2019",
    // },
  ];

  return (
    <>
      <div className="allinoneblogy">
        <div className="largesblog" data-aos="fade-up">
          <span className="company-news">Company News</span>
          {blogus.map((blogus) => (
            <div>
              <img className="imgblogu" src={blogus.image} />

              <div className="large-blog-title">{blogus.title}</div>
              <div className="large-blog-describtion">{blogus.desc}</div>
            </div>
          ))}
          <div className="datecurren">
            <FormattedDate /> 3 minute ago{" "}
          </div>
          <div className="Read-mores">Read-More</div>
        </div>

        {blogu.map((blogu) => (
          <div className="grid-containeris">
            <div className="itemik" data-aos="fade-right">
              <img className="senior" src={blogu.images} />
              <div className="large-blog-title">{blogu.titles}</div>
              <div className="large-blog-describtion">{blogu.descs}</div>
              <div className="large-blog-autore">{blogu.autore}</div>
              <div className="Read-moress">View Details</div>
            </div>

            <div className="itemik" data-aos="fade-left">
              <img className="senior" src={blogu.images} />

              <div className="large-blog-title">{blogu.titles}</div>
              <div className="large-blog-describtion">{blogu.descs}</div>
              <div className="large-blog-autore">{blogu.autore}</div>
              <div className="Read-moress">View Details</div>
            </div>

            <div className="itemik" data-aos="fade-right">
              <img className="senior" src={blogu.images} />
              <div className="large-blog-title">{blogu.titles}</div>
              <div className="large-blog-describtion">{blogu.descs}</div>
              <div className="large-blog-autore">{blogu.autore}</div>
              <div className="Read-moress">View Details</div>
            </div>

            <div className="itemik" data-aos="fade-left">
              <img className="senior" src={blogu.images} />

              <div className="large-blog-title">{blogu.titles}</div>
              <div className="large-blog-describtion">{blogu.descs}</div>
              <div className="large-blog-autore">{blogu.autore}</div>
              <div className="Read-moress">View Details</div>
            </div>
          </div>
        ))}
        <button className="See-More shortwidth">See-more</button>
        <Demo4 />
        <Beforelastdivone />
        <div className="goes-in">
          <CarouselContainer />
        </div>
        <div className="lastdiv">
          <Lastdivone />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BlogPage;
