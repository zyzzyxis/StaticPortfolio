import React from 'react'
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {Link} from 'react-router-dom'
import './basicstyles.css'

const Footer = () => (
  <div className='wrap'>
    <div>
      <div className="icons">
        <Link href="https://github.com/zyzzyxis" target="_blank">
          <FaGithub style={{margin:'10px'}}/>  
        </Link>
        <Link href="https://www.linkedin.com/in/erin-zimmerman/" target="_blank">
          <FaLinkedin style={{margin:'10px'}}/>
        </Link>
      </div>
    </div>
  </div>
  )

  export default Footer