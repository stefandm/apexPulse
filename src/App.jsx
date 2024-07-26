import React from 'react'
import Nav from './components/header/Nav'
import Membership from './components/Membership'
import Coaches from './components/Coaches'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero'
import Trial from './components/Trial'


function App() {

  return (
    <>
     <Nav/>
     <Hero/>
     <Membership/>
     <Trial/>
     <Coaches/>
     <Footer/>
    </>
  )
}

export default App
