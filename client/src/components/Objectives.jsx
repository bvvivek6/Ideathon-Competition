import React from "react";
import { motion } from "framer-motion";

const Objectives = () => {
  const objectives = [
    {
      number: "01",
      title: "Foster Civic Innovation",
      description:
        "Encourage citizens to develop innovative solutions for local challenges facing Mysuru.",
    },
    {
      number: "02",
      title: "Bridge the Gap",
      description:
        "Connect citizens' ideas with policy makers and implementation authorities.",
    },
    {
      number: "03",
      title: "Create Sustainable Solutions",
      description:
        "Develop practical, implementable, and sustainable solutions for long-term impact.",
    },
    {
      number: "04",
      title: "Preserve Heritage",
      description:
        "Balance modernization with preservation of Mysuru's rich cultural heritage.",
    },
  ];

  return (
    <section className="section relative bg-white" id="objectives">
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
      </div>{" "}
      <div className="container-custom py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-left md:text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-medium text-[#6E1E1E] mb-2">
            Objectives
          </h2>
          <div className="w-16 md:w-24 h-1 mb-6 bg-[#C9A333] mx-auto rounded-full"></div>
          <p className="text-md md:text-xl max-w-3xl mx-auto text-[#3d2c1e]">
            What we aim to achieve through the MyMysuru 2030 Ideathon
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:mx-20 mx-0 gap-4">
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative bg-white/90 rounded-2xl   border border-[#f3e6c0] p-8 flex gap-6 items-center backdrop-blur-sm hover:scale-[1.025] transition-transform"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl bg-gradient-to-br from-[#C9A333] to-[#6E1E1E] text-white shadow-lg border-4 border-[#fffbe8]">
                  {objective.number}
                </div>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold  mb-2 text-[#6E1E1E] ">
                  {objective.title}
                </h3>
                <p className="text-[#3d2c1e] text-base md:text-lg font-medium">
                  {objective.description}
                </p>
              </div>
              {/* Gold accent bar */}
              <div className="absolute left-0 bottom-0 w-full h-2 bg-gradient-to-r from-[#C9A333]/80 via-[#fffbe8]/60 to-[#C9A333]/80 opacity-80 rounded-b-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;
