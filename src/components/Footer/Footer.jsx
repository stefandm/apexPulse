import Impressum from "./Impressum"
import PrivacyPolicy from "./PrivacyPolicy"
import logo from '../../assets/LogoNav.jpg';

const Footer = () => {
  return (
    <div id='footer' className=' bg-sky-950 py-6 gap-4 flex flex-col items-center justify-center'>
      <img 
          src={logo}
          className=' select-none rounded-[.8em] m-1 mx-4 cursor-pointer  h-[55px] w-[55px]'
          alt='logo'
        />

    <Impressum/>
    <PrivacyPolicy/>
    </div>
  )
}

export default Footer
