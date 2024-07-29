import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>I am going to ace this course for the next 4 remaining  months</p>
    <img src={image} alt="I made this" />
  </div>;
}

export default About;
