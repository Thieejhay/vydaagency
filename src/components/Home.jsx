import React from 'react'
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
import Team from './Team';
import Client from './Client';
import Copyright from './Copyright';

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
        <Copyright />
    </div>
  )
}

export default Home;