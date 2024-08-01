/* eslint-disable react/prop-types */
import {Menu, X} from 'lucide-react'
import LinkTo from './LinkTo'

const NavLinks = ({toggleNavbar}) => {

    const links = [{to:'trial',text:'Trial Day'},{to:'membership',text:'Membership Plans'},{to:'schedule',text:'Our Schedule'},{to:'coaches',text:'Meet the Coaches'},{to:'about',text:'Address & About'}]

  return (
<>
{links.map( (link,i) => (
    <LinkTo key={i} toggleNavbar={toggleNavbar} to={link.to} text={link.text} classNames={'text-black border-transparent hover:border-b-2 hover:border-black transition ease duration-500'}/>
))}
</>
  )
}


const Nav = ({toggleNavbar,isOpen}) => {


    return(
        <>
        <nav className="w-2/3 flex justify-end mx-6">
            <div className="hidden md:flex justify-end items-center w-full">
                <NavLinks />
            </div>
            <div>
                <button onClick={toggleNavbar} className="md:hidden" >
                    {isOpen ? <X stroke={'black'}/> : <Menu stroke={'black'} /> }
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
