import { motion } from "framer-motion";
import  Computers  from "./canvas/Earth.jsx";

const Hero = () => {
  return (
    <section
      className="relative h-screen w-full 
                 bg-[url('/images/bg.png')] bg-no-repeat bg-cover bg-center 
                 text-white overflow-hidden"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Container */}
    <div className=" h-full lg:py-10 max-lg:py-20  px-6">
        <div className="relative max-w-7xl mx-auto h-full flex flex-col lg:flex-row items-center justify-between  z-10">
        
        {/* LEFT: Text Content */}
        <div className="flex flex-col justify-center items-start w-full lg:w-1/2 h-full">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-6xl font-bold leading-tight text-white"
          >
            Hey, I'm <span className="text-emerald-400">Sohail</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-4 text-lg sm:text-xl text-gray-300 max-w-xl"
          >
            I'm a results-driven{" "}
            <span className="text-emerald-300">MERN Stack Developer</span>{" "}
            specializing in building fast, scalable, and elegant web applications.
            <br className="hidden sm:inline-block" />
            From powerful APIs to sleek, responsive UIs — I turn complex problems into
            seamless digital experiences.
          </motion.p>

          <button
            className="bg-white text-black px-6 py-3 rounded-lg mt-6 font-semibold
                       transition-transform duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
          >
            Contact Me
          </button>
        </div>

        {/* RIGHT: 3D Canvas */}
        <div className="flex justify-center items-center w-full lg:w-1/2 h-[300px] sm:h-[500px] lg:h-full mt-10 lg:mt-0">
          <Computers />
        </div>
      </div>
    </div>
    </section>
  );
};

export default Hero;
