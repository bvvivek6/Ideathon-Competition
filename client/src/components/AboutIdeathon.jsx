import React from "react";
import { motion } from "framer-motion";

const AboutIdeathon = () => {
  return (
    <section className="section relative bg-white" id="about-ideathon">
      <div className="absolute inset-0 opacity-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern
              id="themePattern"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M30,5 L55,30 L30,55 L5,30 Z"
                fill="none"
                stroke="#6E1E1E"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#themePattern)" />
        </svg>
      </div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6E1E1E]/80 via-[#C9A333]/80 to-[#6E1E1E]/80"></div>
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-[#6E1E1E]">
              About MyMysuru 2030 Ideathon
            </h2>
            <div className="w-24 h-1 mb-8 bg-[#C9A333]"></div>

            <div className="space-y-4 leading-tight text-md md:text-lg">
              <p>
                The MyMysuru 2030 Ideathon is a citizen-centric innovation
                challenge designed to harness the collective creativity and
                wisdom of Mysuru's residents to shape the city's future.
              </p>
              <p>
                As we envision Mysuru in 2030, we seek fresh ideas that blend
                our rich heritage with modern solutions to create a smart,
                sustainable, and inclusive city that honors its cultural roots
                while embracing technological advancement.
              </p>
              <p>
                This initiative is organized by the Office of the Hon'ble Member
                of Parliament, Mysuru & Kodagu, in collaboration with local
                government bodies and civic organizations to ensure that
                citizens have a direct voice in urban development.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <div className="rounded-xl overflow-hidden shadow-xl relative z-10 border-4 border-white">
              <img
                src="/image.png"
                alt="Mysuru Palace"
                className="w-[40rem] h-[30rem] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutIdeathon;
