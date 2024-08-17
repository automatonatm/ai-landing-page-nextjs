"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import cursorImage from "@/app/assets/cursor.png";
import messageImage from "@/app/assets/message.png";

import { motion } from "framer-motion";

// bg-gradient-to-r from-red-500 to-blue-500

export const Hero = () => {
  return (
    <div className="hero-gradient relative overflow-clip py-[64px]">
      <div className="ecipse absolute left-1/2 top-[calc(100%-96px)] h-[359px] w-[909px] -translate-x-1/2 rounded-[100%] sm:h-[1014px] sm:w-[1924px] lg:h-[1200px] lg:w-[2400px]"></div>
      <div className="container relative">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex items-center justify-center">
            <Link
              href="#"
              className="inline-flex items-center gap-[10px] rounded-lg border border-[#222222] px-3 py-[10px]"
            >
              <span className="here-text-gradient text-[14px] font-medium leading-[30px]">
                Version 2.0 is here
              </span>
              <span className="text-[14px] font-medium leading-[30px] text-white">
                Read more
              </span>
              <Image
                src="/assets/icons/arrow-w.svg"
                alt="arrow"
                height={16}
                width={16}
              />
            </Link>
          </div>

          <div className="relative inline-flex">
            <h1 className="hero-h1">
              One Task <br /> at a Time
            </h1>

            <motion.div
              drag
              dragSnapToOrigin
              className="absolute -left-[20%] top-1/2 hidden md:inline"
            >
              <Image
                src={cursorImage}
                alt="cursor"
                height={200}
                width={200}
                className="max-w-none"
                draggable="false"
              />
            </motion.div>

            <motion.div
              drag
              dragSnapToOrigin
              className="absolute right-[-23%] top-[25%] hidden md:inline"
            >
              <Image
                src={messageImage}
                alt="message"
                height={200}
                width={200}
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
          </div>

          <p className="p-large w-[335px] sm:w-[457px]">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>

          <button className="rounded-lg bg-white px-4 py-3 font-medium text-black">
            Get for free
          </button>
        </div>
      </div>
    </div>
  );
};
