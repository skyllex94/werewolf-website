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
      <div className=" bg-gray-900 text-white">
        <div className="max-w-2xl mx-auto py-10">
          <div className="text-center">
            <h3 className="text-xl mb-3 text-white">
              Download Werewolf: Save the Village
            </h3>
            <p> Stay entertained. All day, every day.</p>
            <div className="flex justify-center my-10">
              <div className="flex items-center border w-auto rounded-lg px-4 py-2  mx-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                  className="w-7 md:w-8"
                  alt="ios"
                />
                <a
                  href="https://apps.apple.com/us/app/id6738326023"
                  target="_blank"
                  rel="noreferrer"
                  className="text-left ml-3"
                >
                  <p className="text-xs text-gray-200">Download on </p>
                  <p className="text-sm md:text-base"> Apple Store </p>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p className="order-2 md:order-1 mt-8 md:mt-0">
              &copy; Zion Studios LLC., {new Date().getFullYear()}.
            </p>
            <div className="order-1 md:order-2">
              <button onClick={() => setShowModal(true)} className="px-2">
                About us
              </button>
              <button
                onClick={() => setShowAboutModal(true)}
                className="px-2 border-l"
              >
                Contact us
              </button>

              <button
                onClick={() => setShowAboutModal(true)}
                className="px-2 border-l"
              >
                <a
                  href="https://sites.google.com/view/werewolf-save-the-village/privacy-policy"
                  target="_blank"
                  rel="noreferrer"
                  className="flex space-x-4"
                >
                  <h3 className="">Private Policy</h3>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      {showModal && <AboutModal setShowModal={setShowModal} />}
      {showAboutModal && <ContactsModal setShowModal={setShowAboutModal} />}
      {showPolicyModal && <PolicyModal setShowModal={setShowPolicyModal} />}
    </React.Fragment>
  );
}
