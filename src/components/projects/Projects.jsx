import React from 'react'
import './ProjectsStyles.css'
import Slider from './slider/Slider'


const Projects = () => {
  return (
    <div className="projects">
        <div className="containerpro">
            <h3>Projects</h3>
            <div className="carrousel">
              <Slider/>
            </div>
        </div>
    </div>
  )
}

export default Projects