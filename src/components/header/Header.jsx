import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/images/cesardiego.png'
import HeaderSocials from './HeaderSocials'

import '../../index'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá, seja bem vindo, eu sou</h5>
        <h1>César Diego Anovich</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

    
        {/*<div className="me">
          <img src={ME} alt="me" />
         </div>*/}

        <a href="#contact" className='scroll__down' >Rolar para baixo</a>
      </div>
    </header>
  )
}

export default Header