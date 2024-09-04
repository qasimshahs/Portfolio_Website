import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import {Navbar, Hero, Experience, About, Tech, Works, Feedbacks, Contact, StarsCanvas} from './components';



const App = () => {
  return(
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-[#040720]">
    <Navbar/>
    <Hero/>
      </div>
      <About/>
      <Experience/>
      <Tech/>
      <Works/>
      <Feedbacks/>
      <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
      </div>
      </div>
      </BrowserRouter>

  )
}

export default App
