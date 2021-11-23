import React from "react";
import Links from "./Links";
function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio !== "" && props.bio !== undefined ? <p>{props.bio}</p>: console.log("failed")}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links linkedin = {props.linked.linkedin} github = {props.linked.github}/>
    </div>
  );
}

export default About;
