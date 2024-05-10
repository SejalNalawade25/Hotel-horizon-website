import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Gallery from './components/Gallery/Gallery'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import Rooms from './components/Rooms/Rooms'
import { useState } from 'react'

const App = () => {

   const [playState, setPlayState] =useState(false);


  return (
    <>
    <Navbar/>
    <Hero/>
    <div className="container">
      <Title subtitle='Our Services' title='What We Offer'/>
      <Programs />
      <About setPlayState={setPlayState}/>
      <Title subtitle='Gallary' title='To provide our guests with luxury, comfort & tailor-made service'/>
      <Gallery/>
      <Title subtitle='Available Rooms' title='Extraordinary Accomodations'/>
      <Rooms/>
      <Title subtitle='Testimonial' title='What Customer Says'/>
      <Testimonials/>
      <Title subtitle='Contact Us' title='Get in touch'/>
      <Contact/>
      <Footer/>
    </div>
    <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </>
  )
}

export default App
