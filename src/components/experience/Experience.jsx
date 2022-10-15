import React from 'react'
import './experience.css'

import { GiCheckMark } from 'react-icons/gi'

const Experience = () => {
  return (
    <section id="experience">
      <h5>Minhas</h5>
      <h2>Habilidades</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>FrontEnd Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <GiCheckMark className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <div className='text-light bar__skill porcent90'></div>
              </div>
            </article>
            <article className='experience__details'>
              <GiCheckMark className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <div className='text-light bar__skill porcent90'></div>
              </div>
            </article>
            <article className='experience__details'>
              <GiCheckMark className='experience__details-icon' />
              <div>
                <h4>JAVASCRIPT</h4>
                <div className='text-light bar__skill porcent60'></div>
              </div>
            </article>
            <article className='experience__details'>
              <GiCheckMark className='experience__details-icon' />
              <div>
                <h4>BOOTSTRAP</h4>
                <div className='text-light bar__skill porcent80'></div>
              </div>
            </article>
            <article className='experience__details'>
              <GiCheckMark className='experience__details-icon' />
              <div>
                <h4>REACT</h4>
                <div className='text-light bar__skill porcent60'></div>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONT END */}

        <div className="experience__backend">
          <h3>BackEnd Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <GiCheckMark className='experience__details-icon' />
              <div>
                <h4>NODE JS</h4>
                <div className='text-light bar__skill porcent40'></div>
              </div>
            </article>
            <article className='experience__details'>
              <GiCheckMark className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
                <div className='text-light bar__skill porcent60'></div>
              </div>
            </article>
            <article className='experience__details'>
              <GiCheckMark className='experience__details-icon' />
              <div>
                <h4>PHP</h4>
                <div className='text-light bar__skill porcent70'></div>
              </div>
            </article>
            <article className='experience__details'>
              <GiCheckMark className='experience__details-icon' />
              <div>
                <h4>JAVA</h4>
                <div className='text-light bar__skill porcent70'></div>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience