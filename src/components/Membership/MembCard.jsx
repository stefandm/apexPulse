// import PropTypes from 'prop-types';

// const MembCard = ({header,text,ages}) => {
//   return (
//     // <div className="flex-1 flex">
//             <div className="bg-sky-50 py-6 justify-start gap-4 flex-1 flex flex-col text-center font-oswald border-2 text-slate-800 border-slate-800 px-20 shadow-[2.0px_4.0px_4.0px_rgba(0,0,0,0.38)] mt-4 hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
//               <h1 className="text-3xl font-bold mb-4">{header}</h1>
//               <h1 className="text-3xl font-bold mb-4">{ages}</h1>
//               <p className='md:text-2xl text-xl font-normal '>{text}</p>
//             </div>
//     // </div>
//   )
// }

// export default MembCard

// MembCard.propTypes = {
//     header: PropTypes.string,
//     text:PropTypes.string,
//     ages:PropTypes.string
//   };


import PropTypes from 'prop-types';

const MembCard = ({ header, text, ages,price }) => {
  return (
    <div className="select-none flex flex-col justify-between w-full max-w-[300px] md:max-w-[20vw] h-[400px] bg-gradient-to-b from-sky-50  to-sky-200 text-center font-oswald border-2 transition ease text-slate-800 border-slate-800 p-10  mt-4 md:shadow-[6.0px_8.0px_8.0px_rgba(0,0,0,0.38)] mx-auto">
        <div className="mb-6">
            <h1 className="text-3xl font-bold">{header}</h1>
            <h2 className="text-lg font-semibold">{ages}</h2>
        </div>
        <div >
            <p className="text-lg font-normal mb-2">{text}</p>
            <h1 className="text-5xl font-semibold">{price}</h1>
      </div>
    </div>
  );
};

export default MembCard;

MembCard.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  ages: PropTypes.string,
  price : PropTypes.string
};
