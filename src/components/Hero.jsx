import {ChevronsDown} from 'lucide-react'
import logo from '../assets/Logo.jpg'
import img1 from '../assets/compressed/sparring2.jpg'
import img2 from '../assets/compressed/sparring3.jpg'
import {Link} from 'react-scroll'


const Hero = () => {



  return (
    <div id='hero' className='relative h-screen w-full flex justify-center bg-gradient-to-b from-sky-50 to-sky-200'>
        <img className='object-cover hidden md:block w-[33.3vw] ' src={img1} alt='sparring'/>

        <div className=' md:w-[33.3vw] flex flex-col items-center  justify-start  mx-4'>
          <img className='m-3 pointer-events-none select-none md:h-[25vh] lg:h-auto mix-blend-multiply'  src={logo} alt='logo'  />
          <Link  to='membership'  smooth={true} duration={500} className='transition ease mx-6 text-center hover:cursor-pointer select-none font-oswald text-4xl font-medium border-2 text-slate-800 border-slate-800 px-20 py-2 shadow-[2.0px_4.0px_4.0px_rgba(0,0,0,0.38)] mt-4 hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>Explore our Offers</Link>
          <Link  to='trial'  smooth={true} duration={500} className='transition ease mx-6 text-center hover:cursor-pointer select-none font-oswald text-4xl font-medium border-2 text-slate-800 border-slate-800 px-20 py-2 shadow-[2.0px_4.0px_4.0px_rgba(0,0,0,0.38)] mt-4 hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>Book a Trial Day</Link>
        </div>

        <img className=' object-cover hidden md:block w-[33.3vw]' src={img2} alt='sparring' />
        <Link to='paragraph' smooth={true} duration={500}  className='md:hidden absolute top-[85vh] left-[90vw] -translate-x-1/2 rounded-full'><ChevronsDown stroke={'black'} /></Link>

    </div>
  )
}

export default Hero