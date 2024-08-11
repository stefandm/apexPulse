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
    <div ref={ref} className='bg-sky-50 sticky top-0 z-[20] flex w-full h-[10vh] items-center  justify-between   text-white font-oswald md:text-xl text-2xl'>
      <Link to='hero' spy={true} smooth={true} duration={200} offset={-90}  onClick={() =>setIsOpen(false)} className=' '>
            <img src={logo} className='select-none rounded-[.8em] m-1 mx-4 cursor-pointer mix-blend-multiply h-[55px] w-[55px] ' alt='logo' />
     </Link>
      <Nav toggleNavbar={toggleNavbar} isOpen={isOpen}/>
    </div>
  )
}

export default Header
