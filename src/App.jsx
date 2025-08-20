import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import Portfolio from './pages/Portfolio'
import Contactus from './pages/Contactus'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About  />
      <Services />
      <Pricing />
      <Portfolio />
      <Contactus />
      <Footer />
    </div>
  )
}

export default App