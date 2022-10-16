/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './portfolio.css'

import IMG1 from '../../assets/images/api.png'
import IMG2 from '../../assets/images/jvelha.PNG'
import IMG3 from '../../assets/images/pminas.png'
import IMG4 from '../../assets/images/proj4.JPG'

const data = [

  {
    id: 1,
    image: IMG1,
    title: 'API Restful Node',
    github: 'https://github.com/DihCodigo/Api_restful',
    demo: ''
  },
  {
    id: 2,
    image: IMG2,
    title: 'Jogo da Velha',
    github: 'https://github.com/DihCodigo/meusProjetos/tree/master/jogoVelha',
    demo: 'https://dihcodigo.github.io/meusProjetos/jogoVelha/index.html'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Landing Page',
    github: 'https://github.com/DihCodigo/meusProjetos/tree/master/PrazerMinas',
    demo: 'https://dihcodigo.github.io/meusProjetos/PrazerMinas/index.html'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Site de educação/escola',
    github: 'https://github.com/DihCodigo/DHFrontE_l/tree/master/DHAula20%20-%20CheckPoint2',
    demo: 'https://dihcodigo.github.io/DHFrontE_l/DHAula20%20-%20CheckPoint2/index.html'
  }
]

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h5>Alguns recentes</h5>
      <h2>Projetos</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noreferrer">GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer" >Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>

    </section>
  )
}

export default Portfolio