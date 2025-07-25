import React from "react";
import { motion } from "framer-motion";

const Prizes = () => {
  const prizes = [
    {
      position: "1st Prize",
      amount: "₹1,00,000",
      color: "#FFD700", // Gold
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
      color: "#C0C0C0", // Silver
      benefits: [
        "Cash Prize",
        "Recognition Certificate",
        "Meeting with Officials",
      ],
    },
    {
      position: "3rd Prize",
      amount: "₹25,000",
      color: "#CD7F32", // Bronze
      benefits: ["Cash Prize", "Recognition Certificate"],
    },
  ];

  return (
    <section
      className="section relative py-20 flex items-center justify-center  text-black"
      id="prizes"
    >
      <div className="w-6xl relative z-10 p-[10px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="md:text-center text-left mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-black">Cash Prizes</h2>
          <p className="text-md md:text-xl max-w-3xl mx-auto text-black opacity-90">
            Exciting rewards await the most innovative ideas that can transform
            Mysuru
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prizes.map((prize, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.1 }}
              className="relative"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg p-6 text-center transform transition-transform duration-300 hover:scale-105 text-[#333333]">
                <div className="absolute top-0 right-0">
                  <div
                    className="w-24 h-24 overflow-hidden"
                    style={{
                      position: "absolute",
                      top: "-12px",
                      right: "-12px",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: prize.color,
                        width: "120%",
                        height: "30px",
                        position: "absolute",
                        transform: "rotate(45deg)",
                        top: "20px",
                        right: "-30px",
                        boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
                      }}
                    ></div>
                  </div>
                </div>

                <div
                  className="w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-4 bg-[#f5f5f5]"
                  style={{ border: `3px solid ${prize.color}` }}
                >
                  <span className="text-3xl text-[#6E1E1E]">{index + 1}</span>
                </div>

                <h3 className="text-xl font-bold mb-1 text-[#6E1E1E]">
                  {prize.position}
                </h3>

                <div
                  className="text-3xl md:text-4xl font-bold my-4"
                  style={{ color: prize.color }}
                >
                  {prize.amount}
                </div>

                <div className="border-t pt-4 mt-4">
                  <h4 className="font-semibold mb-2">Benefits</h4>
                  <ul className="space-y-2">
                    {prize.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-center justify-center"
                      >
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="#C9A333"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prizes;
