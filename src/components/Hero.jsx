import React from 'react'
import logo from '../assets/Logo.jpg'
import img1 from '../assets/compressed/sparring2.jpg'
import img2 from '../assets/compressed/sparring3.jpg'


const Hero = () => {
  return (
    <div id='hero' className='pt-[90px] h-screen flex'>
        <img className=' object-cover  hidden md:block w-[33.3vw]' src={img1} alt='sparring'/>  
        
        <div className='w-[100vw] md:w-[33.3vw] flex flex-col items-center  justify-center  my-[2rem]'>
          <img className=' m-3 pointer-events-none select-none'  src={logo} alt='logo'  />
            
            <a href='#membership'>Membership Plans</a>
            <a href='#trial'>Book a Trial Day</a>
            <a href='#coaches' className='md:hidden'>Meet the Coaches</a>
            <a href='#about' className='md:hidden'>Address & Contact</a>
        </div>
       
        <img className=' object-cover hidden md:block w-[33.3vw]' src={img2} alt='sparring'/>
    </div>
  )
}

export default Hero