import React, { useState } from 'react';

const PrivacyPolicyModal = () => {
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
        Show Privacy Policy
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full max-h-screen overflow-y-auto">
            <h2 className="text-2xl font-semibold mb-4">DATENSCHUTZERKLÄRUNG</h2>
            <div className="text-left">
              <p>
                VERANTWORTLICHER FÜR DIE DATENVERARBEITUNG IST:
                <br />
                Guy Dudeman
                <br />
                That Street 1ab
                <br />
                10101 Munich
                <br />
                Deutschland
                <br />
                info@apex-pulse.de
                <br />
                Telefon: 017684294444
              </p>
              <br />
              <p>
                Wir freuen uns über Ihr Interesse an unserer Webseite. Der Schutz Ihrer Privatsphäre ist für uns sehr wichtig.
                Nachstehend informieren wir Sie ausführlich über den Umgang mit Ihren Daten.
              </p>
              <br />
              <h3 className="font-bold">ZUGRIFFSDATEN UND HOSTING</h3>
              <p>
                Sie können unsere Webseiten besuchen, ohne Angaben zu Ihrer Person zu machen. Bei jedem Aufruf einer Webseite
                speichert der Webserver lediglich automatisch ein sogenanntes Server-Logfile, das z.B. den Namen der angeforderten
                Datei, Ihre IP-Adresse, Datum und Uhrzeit des Abrufs, übertragene Datenmenge und den anfragenden Provider (Zugriffsdaten)
                enthält und den Abruf dokumentiert. Diese Zugriffsdaten werden ausschließlich zum Zwecke der Sicherstellung eines
                störungsfreien Betriebs der Seite sowie der Verbesserung unseres Angebots ausgewertet...
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
