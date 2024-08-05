import React from "react";

function Home() {
  return (
    <div className="py-14">
      <div className="text-center lg:text-left lg:w-[60%] flex flex-col gap-y-16">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#00325E] dark:text-white font-">
          Design, Build, <span className="text-blue-500 italic">Scale</span>
        </h1>
        <p className="text-lg text-gray-300 lg:w-[70%]">
          Computers used to be magical. But much of that magic has been lost
          over time, replaced by subpar tools and practices that slow teams down
          and hold great work back.
        </p>
      </div>
      {/* <hr className="border-gray-700" /> */}
    </div>
  );
}

export default Home;
