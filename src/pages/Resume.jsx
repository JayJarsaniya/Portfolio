import React from 'react'
import '../style/resume.css'

const Resume = () => {
  const educationData = [
    {
      degree: "Full Stack Web Developer",
      year: "Running",
      university: "Red And White Multimedia Education",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.",
    },
    {
      degree: "Bachelor of Commerce",
      year: "2020 - 2023",
      university: "Saurashtra University",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.",
    },
    {
      degree: "HSC",
      year: "2019-2020",
      university: "Alpha Vidhya Sankul",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.",
    },
  ];
  return (
    <div>
      <div class="st-section-heading st-style1 aos-init aos-animate" data-aos="fade-up" data-aos-duration="800">
        <h4 class="st-section-heading-title">Resume</h4>
        <h2 class="st-section-heading-subtitle">Resume</h2>
      </div>
      <div className="education-container">
        <div className="edu-titlt-main">
          <div><img src="https://devis-react.vercel.app/images/icon/resume-icon1.png" alt="" /></div>
          <h1 className="education-title">Education</h1>
        </div>
        <div className="timeline">
          {educationData.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-icon"></div>
              <div className="timeline-content">
                <h3 className="degree">{item.degree}</h3>
                <p className="year">{item.year}</p>
                <p className="university">{item.university}</p>
                <p className="description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Resume