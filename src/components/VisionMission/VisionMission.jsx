import React from "react";
import team1 from "../../assets/images/image4.svg";
import team2 from "../../assets/images/image1.svg";

function VisionMission() {
  return (
    <section className="my-16">
      <div className="flex flex-col lg:flex-row justify-between gap-16">
        <div className="lg:w-1/2">
          <h1 className="mt-8 text-2xl sm:text-4xl lg:text-5xl text-left font-bold text-[#00325E] dark:text-white">
            Our <span className="text-blue-500 italic">Vision</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed dark:text-gray-400">
            FreakDevs envisions a world where innovative software solutions
            empower businesses and individuals to achieve their full potential.
            They aim to be a leading force in the tech industry, driving
            progress through cutting-edge technology, exceptional service, and a
            commitment to quality. Their vision is to create a future where
            technology simplifies lives, enhances efficiency, and fosters
            creativity.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img src={team1} alt="Vision" />
        </div>
      </div>
      <hr className="my-16 dark:border-gray-800" />
      <div className="flex flex-col lg:flex-row justify-between gap-16">
        <div className="lg:w-1/2 order-2 lg:order-1">
          <img src={team2} alt="Vision" />
        </div>
        <div className="lg:w-1/2 order-1">
          <h1 className="mt-8 text-2xl sm:text-4xl lg:text-5xl text-left font-bold text-[#00325E] dark:text-white">
            Our <span className="text-blue-500 italic">Mission</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed dark:text-gray-400">
            The mission of FreakDevs is to deliver high-quality, customized
            software solutions that meet the unique needs of their clients. They
            are dedicated to innovation, collaboration, and continuous
            improvement, striving to exceed expectations in every project.
            FreakDevs is committed to building lasting relationships with
            clients by providing exceptional value, reliability, and support.
          </p>
        </div>
      </div>
      <hr className="my-16 dark:border-gray-800" />
    </section>
  );
}

export default VisionMission;
