import React from 'react'
import {SiRuby,SiReact,SiPostgresql,SiJavascript,SiRails,SiHtml5,SiCss3} from "react-icons/si";
import {Row, Col, Container} from 'react-bootstrap'




const About = () => {
  return (
    <div>
      <br />
      <br />
      <Container>
     <h1>About</h1> 
     <br />
      <Row>
        <Col>
        <h3>I am passionate about full-stack development. I have a passion for both learning and teaching. </h3>
        </Col>
        <Col>
          <h2>Skills</h2>
          <div className="skillsicons">
            <SiJavascript/><SiReact/><SiRuby/><SiRails/><SiPostgresql/><SiHtml5/><SiCss3/> 
          </div>
          </Col>
      </Row>
      <br />  <br />
     <a className="fancy-button" href="/">Home</a>
     </Container>
  </div>
  )
}

export default About