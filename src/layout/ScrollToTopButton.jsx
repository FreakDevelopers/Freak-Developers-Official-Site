import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  // Track scroll progress and button visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollTop / docHeight) * 100;

      setScrollPercent(scrollProgress);

      setIsVisible(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <div
        className="fixed bottom-8 right-8 flex items-center justify-center p-[3px] rounded-[50%]"
        style={{
          backgroundImage: `conic-gradient(#3b82f6 ${scrollPercent}%, transparent ${scrollPercent}%)`,
        }}
      >
        <button
          onClick={scrollToTop}
          className="w-10 h-10 bg-white dark:bg-[#1E293B] bg-opacity-90 dark:bg-opacity-90 rounded-full border-0 outline-none flex items-center justify-center cursor-pointer shadow-xl hover:shadow-lg transition-all duration-200"
          aria-label="Scroll to Top"
          title="Scroll to Top"
        >
          <FaArrowUp className="text-gray-800 dark:text-white text-lg" />
        </button>
      </div>
    )
  );
}

export default ScrollToTopButton;
