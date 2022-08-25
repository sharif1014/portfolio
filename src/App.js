import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from "./pages/About";
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';
import Skills from './pages/Skills';

function App() {
  return (
    <>
      <Navbar/>
      <Router>
          <Routes>
          <Route exact path="/" element={ <Home />}>
           
          </Route>
          <Route path="/about" element={  <About />}>
           
          </Route>
          <Route path="/skills" element={ <Skills />}>
          </Route>
          <Route path="/services" element={ <Services />}>
          
          </Route>
          <Route path="/contact-us" element={ <Contact />}>
          </Route>
          </Routes>  
      </Router>
      <Footer/>
     </>
)}

export default App;
