import React from "react";
import { Link } from "react-router-dom";
import team from "../../assets/images/team.svg";

function Header() {
  return (
    <section className="py-14 relative border-b dark:border-b-gray-800">
      <h1 className="text-center text-5xl sm:text-6xl lg:text-7xl lg:text-left font-bold text-[#00325E] dark:text-white">
        Design, Build, <span className="text-blue-500 italic">Scale</span>
      </h1>
      <div className="relative items-center gap-12 lg:flex">
        <div className="text-center sm:mx-auto sm:w-11/12 md:mt-12 md:w-4/5 lg:mt-0 lg:mr-auto lg:w-6/12 lg:text-left">
          <p className="mt-12 text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
            At FreakDevs, we harness the power of cutting-edge technology to
            deliver innovative software solutions tailored to your needs.
            Whether you're a startup or an established enterprise, our team of
            expert developers and creative thinkers are dedicated to turning
            your vision into reality.
          </p>
          <Link
            className="mt-12 inline-block px-6 py-3 rounded-full bg-blue-700 dark:bg-blue-400 dark:text-[#0F172A] text-white font-semibold"
            to={"/contact"}
          >
            Get Started
          </Link>
        </div>
        <div className="mt-12 w-full overflow-hidden sm:mt-20 lg:-mt-8 lg:w-6/12">
          <img className="w-full" src={team} alt="team" />
        </div>
      </div>
    </section>
  );
}

export default Header;
