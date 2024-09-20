import React from 'react';

import Membership from './components/Membership/Membership'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Trial from './components/Trial'
import Header from './components/header/Header'
import Paragraph from './components/Paragraph'
import Schedule from './components/Schedule/Schedule'


function App() {

  return (
    <>
     <Header/>
     <Hero/>
     <Paragraph/>
     <Trial/>
     <Schedule/>
     <Membership/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
