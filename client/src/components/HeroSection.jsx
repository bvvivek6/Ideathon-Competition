import React from "react";
import { motion } from "framer-motion";

const HeroSection = ({ scrollToForm }) => {
  return (
    <motion.section
      className="relative h-screen flex items-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(110, 30, 30, 0.8)), url('/palace.jpg')`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container-custom relative z-10 mb-10 md:mb-0 flex flex-col md:flex-row items-center justify-center w-full h-full">
        <div className="flex-1 flex leading-tight flex-col justify-center items-start text-center md:text-left md:pr-12 md:pl-4 py-6 md:py-0 w-full">
          <motion.div
            className="w-full max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-semibold text-white mb-4 leading-tight drop-shadow-lg">
              MyMysuru <i className="text-[#C9A333] ">2030 </i>
              Ideathon
              <span className="align-middle">💡</span>
            </h1>
            <div className="md:hidden w-full flex flex-col items-center justify-center mb-10">
              <motion.img
                src="/yaduveer.jpg"
                alt="Mysuru King"
                className="w-48 h-48 rounded-full object-cover border-4 border-[#C9A333] shadow-2xl bg-white"
                style={{ objectPosition: "center" }}
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.8 },
                  },
                }}
              />
            </div>
            <h2 className="text-md md:text-2xl leading-tight font-semibold mb-2 text-[#e6b420] ">
              Ideas For Future Vision!
            </h2>

            <p className="text-base md:text-xl mb-8 text-white/90 drop-shadow-md font-medium">
              Contribute to a smarter, cleaner, greener, and more inclusive
              Mysuru.
            </p>
            <motion.button
              className="bg-[#C9A333] hover:bg-[#D6B244] text-white font-semibold px-6 py-3 rounded-full  border-2 border-white/30 text-md md:text-xl transition-transform focus:outline-none focus:ring-2 focus:ring-[#e6b420]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToForm}
            >
              Submit your Idea!
            </motion.button>
          </motion.div>
        </div>
        <motion.div
          className="hidden md:flex flex-col items-center justify-center md:items-end w-full md:w-auto md:mt-0"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.18 } },
          }}
        >
          <motion.img
            src="/yaduveer.jpg"
            alt="Mysuru King"
            className="w-90 h-90 rounded-full object-cover border-4 border-[#C9A333] shadow-2xl bg-white mx-0"
            style={{ objectPosition: "center" }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
            }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
