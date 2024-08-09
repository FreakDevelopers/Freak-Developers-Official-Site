import React, { useState } from "react";
import testimonials from "../../data/testimonials";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa6";
import { BiSolidStar } from "react-icons/bi";

function Testimonials() {
  const [current, setCurrent] = useState(1);
  const itemsPerPage = 1; // Number of items to display per slide
  const totalSlides = Math.ceil(testimonials.length / itemsPerPage);

  const prevSlideHandler = () => {
    setCurrent((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlideHandler = () => {
    setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <section className="my-32">
      <h2 className="mb-8 lg:mb-16 text-center text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
        Testimonials
      </h2>

      <div className="flex flex-col lg:flex-row justify-between gap-16">
        <div className="lg:w-1/2">
          <h3 className="mt-4 text-2xl sm:text-4xl text-center lg:text-left font-bold text-[#00325E] dark:text-white">
            What Our <span className="text-blue-500 italic">Customer</span> Says
            ?
          </h3>
          <p className="mt-4 text-center lg:text-left text-gray-600 dark:text-gray-400">
            Our customers consistently praise our dedication to excellence,
            reliability, and outstanding service. They appreciate our attention
            to detail, prompt communication, and high-quality results. Their
            satisfaction is our top priority, and their glowing testimonials
            reflect their trust and confidence in us.
          </p>
        </div>

        <div className="lg:w-1/2 overflow-hidden">
          <div
            className="min-w-full flex transition ease-linear duration-300 tracking-wide"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((item, id) => (
              <div
                key={id}
                className="flex flex-col shadow-md dark:shadow-black/30 min-w-full h-fit gap-y-4 border dark:border-gray-800 p-6 rounded-lg"
              >
                <div className="text-gray-600 dark:text-gray-300 text-lg">
                  <FaQuoteLeft size={45} />
                  <p className="font-medium mt-1">{item.message}</p>
                </div>
                <div className="flex gap-x-4">
                  <img
                    src={item.image}
                    alt="Test1"
                    className="object-cover h-12 w-12 rounded-full mx-"
                  />
                  <div>
                    <p className="dark:text-white font-semibold text-gray-600">
                      {item.name}
                    </p>
                    <div className="flex font-semibold text-yellow-500">
                      <BiSolidStar />
                      <BiSolidStar />
                      <BiSolidStar />
                      <BiSolidStar />
                      <BiSolidStar />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-end gap-x-1 mt-8 text-gray-400 text-3xl">
            <button
              type="button"
              onClick={prevSlideHandler}
              className="hover:text-gray-500 dark:hover:text-white"
            >
              <FaChevronLeft />
            </button>
            <button
              type="button"
              onClick={nextSlideHandler}
              className="hover:text-gray-500  dark:hover:text-white"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
