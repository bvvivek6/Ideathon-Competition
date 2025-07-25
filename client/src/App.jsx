import React, { useRef } from "react";
import TitleHeader from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import AboutIdeathon from "./components/AboutIdeathon";
import Objectives from "./components/Objectives";
import ThemesGrid from "./components/ThemesGrid";
import Timeline from "./components/Timeline";
import Prizes from "./components/Prizes";
import Organizers from "./components/Organizers";
import SubmissionForm from "./components/SubmissionForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen dm-sans tracking-tight flex flex-col">
      <Navbar />
      <HeroSection scrollToForm={scrollToForm} />
      <AboutSection />
      <AboutIdeathon />
      <Objectives />
      <ThemesGrid />
      <Timeline />
      <Prizes />
      <Organizers />
      <div ref={formRef}>
        <SubmissionForm />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
