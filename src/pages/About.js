import React from 'react'
import {SiRuby,SiReact,SiPostgresql,SiJavascript,SiRails,SiHtml5,SiCss3} from "react-icons/si";
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <br />
     <h1>About</h1> 
     <h3>I am passionate about full-stack development. I have a passion for both learning and teaching. </h3>
     <SiJavascript/><SiReact/><SiRuby/><SiRails/><SiPostgresql/><SiHtml5/><SiCss3/> 
     <Footer />
  </div>
  )
}

export default About