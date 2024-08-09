import { FaWhatsapp  } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";


const Trial = () => {
  return (
    <div className='h-[30vh] w-full ' id='trial'>
      <p className="font-oswald bg-opacity-70 text-xl md:text-3xl font-light md:px-50 px-16 pt-16 text-center">To book a trial day, you can click <a href="tel:+4917635569006" ><FaPhoneAlt className="inline-block"/></a> to call us or  <a href='https://wa.me/4917635569006' ><FaWhatsapp className="inline-block"/></a> to message us on whatsapp.Our schedule is just below this section.</p>      
     
    </div>
  )
}

export default Trial
