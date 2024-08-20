import { useState, useRef } from 'react';
import useClickOutside from '../../Hooks/useClickOutside';

const PrivacyPolicyModal = () => {
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
    <div className="text-center">
      {/* Button to trigger the modal */}
      <button 
        onClick={toggleModal} 
        className="bg-blue-300 text-white text-sm px-4 rounded-md hover:bg-blue-600"
      >
        Show Privacy Policy
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div ref={refs} className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full max-h-screen overflow-y-auto">
            <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
            <div className="text-left">
              <p>
                THE RESPONSIBLE PARTY FOR DATA PROCESSING IS:
                <br />
                Guy Dudeman
                <br />
                That Street 1ab
                <br />
                10101 Munich
                <br />
                Germany
                <br />
                info@apex-pulse.de
                <br />
                Phone: 017684294444
              </p>
              <br />
              <p>
                We appreciate your interest in our website. Protecting your privacy is very important to us. Below we provide detailed information about how we handle your data.
              </p>
              <br />
              <h3 className="font-bold">ACCESS DATA AND HOSTING</h3>
              <p>
                You can visit our websites without providing any personal information. When you access a website, the web server automatically saves a so-called server log file, which includes the name of the requested file, your IP address, date and time of access, amount of data transferred, and the requesting provider (access data), and documents the access. This access data is used solely to ensure the smooth operation of the site and to improve our services...
              </p>
              <br />
              {/* You can continue rendering the rest of the content similarly */}
            </div>

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

export default PrivacyPolicyModal;
