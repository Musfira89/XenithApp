import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/Home/NavBar";
import { Banner } from "./components/Home/Banner";
import { Skills } from "./components/Home/Skills";
import { Projects } from "./components/Projects/Projects";
import { Footer } from "./components/Home/Footer";
import AboutUs from './components/Home/AboutUs';
import Contactus from "./components/Contact us/Contactus";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <AboutUs/>
      <Projects />
      <Contactus/>
      <Footer />
    </div>
  );
}

export default App;
