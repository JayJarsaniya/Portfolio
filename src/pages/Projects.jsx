import React from 'react'
import '../style/projects.css'
import project1 from '../images/project-1.png'
import project2 from '../images/project-2.png'
import project3 from '../images/project-3.png'
import project4 from '../images/project-4.png'


const Projects = () => {
  return (
    <div>
      <div class="st-section-heading st-style1 aos-init aos-animate" data-aos="fade-up" data-aos-duration="800">
        <h4 class="st-section-heading-title">Projects</h4>
        <h2 class="st-section-heading-subtitle">Projects</h2>
      </div>
      <div className="project-main">
        <div className="project-sub">
          <a href="https://all-birds-taupe.vercel.app/" target='_blank'>
            <img src={project1} alt="" />
            <div className="project-title">
              <button>View Details</button>
            </div>
          </a>
        </div>
        <div className="project-sub">
        <a href="https://amazon-woad-two.vercel.app/" target='_blank'>
            <img src={project2} alt="" />
            <div className="project-title">
              <button>View Details</button>
            </div>
          </a>
        </div>
        <div className="project-sub">
        <a href="https://admin-panal-tau.vercel.app/" target='_blank'>
            <img src={project3} alt="" />
            <div className="project-title">
              <button>View Details</button>
            </div>
          </a>
        </div>
        <div className="project-sub">
        <a href="https://stern-import.vercel.app/" target='_blank'>
            <img src={project4} alt="" />
            <div className="project-title">
              <button>View Details</button>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects