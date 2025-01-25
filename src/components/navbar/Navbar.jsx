import React, {useState} from 'react'
import './NavbarStyles.css'
import {Link} from 'react-scroll'
import {FaBars, FaTimes, FaLinkedin, FaGithub} from 'react-icons/fa'
import { FaRegFilePdf } from "react-icons/fa6"
import resume from "../../assets/CurriculumDaviPaiva.pdf"

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [slide, setSlide] = useState(false)

    const handleNav = () => {
        setNav(!nav)
        setSlide(!slide)
    }

    const handleClose = () => {
        setNav(!nav)
    }

    return (
        <div className='navbar'>
            
            <div className="container">

                <div className="space"></div>

                <ul className={nav ? "navmenu active" : "navmenu"}>
                    <li><a href="/"><Link onClick={handleClose} activeClass='active' to='about' spy={true} smooth={true} duration={500}>About</Link></a></li>
                    <li><a href="/"><Link onClick={handleClose} activeClass='active' to='projects' spy={true} smooth={true} duration={500} offset={-60}>Projects</Link></a></li>
                    <li><a href="/"><Link onClick={handleClose} activeClass='active' to='contact' spy={true} smooth={true} duration={500} offset={-60}>Contact</Link></a></li>
                    <div className="icons">
                        <a className='hide' href='https://github.com/Davi-Paiva' target='_blank' rel="noreferrer" ><FaGithub color='black' size={22}/></a>
                        <a className='hide' href="https://www.linkedin.com/in/davi-paiva-356449254/" target="_blank" rel="noreferrer"><FaLinkedin size={25} color='#0b65c2'/></a>
                        <a className='hide' href={resume} target='_blank' rel="noreferrer" ><FaRegFilePdf color='black' size={22}/></a>
                        
                    </div>
                </ul>


                <ul className='links'>
                    <li className='github'><a href='https://github.com/Davi-Paiva' target='_blank' rel="noreferrer" ><FaGithub color='black' size={25}/></a></li>
                    <li className='linkedin'><a href="https://www.linkedin.com/in/davi-paiva-356449254/" target="_blank" rel="noreferrer"><FaLinkedin size={25} color='#0b65c2'/></a></li>
                    <li className='pdf'><a href={resume} target='_blank' rel="noreferrer"><FaRegFilePdf color='black' size={22}/></a></li>
                </ul>
                
              

                <div className="hamburguer" onClick={handleNav}>
                    {nav ? (<FaTimes size={20}/>) : (<FaBars size={20}/>)}
                </div>

            </div>
        </div>
    )
}

export default Navbar