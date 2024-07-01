import React from "react";
import Lottie from  "lottie-react";
import spaceBoy from "../Lottiefiles/spaceBoy.json"

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <Lottie 
          className="illustration" 
          animationData={spaceBoy} 
          loop={true} 
        />
          <div className="banner-content">
            <h4>Hello, I'm Rohan Marya</h4>
            <h3>Software Developer | Web Developer | CyberSecurity</h3>
            <a className="btn" target="blank" href="https://github.com/Marya45">
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
