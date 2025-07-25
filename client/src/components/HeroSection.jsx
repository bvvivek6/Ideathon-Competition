import React from "react";
import { motion } from "framer-motion";

const HeroSection = ({ scrollToForm }) => {
  return (
    <section
      className="relative h-screen flex items-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(110, 30, 30, 0.8)), url('/palace.jpg')`,
      }}
    >
      <div className="container-custom relative z-10 mb-10 md:mb-0 text-left leading-tight md:text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-4"
        >
          <h1 className="text-4xl md:text-5xl font-medium mb-4 text-white">
            MyMysuru 2030 Ideathon💡
          </h1>

          <h2 className="text-2xl md:text-4xl font-bold mb-3 text-[#e6b420] ">
            Submit Your Idea to Shape Our City's Future
          </h2>

          <p className="text-xl md:text-2xl mb-8 text-white drop-shadow-md">
            Contribute to a smarter, cleaner, greener, and more inclusive
            Mysuru.
          </p>

          <motion.button
            className="bg-[#C9A333] hover:bg-[#D6B244] text-white font-semibold px-4 py-2 rounded-lg shadow-md border-2 border-white/30 text-md md:text-xl transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToForm}
          >
            Submit your Idea!
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
