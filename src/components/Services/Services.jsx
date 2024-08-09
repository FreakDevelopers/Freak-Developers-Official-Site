import React from "react";
import { FaJava, FaLaptopCode, FaReact } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { CgColorPicker } from "react-icons/cg";
import { MdColorLens, MdSettings } from "react-icons/md";

function Services() {
  return (
    <section>
      {/* Our Tech Stack */}
      <div className="py-12 border-b dark:border-b-gray-800">
        <p className="uppercase text-slate-900 dark:text-white text-center mb-8 text-sm tracking-widest font-semibold">
          We Choose Latest Tech Stack
        </p>
        <div className="flex flex-wrap justify-center gap-6 lg:justify-between text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-x-2 text-xl font-semibold hover:dark:text-white hover:text-gray-800 hover:scale-105 duration-200">
            <FaReact size={30} />
            <span>ReactJs</span>
          </div>
          <div className="flex items-center gap-x-2 text-xl font-semibold hover:dark:text-white hover:text-gray-800 hover:scale-105 duration-200">
            <FaJava size={30} />
            <span>Java</span>
          </div>
          <div className="flex items-center gap-x-2 text-xl font-semibold hover:dark:text-white hover:text-gray-800 hover:scale-105 duration-200">
            <IoLogoNodejs size={30} />
            <span>NodeJs</span>
          </div>
          <div className="flex items-center gap-x-2 text-xl font-semibold hover:dark:text-white hover:text-gray-800 hover:scale-105 duration-200">
            <GrMysql size={30} />
            <span>MySQL</span>
          </div>
          <div className="flex items-center gap-x-2 text-xl font-semibold hover:dark:text-white hover:text-gray-800 hover:scale-105 duration-200">
            <SiMongodb size={30} />
            <span>Mongodb</span>
          </div>
        </div>
      </div>

      {/* Our Services */}
      <div className="py-12">
        <h3 className="text-center text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-12">
          Our Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="flex flex-col justify-center items-center gap-y-2 border dark:border-gray-700 bg-blue-400/10 dark:bg-slate-700/10 rounded-2xl p-8 hover:scale-105 duration-300">
            <MdColorLens
              className="inline-block mx-auto text-blue-600"
              size={100}
            />
            <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              Web Design
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-center">
              We'll come up with a UI design that coincides with your
              expectations and brand requirement.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2 border dark:border-gray-700 bg-blue-400/10 dark:bg-slate-700/10 rounded-2xl p-8 hover:scale-105 duration-300">
            <FaLaptopCode
              className="inline-block mx-auto text-blue-600"
              size={100}
            />
            <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              Web Development
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-center">
              We'll evaluate the website requirements and turn your idea into an
              innovative website.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2 border dark:border-gray-700 bg-blue-400/10 dark:bg-slate-700/10 rounded-2xl p-8 hover:scale-105 duration-300">
            <MdSettings
              className="inline-block mx-auto text-blue-600"
              size={100}
            />
            <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              Web Hosting
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-center">
              We'll finally deliver the output and deploy complete product with
              hosting and provide support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
