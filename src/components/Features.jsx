import React from "react";

import { FaRegUser } from "react-icons/fa";
import { FaAssistiveListeningSystems } from "react-icons/fa";
import { MdRule } from "react-icons/md";
import { FaGamepad } from "react-icons/fa";

import { MdDesignServices } from "react-icons/md";

export default function Features() {
  const features = [
    {
      icon: <FaRegUser size={32} />,
      title: "Effortless Role Assignment",
      description: "Players scan a QR code to instantly receive their roles online—no manual setup required.",
      gradient: "from-blue-500 to-cyan-500",
      shadowColor: "shadow-blue-500/20"
    },
    {
      icon: <FaAssistiveListeningSystems size={32} />,
      title: "Narrator Assistance",
      description: "Built-in voice guidance and timers streamline gameplay and keep the game flowing.",
      gradient: "from-orange-500 to-red-500",
      shadowColor: "shadow-orange-500/20"
    },
    {
      icon: <MdRule size={32} />,
      title: "Inclusive Instructions",
      description: "Step-by-step guidance for both new and experienced players, making it easy for anyone to join in.",
      gradient: "from-yellow-500 to-orange-500",
      shadowColor: "shadow-yellow-500/20"
    },
    {
      icon: <FaGamepad size={32} />,
      title: "Dynamic Role Interactions",
      description: "Handles complex role interactions and edge cases automatically, ensuring smooth gameplay.",
      gradient: "from-green-500 to-teal-500",
      shadowColor: "shadow-green-500/20"
    },
    {
      icon: <MdDesignServices size={32} />,
      title: "Immersive Design",
      description: "Stunning visuals and user-friendly interface bring the game to life for players of all ages.",
      gradient: "from-purple-500 to-pink-500",
      shadowColor: "shadow-purple-500/20"
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
      title: "Flexible Game Modes",
      description: "Customize settings to match your group's size and preferred level of complexity.",
      gradient: "from-indigo-500 to-purple-500",
      shadowColor: "shadow-indigo-500/20"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Werewolf</span>?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience the next generation of social deduction games with features designed for modern players.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Background gradient effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>

              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} ${feature.shadowColor} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
