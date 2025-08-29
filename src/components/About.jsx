import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Card Component
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="w-full sm:w-[260px]">
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="bg-gradient-to-br from-[#2d2d2d] via-[#1f1f1f] to-[#161616] 
                 p-[2px] rounded-xl shadow-xl hover:shadow-2xl 
                 transition-all duration-300 transform hover:scale-105"
    >
      <div
        options={{
          max: 25,
          scale: 1,
          speed: 400,
        }}
        className="hover:bg-[#2a2a2a] rounded-xl py-10 px-6 
                   flex flex-col items-center justify-center h-[260px] 
                   transition-colors duration-300"
      >
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain mb-4 transform transition-all duration-300 hover:scale-110"
        />
        <h3 className="text-gray-300 text-xl font-semibold text-center mt-4">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <section className="py-20 px-6">
      {/* Container */}
      <div className="max-w-7xl mx-auto relative z-0">
        
        {/* Heading */}
        <motion.div
          variants={textVariant()}
          className="w-full text-center lg:text-left"
        >
          <p className="text-base text-cyan-400 tracking-wide uppercase mb-2">
            👋 Introduction
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            💻 Full Stack & Mobile Developer
          </h2>
        </motion.div>

        {/* Intro Paragraph */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-6 text-gray-300 text-[17px] max-w-4xl leading-[30px]"
        >
          I'm a developer skilled in building full-stack web applications with the
          <span className="text-emerald-400 font-semibold"> MERN Stack</span> (MongoDB,
          Express, React, Node.js), and cross-platform mobile apps using
          <span className="text-green-400 font-semibold"> React Native</span>. My goal
          is to craft fast, secure, and modern apps that work seamlessly across
          devices.
        </motion.p>

        {/* Web Section */}
        <div className="mt-16">
          <h3 className="text-2xl text-emerald-400 mb-6 text-center">
            🌐 Web Development (MERN Stack)
          </h3>
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                       justify-center gap-8"
          >
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                index={index}
                title={service.title}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
