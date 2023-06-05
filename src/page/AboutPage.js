import React from "react";
import "./aboutPage.css";
import WorkingImg from "../assert/aboutPage.jpg";

const AboutPage = () => {
  return (
    <div className="AboutPage">
      <div className="maskAboutPage">
        <img className="into-imgAboutPage" src={WorkingImg} atl="WorkingPage" />
      </div>
      <div className="aboutContainer">
        <div className="aboutContainerLeft">
          <h1>Duc Trung(Adam)</h1>
          <h2>Front-end Developer &</h2>
          <h2>Embedded System Developer</h2>
          <br />
          <br />
          <div className="selfIntroduction">
            <h4>
              I gratuated recently from VAMK(Vaasa of Applied Science). I am
              majoring in Embedded Systems. I am driven student leveraging
              studies in Embedded System who seeks real-world experience as
              Embedded System Developer.
            </h4>
            <br />
            <h4>
              I am currently working at University of Vaasa as Researcher
              Assistant in severals projects.I developed VR construction
              training simulation for the projects. Moreover, I am still
              improving myself by widing my area to full-stack developer to be
              my second career.
            </h4>
            <br />
            <h4>
              I am interested in many fields and my passion is to be the guy who
              loves to sovle all problems.
            </h4>
            <br style={{ fontSize: "24%" }} />
            <h4>
              Ahhh! One more thing ... I do really enjoy chatting about my
              stuffs so don't hesitate to contact me here
            </h4>
          </div>
        </div>
        <div className="aboutContainerRight"></div>
      </div>
    </div>
  );
};

export default AboutPage;
