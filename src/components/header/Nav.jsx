/* eslint-disable react/prop-types */
import {Menu, X} from 'lucide-react'
import LinkTo from './LinkTo'

const NavLinks = ({toggleNavbar}) => {


  return (
<>
<LinkTo toggleNavbar={toggleNavbar} to={'trial'} text={'Trial Day'}/>
<LinkTo toggleNavbar={toggleNavbar} to={'membership'} text={'Membership Plans'}/>
<LinkTo toggleNavbar={toggleNavbar} to={'schedule'} text={'Our Schedule'}/>
<LinkTo toggleNavbar={toggleNavbar} to={'coaches'} text={'Meet the Coaches'}/>
<LinkTo toggleNavbar={toggleNavbar} to={'about'} text={'Address & About'}/>
</>
  )
}


const Nav = ({toggleNavbar,isOpen}) => {


    return(
        <>
        <nav className="w-2/3 flex justify-end mx-6">
            <div className="hidden md:flex justify-end w-full">
                <NavLinks />
            </div>
            <div>
                <button onClick={toggleNavbar} className="md:hidden">
                    {isOpen ? <X /> : <Menu/> }
                </button>
            </div>
        </nav>
        {isOpen && 
        <div className="my-10 flex basis-full flex-col items-center gap-8">
            <NavLinks toggleNavbar={toggleNavbar}/>
        </div>}
        </>
        
    )
}

export default Nav
