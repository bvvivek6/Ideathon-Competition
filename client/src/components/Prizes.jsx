import React from "react";
import { motion } from "framer-motion";

const Prizes = () => {
  const prizes = [
    {
      position: "1st Prize",
      amount: "₹1,00,000",
      gradient: "from-yellow-400 to-yellow-200", // Gold Gradient
      benefits: [
        "Cash Prize",
        "Implementation Support",
        "Recognition Certificate",
        "Meeting with Officials",
      ],
    },
    {
      position: "2nd Prize",
      amount: "₹50,000",
      gradient: "from-gray-400 to-gray-200", // Silver Gradient
      benefits: [
        "Cash Prize",
        "Recognition Certificate",
        "Meeting with Officials",
      ],
    },
    {
      position: "3rd Prize",
      amount: "₹25,000",
      gradient: "from-amber-700 to-amber-400", // Bronze Gradient
      benefits: ["Cash Prize", "Recognition Certificate"],
    },
  ];

  return (
    <section
      className="py-24 px-6 relative bg-gradient-to-br from-[#f9f9f9] to-[#fff] text-black"
      id="prizes"
    >
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-medium text-[#6E1E1E]">
          🏆 Grand Prizes
        </h2>
        <div className="w-16 md:w-24 h-1 mb-6 bg-[#C9A333] mx-auto rounded-full"></div>
        <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-xl mx-auto">
          Recognizing the brightest ideas that can shape a better Mysuru.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {prizes.map((prize, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.1 }}
            className="relative group rounded-3xl p-8 border border-yellow-600 bg-white transition-all duration-300"
          >
            <div
              className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br ${prize.gradient} flex items-center justify-center shadow-md ring-4 ring-white`}
            >
              <span className="text-xl font-bold text-white drop-shadow">
                {index + 1}
              </span>
            </div>

            <div className="mt-10 text-center">
              <h3 className="text-2xl font-semibold text-[#6E1E1E] mb-1">
                {prize.position}
              </h3>
              <div
                className={`text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${prize.gradient} mb-6`}
              >
                {prize.amount}
              </div>

              <div className="border-t border-gray-200 pt-4 mt-4">
                <h4 className="font-semibold mb-3 text-gray-700">Benefits</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  {prize.benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-center gap-2"
                    >
                      <svg
                        className="w-4 h-4 text-yellow-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Prizes;
