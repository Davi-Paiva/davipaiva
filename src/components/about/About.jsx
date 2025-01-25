import React from 'react'
import profile from '../../assets/profile.JPG'
import './AboutStyles.css'
import brazil from'../../assets/Brazil.png'
import spain from'../../assets/Spain.png'
import catalonia from'../../assets/Catalonia.png'
import usa from'../../assets/USA.png'
import upf from'../../assets/UPF.webp'
import { FaReact,FaPython,FaHtml5,FaCss3,FaFigma } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { DiDjango } from "react-icons/di"
import { SiAdobeaftereffects } from "react-icons/si"

const About = () => {
  return (
    <div className='about'>
        
        <div className="containerabout">
            <h3 className='name'>Davi Paiva</h3>
            <h2 className='subheading'><FaLocationDot size={19} className='icon' color='red'/><p>Barcelona, Spain</p></h2>
            
            <div className="hero">
                <img className='me' src={profile} alt=''/>
                <ul className="info">
                    <ul>
                        <li><h2>Computer Engeneering Student</h2></li>
                        <li><img className='upf' src={upf} alt=''/></li>
                        <li><h2 className='skills'>Skills:</h2></li>
                        <li><FaPython className='skill' size={40}/><FaHtml5 className='skill' size={40}/><FaCss3 className='skill' size={40}/><FaReact className='skill' size={40}/><DiDjango className='skill' size={45}/><FaFigma className='skill' size={35}/><SiAdobeaftereffects className='skill' size={40}/></li>

                        <ul className='langlist'>
                            <li><h2 className='title'>Languages:</h2></li>
                            <ul className='languages'>
                                <li><img className='flag' src={usa} alt=''/> <p>English</p></li>
                                <li><img className='flag' src={spain} alt=''/> <p>Spanish</p></li>
                                <li><img className='flag' src={brazil} alt=''/> <p>Portuguese</p></li>
                                <li><img className='flag' src={catalonia} alt=''/> <p>Catalan</p></li>
                            </ul>
                        </ul>
                    </ul>
                </ul>
            </div>

            <ul className='langlist-hide'>
                <li><h2 className='title'>Languages:</h2></li>
                <ul className='languages'>
                    <li><img className='flag' src={usa} alt=''/> <p>English</p></li>
                    <li><img className='flag' src={spain} alt=''/> <p>Spanish</p></li>
                    <li><img className='flag' src={brazil} alt=''/> <p>Portuguese</p></li>
                    <li><img className='flag' src={catalonia} alt=''/> <p>Catalan</p></li>
                </ul>
            </ul>
            

            <div className="text">
                <h2>About</h2>
                <p>My journey in programming began at the age of 13 when I approached my father, a remote-working programmer, with a curiosity to understand what was displayed on his screen. Since then, I have acquired and honed my skills in HTML, CSS, Python, and Machine Learning. Additionally, I have utilized libraries such as ReactJS and Django in personal projects.</p>
                <p>Throughout my various personal projects, I have demonstrated a keen ability for rapid learning, and in the realm of sports, I have showcased strong teamwork skills. I am currently seeking a position that will allow me to combine my studies with an environment that fosters learning and mentorship from experienced programmers.</p>
            </div>

        </div>
    </div>
  )
}

export default About