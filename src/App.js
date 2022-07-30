import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Release from "./components/Release";
import ScrollToTop from "./components/ScrollToTop";
import SuperRare from "./components/SuperRare";
import scrollreveal from "scrollreveal";
import "./sass/index.scss";
import Footer from "./components/Footer";
import "./sass/components/_footer.scss"
import NavMenu from "./components/NavMenu";
function App() {

  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `
        nav,
        .home,
        .free,
        .super-rare,
        .releases,
        .like,
        .signup,
        .ScrollToTop,
        .footer
    `,
        {
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);
  window.setTimeout(() => {
    const home = document.getElementsByClassName("home");
    home[0].style.transform = "none";
    const nav = document.getElementsByTagName("nav");
    nav[0].style.transform = "none";
  }, );
  return (
    <div className="app-container background-container">
      
         
       <div className='twinkling'></div>
       <div className='stars'></div>
      
      <NavMenu/>
      <ScrollToTop />
      <Navbar/>
      <Home />
      <SuperRare />
      <Release />
      <Footer/>
    </div>
  );
}

export default App;
