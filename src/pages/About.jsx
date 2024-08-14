import React from "react";
import FAQs from "../components/FAQs/FAQs";
import Testimonials from "../components/Testimonials/Testimonials";
import VisionMission from "../components/VisionMission/VisionMission";

function About() {
  return (
    <>
       <h1 className="mt-12 text-center text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
        About <span className="text-blue-500">Us</span>
      </h1>
      <VisionMission />
      <Testimonials />
      <FAQs />
    </>
  );
}

export default About;
