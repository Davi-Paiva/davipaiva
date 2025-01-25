import React from 'react'
import './ContactStyles.css'
import resume from "../../assets/CurriculumDaviPaiva.pdf"

const Contact = () => {
  return (
    <div className="contact">
        <div className="contact-container">
            <h3>Contact</h3>

            <div className="information">
              <div className="left">
                <div>
                  <h2>Email:</h2>
                  <p className='email'>davimattospaiva@gmail.com</p>
                </div>
                <div>
                  <h2>LinkedIn:</h2>
                  <p><a href="https://www.linkedin.com/in/davi-paiva-356449254/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/davi-paiva-356449254/</a></p>
                </div>
              </div>
              <div className="right">
                <div>
                  <h2>Github:</h2>
                  <p><a href='https://github.com/Davi-Paiva' target='_blank' rel="noreferrer" >https://github.com/Davi-Paiva</a></p>
                </div>
                <div>
                  <h2>Download my Resume:</h2>
                  <p><a href={resume} download='Davi_Paiva_Resume'>Click here to download</a></p>
                </div>
              </div>

            </div>
            
        </div>
    </div>
  )
}

export default Contact