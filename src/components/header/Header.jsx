import Typed from "react-typed";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerWrapper">
        <div className="headerText">
          <h4 className="hello">Hello There I'm</h4>
          <h3 className="name">MR. SHARIF</h3>
          <h2 className="designation">
            <Typed
              strings={[
                "web designer!",
                "react developer!",
                "nodeJS developer!",
              ]}
              showCursor={true}
              typeSpeed={150}
              backSpeed={150}
              startDelay={150}
              backDelay={150}
              loop={true}
            />
          </h2>
          <div className="headerBtns">
            <button className="resumeBtn">
              <a href="/skills">Resume</a>
            </button>
            <button className="hireBtn">
              <a href="/contact-us">Hire Me</a>
            </button>
          </div>
        </div>
        <div className="headerImg">
          <img src="images/banner3.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
