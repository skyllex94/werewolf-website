import React, { useState } from "react";
import seer from "../assets/characters/seer.jpeg";
import cardBack from "../assets/cards/werewolf-card-back.png";
import Footer from "../components/Footer";

export default function Seer() {
  const [isFlipped, setIsFlipped] = useState(true);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
      <div>
        <div className="bg-white pt-20 pb-20 lg:pt-20">
          <div className="m-auto flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center px-6 xl:container md:px-12 lg:px-6">
            <div className={`flex `}>
              <div
                className={`mt-6 card-container ${isFlipped ? "flipped" : ""}`}
              >
                {/* Card container */}
                <div onClick={handleFlip} className="h-[80%] cursor-pointer">
                  {/* Front side of the card */}
                  <div className="card-front max-w-sm p-6 bg-white">
                    <h5
                      className="mb-2 text-center text-2xl font-bold tracking-tight
                       text-gray-900 dark:text-white"
                    >
                      Seer
                    </h5>
                    <img
                      src={seer}
                      className="border rounded-2xl"
                      alt="villager"
                    />
                    <p className="m-3 font-normal text-gray-700 dark:text-gray-400">
                      <b>Role: </b>Good
                    </p>
                    <p className="m-3 font-normal text-gray-700 dark:text-gray-400">
                      <b>Objective:</b> At night, choose one person you suspect
                      to be a werewolf and the operator of the game will let you
                      know if he is or he isn't.
                    </p>

                    <div className="download-app flex justify-center my-1">
                      <div
                        className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 
                                  focus:ring-4 focus:outline-none focus:ring-gray-300
                                  text-white rounded-xl inline-flex items-center 
                                  justify-center px-4 py-2.5 dark:bg-gray-700
                                  dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                      >
                        <svg
                          className="me-3 w-7 h-7"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fab"
                          data-icon="apple"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                        >
                          <path
                            fill="currentColor"
                            d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                          ></path>
                        </svg>

                        <div className="text-left rtl:text-right ">
                          <div className="mb-1 text-xs">Download on the</div>
                          <div className="-mt-1 font-sans text-sm font-semibold">
                            iOS App Store
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back side of the card */}
                  <div className="card-back card-front max-w-sm bg-white">
                    <img
                      src={cardBack}
                      className="border rounded-2xl"
                      alt="villager"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
