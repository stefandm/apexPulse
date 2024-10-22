import { useState, useEffect } from 'react';
import { ChevronsDown } from 'lucide-react';
import logo from '../assets/Logo.jpg';
import img1 from '../assets/compressed/sparring2.jpg';
import img2 from '../assets/compressed/sparring3.jpg';
import { Link } from 'react-scroll';

const Hero = () => {
  const [loading, setLoading] = useState(true); // Track loading state

  // Check when images are loaded
  useEffect(() => {
    const img1Load = new Image();
    const img2Load = new Image();
    img1Load.src = img1;
    img2Load.src = img2;

    const checkImagesLoaded = () => {
      if (img1Load.complete && img2Load.complete) {
        setLoading(false);
      }
    };

    img1Load.onload = checkImagesLoaded;
    img2Load.onload = checkImagesLoaded;

    // Fallback in case onload doesn't trigger
    const timeout = setTimeout(() => setLoading(false), 3000); // Optional timeout for slow connections

    return () => clearTimeout(timeout); // Clean up the timeout
  }, []);

  return (
    <section
      id='hero'
      className='relative h-screen w-full flex justify-center bg-gradient-to-b from-sky-50 to-sky-200'
    >
      {loading ? (
        // Loading Spinner
        <div className="absolute inset-0 flex justify-center items-center bg-gradient-to-b from-sky-50 to-sky-200 z-50">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-600 h-12 w-12"></div>
        </div>
      ) : (
        <>
          {/* Left Image */}
          <img
            className='object-cover hidden md:block w-[33.3vw]'
            src={img1}
            alt='Two people sparring during training'
            loading='lazy'
          />

          {/* Main Content (Logo and CTAs) */}
          <div className='md:w-[33.3vw] flex flex-col items-center justify-start mx-4'>
            <img
              className='m-3 pointer-events-none select-none md:h-[25vh] lg:h-auto mix-blend-multiply'
              src={logo}
              alt='Company logo'
              loading='lazy'
            />

            <Link
              to='membership'
              offset={-50}
              smooth={true}
              duration={200}
              className='transition ease mx-6 text-center hover:cursor-pointer select-none font-oswald text-3xl font-medium border-2 text-slate-800 border-slate-800 px-20 py-2 shadow-[2.0px_4.0px_4.0px_rgba(0,0,0,0.38)] mt-4 hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'
              aria-label='Explore our offers'
            >
              Explore our Offers
            </Link>

            <Link
              to='trial'
              smooth={true}
              duration={200}
              offset={-50}
              className='transition ease mx-6 text-center hover:cursor-pointer select-none font-oswald text-3xl font-medium border-2 text-slate-800 border-slate-800 px-20 py-2 shadow-[2.0px_4.0px_4.0px_rgba(0,0,0,0.38)] mt-4 hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'
              aria-label='Book a trial day'
            >
              Book a Trial Day
            </Link>
          </div>

          {/* Right Image */}
          <img
            className='object-cover hidden md:block w-[33.3vw]'
            src={img2}
            alt='People practicing sparring techniques'
          />

          {/* Scroll Down Button (Visible on Mobile) */}
          <Link
            to='paragraph'
            smooth={true}
            duration={200}
            offset={-50}
            className='md:hidden absolute top-[80vh] left-1/2 -translate-x-1/2 rounded-full'
            aria-label='Scroll down to the next section'
          >
            <ChevronsDown stroke={'black'} />
          </Link>
        </>
      )}
    </section>
  );
};

export default Hero;
