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
    <section className="section relative bg-[#f8f6f4] " id="objectives">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6E1E1E]/80 via-[#C9A333]/80 to-[#6E1E1E]/80"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6E1E1E]/80 via-[#C9A333]/80 to-[#6E1E1E]/80"></div>

      <div className="container-custom py-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-left md:text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl ">Objectives</h2>
          <p className="text-md md:text-xl max-w-3xl mx-auto">
            What we aim to achieve through the MyMysuru 2030 Ideathon
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl bg-[#6E1E1E] text-[#C9A333] shadow-lg">
                  {objective.number}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#6E1E1E]">
                  {objective.title}
                </h3>
                <p className="text-[#333333]">{objective.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;
