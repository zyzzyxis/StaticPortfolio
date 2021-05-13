import { Accordion, Card, Container } from "react-bootstrap"

const Projects = () => {
  return (
    <>
      <Container>
        <br />
        <p>Page currently under construction, please enjoy the basic content provided. Check back soon for a more exciting Projects page!</p>
        <h1>PROJECTS</h1>
      <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Current Projects
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                Streaks is a web application that allows friends to track competitions in a casual and fun way. Please take a look at our completed site <a target="_blank" href="http://streaks-app.herokuapp.com/">here</a>. The team I worked on this project with are continuing to improve functionality and usability.
               <p>This portfolio website will continue to have features added and improved upon. </p>
               </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Future Projects
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <p>Tarot for the traveler</p>
                <p>A custom realtor site (coming soon)</p>
                <p>D&D tracking site</p>
                  
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    </>
  )
}

export default Projects