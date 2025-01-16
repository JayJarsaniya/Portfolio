import React from 'react'
import '../style/home.css'
import jay from '../images/SPF_8378.jpg'

const Home = () => {
  return (
    <div className='home-main'>
      <div className="home-content">
        <div className="text">
          <p>Hello, I'm</p>
          <h1> Jay<br />Jarsaniya</h1>
          <h4>Web Developer</h4>
          <div className="icon">
            <div className='sub-icon'>
              <a href="https://www.instagram.com/jay_jarsaniya?igsh=eWV2bWtzd3llOW11" target='_blank'>
                <i class="fa-brands fa-instagram"></i>
                <p>Instagram</p>
              </a>
            </div>
            <div className='sub-icon'>
              <a href="https://www.facebook.com/share/15paCxW9bT/" target='_blank'>
                <i class="fa-brands fa-facebook-f"></i>
                <p>Facebook</p>
              </a>
            </div>
            <div className='sub-icon'>
              <a href="https://www.linkedin.com/in/jarsaniya-jay-901ba22aa" target='_blank'>
                <i class="fa-brands fa-linkedin-in"></i>
                <p>Linkedin</p>
              </a>
            </div>
            <div className='sub-icon'>
              <a href="https://github.com/JayJarsaniya" target='_blank'>
              <i class="fa-brands fa-github"></i>
                <p>Github</p>
              </a>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={jay} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home