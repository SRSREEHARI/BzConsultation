"use client";

import React, { useState } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";

type News = {
  id: number;
  slug: string;
  title: React.ReactNode; // 👈 important for <br/>
  category: string;
  date: string;
  readTime: string;
  image: string;
};

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const Slide = () => {
  const [current, setCurrent] = useState(0);

  const NewsData: News[] = [
    {
      id: 1,
      slug: "bzanalytics-journey",
      title: (
        <>
          From Vision to Reality: <br />
          BzAnalytics&apos;s Journey from <br /> 2020 to 2023
        </>
      ),
      category: "News",
      date: "April 16, 2024",
      readTime: "10 min read",
      image: "newssingle1.jpg",
    },
    {
      id: 2,
      slug: "bzanalytics-cloudq-alliance",
      title: (
        <>
          BzAnalytics and CloudQ Forge <br />
          a Formidable Alliance to <br />
          Redefine Business Solutions in 2023
        </>
      ),
      category: "News",
      date: "July 29, 2023",
      readTime: "10 min read",
      image: "newssingle2.jpg",
    },
    {
      id: 3,
      slug: "bzanalytics-recognition",
      title: (
        <>
          BzAnalytics Achieves <br />
          Outstanding Recognition: <br />
          Among Top 5 Companies at <br />
          Prestigious Entrepreneurship <br />
          Expo
        </>
      ),
      category: "News",
      date: "November 30, 2023",
      readTime: "10 min read",
      image: "newssingle3.jpg",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full mt-14">
      <div className="relative w-full max-w-[1520px] h-[350px] sm:h-[650px] overflow-hidden">
        
        {/* SLIDER */}
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {NewsData.map((news, index) => (
            <Link
              key={news.id}
              href={`/news/${news.slug}`}
              className="min-w-full h-full relative flex items-end"
            >
              {/* img */}
              <img
                src={news.image}
                className="absolute inset-0 w-full h-[300px] sm:h-[550px] object-cover rounded-2xl"
                alt="news"
              />

              {/* White Card */}
              <div
                className={`relative mb-3 sm:mb-6 ml-3 sm:ml-15 
                w-[80%] sm:w-[633px] 
                px-3 py-4 sm:px-8 sm:py-10
                bg-white rounded-2xl 
                shadow-2xl border border-gray-200
                ${plusJakarta.className}
                
                ${
                  index === 0
                    ? "h-[250px] sm:h-[310px]"
                    : index === 1
                    ? "h-[250px] sm:h-[340px]"
                    : "h-[250px] sm:h-[390px]"
                }
                `}
              >
                {/* Category */}
                <h1 className="flex items-center text-xs sm:text-sm font-semibold text-[rgb(73,0,167)] mb-3 sm:mb-4">
                  <span className="w-[16px] h-[16px] bg-[rgb(73,0,167)] rounded-full mr-2"></span>
                  <span className="text-[14px] font-normal">
                    {news.category}
                  </span>
                </h1>

                {/* Title */}
                <h1 className="text-lg sm:text-4xl text-black leading-tight mb-3 sm:mb-5 font-semibold">
                  {news.title}
                </h1>

                {/* Meta */}
                <span className="text-black font-medium text-xs sm:text-sm">
                  {news.date}
                  <span className="ml-6"> • {news.readTime}</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* DOTS */}
      <div className="flex justify-center space-x-3 mb-8 w-full px-4">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              current === i ? "bg-[#f79d0f]" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slide;
