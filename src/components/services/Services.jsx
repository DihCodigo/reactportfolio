import React from 'react'
import './services.css'

import { BsClipboardCheck } from 'react-icons/bs'

const Services = () => {
  return (
    <section id="services">
      <h5>Quais serviços</h5>
      <h2>Ofereço</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Como Desenvolvedor Front-end</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsClipboardCheck className='service__list-icon' />
              <p>Habilidades com HTML, CSS e JavaScript.</p>
            </li>
            <li>
              <BsClipboardCheck className='service__list-icon' />
              <p>Noções de design e responsividade.</p>
            </li>
            <li>
              <BsClipboardCheck className='service__list-icon' />
              <p>Arquitetura de sites. </p>
            </li>
            <li>
              <BsClipboardCheck className='service__list-icon' />
              <p>Uso de framework como "Bootstrap". </p>
            </li>
          </ul>
        </article>
        {/* END OF  */}

        <article className='service'>
          <div className="service__head">
            <h3>Como Desenvolvedor Back-end</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsClipboardCheck className='service__list-icon' />
              <p>linguagens de programação avançadas como PHP, Java e SQL.</p>
            </li>
            <li>
              <BsClipboardCheck className='service__list-icon' />
              <p>Codificar o banco de dados e o servidor.</p>
            </li>
            <li>
              <BsClipboardCheck className='service__list-icon' />
              <p>Conhecimento no framework laravel.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}


      </div>
    </section>
  )
}

export default Services