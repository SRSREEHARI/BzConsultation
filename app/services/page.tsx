"use client";
import React, { useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import BreadcrumbWrapper from "@/components/BreadcrumbWrapper";

interface Service {
  icon: string;
  title: string;
  description: string;
  link: string;
}

export default function ServicesPage() {
  // NOTE: This file is a React client component.

  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    fetch("/api/services")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch services");
        }
        return res.json();
      })
      .then((data) => setServices(data))
      .catch((err) => console.error("API Error:", err));
  }, []);

  return (
    <>
      {/*HERO*/}
      <section className="page-header relative consultant min-h-[50vh] sm:min-h-[40vh] md:min-h-[60vh] flex items-center">
        <div className="absolute h-full bg-img inset-0 bg-gray-200 dark:bg-gray-900" />
        <div className="absolute overlay hidden dark:block" />

        <BreadcrumbWrapper />
      </section>

      {/*SECOND SECTION  */}
      <div className="theme-bg theme-text  px-6 py-16 sm:py-10 text-center  lg:mt-8 md:mt-6 mt-6">
        <div className="flex justify-center mt-10 sm:mt-16 ">
          <span className="w-2 h-2 -mt-5 bg-orange-400 rounded-full text-2xl"></span>
        </div>

        <p className="uppercase text-xs sm:text-sm md:text-sm mb-2">
          What We&apos;re Offering
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-[46px] font-extrabold leading-12">
          Services we&apos;re providing <br />
          to our customers
        </h1>
      </div>

      {/* mapping cards */}
      <div className="w-full theme-bg lg:mt-12  md:-mt-12 px-0 sm:px-4 md:px-6">
        <div
          data-aos="fade-up"
          className="max-w-7xl mx-5 my-5 -mt-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 "
        >
          {services?.map((service, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="bg-[#101010] text-[#EAEAEA]
  w-full p-8 sm:p-1
  text-left lg:p-10
  border border-transparent
  hover:border-white
  transition-all duration-300
  flex flex-col gap-6"
            >
              {/* Icon */}
              <img
                src={service.icon}
                alt={service.title}
                className="w-12 sm:w-16 h-12 sm:h-16 object-contain"
              />

              {/* Title */}
              <h3 className="text-xl sm:text-lg font-bold hover:text-orange-400 cursor-pointer">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-base lg:text-sm sm:text-lg leading-6 lg:leading-6 font-semibold text-[#CFCFCF]">
                {service.description}
              </p>

              {/* Line */}
              <hr className="border-gray-600" />

              {/* Read More */}
              <Link
                href={service.link}
                className="flex items-center gap-2 text-sm font-medium
    transition-all duration-300 ease-in-out hover:text-orange-400 group"
              >
                Read More
                <FaArrowRight className="transition-transform duration-300 ease-in-out rotate-[45deg] group-hover:rotate-[0deg]" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* grid */}
      <div className="w-full md:-mt-13 sm:-mt-10 -mt-10  lg:-mt-5 theme-bg py-16 md:py-20 px-6 md:px-10 lg:px-10 overflow-hidden ">
        <div
          className="max-w-7xl mx-auto 
    flex flex-col 
    lg:flex-row 
    items-center 
    gap-18 lg:gap-22"
        >
          {/* ================= LEFT CONTENT ================= */}
          <div data-aos="fade-right" className="w-full  lg:w-1/2">
            {/* Orange Dot */}
            <div className="text-orange-400 text-3xl mb-4">•</div>

            <p className="text-sm font-bold text-gray-400 tracking-widest">
              WHY CHOOSE US
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold theme-textleading-tight">
              Providing the best
              <br className="hidden sm:block" /> services
            </h2>

            <div className="mt-12 space-y-10">
              {/* Item */}
              <div className="flex items-start gap-5 group">
                <div
                  className="group w-14 h-14 flex-shrink-0 
  bg-[#101010] rounded-full 
  flex items-center justify-center 
  transition-all duration-300 
  group-hover:bg-orange-400"
                >
                  <FaCheck
                    className="text-orange-400 text-lg 
    transition-colors duration-300 
    group-hover:text-white "
                  />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold theme-text mb-2">
                    Innovative Approach
                  </h3>
                  <p className="theme-text text-sm sm:text-base leading-relaxed">
                    Our company stands out for its innovative thinking, offering
                    fresh perspectives and creative solutions to meet your
                    unique needs.
                  </p>
                </div>
              </div>

              {/* Item */}
              <div className="flex items-start gap-5 group">
                <div
                  className="group w-14 h-14 flex-shrink-0 
  bg-[#101010] rounded-full 
  flex items-center justify-center 
  transition-all duration-300 
  group-hover:bg-orange-400"
                >
                  <FaCheck
                    className="text-orange-400 text-lg 
    transition-colors duration-300 
    group-hover:text-white "
                  />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold theme-text mb-2">
                    Proven Track Record
                  </h3>
                  <p className=" theme-text text-sm sm:text-base leading-relaxed">
                    With a successful track record of delivering high-quality
                    projects, we have earned the trust of numerous satisfied
                    clients.
                  </p>
                </div>
              </div>

              {/* Item */}
              <div className="flex items-start gap-5 group">
                <div
                  className="group w-14 h-14 flex-shrink-0 
  bg-[#101010] rounded-full 
  flex items-center justify-center 
  transition-all duration-300 
  group-hover:bg-orange-400"
                >
                  <FaCheck
                    className="text-orange-400 text-lg 
    transition-colors duration-300 
    group-hover:text-white "
                  />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold theme-text mb-2">
                    Expert Team
                  </h3>
                  <p className=" theme-text text-sm sm:text-base leading-relaxed">
                    Our team of seasoned professionals brings a wealth of
                    expertise and experience to ensure your project&apos;s
                    success.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div
            data-aos="fade-left"
            className="w-full  lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0"
          >
            <div
              className="relative 
        w-72 h-72 
        sm:w-[380px] sm:h-[380px] 
        md:w-[450px] md:h-[450px] 
        lg:w-[520px] lg:h-[520px] 
        flex items-center justify-center"
            >
              {/* Rotating Orange Ring */}
              <img
                src="/c.png"
                alt="Background Shape"
                className="absolute w-[200%] h-[200%] object-contain animate-spin [animation-duration:4s]"
              />

              {/* Main Oval img */}
              <div className="w-[85%] h-[79%] rounded-[50%] -ms-10 overflow-hidden z-10 shadow-2xl">
                <img
                  src="/man.png"
                  alt="Professional"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* cards */}
      <div
        className="w-full theme-bg 
py-12 sm:py-14 md:py-16
px-2 sm:px-3 md:px-4
 lg:-mt-[20px]  
"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {/* Card 1 */}
          <div className="relative w-full max-w-sm overflow-hidden shadow-lg group cursor-pointer">
            <img
              src="/ux_1.jpg"
              alt="UX Design"
              className="w-full h-[350px] object-cover"
            />

            {/* Orange Circle */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-56 h-56 rounded-full bg-orange-400/80 flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0 p-4">
                <p className="text-white font-extrabold text-center leading-[1.1]">
                  <span className="block text-2xl sm:text-3xl">UX/UI</span>
                  <span className="block text-2xl sm:text-3xl">Design</span>
                </p>
              </div>
            </div>

            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/60 -translate-y-full flex flex-col items-center justify-center text-center p-4 transition-transform duration-500 group-hover:translate-y-0">
              <p className="text-white mb-3 text-sm sm:text-base">
                Enhancing user experiences through research, wireframes, and
                prototypes, creating visually appealing and user-friendly
                interfaces.
              </p>
              <p className="flex items-center gap-2 text-sm font-medium cursor-pointer transition-all duration-300 ease-in-out text-white hover:text-orange-400 group">
                Read More
                <FaArrowRight className="transition-transform duration-300 ease-in-out rotate-[45deg] group-hover:rotate-[0deg]" />
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative w-full max-w-sm  overflow-hidden shadow-lg group cursor-pointer">
            <img
              src="/ux_2.jpg"
              alt="UX Design 2"
              className="w-full h-[350px] object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-56 h-56 rounded-full bg-orange-400/80 flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0 p-4">
                <p className="text-white font-extrabold text-center leading-[1.1]">
                  <span className="block text-2xl sm:text-3xl">On Demand</span>
                  <span className="block text-2xl sm:text-3xl">Product</span>
                  <span className="block text-2xl sm:text-3xl">Team</span>
                </p>
              </div>
            </div>

            <div className="absolute inset-0 bg-black/60 -translate-y-full flex flex-col items-center justify-center text-center p-4 transition-transform duration-500 group-hover:translate-y-0">
              <p className="text-white mb-3 text-sm sm:text-base">
                Flexible teams for custom software development, scaling, and
                extending your internal team&apos;s capabilities, led by
                dedicated developers and product owners.
              </p>
              <p className="flex items-center gap-2 text-sm font-medium cursor-pointer transition-all duration-300 ease-in-out text-white hover:text-orange-400 group">
                Read More
                <FaArrowRight className="transition-transform duration-300 ease-in-out rotate-[45deg] group-hover:rotate-[0deg]" />
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative w-full max-w-sm overflow-hidden shadow-lg group cursor-pointer">
            <img
              src="/ux_3.jpg"
              alt="UX Design 3"
              className="w-full h-[350px] object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-56 h-56 rounded-full bg-orange-400/80 flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0 p-4">
                <p className="text-white font-extrabold text-center leading-[1.1]">
                  <span className="block text-2xl sm:text-3xl">Mobile App</span>
                  <span className="block text-2xl sm:text-3xl">
                    Development
                  </span>
                </p>
              </div>
            </div>

            <div className="absolute inset-0 bg-black/60 -translate-y-full flex flex-col items-center justify-center text-center p-4 transition-transform duration-500 group-hover:translate-y-0">
              <p className="text-white mb-3 text-sm sm:text-base">
                Building iOS and Android apps, including cross-platform
                development using Flutter, tailored for both consumer and
                enterprise needs.
              </p>
              <p className="flex items-center gap-2 text-sm font-medium cursor-pointer transition-all duration-300 ease-in-out text-white hover:text-orange-400 group">
                Read More
                <FaArrowRight className="transition-transform duration-300 ease-in-out rotate-[45deg] group-hover:rotate-[0deg]" />
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative w-full max-w-sm overflow-hidden shadow-lg group cursor-pointer">
            <img
              src="/ux_4.jpg"
              alt="UX Design 4"
              className="w-full h-[350px] object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-56 h-56 rounded-full bg-orange-400/80 flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0 p-4">
                <p className="text-white font-extrabold text-center leading-[1.1]">
                  <span className="block text-2xl sm:text-3xl">Web</span>
                  <span className="block text-2xl sm:text-3xl">
                    Development
                  </span>
                </p>
              </div>
            </div>

            <div className="absolute inset-0 bg-black/60 -translate-y-full flex flex-col items-center justify-center text-center p-4 transition-transform duration-500 group-hover:translate-y-0">
              <p className="text-white mb-3 text-sm sm:text-base">
                Crafting websites, web applications, and custom software, along
                with creating web portals for specific business purposes.
              </p>
              <p className="flex items-center gap-2 text-sm font-medium cursor-pointer transition-all duration-300 ease-in-out text-white hover:text-orange-400 group">
                Read More
                <FaArrowRight className="transition-transform duration-300 text-white ease-in-out rotate-[45deg] group-hover:rotate-[0deg]" />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-orange-400 p-5 mt-10 sm:mt-0 font-semibold text-white text-xl overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {/* original content */}
          <span className="mx-5 tracking-wider">
            UNLOCKING YOUR FULL POTENTIAL
          </span>
          <span className="mx-5 tracking-wider">
            TURNING CONCEPTS INTO REALITY
          </span>
          <span className="mx-5 tracking-wider">CULTIVATING CREATIVITY</span>
          <span className="mx-5 tracking-wider">
            EXPERTISE IN DESIGN AND DEVELOPMENT
          </span>
          <span className="mx-5 tracking-wider">
            REALIZING YOUR HIDDEN POTENTIAL
          </span>
          <span className="mx-5 tracking-wider">
            TRANSFORMING VISIONS INTO REALITY
          </span>
          <span className="mx-5 tracking-wider">
            FOSTERING CREATIVE INSPIRATION
          </span>
          <span className="mx-5 tracking-wider">
            CRAFTING IN DESIGN AND DEVELOPMENT
          </span>
          <span className="mx-5 tracking-wider">
            UNLEASHING YOUR MAXIMUM POTENTIAL
          </span>
          <span className="mx-5 tracking-wider">
            LET&apos;S START WORKING TOGETHER
          </span>
        </div>
      </div>
    </>
  );
}
