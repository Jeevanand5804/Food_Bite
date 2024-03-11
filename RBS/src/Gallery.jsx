import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import g1 from "./images/g-1.jpg";
import g2 from "./images/g-2.jpg";
import g3 from "./images/g-3.jpg";
import g4 from "./images/g-4.jpg";
import g5 from "./images/g-5.jpg";
import g6 from "./images/g-6.jpg";
import g7 from "./images/g-7.jpg";
import g8 from "./images/g-8.jpg";
import g9 from "./images/g-9.jpg";
// import Bounce from "react-reveal/Bounce";
// import Fade from "react-reveal/Fade";

function Gallery() {


  return (
    <div className="gallery fb sec" id="gallery">
  {/* <Bounce bottom > */}
      <h1 className="heading">
        our food <span>gallery</span>
      </h1>
      {/* </Bounce> */}

      <div className="box-container">
        {/* <Fade left> */}

        <div className="box">
          <img src={g1} alt="" />
          <div className="content">
            {/* <h3>tasty burger</h3>
            <p>..............</p> */}
            <a href="#order" className="btn">
              order now
            </a>
          </div>
        </div>
        {/* </Fade> */}
        {/* <Fade bottom> */}

        <div className="box">
          <img src={g2} alt="" />
          <div className="content">
            {/* <h3>tasty food</h3>
            <p>.................</p> */}
            <a href="#order" className="btn">
              order now
            </a>
          </div>
        </div>
        {/* </Fade> */}
        {/* <Fade right> */}

        <div className="box">
          <img src={g3} alt="" />
          <div className="content">
            {/* <h3>tasty food</h3>
            <p>...............</p> */}
            <a href="#order" className="btn">
              order now
            </a>
          </div>
        </div>
        {/* </Fade> */}
        {/* <Fade left> */}

        <div className="box">
          <img src={g4} alt="" />
          <div className="content">
            {/* <h3>tasty food</h3>
            <p>................</p> */}
            <a href="#order" className="btn">
              order now
            </a>
          </div>
        </div>
        {/* </Fade> */}
        {/* <Fade bottom> */}

        <div className="box">
          <img src={g5} alt="" />
          <div className="content">
            {/* <h3>tasty food</h3>
            <p>..............</p> */}
            <a href="#order" className="btn">
              order now
            </a>
          </div>
        </div>
        {/* </Fade> */}
        {/* <Fade right> */}

        <div className="box">
          <img src={g6} alt="" />
          <div className="content">
            {/* <h3>tasty food</h3>
            <p>...............</p> */}
            <a href="#order" className="btn">
              order now
            </a>
          </div>
        </div>
        {/* </Fade> */}
        {/* <Fade left> */}

        <div className="box">
          <img src={g7} alt="" />
          <div className="content">
            {/* <h3>tasty food</h3>
            <p>...............</p> */}
            <a href="#order" className="btn">
              order now
            </a>
          </div>
        </div>
        {/* </Fade> */}
        {/* <Fade bottom> */}

        <div className="box">
          <img src={g8} alt="" />
          <div className="content">
            {/* <h3>tasty food</h3>
            <p>................</p> */}
            <a href="#order" className="btn">
              order now
            </a>
          </div>
        </div>
        {/* </Fade> */}
        {/* <Fade right> */}

        <div className="box">
          <img src={g9} alt="" />
          <div className="content">
            {/* <h3>tasty food</h3>
            <p>................</p> */}
            <a href="#order" className="btn">
              order now
            </a>
          </div>
        </div>
        {/* </Fade> */}
      </div>
    </div>
  );
}

export default Gallery;