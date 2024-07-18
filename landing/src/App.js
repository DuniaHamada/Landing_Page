import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Undraw from './Components/Undraw/Undraw'
import Intro from './Components/Intro/Intro'
import IntroCopy from './Components/IntroCopy/IntroCopy'
import Cta from './Components/Cta/Cta'
import Pricing from './Components/Pricing/Pricing';
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Undraw/>
      <Intro/>
      <IntroCopy/>
      <Cta/>
      <Pricing />
      <Footer/>
    </div>
  )
}

export default App
