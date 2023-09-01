import React from 'react'
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
import Team from './Team';
import Client from './Client';

const Home = () => {
  return (
    <div className=' font-sans'>
        <Hero />
        <About />
        <Services />
        <Team />
        <Client />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home;