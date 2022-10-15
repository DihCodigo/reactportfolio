/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './portfolio.css'

import IMG1 from '../../assets/images/portfolio1.jpg'
import IMG2 from '../../assets/images/portfolio2.jpg'
import IMG3 from '../../assets/images/portfolio3.jpg'

const data = [

  {
    id: 1,
    image: IMG1,
    title: 'API Restful Node',
    github: 'https://github.com/DihCodigo',
    demo: ''
  },
  {
    id: 2,
    image: IMG2,
    title: 'Jogo da Velha',
    github: 'https://github.com/DihCodigo',
    demo: ''
  },
  {
    id: 3,
    image: IMG3,
    title: 'Landing Page',
    github: 'https://github.com/DihCodigo',
    demo: ''
  }
]

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

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