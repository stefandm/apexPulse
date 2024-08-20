import { Menu, X } from 'lucide-react';
import LinkTo from './LinkTo';
import PropTypes from 'prop-types';

// NavLinks component for rendering the navigation links
const NavLinks = ({ toggleNavbar }) => {
  const links = [
    { to: 'trial', text: 'Trial Day' },
    { to: 'schedule', text: 'Schedule' },
    { to: 'membership', text: 'Membership Plans' },
    { to: 'about', text: 'Address & Contact' }
  ];

  return (
    <ul className="flex py-4 gap-6 flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 items-center">
      {links.map((link, i) => (
        <li key={i}>
          <LinkTo
            toggleNavbar={toggleNavbar}
            to={link.to}
            text={link.text}
            classNames="text-black"
            aria-label={`Navigate to ${link.text}`} // Added aria-label for each link
          />
        </li>
      ))}
    </ul>
  );
};

NavLinks.propTypes = {
  toggleNavbar: PropTypes.func.isRequired,
};

// Nav component for handling the entire navigation including mobile menu
const Nav = ({ toggleNavbar, isOpen }) => {
  return (
    <>
      <nav className="relative flex items-center justify-between px-4 py-3" aria-label="Main Navigation">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-end items-center w-full">
          <NavLinks toggleNavbar={toggleNavbar} />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden items-center">
          <button
            onClick={toggleNavbar}
            className="text-2xl"
            aria-label={isOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {isOpen ? <X className="h-[40px] w-[40px]" stroke="black" /> : <Menu className="h-[40px] w-[40px]" stroke="black" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-[10vh] z-20 left-0 bg-sky-50 border-b-2 border-black flex flex-col items-center gap-8 transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ width: '100vw', height: 'fit-content' }}
        aria-hidden={!isOpen} // Added aria-hidden to hide the nav when closed
        aria-label="Mobile Navigation Menu" // Added aria-label for the entire mobile nav
      >
        <NavLinks toggleNavbar={toggleNavbar} />
      </div>
    </>
  );
};

Nav.propTypes = {
  toggleNavbar: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Nav;
