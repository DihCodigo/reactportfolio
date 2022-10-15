import React from 'react'
import './testimonials.css'
import AVATR1 from '../../assets/images/avatar1.jpg'
import AVATR2 from '../../assets/images/avatar2.jpg'
import AVATR3 from '../../assets/images/avatar4.jpg'

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVATR1,
    name: 'Flavia',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nam fuga vel voluptas'
  },
  {
    avatar: AVATR2,
    name: 'Jorge',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nam fuga vel voluptas'
  },
  {
    avatar: AVATR3,
    name: 'Bel',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nam fuga vel voluptas'
  }
]


const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" pagination={true} modules={[Pagination]} spaceBetween={40}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="avatar 1" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials