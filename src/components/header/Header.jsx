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
    <div ref={ref} className='bg-white sticky top-0 z-[20] flex w-full items-center justify-between border-gray-700  border-b-2 flex-wrap  font-oswald md:text-xl text-2xl'>
      <Link to='hero' spy={true} smooth={true} duration={500} offset={-90}  onClick={() =>setIsOpen(false)} className='h-[50px] w-[50px] lg:h-[70px] lg:w-[70px] '>
            <img src={logo} className='rounded-[.5em] p-2' alt='logo' />
     </Link>
      <Nav toggleNavbar={toggleNavbar} isOpen={isOpen}/>
    </div>
  )
}

export default Header
