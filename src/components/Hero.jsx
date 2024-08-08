import {ChevronsDown} from 'lucide-react'
import logo from '../assets/Logo.jpg'
import img1 from '../assets/compressed/sparring2.jpg'
import img2 from '../assets/compressed/sparring3.jpg'
import LinkTo from './header/LinkTo'
import {Link} from 'react-scroll'

//     transition-all duration-200 ease-in-out hover:w-[40vw]

const Hero = () => {



  return (
    <div id='hero' className='relative h-screen w-full flex justify-center bg-gradient-to-b from-sky-50 to-sky-600 '>
        <img className='object-cover hidden md:block w-[33.3vw] ' src={img1} alt='sparring'/>

        <div className=' md:w-[33.3vw] flex flex-col items-center  justify-start  mx-4'>
          <img className='m-3 pointer-events-none select-none md:h-[25vh] lg:h-auto mix-blend-multiply'  src={logo} alt='logo'  />
          <LinkTo to={'trial'} text={'Book a Trial Workout'} classNames={'font-oswald  text-4xl  font-medium border-4 text-white border-white px-20 py-2 hover:scale-[105%]'}/>
          <LinkTo  to={'membership'} text={'Explore Offers'}  classNames={'font-oswald text-4xl font-medium border-4 text-white border-white px-20 py-2  mt-4 hover:scale-[105%]'}/>
        </div>

        <img className=' object-cover hidden md:block w-[33.3vw]' src={img2} alt='sparring' />
        <Link to='gallery' smooth={true} duration={500}  className='md:hidden absolute h-[80px] w-[80px]  top-[85vh] left-[95vw] -translate-x-1/2 rounded-full'><ChevronsDown stroke={'black'} /></Link>

    </div>
  )
}

export default Hero