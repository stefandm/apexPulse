/* eslint-disable react/prop-types */
import {Menu, X} from 'lucide-react'
import LinkTo from './LinkTo'

const NavLinks = ({toggleNavbar}) => {

    const links = [{to:'trial',text:'Trial Day'},{to:'schedule',text:'Our Schedule'},{to:'membership',text:'Membership Plans'},{to:'coaches',text:'Meet the Coaches'},{to:'about',text:'Address & About'}]

  return (
<>
{links.map( (link,i) => (
    <LinkTo key={i} toggleNavbar={toggleNavbar} to={link.to} text={link.text}  classNames={'text-black'}/>
))}
</>
  )
}


const Nav = ({toggleNavbar,isOpen}) => {


    return(
        <>
        <nav className=" relative flex items-center justify-end px-4 py-2">
            <div className="hidden md:flex   justify-end items-center w-full">
                <NavLinks />
            </div>
            <div>
                <button onClick={toggleNavbar} className="md:hidden" >
                    {isOpen ? <X stroke={'black'}/> : <Menu  stroke={'black'} /> }
                </button>
            </div>
        </nav>
        {isOpen && 
        <div className="py-5 flex basis-full absolute top-10 left-[50%] -translate-x-1/2 w-full bg-sky-50 border-b-2 border-black flex-col items-center gap-8 ">
            <NavLinks  toggleNavbar={toggleNavbar}/>
        </div>}
        </>
        
    )
}

export default Nav
