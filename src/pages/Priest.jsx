import React, { useState, useEffect } from "react";
import priest from "../assets/characters/priest.jpg";
import cardBack from "../assets/cards/werewolf-card-back.png";
import Footer from "../components/Footer";
import DownloadApp from "../components/DownloadApp";

export default function Priest() {
  const [isFlipped, setIsFlipped] = useState(true);
  const [timeOpened, setTimeOpened] = useState("");

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Set timeOpened when the component mounts
  useEffect(() => {
    const currentTime = new Date();
    setTimeOpened(currentTime.toLocaleTimeString()); // Format to local time
  }, []);

  return (
    <div>
      <div className="bg-white pt-20 pb-20 lg:pt-20">
        <div className="m-auto flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center px-6 xl:container md:px-12 lg:px-6">
          <div className="flex">
            <div
              className={`mt-6 card-container ${isFlipped ? "flipped" : ""}`}
            >
              {/* Card container */}
              <div onClick={handleFlip} className="max-w-sm cursor-pointer">
                {/* Front side of the card */}
                <div className="card-front bg-white">
                  <img
                    src={priest}
                    className="border rounded-2xl"
                    alt="villager"
                  />
                  <p className="m-3 font-normal text-gray-700 dark:text-gray-400">
                    Can bless one player, making them immune to one werewolf
                    attack.
                  </p>

                  {/* Display Time Opened */}
                  <p className="m-3 font-normal text-gray-700 dark:text-gray-400">
                    <b>Time Opened:</b> {timeOpened}
                  </p>

                  <DownloadApp />
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

      <Footer />
    </div>
  );
}
