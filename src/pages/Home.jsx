import React from "react";
import Header from "../components/Header/Header";
import FAQs from "../components/FAQs/FAQs";
import Testimonials from "../components/Testimonials/Testimonials";
import VisionMission from "../components/VisionMission/VisionMission";
import Services from "../components/Services/Services";

function Home() {
  return (
    <>
      <Header />
      <Services />
      <VisionMission />
      <Testimonials />
      <FAQs />
    </>
  );
}

export default Home;
