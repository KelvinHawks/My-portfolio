import React from 'react'
import './landing.css'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className='container-div'>
        <img src="./images/edited.jpg" alt="profile"/>
        <h1>I am Kelvin</h1>
        <div className='sub-title'><p>Web developer</p><span className='span'>|</span></div>
        <div className="social-links">
          <Link to='https://t.co/PLcCPwLwg4' target='blank'><i className="fa-brands fa-square-github"></i></Link>
          <Link to='https://twitter.com/KelvinHawks35' target='blank'><i className="fa-brands fa-square-twitter"></i></Link>
          <Link to='https://wa.me/797035367' target='blank'><i className="fa-brands fa-square-whatsapp"></i></Link>
          <Link to='https://t.co/aRQNT9c6yf' target='blank'><i className="fa-brands fa-linkedin"></i></Link>
        </div>
    </div>
  )
}

export default Landing