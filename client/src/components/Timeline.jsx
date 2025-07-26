import React from "react";
import { motion } from "framer-motion";

const Timeline = () => {
  const timelineEvents = [
    {
      date: "August 1, 2025",
      title: "Ideathon Launch",
      description: "Official announcement and opening of idea submissions.",
    },
    {
      date: "September 15, 2025",
      title: "Submission Deadline",
      description: "Last date to submit your innovative ideas for Mysuru.",
    },
    {
      date: "September 20-30, 2025",
      title: "Screening & Evaluation",
      description: "Experts review submissions and select finalists.",
    },
    {
      date: "October 15, 2025",
      title: "Finalists Announcement",
      description: "Selected finalists are announced and invited to present.",
    },
    {
      date: "November 1, 2025",
      title: "Presentation Day",
      description: "Finalists present their ideas to officials and judges.",
    },
    {
      date: "November 1, 2025",
      title: "Awards Ceremony",
      description:
        "Winners announced and awarded with prizes and implementation support.",
    },
  ];

  return (
    <section
      className="section relative bg-[#f5f5f5]"
      id="timeline"
      style={{
        backgroundImage:
          "linear-gradient(rgba(245,245,245,0.15), rgba(245,245,245,0.15)), url('/timeline.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6E1E1E]/80 via-[#C9A333]/80 to-[#6E1E1E]/80"></div>
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-left md:text-center leading-tight mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-1">Timeline</h2>
          <p className="text-md md:text-xl max-w-3xl mx-auto">
            Key dates and milestones for the MyMysuru 2030 Ideathon
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute md:left-1/2 -left-1 transform -translate-x-1/2 h-full w-1 rounded-full block bg-[#0000004e]"></div>

          <div className="space-y-8 ml-7 md:ml-0 relative">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } md:items-center`}
              >
                <div className="absolute md:left-1/2 -left-8 transform -translate-x-1/2 w-5 h-5 rounded-full bg-[#6E1E1E] border-2 border-[#C9A333]"></div>

                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-8 text-right" : "md:pl-8"
                  }`}
                >
                  <div className="bg-white/40 backdrop-blur-2xl p-4 rounded-3xl shadow-lg relative border-x-4 border-[#6E1E1E]">
                    <div className="font-semibold text-sm mb-1 text-[#231d00]">
                      {event.date}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-[#6E1E1E]">
                      {event.title}
                    </h3>
                    <p className="text-[#333333]">{event.description}</p>
                  </div>
                </div>

                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
