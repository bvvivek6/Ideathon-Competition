import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const features = [
    {
      icon: "🚀",
      title: "Present ideas to top officials",
      description:
        "Selected ideas will be presented directly to city officials and decision makers.",
    },
    {
      icon: "🏆",
      title: "Certificate from Hon'ble MP",
      description:
        "Receive recognition for your participation and innovative thinking.",
    },
    {
      icon: "🌱",
      title: "Chance for implementation",
      description:
        "The best ideas may be selected for actual implementation in Mysuru.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="section relative" id="about">
      <div className="absolute top-0 left-0 right-0"></div>

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-left md:text-center mb-6"
        >
          <h2 className="text-4xl md:text-5xl mb-2">Why Participate?</h2>
          <p className="text-md md:text-xl max-w-3xl mx-auto leading-tight ">
            Share your vision for Mysuru's future and be part of a
            transformative initiative to make our city better for everyone.
          </p>
        </motion.div>

        <motion.div
          className="items-center grid grid-cols-2 md:grid-cols-3 gap-2 "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl leading-tight border border-[#C9A333] p-4 sm:p-8 flex flex-col items-left text-left transition-all"
              variants={itemVariants}
            >
              <div className="text-4xl sm:text-5xl mb-3">{feature.icon}</div>
              <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3 text-left">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-mysuru-charcoal text-left ">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
