import React from "react";
import Header from "../components/Header/Header";
import FAQs from "../components/FAQs/FAQs";
import Testimonials from "../components/Testimonials/Testimonials";
import VisionMission from "../components/VisionMission/VisionMission";

function Home() {
  return (
    <>
      <Header />
      <VisionMission />
      <Testimonials />
      <FAQs />
    </>
  );
}

export default Home;
