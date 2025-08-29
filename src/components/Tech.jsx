import React from "react";
import { technologies } from "../constants";

const TechCard = ({ tech }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#2d2d2d] via-[#1f1f1f] to-[#161616] rounded-lg shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
      <div className="w-16 h-16 mb-4 flex items-center justify-center bg-gray-700 rounded-full p-4 transition-all duration-300 transform hover:scale-110">
        <img src={tech.icon} alt={tech.name} className="w-12 h-12 object-contain" />
      </div>
      <h3 className="text-white font-semibold text-lg md:text-xl text-center">{tech.name}</h3>
    </div>
  );
};

const Technologies = () => {
  return (
   <div className="px-6  py-20">
     <div className=" max-w-7xl mx-auto">
      <h2 className="text-center text-4xl sm:text-5xl font-bold text-white mb-12">
        🛠️ Technologies I Use
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-6">
        {technologies.map((tech, index) => (
          <div key={index} className="w-full h-full">
            <TechCard tech={tech} />
          </div>
        ))}
      </div>
    </div>
   </div>
  );
};


export default Technologies;
