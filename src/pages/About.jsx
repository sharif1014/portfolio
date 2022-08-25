import Typed from "react-typed";
//import Layout from "../components/Layout";
import "./about.css";
const About = () => {
  return (
    <div className="about">
      <div className="aboutContent">
        <h2 className="aboutHeading">About Me</h2>
        <div className="aboutWrapper">
          <div className="aboutImg">
            <img src="images/banner3.png" alt="" />
          </div>
          <div className="aboutText">
            <h2 className="aboutTitle">MR. SHARIF</h2>
            <h4 className="aboutSubtitle">
              <Typed
                strings={[
                  "web designer!",
                  "react developer!",
                  "nodeJS developer!",
                ]}
                showCursor={true}
                typeSpeed={100}
                backSpeed={100}
                startDelay={150}
                backDelay={150}
                loop={true}
              />
            </h4>
            <p className="aboutDesc">
              I am an experienced Full-Stack Developer having more than 2 years
              experience. I have worked in most of the technologies currently in
              the market. I am reliable,responsible,can work more than 40 hours
              in a week and available 24/7.I am a quick learner with excellent
              English communication skills. I can give you very competitive
              rates if you have full-time work opportunities for me.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
