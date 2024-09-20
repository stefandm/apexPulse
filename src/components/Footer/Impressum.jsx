
import { useState, useRef } from 'react';
import useClickOutside from '../../Hooks/useClickOutside';

const ImpressumModal = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const refs = useRef(null);

  useClickOutside(refs, closeModal);

  return (
    <div className="text-center ">
      {/* Button to trigger the modal */}
      <button 
        onClick={toggleModal} 
        className="bg-blue-300 text-sm text-white px-4 rounded-md hover:bg-blue-600"
      >
        Show Imprint
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          {/* Prevent click events inside the modal content from propagating */}
          <div ref={refs} className="z-20 bg-white p-6 rounded-lg shadow-lg max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-semibold mb-4">Imprint</h2>
            <p className="text-left">
              APEX PULSE LTD
              <br />
              Imaginary St 99
              <br />
              10101 Bayern - Munich
              <br />
              Germany
              <br />
              <br />
              Phone: 015164341212
              <br />
              Email: info@apex-pulse.de
              <br />
              <br />
              Managing Director: Mr. Dudeman
              <br />
              Commercial Register: Regensburg District Court, HRB 51232
              <br />
              VAT Identification Number(s): DE355434444
              <br />
              <br />
              The European Commission provides a platform for online dispute resolution (OS), which you can find here{' '}
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                https://ec.europa.eu/consumers/odr/
              </a>. We are not obligated and not willing to participate in a dispute resolution procedure before a consumer arbitration board.
            </p>

            {/* Close button */}
            <button 
              onClick={toggleModal} 
              className="mt-6 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImpressumModal;
