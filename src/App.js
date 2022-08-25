import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Skills from "./pages/skills/Skills";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/contact-us" element={<Contact />}></Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
