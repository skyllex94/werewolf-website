import React from "react";
import appStore from "../assets/app-store.png";
import mainImage from "../assets/slide4.jpg";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Navbar from "../components/Navbar";

function Main() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <div>
        <div className="py-10 lg:pt-20">
          <div className="m-auto flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center px-6 xl:container md:px-12 lg:px-6">
            <div>
              <h2 className="text-white mt-10 xl:container text-start font-black text-2xl text-black-900 sm:mx-auto md:text-4xl lg:w-auto lg:text-left xl:text-5xl">
                Werewolf: Save the Village
                <br className="block" />
              </h2>
              <h2 className="text-white xl:container text-start text-2xl text-black-500 sm:mx-auto md:text-2xl lg:w-auto lg:text-left xl:text-4xl mt-5">
                Unleash the role-playing game to the next level
              </h2>
              <div className="relative mt-8 space-y-8 text-start">
                <p className="text-gray-400 dark:text-gray-300 sm:text-lg">
                  Gather your friends, uncover hidden identities, and decide who
                  to trust in this immersive game of mystery and strategy. Can
                  you save the village, or will the Werewolves prevail?
                </p>

                <div className="grid md:flex lg:justify-start">
                  <div className="flex justify-center">
                    <span className="font-medium dark:text-white md:block" />
                  </div>

                  <div className="text-white font-semibold dark:text-gray-300">
                    🌟
                    <span className="pl-2 ">
                      Get Started for Free with our Game App.
                    </span>
                    <a
                      href="https://apps.apple.com/us/app/id6738326023"
                      target="_blank"
                      rel="noreferrer"
                      className="flex space-x-4 mt-4"
                    >
                      <img
                        src={appStore}
                        alt="front-gif"
                        className="font-medium dark:text-white md:block h-20"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="mt-12">
                <div className="flex justify-center">
                  <img
                    src={mainImage}
                    className="landing-image rounded-2xl"
                    alt="vpn display"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Features />
      <Footer />
    </div>
  );
}

export default Main;
