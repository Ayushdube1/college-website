import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Title from './components/Title'

const App = () => {
  return (
    <>
    <Navbar/>
     <Hero/>
     <div className="container">
      <Title subtitle="Our pragram" title="what we offer" />
     </div>
    </>
  )
}

export default App
