import React from 'react'
import jay from '../images/SPF_8378.jpg'
import '../style/about.css'
import SkillsSection from './SkillsSection'

const About = () => {
  return (
    <div>
      <div class="st-section-heading st-style1 aos-init aos-animate" data-aos="fade-up" data-aos-duration="800">
        <h4 class="st-section-heading-title">About Me</h4>
        <h2 class="st-section-heading-subtitle">About Me</h2>
      </div>
      <div className="profile-card">
        <div className="profile-card__image">
          <img src={jay} alt="Edward Davis" />
        </div>
        <div className="profile-card__content">
          <h1>Hi There! I'm Jay Jarsaniya</h1>
          <h2>Web Developer</h2>
          <p>
          I am a fresher full-stack web developer with knowledge of front-end and back-end development. I am passionate about coding and creating user-friendly websites and applications. I am eager to start my career in the IT field and grow my skills.
          </p>
          <ul>
            <li><span>Birthday</span> <span>:</span> August 20, 2002</li>
            <li><span>Phone</span> <span>:</span> +91 9737529450</li>
            <li><span>Email</span> <span>:</span> jayjarsaniya006.com</li>
            <li><span>From</span> <span>:</span> Junagadh, Gujrat - 362215</li>
            <li><span>Language</span> <span>:</span> English, Gujrati, Hindi</li>
            <li><span>Freelance</span> <span>:</span> Available</li>
          </ul>
        </div>
      </div>
      <div class="st-section-heading st-style1 aos-init aos-animate skill-heading" data-aos="fade-up" data-aos-duration="800">
        <h4 class="st-section-heading-title">Skills</h4>
      </div>
      <SkillsSection/>
    </div>
  )
}

export default About