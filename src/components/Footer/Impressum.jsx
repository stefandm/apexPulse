import React, { useState } from 'react';

const ImpressumModal = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="text-center">
      {/* Button to trigger the modal */}
      <button 
        onClick={toggleModal} 
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Show Impressum
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-semibold mb-4">IMPRESSUM</h2>
            <p className="text-left">
              APEX PULSE GMBH
              <br />
              Imaginary St 99
              <br />
              10101 Bayern - Munich
              <br />
              Deutschland
              <br />
              <br />
              Telefon: 015164341212
              <br />
              Mail: info@apex-pulse.de
              <br />
              <br />
              Geschäftsführer: Mr Dudeman
              <br />
              Handelsregister: Amtsgericht Regensburg, HRB 51232
              <br />
              Umsatzsteuer-Identifikationsnummer(n): DE355434444
              <br />
              <br />
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie hier finden{' '}
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                https://ec.europa.eu/consumers/odr/
              </a>. Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind wir nicht verpflichtet und nicht bereit.
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
