import PropTypes from 'prop-types';

const MembCard = ({ header, text, ages,price }) => {
  return (
    <div className="select-none flex flex-col justify-between w-full max-w-[300px] lg:max-w-[50]  h-[400px] bg-gradient-to-b from-sky-200  to-white text-center  font-oswald border-2 transition ease text-slate-800 border-slate-800 p-10  mt-4 md:shadow-[10.0px_10.0px_8.0px_rgba(0,0,0,0.4)] mx-auto">
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
