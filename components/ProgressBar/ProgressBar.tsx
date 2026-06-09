"use client";

import { motion, useScroll } from "motion/react";
import { useRef, useState, useEffect } from "react";

type ScrollLatest = number;

import { FaArrowUpLong } from "react-icons/fa6";

export default function ScrollProgressButton() {
  const ref = useRef(null);
  const { scrollYProgress, scrollY } = useScroll();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest: ScrollLatest) => {
      if (latest > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      ref={ref}
      className="fixed right-5 bottom-20 z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-14 h-14 flex items-center justify-center">
        {/* Progress Ring */}
        <svg
          className="absolute -rotate-90 pointer-events-none"
          width="56"
          height="56"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            pathLength="1"
            strokeWidth="2"
            className="stroke-gray-300 dark:stroke-gray-700 fill-none opacity-30"
          />

          <motion.circle
            cx="50"
            cy="50"
            r="40"
            pathLength="1"
            strokeWidth="2"
            className="stroke-primary fill-none"
            style={{ pathLength: scrollYProgress }}
          />
        </svg>

        {/* Button */}
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-transparent text-primary shadow-lg flex items-center justify-center hover:scale-110 transition cursor-pointer"
        >
          <FaArrowUpLong />
        </button>
      </div>
    </motion.div>
  );
}
