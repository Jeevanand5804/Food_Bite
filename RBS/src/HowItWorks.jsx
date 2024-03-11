import React from "react";
import st1 from "./images/step-1.jpg";
import st2 from "./images/step-2.jpg";
import st3 from "./images/step-3.jpg";
import st4 from "./images/step-4.jpg";
// import Pulse from "react-reveal/Pulse";

function HowItWorks() {
  return (
    <div className="step-container fb">
      <h1 className="heading">
        how it <span>works</span>
      </h1>
      <div className="steps sec">
        {/* <Pulse delay={500}> */}
        <div className="box">
          <img src={st1} alt="" />
          <h3>choose your favorite food</h3>
        </div>
        {/* </Pulse> */}

        {/* <Pulse delay={700}> */}
        <div className="box">
          <img src={st2} alt="" />
          <h3>free and fast delivery</h3>
        </div>
        {/* </Pulse> */}

        {/* <Pulse delay={900}> */}
        <div className="box">
          <img src={st3} alt="" />
          <h3>easy payments methods</h3>
        </div>
        {/* </Pulse> */}

        {/* <Pulse delay={1100}> */}
        <div className="box">
          <img src={st4} alt="" />
          <h3>and finally, enjoy your food</h3>
        </div>
        {/* </Pulse> */}
      </div>
    </div>
  );
}

export default HowItWorks;
