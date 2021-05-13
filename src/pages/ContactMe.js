import React from 'react';
import { Button, Form , Container} from "react-bootstrap"
import emailjs from 'emailjs-com';



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
     <p>I can be contacted via <a target="_blank" href="https://www.linkedin.com/in/erin-zimmerman/">linkedin</a> currently.</p>
     
    </div>
      <Container>
        <Form onSubmit={sendEmail}>
          <Form.Group>
            <Form.Control placeholder='Your Name' name='name' />
          </Form.Group>
          <Form.Group>
            <Form.Control placeholder='Your Email Address' name='email' />
          </Form.Group>
          <Form.Group>
            <Form.Control placeholder='Subject' name='subject' />
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
        {/* {emailSent && 
          <div style={{display: 'flex', justifyContent: 'center', marginTop: '1em'}}>
            <h5 style={{color: "green"}} >Email Sent!</h5>
          </div>
        } */}
        </Container>
      </>
    
  )
}

export default ContactMe
