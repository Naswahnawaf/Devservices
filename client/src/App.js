import React from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import Aboutus from "./components/Aboutus.jsx";
import Services from "./components/Services.jsx";
import Skills from "./components/Skills.jsx";
import Contactus from "./components/Contactus.jsx";
import Projects from "./components/Projects.jsx";

import "./style.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {

  return (
    <div className="App">
    <Navbar />
    <Home />
    <Aboutus />
    <Services />
    <Skills />
    <Projects />
    <Contactus />
    <Footer />
    </div>
  );
}

export default App;
