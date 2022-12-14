import Header from "../../components/header/Header";
import About from "../about/About";
import Contact from "../contact/Contact";
import Services from "../services/Services";
import Skills from "../skills/Skills";
import "./home.css";

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
