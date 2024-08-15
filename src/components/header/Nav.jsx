import { Menu, X } from 'lucide-react';
import LinkTo from './LinkTo';
import PropTypes from 'prop-types';

const NavLinks = ({ toggleNavbar }) => {
  const links = [
    { to: 'trial', text: 'Trial Day' },
    { to: 'schedule', text: 'Schedule' },
    { to: 'membership', text: 'Membership Plans' },
    { to: 'about', text: 'Address & Contact' }
  ];

  return (
    <>
      {links.map((link, i) => (
        <LinkTo key={i} toggleNavbar={toggleNavbar} to={link.to} text={link.text} classNames={'text-black'} />
      ))}
    </>
  );
};

NavLinks.propTypes = {
  toggleNavbar: PropTypes.func
};




const Nav = ({ toggleNavbar, isOpen }) => {
  return (
    <>
      <nav className="relative flex items-center justify-end px-4 py-3">
        <div className="hidden md:flex justify-end items-center w-full">
          <NavLinks />
        </div>
        <div className='items-center'>
          <button onClick={toggleNavbar} className="md:hidden">
            {isOpen ? <X className='h-[40px] w-[40px]' stroke={'black'} /> : <Menu className='h-[40px] w-[40px]' stroke={'black'} />}
          </button>
        </div>
      </nav>
      <div
        className={`fixed top-[10vh] z-20 left-0 h-full bg-sky-50 outline-r-2 flex flex-col pb-6 border-b-2 border-black items-center gap-8 transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ width: '100vw',height: 'fit-content' }} // Adjust the width as needed
      >
        <NavLinks toggleNavbar={toggleNavbar} />
      </div>
    </>
  );
};

Nav.propTypes = {
  toggleNavbar: PropTypes.func,
  isOpen: PropTypes.bool
};

export default Nav;
