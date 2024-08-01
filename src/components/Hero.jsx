import logo from '../assets/Logo.jpg'
import img1 from '../assets/compressed/sparring2.jpg'
import img2 from '../assets/compressed/sparring3.jpg'
import LinkTo from './header/LinkTo'

//     transition-all duration-200 ease-in-out hover:w-[40vw]

const Hero = () => {

// hi
 
  return (
    <div id='hero' className='h-screen flex '>
        <img className='relative object-cover  hidden md:block w-[33.3vw] ' src={img1} alt='sparring'/>         
        <div className='w-[100vw] md:w-[33.3vw] flex flex-col items-center  justify-start gap-2'>
          <img className='m-3 pointer-events-none select-none '  src={logo} alt='logo'  />
          <LinkTo to={'trial'} text={'Book a Trial Workout'} classNames={'font-oswald  text-4xl  font-medium border-b-4 text-white border-black px-20 py-2 rounded-xl bg-cyan-950 hover:scale-110 '}/>
          <LinkTo  to={'membership'} text={'Become a Member'}  classNames={'font-oswald text-4xl font-medium border-b-4 text-white border-black px-20 py-2 rounded-xl bg-cyan-950 mt-4 hover:scale-110'}/>
        </div>
       
        <img className=' object-cover hidden md:block w-[33.3vw] ' src={img2} alt='sparring' />
    </div>
  )
}

export default Hero