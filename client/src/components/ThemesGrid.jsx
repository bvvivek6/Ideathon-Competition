import React from "react";
import { motion } from "framer-motion";

const ThemesGrid = () => {
  const themes = [
    {
      icon: "🏙",
      title: "Smart Urban Planning",
      description: "Innovative solutions for sustainable city development",
      color: "#4A90E2",
      bgLight: "#E6F0FF",
      bgImage:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      icon: "♻️",
      title: "Clean Mysuru",
      description: "Waste management and pollution reduction initiatives",
      color: "#50C878",
      bgLight: "#E6F5ED",
      bgImage:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      icon: "🕌",
      title: "Heritage & Tourism",
      description: "Preserving culture while enhancing visitor experiences",
      color: "#C9A333",
      bgLight: "#F7F2E3",
      bgImage:
        "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      icon: "💧",
      title: "Water & Green Spaces",
      description: "Solutions for water conservation and urban greenery",
      color: "#1E90FF",
      bgLight: "#E6F4FF",
      bgImage:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="section relative bg-[#f5f5f5]" id="themes">
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

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-left md:text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl">Ideathon Themes</h2>
          <div className="w-20 h-1 bg-mysuru-gold mx-auto "></div>
          <p className="text-md md:text-xl mx-auto">
            Focus your innovative ideas on these key areas to create meaningful
            impact
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {themes.map((theme, index) => (
            <motion.div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg transform transition-all hover:shadow-xl relative h-64"
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div
                className="absolute inset-0 z-0"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7)), url(${theme.bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderTop: `4px solid ${theme.color}`,
                }}
              />

              <div className="p-6 md:p-8 relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-4">
                    <h3
                      className="text-xl md:text-2xl font-bold"
                      style={{
                        color: "white",
                      }}
                    >
                      {theme.title}
                    </h3>
                  </div>
                </div>

                <p
                  className="text-white text-lg"
                  style={{ textShadow: "0 1px 2px rgba(0,0,0,0.8)" }}
                >
                  {theme.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ThemesGrid;
