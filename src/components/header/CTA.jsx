import React from 'react'
import CV from '../../assets/images/CesarDiegoAnovich.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} dowload target="_black" className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Contato</a>
    </div>
  )
}

export default CTA