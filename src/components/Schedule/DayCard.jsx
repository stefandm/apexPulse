
import PropTypes from 'prop-types'
import  './DayCard.css'


import  { useState, useRef } from 'react';

const DayCard = ({ day, data }) => {
  const [isMinimized, setIsMinimized] = useState(true);
  const contentRef = useRef(null);

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className={`day-card transition-all duration-500 ease-in-out ${isMinimized ? 'minimized' : 'maximized'}`}>
      <div className='header' onClick={toggleMinimize}>
        <h2>{day}</h2>
      </div>

      <div
        ref={contentRef}
        className={`content transition-all duration-500 ease-in-out overflow-hidden ${isMinimized ? 'minimized' : 'maximized'}`}
        style={{
          maxHeight: isMinimized ? '0px' : `${contentRef.current ? contentRef.current.scrollHeight : 'auto'}px`,
          opacity: isMinimized ? 0 : 1,
        }}
      >
        <ul>
          {data.map((item, index) => (
            <li key={index} className='mt-1'>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DayCard;






DayCard.propTypes = {
    day: PropTypes.string,
    data: PropTypes.array
}
