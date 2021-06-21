import { Container} from 'react-bootstrap'
import '../components/basicstyles.css'
import img from '../images/Erinavatar.png'
import {Row, Col} from 'react-bootstrap'

const Home = () => {
  return (
    <>
    <br/>
    <div className='homeicons'>
     
        <img src={img} alt="avatar" className="avatarimg"/>
        
        <h1 className="avatarimg"><br/> Hi! I'm Erin Zimmerman,<br/>
          A Full-Stack Web Developer</h1> 
       
   </div> 
   <br/>
   <br/>
   <div>
      
      <a className="fancy-button" href="/about">About</a>
      <a className="fancy-button"  href="/projects">Projects</a>
      <a className="fancy-button" href="/connect">Let's Connect!</a>
    </div>
    <br/>
    </>
  )

  
}

export default Home
