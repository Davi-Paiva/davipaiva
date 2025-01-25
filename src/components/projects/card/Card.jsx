import React from 'react'
import './CardStyles.css'
import { BsBoxArrowInUpRight } from 'react-icons/bs';

const Card = (props) => {

  const {title} = props;
  const {photo} = props;
  const {button} = props;
  const {info} = props;
  const {url} = props;
  return (
    <div className='card'>
        <div className='container-card'>
          
          
          <img className={photo === 'none'? 'hide': 'card-img'} src={photo} alt='' />
          <h2 className='card-title'>{title}</h2>

          <p className='card-description'>{info}</p>
          <div className='button'>
            <a href={url} target='_blank' rel='noreferrer'><button className={button === 'none'? 'hide':'about-button'}><p>{button}</p><BsBoxArrowInUpRight className='card-icon' size='18'/></button></a>
          </div>
          
            
        </div>
    </div>
  )
}

export default Card