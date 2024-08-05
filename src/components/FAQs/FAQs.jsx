import React, { useRef, useState } from "react";
import faqItems from "../../data/faqItems";
import { FaChevronDown } from "react-icons/fa6";

function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);
  const answerRefs = useRef([]);

  const handleOpenAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="my-24">
      <h2 className="mb-12 text-center text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
        Frequently Asked Questions
      </h2>
      <div className="divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800">
        {faqItems.map((item, index) => (
          <div key={index}>
            <dl className="mx-auto max-w-2xl">
              <dt className="text-lg">
                <button
                  type="button"
                  onClick={() => handleOpenAnswer(index)}
                  className="flex w-full items-start justify-between py-6 text-left text-gray-400"
                >
                  <span className="font-medium text-gray-900 dark:text-white">
                    {item.q}
                  </span>
                  <span className="ml-6 flex h-7 items-center">
                    <FaChevronDown
                      className={`transform duration-300 ${
                        activeIndex === index ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </span>
                </button>
              </dt>
              <dd
                ref={(el) => (answerRefs.current[index] = el)}
                style={{
                  height:
                    activeIndex === index
                      ? `${answerRefs.current[index]?.scrollHeight}px`
                      : "0px",
                }}
                className={`block overflow-hidden pr-12 duration-300 ease-in-out`}
              >
                <p className="pb-6 text-base text-gray-600 dark:text-gray-400">
                  {item.a}
                </p>
              </dd>
            </dl>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQs;
