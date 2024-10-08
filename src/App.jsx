import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Title from './components/Title'
import Programs from './components/Programs'
import About from './components/About'
import Campus from './components/campus'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <>
    <Navbar/>
     <Hero/>
     <div className="container">
      <Title subtitle="Our pragram" title="what we offer" />
      <Programs />
      <About />
      <Title subtitle="gallery" title="campus photos" />
      <Campus/>
      <Title subtitle="Testimonials" title="What Student Says" />
      <Testimonials/>
     </div>
    </>
  )
}

export default App
