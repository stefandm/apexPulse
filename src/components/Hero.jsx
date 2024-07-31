import logo from '../assets/Logo.jpg'
import img1 from '../assets/compressed/sparring2.jpg'
import img2 from '../assets/compressed/sparring3.jpg'
import LinkTo from './header/LinkTo'


const Hero = () => {

 
  return (
    <div id='hero' className='h-[90vh] flex '>
        <img className='relative object-cover  hidden md:block w-[33.3vw] 
               transition-all duration-200 ease-in-out 
                 hover:w-[40vw]' src={img1} alt='sparring'/>         
        <div className='w-[100vw] md:w-[33.3vw] flex flex-col items-center  justify-start gap-4'>
          <img className='m-3 pointer-events-none select-none h-[45vh] w-[35vw]'  src={logo} alt='logo'  />
          <LinkTo to={'trial'} text={'Try Us Out'} classNames={'font-oswald text-5xl border-[.2em] border-double text-white border-white p-4 rounded-2xl bg-slate-700'}/>
          <LinkTo  to={'membership'} text={'Membership'}  classNames={'font-oswald text-5xl border-[.2em] border-double text-white border-white p-4 rounded-2xl bg-slate-700'}/>
        </div>
       
        <img className=' object-cover hidden md:block w-[33.3vw] 
            transition-all duration-200 ease-in-out 
              hover:w-[40vw]' src={img2} alt='sparring' />
    </div>
  )
}

export default Hero