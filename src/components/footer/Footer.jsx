import React from 'react'
import './footer.css'

import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>DIHCODIGO</a>

      <ul className='permalinks'>
          <li><a href="#">HOME</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/cesar-diego-anovich/" target="_blank"><BsLinkedin className="footer__socials-icon"/></a>
        <a href="https://github.com/DihCodigo" target="_blank"><BsGithub className="footer__socials-icon"/></a>
        
      </div>

      <div className="footer__copyright">
        <small>&copy;DIHCODIGO. Todos os direitos reservados!</small>
      </div>
    </footer>
  )
}

export default Footer