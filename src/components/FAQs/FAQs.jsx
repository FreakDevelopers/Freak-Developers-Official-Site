import React, { useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);
  const answerRefs = useRef([]);

  const faqItems = [
    {
      q: "What are some random questions to ask?",
      a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",
    },
    {
      q: "Do you include common questions?",
      a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.",
    },
    {
      q: "Can I use this for 21 questions?",
      a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
    },
    {
      q: "Are these questions for girls or for boys?",
      a: "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).",
    },
    {
      q: "What do you wish you had more talent doing?",
      a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires.",
    },
  ];

  const handleOpenAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="my-32">
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
