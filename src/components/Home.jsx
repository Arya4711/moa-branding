import React from "react";
import "../App.css";
import navLogo from "../assets/nav_logo.png";

function App() {
  window.onload = function () {
    document.querySelectorAll(".shift-in").forEach((element) => {
      element.classList.add("loaded");
    });
    var logoHeight = document.querySelector("nav img").height;
    document.getElementById("navbar").style.marginTop = logoHeight + "px";
  };

  return (
    <>
      <div className="home">
        <nav>
          <div>
            <a href="Home">
              <img src={navLogo} alt="Home" className="nav-logo" />
            </a>
          </div>
          <div>
            <a href="#">Services</a>
            <a href="#">Portfolio</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#" className="rectangle-link">
              START YOUR BRAND
            </a>
          </div>
        </nav>

        <div className="center-text">
          <div className="big-text shift-in blue-text">Your vision,</div>
          <div className="big-text shift-in">our creation.</div>
          <div className="med-text shift-in">
            <div>We create high quality branding plans and websites</div>
            <div>at an affordable price.</div>
          </div>
          <div className="split-links shift-in buttons">
            <a href="#" className="rectangle-link">
              BOOK A MEETING
            </a>
            <a href="#" className="rectangle-link">
              GET A FREE QUOTE
            </a>
          </div>
        </div>

        <video id="laptop-video" className="shift-in" autoPlay loop>
          <source src="laptop-turning.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default App;
