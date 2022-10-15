import React from 'react'
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import Services from './components/services/Services';
//import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  return (
      <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </>
    )
}

export default App
