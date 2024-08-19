import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

// Custom icon to fix marker issue
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapComponent = () => {
  return (
    <div id='about' className='pt-[5vh]  px-[2vw] select-none  bg-sky-100'>

    <h1 className="font-oswald text-center mb-[2vh] text-slate-800 font-extrabold text-4xl md:text-6xl border-b-4 border-t-4 border-slate-800 py-6">Address & Contact</h1>

    <div  className='h-[80vh] flex md:flex-row flex-col justify-evenly items-center align-middle '>
      <div className='z-0 w-[90%] h-[60%]  border-2 border-black shadow-[4.0px_4.0px_4.0px_rgba(0,0,0,0.38)]'>
        <MapContainer  center={[48.1351, 11.5820]} zoom={13} className='h-full w-full '>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[48.1351, 11.5820]}>
            <Popup>
              Munich City Center
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className='text-center flex flex-col items-center justify-evenly w-screen h-full font-oswald font-normal text-3xl'>
        <div >
          <h1>Address:</h1>
          <h1>Imaginary st. 99</h1>
          <p>Munich 10101</p>
        </div>
        <div className='flex flex-col items-center'>
          <h1>Contact:</h1>
          <a href="tel:+4917635569006">
            <FaPhoneAlt className="inline-block hover:text-green-500 hover:scale-105 transition ease"/>&nbsp;Call us
          </a> 
          <a href='https://wa.me/4917635569006'>
            <FaWhatsapp className="inline-block size-6 md:size-10 hover:text-green-500 hover:scale-105 transition ease"/>&nbsp;Text us
          </a> 
        </div>
    </div>
    </div>
    </div>
  );
}

export default MapComponent;
