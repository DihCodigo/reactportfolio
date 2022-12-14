import React from 'react'
import './about.css'

import ME from '../../assets/images/foto-tag-cor.png'
import { FaAward } from 'react-icons/fa'

const about = () => {
  return (
    <section id="about">
      <h5>Um pouco</h5>
      <h2>Sobre mim</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="sobre imagem" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experiência</h5>
              <small>Professor - Proz NovoTec 6 Meses</small>
            </article>

            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experiência</h5>
              <small>Freelancer Fullstack 1 - ano</small>

            </article>
          </div>

          <p>
            Meu nome é César Diego, sou de Cruzeiro/SP, atualmente trabalho como freelancer e sou professor
            de
            TI, ensino Interface Web,
            Lógica
            de
            Programação, Java, PHP, Dispositivos Moveis entre outros, e como professor também sou um pequeno
            aprendiz
            querendo evoluir ainda mais.
            Sou estudante de tecnologia pela Digital House - Certifed
            Tech Developer.
          </p>

          <a href="#contact" className='btn btn-primary'>Contato</a>
        </div>

      </div>
    </section>
  )
}

export default about