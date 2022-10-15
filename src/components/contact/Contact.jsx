import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'

import { useRef } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dtvrepo', 'template_gn8rbo4', form.current, 'ne4DUSQsi5OEfq2ak')

    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <h5>Entrar em</h5>
      <h2>Contato</h2>

      <div className="container contact__container">
        <div className="contact__options">
            <article className="contact__option">
              <MdOutlineMail className='contact__option-icon'/>
              <h4>E-mail</h4>
              <h5>iddiegobis@gmail.com</h5>
              <a href="mailto:iddiegobis@gmai.com" target="_blank" rel="noreferrer">Enviar mensagem</a>
            </article>

            <article className="contact__option">
              <BsWhatsapp className='contact__option-icon' />
              <h4>WhatsApp</h4>
              <h5>+55(12)98221-1873</h5>
              <a href="https://api.whatsapp.com/send?phone=5512982211873" target="_blank" rel="noreferrer">Enviar mensagem</a>
            </article>
        </div>

        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='seu nome completo' required />
          <input type="email" name='email' placeholder='seu email' required />
          <textarea name="message" id="" cols="30" rows="7" placeholder='sua mensagem' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar Mensagem</button>
        </form>

      </div>
    </section>
  )
}

export default Contact