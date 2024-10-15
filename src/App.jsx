import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Title from './components/Title'
import Programs from './components/Programs'
import About from './components/About'
import Campus from './components/campus'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import VideoPlayer from './components/VideoPlayer'

const App = () => {
  const [playState,setPlayState] = useState(false);
  
  return (
    <>
    <Navbar/>
     <Hero/>
     <div className="container">
      <Title subtitle="Our pragram" title="what we offer" />
      <Programs />
      <About setPlayState={setPlayState} />
      <Title subtitle="gallery" title="campus photos" />
      <Campus/>
      <Title subtitle="Testimonials" title="What Student Says" />
      <Testimonials/>
      <Title subtitle="Contact us" title="Get in Touch" />
      <Contact/>
      <Footer/>
     </div>
     <VideoPlayer playState={playState} setPlayState={setPlayState}  />
    </>
  )
}

export default App
