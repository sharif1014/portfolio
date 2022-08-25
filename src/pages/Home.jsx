import Header from "./../components/Header";
import About from "./About";
import Contact from "./Contact";
import "./home.css";
import Services from "./Services";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className="home">
      <div className="homeWrapper">
        <Header />
        <About />
        <Skills />
        <Services />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
