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
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            reiciendis quod, velit ducimus optio mollitia ab cum aliquam!
            Excepturi eaque explicabo nihil sed est magni ea modi animi corrupti
            eligendi!
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
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            reiciendis quod, velit ducimus optio mollitia ab cum aliquam!
            Excepturi eaque explicabo nihil sed est magni ea modi animi corrupti
            eligendi!
          </p>
        </div>
      </div>
      <hr className="my-16 dark:border-gray-800" />
    </section>
  );
}

export default VisionMission;
