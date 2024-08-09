import { useState ,useRef} from 'react'
import logo from '../../assets/LogoNav.jpg'
import {Link} from 'react-scroll'
import Nav from './Nav'
import useClickOutside from '../../Hooks/useClickOutside'

const Header = () => {
 
    const [isOpen,setIsOpen] = useState(false)

    const toggleNavbar = () => {
        setIsOpen(val => !val)
    }

    const ref = useRef(null);
    
    useClickOutside(ref, () => setIsOpen(false))

  return (
    <div ref={ref} className='bg-sky-50 sticky top-0 z-[20] flex w-full h-[fit] items-center justify-between  pb-1 flex-wrap text-white font-oswald md:text-xl text-2xl'>
      <Link to='hero' spy={true} smooth={true} duration={500} offset={-90}  onClick={() =>setIsOpen(false)} className='h-[30px] w-[30px] lg:h-[60px] lg:w-[60px] '>
            <img src={logo} className='select-none rounded-[.8em] m-1 mx-4 cursor-pointer mix-blend-multiply' alt='logo' />
     </Link>
      <Nav toggleNavbar={toggleNavbar} isOpen={isOpen}/>
    </div>
  )
}

export default Header
