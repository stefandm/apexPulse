import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import trialImg from '../assets/trialDayCut.jpg';
import mobileImg from '../assets/sparring2.jpg'; 

const Trial = () => {
  return (
    <section
      className='relative h-[60vh] md:h-[75vh] pt-[5vh] md:pt-[10vh] mt-[5vh] mb-[15vh]'
      id='trial'
      aria-label='Trial Day Section'
    >
      {/* Desktop Image */}
      <figure>
        <img 
          src={trialImg} 
          alt='A person training or participating in a trial day at the gym' 
          className="hidden md:block h-[75vh] w-screen object-cover"
        />
      </figure>

      {/* Mobile Image */}
      <figure>
        <img 
          src={mobileImg} 
          alt='A person sparring at the gym' 
          className="block md:hidden h-[55vh] w-screen object-cover"
        />
      </figure>

      <aside 
        className="select-none absolute bottom-[-12vh] lg:bottom-[-15vh] p-6 left-1/2 -translate-x-1/2 w-[90vw] font-oswald bg-white text-l md:text-3xl font-light text-center shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] bg-gradient-to-b from-sky-100"
        aria-label='Instructions for booking a trial day'
      >
        <p>
          To book a trial day, you can press&nbsp; 
          <a href="tel:+4917635569006" aria-label='Call us at +49 176 35569006'>
            <FaPhoneAlt className="inline-block hover:text-green-500 hover:scale-105 transition ease" />
          </a> 
          &nbsp;to call us or press&nbsp;
          <a href='https://wa.me/4917635569006' aria-label='Message us on WhatsApp at +49 176 35569006'>
            <FaWhatsapp className="inline-block size-6 md:size-10 hover:text-green-500 hover:scale-105 transition ease" />
          </a> 
          &nbsp;to message us on WhatsApp. Our schedule is just below this section.
        </p>
      </aside>
    </section>
  );
}

export default Trial;
