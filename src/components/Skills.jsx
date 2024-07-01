import React from "react";
import bootstap from "../img/bootstrap.svg";
import c from "../img/c.svg";
import cplusplus from "../img/cplusplus.svg";
import css from "../img/css.svg";
import git from "../img/git.svg";
import github from "../img/Github.svg";
import javascript from "../img/javascript.svg";
import mongodb from "../img/mongoDB.svg";
import nodejs from "../img/NodeJs.svg";
import postman from "../img/postman.svg";
import python from "../img/python.png";
import reactimg from "../img/react.svg";
import express from "../img/Express.png";
import htmlimg from "../img/html.jpeg";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="skills-wrapper">
          <div className="skills-content">
            <h1>Skills</h1>
            <h4>My Tech Stack</h4>
          </div>
          <div className="skills-wrapper2">
            <div className="skills-images">
              <img src={bootstap} alt="bootstrap" />
              <img src={c} alt="bootstrap" />
              <img src={cplusplus} alt="bootstrap" />
              <img src={css} alt="bootstrap" />
              <img src={git} alt="bootstrap" />
              <img src={github} alt="bootstrap" />
              <img src={javascript} alt="bootstrap" />
              <img src={mongodb} alt="bootstrap" />
              <img src={nodejs} alt="bootstrap" />
              <img src={postman} alt="bootstrap" />
              <img src={python} alt="bootstrap" />
              <img src={reactimg} alt="bootstrap" />
              <img src={express} alt="bootstrap" />
              <img src={htmlimg} alt="bootstrap" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
