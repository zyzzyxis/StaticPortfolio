import React from 'react';
import { Button, Form , Container, Col} from "react-bootstrap"
import emailjs from 'emailjs-com';
import Footer from '../components/Footer';



const ContactMe = () => {
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oko4loo', 'template_9rcijy7', e.target, 'user_hLwloleE2fK82EDvUyMPj')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()  
  }

  return (
    <>
    <div>
      <br />
     <p>I can also be contacted via <a target="_blank"  rel="noreferrer" href="https://www.linkedin.com/in/erin-zimmerman/">linkedin</a> currently.</p>
     
    </div>
      <Container>
        <Form onSubmit={sendEmail}>
          <Form.Group>
            <Form.Row>
              <Col>
                <Form.Control placeholder="Name" name='name' />
              </Col>
              <Col>
                <Form.Control placeholder='Email' type='email' name='email' />
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group>
            <Form.Control placeholder='Email Subject' name='subject' />
          </Form.Group>
          <Form.Group>
            <Form.Control placeholder='Message'  rows={5} type='textarea' as='textarea' name='message' />
          </Form.Group>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Button type='submit' >
              Send
            </Button>
          </div>
        </Form>
        <Footer />
        </Container>
      </>
    
  )
}

export default ContactMe
