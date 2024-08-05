import React from "react";
import FAQs from "../components/FAQs/FAQs";
import Testimonials from "../components/Testimonials/Testimonials";
import VisionMission from "../components/VisionMission/VisionMission";

function About() {
  return (
    <>
      <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl text-center font-bold text-[#00325E] dark:text-white">
        About <span className="text-blue-500">Us</span>
      </h1>
      <VisionMission />
      <Testimonials />
      <FAQs />
    </>
  );
}

export default About;
