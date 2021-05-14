import { Button } from 'react-bootstrap'
import '../components/basicstyles.css'
const Home = () => {


  return (
    <>
    <div className="homepage">
      <br />
      <h1>I'm Erin Zimmerman,</h1>   
      <h1>A Full-Stack Web Developer</h1> 
      <a className="fancy-button" href="/about">About</a>
      <a className="fancy-button"  href="/projects">Projects</a>
      <a className="fancy-button" href="/connect">Let's Connect!</a>
    </div>
    </>
  )

  
}

export default Home
