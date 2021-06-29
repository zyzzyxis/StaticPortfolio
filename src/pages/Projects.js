import { Accordion, Card, Container } from "react-bootstrap"


const Projects = () => {
  return (
    <>
      <Container>
        <br />
        <h1>PROJECTS</h1>

      <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Streaks
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                Streaks is a web application that allows friends to track competitions in a casual and fun way. Please take a look at our completed site <a target="_blank" rel="noreferrer" href="http://streaks-app.herokuapp.com/">here</a>.<p></p>
               <p>This website continues to have features added by the same team that originally created it. </p>
               </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Projects in Progress
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
              <p>Part Time Nonsense<a target="_blank" rel="noreferrer" href="https://parttimenonsense.netlify.app/">here</a>.</p>
               <p>This website is just a collection of fun silly projects I like to work on in my free time. </p>
               </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              Future Projects
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <p>Tarot for the Traveler</p>
                <p>A custom realtor site (coming soon)</p>
                <p>D&D tracking site</p>
                  
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <br/>
        <a className="fancy-button" href="/">Home</a>
      </Container>
    </>
    
  )
}

export default Projects