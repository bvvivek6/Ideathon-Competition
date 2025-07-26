import React from "react";
import { motion } from "framer-motion";

const Organizers = () => {
  const organizers = [
    {
      name: "Office of the Hon'ble MP",
      role: "Primary Organizer",
      image: "https://via.placeholder.com/150",
      description: "Office of the Member of Parliament, Mysuru & Kodagu",
    },
    {
      name: "Mysuru City Corporation",
      role: "Supporting Partner",
      image: "https://via.placeholder.com/150",
      description:
        "Local government body overseeing Mysuru city administration",
    },
    {
      name: "Mysuru Smart City Ltd",
      role: "Technical Partner",
      image: "https://via.placeholder.com/150",
      description: "Leading Mysuru's smart city initiatives",
    },
  ];

  return (
    <section className="section relative bg-white" id="organizers">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="md:text-center leading-tight text-left mb-6"
        >
          <h2 className="text-4xl md:text-5xl mb-2">Organizers & Partners</h2>
          <p className="text-md md:text-xl max-w-3xl mx-auto">
            Meet the institutions and organizations making MyMysuru 2030
            Ideathon possible
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {organizers.map((organizer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden p-4 text-center"
            >
              <div className="w-28 h-28 rounded-full mx-auto mb-4 overflow-hidden border-4 border-[#C9A333]">
                <img
                  src={organizer.image}
                  alt={organizer.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1 text-[#6E1E1E]">
                {organizer.name}
              </h3>
              <div className="text-sm font-medium mb-3 text-[#C9A333]">
                {organizer.role}
              </div>
              <p className="text-gray-600">{organizer.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organizers;
