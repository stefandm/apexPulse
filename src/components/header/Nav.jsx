import React,{ useState }from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../../assets/LogoNav.jpg'

import './Navbar.css'

const Nav = () => {


  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const closeMenu = () => setClick(false)

  return (
    <div className='header'>
    <nav className='navbar'>
        <a href='#hero' className='logo'>
            <img src={logo} className='h-[60px] w-[60px] rounded-[.5em] ' alt='logo' />
        </a>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className='nav-item'>
                <a href='#membership' onClick={closeMenu}>Membership</a>
            </li>
            <li className='nav-item'>
                <a href='#trial' onClick={closeMenu}>Trial Day</a>
            </li>
            <li className='nav-item'>
                <a href='#coaches' onClick={closeMenu}>Coaches</a>
            </li>
            <li className='nav-item'>
                <a href='#schedule' onClick={closeMenu}>Schedule</a>
            </li>
            <li className='nav-item'>
                <a href='#about' onClick={closeMenu}>Address & Contact</a>
            </li>
        </ul>
    </nav>
</div>
  )
}

export default Nav
