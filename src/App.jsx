import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Title from './components/Title'
import Programs from './components/Programs'
import About from './components/About'

const App = () => {
  return (
    <>
    <Navbar/>
     <Hero/>
     <div className="container">
      <Title subtitle="Our pragram" title="what we offer" />
      <Programs />
      <About />
     </div>
    </>
  )
}

export default App
