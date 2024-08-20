import { useState, useRef, useEffect } from 'react';
import logo from '../../assets/LogoNav.jpg';
import { Link } from 'react-scroll';
import Nav from './Nav';
import useClickOutside from '../../Hooks/useClickOutside';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBorder, setHasBorder] = useState(false); // State to manage border

  const toggleNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  const ref = useRef(null);
  useClickOutside(ref, () => setIsOpen(false));

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasBorder(true);
      } else {
        setHasBorder(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      ref={ref}
      className={`bg-sky-50 sticky top-0 z-[20] w-full h-[10vh] flex items-center justify-between text-white font-oswald md:text-xl text-2xl transition-all duration-300 ${
        hasBorder ? 'border-b-2 border-black' : ''
      }`}
      aria-label="Main Navigation Header"
    >
      <Link
        to="hero"
        spy={true}
        smooth={true}
        duration={200}
        offset={-90}
        onClick={() => setIsOpen(false)}
        aria-label="Go to Home Section"
      >
        <img
          src={logo}
          className="select-none rounded-[.8em] m-1 mx-4 cursor-pointer mix-blend-multiply h-[55px] w-[55px]"
          alt="Company Logo"
        />
      </Link>
      <button
        onClick={toggleNavbar}
        className="md:hidden text-white text-2xl"
        aria-label={isOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
      >
        {/* Icon can be added here for better visual indication */}
      </button>
      <nav aria-label="Main Navigation Menu">
        <Nav toggleNavbar={toggleNavbar} isOpen={isOpen} />
      </nav>
    </header>
  );
};

export default Header;
