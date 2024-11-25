import React from "react";

import { MdSpeed } from "react-icons/md";
import { TbFreeRights } from "react-icons/tb";
import { CiMobile3 } from "react-icons/ci";
import { MdOutlineLockOpen } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FaAssistiveListeningSystems } from "react-icons/fa";
import { MdRule } from "react-icons/md";
import { FaGamepad } from "react-icons/fa";
import { SiVorondesign } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";

export default function Features() {
  return (
    <div className="bg-gray-800 px-3 md:lg:xl:px-64 border-t border-b py-40 bg-opacity-10 rounded-2xl">
      <div className="bg-gray-800 grid grid-cols-1 md:lg:xl:grid-cols-3 group shadow-xl rounded-2xl shadow-neutral-100 border ">
        <div className="bg-gray-800 p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 ">
          <span className="p-5 rounded-full bg-gray-500 text-white shadow-lg shadow-red-200">
            <FaRegUser size={40} />
          </span>
          <p className="text-white text-xl font-medium text-slate-700 mt-3">
            Effortless Role Assignment
          </p>
          <p className="text-gray-400 mt-2 text-sm">
            Players scan a QR code to instantly receive their roles online—no
            manual setup required.
          </p>
        </div>

        <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 ">
          <span className="p-5 rounded-full bg-gray-500 text-white shadow-lg shadow-orange-200">
            <FaAssistiveListeningSystems size={40} />
          </span>
          <p className="text-white text-xl font-medium text-slate-700 mt-3">
            Narrator Assistance
          </p>
          <p className="text-gray-400 mt-2 text-sm">
            Built-in voice guidance and timers streamline gameplay and keep the
            game flowing.
          </p>
        </div>

        <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-b hover:bg-slate-50 ">
          <span className="p-5 rounded-full bg-gray-500 text-white shadow-lg shadow-yellow-200">
            <MdRule size={40} />
          </span>
          <p className="text-white text-xl font-medium text-slate-700 mt-3">
            Inclusive Instructions
          </p>
          <p className="text-gray-400 mt-2 text-sm">
            Step-by-step guidance for both new and experienced players, making
            it easy for anyone to join in.
          </p>
        </div>

        <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r hover:bg-slate-50 ">
          <span className="p-5 rounded-full bg-gray-500 text-white shadow-lg shadow-green-200">
            <FaGamepad size={40} />
          </span>
          <p className="text-white text-xl font-medium text-slate-700 mt-3">
            Dynamic Role Interactions
          </p>
          <p className="text-gray-400 mt-2 text-sm">
            Handles complex role interactions and edge cases automatically,
            ensuring smooth gameplay.
          </p>
        </div>

        <div className="p-10 flex flex-col items-center text-center group    md:lg:xl:border-r hover:bg-slate-50 ">
          <span className="p-5 rounded-full bg-gray-500 text-white shadow-lg shadow-green-200">
            <MdDesignServices size={40} />
          </span>
          <p className="text-white text-xl font-medium text-slate-700 mt-3">
            Immersive Design
          </p>
          <p className="text-gray-400 mt-2 text-sm">
            Stunning visuals and user-friendly interface bring the game to life
            for players of all ages.
          </p>
        </div>

        <div className="p-10 flex flex-col items-center text-center group hover:bg-slate-50 ">
          <span className="p-5 rounded-full bg-gray-500 text-white shadow-lg shadow-teal-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
          </span>
          <p className="text-white text-xl font-medium text-slate-700 mt-3">
            Flexible Game Modes
          </p>
          <p className="text-gray-400 mt-2 text-sm">
            Customize settings to match your group's size and preferred level of
            complexity.can rest assured your privacy is staying intact at all
            times.
          </p>
        </div>
      </div>
    </div>
  );
}
