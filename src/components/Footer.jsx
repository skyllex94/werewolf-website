import React, { useState } from "react";
import ContactsModal from "./Modals/ContactsModal";
import AboutModal from "./Modals/AboutModal";
import PolicyModal from "./Modals/PolicyModal";

export default function Footer() {
  const [showModal, setShowModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showPolicyModal, setShowPolicyModal] = useState(false);

  return (
    <React.Fragment>
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          {/* Main CTA Section */}
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Play?
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
              Download Werewolf: Save the Village and start your adventure
              today.
            </p>
            <div className="flex justify-center">
              <a
                href="https://apps.apple.com/us/app/id6738326023"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center bg-black border border-gray-700 rounded-xl px-6 py-4 hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 group"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                  className="w-8 h-8 mr-4 group-hover:scale-110 transition-transform duration-300"
                  alt="App Store"
                />
                <div className="text-left">
                  <p className="text-xs text-gray-400">Download on the</p>
                  <p className="text-lg font-semibold text-white">App Store</p>
                </div>
              </a>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Zion Studios LLC. All rights
                reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-end gap-6">
                <button
                  onClick={() => setShowModal(true)}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-300 hover:underline"
                >
                  About us
                </button>
                <button
                  onClick={() => setShowAboutModal(true)}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-300 hover:underline"
                >
                  Contact us
                </button>
                <a
                  href="https://sites.google.com/view/werewolf-save-the-village/privacy-policy"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-300 hover:underline"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {showModal && <AboutModal setShowModal={setShowModal} />}
      {showAboutModal && <ContactsModal setShowModal={setShowAboutModal} />}
      {showPolicyModal && <PolicyModal setShowModal={setShowPolicyModal} />}
    </React.Fragment>
  );
}
