import React from "react";
import p1 from "./images/p-1.jpg";
import p2 from "./images/p-2.jpg";
import p3 from "./images/p-3.jpg";
import p4 from "./images/p-4.jpg";
import p5 from "./images/p-5.jpg";
import p6 from "./images/p-6.jpg";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
// import Fade from "react-reveal/Fade";
// import Tada from "react-reveal/Tada";

function PopularFoods() {
  return (
    <div className="popular fb sec" id="popular">
      {/* <Tada> */}
      <h1 className="heading">
        most <span>popular</span> foods
      </h1>
      {/* </Tada> */}
      <div className="box-container">
        {/* <Fade bottom delay={500}> */}

        <div className="box">
          <span className="price"> $5 - $20 </span>
          <img src={p1} alt="" />
          <h3>tasty burger</h3>
          <div className="stars">
            <StarIcon className="ms" />
            <StarIcon className="ms" />
            <StarIcon className="ms" />
            <StarIcon className="ms" />
            <StarBorderIcon className="ms" />
          </div>
          <a href="#order" className="btn">
            order now
          </a>
        </div>
        {/* </Fade> */}
        {/* <Fade bottom delay={600}> */}

        <div className="box">
          <span className="price"> $5 - $20 </span>
          <img src={p2} alt="" />
          <h3>tasty cakes</h3>
          <div className="stars">
            <StarIcon className="ms" />
            <StarIcon className="ms" />
            <StarIcon className="ms" />
            <StarIcon className="ms" />
            <StarBorderIcon className="ms" />
          </div>
          <a href="#order" className="btn">
            order now
          </a>
        </div>
        {/* </Fade> */}
        {/* <Fade bottom delay={700}> */}

        <div className="box">
          <span className="price"> $5 - $20 </span>
          <img src={p3} alt="" />
          <h3>tasty sweets</h3>
          <div className="stars">
            <StarIcon className="ms" />
            <StarIcon className="ms" />
            <StarIcon className="ms" />
            <StarIcon className="ms" />
            <StarBorderIcon className="ms" />
          </div>
          <a href="#order" className="btn">
            order now
          </a>
        </div>
        {/* </Fade> */}
        {/* <Fade bottom delay={800}> */}

        <div className="box">
          <span className="price"> $5 - $20 </span>
          <img src={p4} alt="" />
          <h3>tasty cupcakes</h3>
          <div className="stars">
            <StarIcon className="ms" />
            <StarIcon className="ms" />
            <StarIcon className="ms" />
            <StarIcon className="ms" />
            <StarBorderIcon className="ms" />
          </div>
          <a href="#order" className="btn">
            order now
          </a>
        </div>
        {/* </Fade> */}
        {/* <Fade bottom delay={900}> */}

        <div className="box">
          <span className="price"> $5 - $20 </span>
          <img src={p5} alt="" />
          <h3>cold drinks</h3>
          <div className="stars">
            <StarIcon className="ms" />
            <StarIcon className="ms" />
            <StarIcon className="ms" />
            <StarIcon className="ms" />
            <StarBorderIcon className="ms" />
          </div>
          <a href="#order" className="btn">
            order now
          </a>
        </div>
        {/* </Fade> */}
        {/* <Fade bottom delay={900}> */}

        <div className="box">
          <span className="price"> $5 - $20 </span>
          <img src={p6} alt="" />
          <h3>cold ice-cream</h3>
          <div className="stars">
            <StarIcon className="ms" />
            <StarIcon className="ms" />
            <StarIcon className="ms" />
            <StarIcon className="ms" />
            <StarBorderIcon className="ms" />
          </div>
          <a href="#order" className="btn">
            order now
          </a>
        </div>
        {/* </Fade> */}
      </div>
    </div>
  );
}

export default PopularFoods;
