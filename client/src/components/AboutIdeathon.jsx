import React from "react";
import { motion } from "framer-motion";

const AboutIdeathon = () => {
  return (
    <section className="section relative bg-white" id="about-ideathon">
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
              <p>
                Selected ideas will receive funding, implementation support, and
                recognition, with the potential to transform Mysuru into a model
                city that balances tradition with innovation.
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
                src="/public/image.png"
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
