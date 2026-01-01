import React from "react";
import appStore from "../assets/app-store.png";
import mainImage from "../assets/slide4.jpg";
import Footer from "../components/Footer";
import Features from "../components/Features";

function Main() {
  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="relative z-10 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Content */}
              <div className="text-center lg:text-left">
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-tight">
                  Werewolf:
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                    Save the Village
                  </span>
                </h1>
                <h2 className="text-xl lg:text-2xl text-gray-300 mb-8 font-light leading-relaxed">
                  Unleash the role-playing game to the next level
                </h2>
                <p className="text-lg text-gray-400 mb-10 max-w-2xl leading-relaxed">
                  Gather your friends, uncover hidden identities, and decide who
                  to trust in this immersive game of mystery and strategy. Can
                  you save the village, or will the Werewolves prevail?
                </p>

                {/* CTA Section */}
                <div className="flex justify-center lg:justify-start">
                  <a
                    href="https://apps.apple.com/us/app/id6738326023"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-transform duration-300 hover:scale-105"
                  >
                    <img
                      src={appStore}
                      alt="Download on App Store"
                      className="h-12 w-auto drop-shadow-lg"
                    />
                  </a>
                </div>
              </div>

              {/* Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-3xl blur-lg opacity-20"></div>
                  <img
                    src={mainImage}
                    className="relative rounded-2xl shadow-2xl w-full max-w-lg lg:max-w-xl"
                    alt="Werewolf game interface"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Features />
      <Footer />
    </div>
  );
}

export default Main;
