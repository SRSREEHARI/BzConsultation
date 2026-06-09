"use client";
import React, { useState } from "react";

import { Plus_Jakarta_Sans } from "next/font/google";
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
const Slide = () => {
  const [current, setCurrent] = useState(0);
  return (
    <>
      <div className="bg-black flex flex-col items-center w-full">
        <div className="relative w-full max-w-[1520px] h-[350px] sm:h-[650px] overflow-hidden">
          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {/* ===== SLIDE 1 ===== */}
            <div className="min-w-full h-full relative flex items-end">
              {/* img */}
              <img
                src="https://bzanalytics.ai/assets/images/blog/rag-l.jpg"
                className="absolute inset-0 w-full h-[300px] sm:h-[550px] object-cover rounded-2xl"
                alt=""
              />

              {/* White Card */}
              <div
                className={`relative mb-3 sm:mb-6 ml-3 sm:ml-10 
  w-[80%] sm:w-[633px] h-[250px] sm:h-[370px] bg-white 
  px-3 py-4 sm:px-8 sm:py-10
  rounded-2xl 
  shadow-2xl border border-gray-200
  ${plusJakarta.className}`}
              >
                <h1 className="flex items-center text-xs sm:text-sm font-semibold text-[rgb(73,0,167)] mb-3 sm:mb-4">
                  <span className="w-[16px] h-[16px] bg-[rgb(73,0,167)] rounded-full mr-2"></span>
                  <span className="text-[14px] font-normal">
                    Technology & Business
                  </span>
                </h1>

                <h1 className="text-lg sm:text-4xl text-black leading-snug mb-3 sm:mb-5 font-semibold">
                  Bridging the Gap: How RAG <br />
                  (Retrieval Augmented <br /> Generation) is Transforming <br />
                  Generative AI
                </h1>

                {/* Meta */}
                <span className="text-black font-bold text-xs sm:text-sm">
                  April 15, 2024{" "}
                  <span className="text-black ml-6"> • 10 min read</span>
                </span>
              </div>
            </div>

            {/* ===== SLIDE 2 ===== */}
            <div className="min-w-full h-full relative flex items-end">
              <img
                src="https://bzanalytics.ai/assets/images/blog/fashion-l.jpg"
                className="absolute inset-0 w-full h-[300px] sm:h-[550px] object-cover rounded-2xl"
                alt=""
              />

              {/* White Card */}
              <div
                className={`relative mb-3 sm:mb-6 ml-3 sm:ml-10 
  w-[80%] sm:w-[633px] h-[250px] sm:h-[370px] bg-white 
  px-3 py-4 sm:px-8 sm:py-10
  rounded-2xl 
  shadow-2xl border border-gray-200
  ${plusJakarta.className}`}
              >
                <h1 className="flex items-center text-xs sm:text-sm font-semibold text-[rgb(73,0,167)] mb-3 sm:mb-4">
                  <span className="w-[16px] h-[16px] bg-[rgb(73,0,167)] rounded-full mr-2"></span>
                  <span className="text-[14px] font-normal">
                    Technology & Business
                  </span>
                </h1>

                <h1 className="text-lg sm:text-4xl text-black leading-snug mb-3 sm:mb-5 font-semibold">
                  Unlocking the Future of <br />
                  Fashion:The Power Of Virtual <br /> Try-On and Digital
                  Innovation
                </h1>

                {/* Meta */}
                <span className="text-black font-bold text-xs sm:text-sm">
                  April 14, 2024{" "}
                  <span className="text-black ml-6"> • 12 min read</span>
                </span>
              </div>
            </div>

            {/* ===== SLIDE 3 ===== */}
            <div className="min-w-full h-full relative flex items-end">
              <img
                src="https://bzanalytics.ai/assets/images/blog/Blog_L11.jpg"
                className="absolute inset-0 w-full h-[300px] sm:h-[550px] object-cover rounded-2xl"
                alt=""
              />

              {/* White Card */}
              <div
                className={`relative mb-3 sm:mb-6 ml-3 sm:ml-10 
  w-[80%] sm:w-[633px] h-[250px] sm:h-[370px] bg-white 
  px-3 py-4 sm:px-8 sm:py-10
  rounded-2xl 
  shadow-2xl border border-gray-200
  ${plusJakarta.className}`}
              >
                <h1 className="flex items-center text-xs sm:text-sm font-semibold text-[rgb(73,0,167)] mb-3 sm:mb-4">
                  <span className="w-[16px] h-[16px] bg-[rgb(73,0,167)] rounded-full mr-2"></span>
                  <span className="text-[14px] font-normal">
                    Technology & Business
                  </span>
                </h1>

                <h1 className="text-lg sm:text-4xl text-black leading-snug mb-3 sm:mb-5 font-semibold">
                  Application Of Machine <br />
                  Learning In The Fashion
                  <br /> Industry
                </h1>

                {/* Meta */}
                <span className="text-black font-bold text-xs sm:text-sm">
                  october 20, 2023{" "}
                  <span className="text-black ml-6"> • 8 min read</span>
                </span>
              </div>
            </div>

            {/* ===== SLIDE 4 ===== */}
            <div className="min-w-full h-full relative flex items-end">
              <img
                src="https://bzanalytics.ai/assets/images/blog/Blog_L10.jpg"
                className="absolute inset-0 w-full h-[300px] sm:h-[550px] object-cover rounded-2xl"
                alt=""
              />

              {/* White Card */}
              <div
                className={`relative mb-3 sm:mb-6 ml-3 sm:ml-10 
  w-[80%] sm:w-[633px] h-[160px] sm:h-[200px] bg-white 
  px-3 py-4 sm:px-8 sm:py-10
  rounded-2xl 
  shadow-2xl border border-gray-200
  ${plusJakarta.className}`}
              >
                <h1 className="flex items-center text-xs sm:text-sm font-semibold text-[rgb(73,0,167)] mb-3 sm:mb-4">
                  <span className="w-[16px] h-[16px] bg-[rgb(73,0,167)] rounded-full mr-2"></span>
                  <span className="text-[14px] font-normal">
                    Technology & Business
                  </span>
                </h1>

                <h1 className="text-lg sm:text-4xl text-black leading-snug mb-3 sm:mb-5 font-semibold">
                  AI In Ecommerce
                </h1>

                {/* Meta */}
                <span className="text-black font-bold text-xs sm:text-sm">
                  Juky 8, 2024{" "}
                  <span className="text-black ml-10"> • 10 min read</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-3 mb-8 w-full px-4">
          {[0, 1, 2, 3].map((i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === i ? "bg-[#f79d0f] " : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Slide;
