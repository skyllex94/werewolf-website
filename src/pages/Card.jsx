import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import DownloadApp from "../components/DownloadApp";

const Card = ({
  frontImage,
  backImage,
  objectiveText,
  roleName,
  appStoreLink,
}) => {
  const [isFlipped, setIsFlipped] = useState(true);
  const [timeOpened, setTimeOpened] = useState("");

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    const savedTime = localStorage.getItem(`timeOpened_${roleName}`);
    if (savedTime) {
      setTimeOpened(savedTime);
    } else {
      const currentTime = new Date().toLocaleTimeString();
      setTimeOpened(currentTime);
      localStorage.setItem(`timeOpened_${roleName}`, currentTime);
    }
  }, [roleName]);

  return (
    <div>
      <div className="bg-white pt-20 pb-20 lg:pt-20">
        <div className="m-auto flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center px-6 xl:container md:px-12 lg:px-6">
          <div className="flex">
            <div
              className={`mt-6 card-container ${isFlipped ? "flipped" : ""}`}
            >
              <div
                onClick={handleFlip}
                className="max-w-sm cursor-pointer flex-1 items-center justify-center "
              >
                <div className="card-front bg-white">
                  <div className="border rounded-2xl p-8">
                    <img
                      src={frontImage}
                      className="border rounded-2xl"
                      alt="role"
                    />
                  </div>

                  <p className="m-3 font-normal text-gray-700 dark:text-gray-400">
                    <b>Role & Ability:</b> {objectiveText}
                  </p>
                  <p className="m-3 font-normal text-gray-700 dark:text-gray-400">
                    <b>Time Opened:</b> {timeOpened}
                  </p>

                  <div className="download-app flex justify-center my-1">
                    <a
                      href={appStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[80%] sm:w-auto "
                    >
                      <DownloadApp />
                    </a>
                  </div>
                </div>

                <div className="card-back card-front max-w-sm bg-white">
                  <img
                    src={backImage}
                    className="border rounded-2xl"
                    alt="card back"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Card;
