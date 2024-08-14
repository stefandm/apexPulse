import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';

const DayCard = ({ day, data }) => {
  const [isMinimized, setIsMinimized] = useState(true);
  const contentRef = useRef(null);

  // Function to check screen size and update isMinimized state
  const updateIsMinimized = () => {
    if (window.innerWidth >= 768) { // 768px is typically the breakpoint for 'md' in Tailwind CSS
      setIsMinimized(false);
    } else {
      setIsMinimized(true);
    }
  };

  useEffect(() => {
    updateIsMinimized(); // Check screen size on component mount

    window.addEventListener('resize', updateIsMinimized); // Update on screen resize
    return () => window.removeEventListener('resize', updateIsMinimized);
  }, []);

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className={`day-card  mb-10 flex flex-col transition-all duration-500 ease-in-out font-oswald ${isMinimized ? 'minimized' : 'maximized'}`}>
      <div className='header cursor-pointer' onClick={toggleMinimize}>
        <h1 className='text-4xl text-center text-slate-800 hover:text-sky-900'>{day} {isMinimized ? <span className='md:hidden'>+</span> : <span className='md:hidden'>-</span>}</h1>
      </div>

      <div
        ref={contentRef}
        className={`text-center flex-grow transition-all duration-500 ease-in-out overflow-hidden ${isMinimized ? 'minimized' : 'maximized'}`}
        style={{
          maxHeight: isMinimized ? '0px' : `${contentRef.current ? contentRef.current.scrollHeight : 'auto'}px`,
          opacity: isMinimized ? 0 : 1,
        }}
      >
        <ul className='mt-4'>
          {data.map((item, index) => (
            <li key={index} className='select-none mt-2 text-wrap text-lg'>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DayCard;

DayCard.propTypes = {
  day: PropTypes.string,
  data: PropTypes.array,
};
