import React from "react";
import Links from './Links'

function renderP(props) {
  if(props.bio === '') {
    return null
  } else if(!props.bio) {
    return null
  } else if(props.bio === props.bio) {
    return <p>{props.bio}</p>
  }
}

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {renderP(props)}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin}/>
    </div>
  );
}

export default About;

