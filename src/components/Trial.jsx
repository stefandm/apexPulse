import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import trialImg from '../assets/trialDayCut.jpg';
import mobileImg from '../assets/sparring2.jpg'; // Assuming you have a mobile-specific image

const Trial = () => {
  return (
    <div className='relative h-[60vh] md:h-[75vh] pt-[5vh] md:pt-[10vh] mt-[5vh] mb-[15vh]' id='trial'>
      {/* Desktop Image */}
      <img 
        src={trialImg} 
        alt='trialDay' 
        className="hidden md:block h-[75vh] w-screen object-cover"
      />
      
      {/* Mobile Image */}
      <img 
        src={mobileImg} 
        alt='trialDayMobile' 
        className="block md:hidden h-[55vh] w-screen object-cover"
      />

      <p className="select-none absolute bottom-[-12vh] lg:bottom-[-15vh] p-6 left-1/2  -translate-x-1/2 w-[90vw] font-oswald bg-white text-l md:text-3xl font-light  text-center shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] bg-gradient-to-b from-sky-100">
        To book a trial day, you can press&nbsp; 
        <a href="tel:+4917635569006">
          <FaPhoneAlt className="inline-block hover:text-green-500 hover:scale-105 transition ease"/>
        </a> 
        &nbsp;to call us or press&nbsp;
        <a href='https://wa.me/4917635569006'>
          <FaWhatsapp className="inline-block size-6 md:size-10 hover:text-green-500 hover:scale-105 transition ease"/>
        </a> 
        &nbsp;to message us on WhatsApp. Our schedule is just below this section.
      </p>      
    </div>
  );
}

export default Trial;
