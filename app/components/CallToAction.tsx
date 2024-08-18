"use client";
import React, { useRef } from "react";
import helix2 from "@/app/assets/images/helix2.png";
import emojistar from "@/app/assets/images/emojistar.png";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

const CallToAction = () => {
  const contanerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: contanerRef,
    offset: ["start end", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <div className="bg-black py-[72px] sm:py-24">
      <div className="container relative max-w-xl" ref={contanerRef}>
        <motion.div style={{ translateY }}>
          <Image
            src={helix2}
            alt="helix2"
            className="absolute left-[calc(100%+36px)] top-6 hidden md:inline"
          />
        </motion.div>

        <motion.div style={{ translateY }}>
          <Image
            src={emojistar}
            alt="emojistar"
            className="absolute -top-[120px] right-[calc(100%+24px)] hidden md:inline"
          />
        </motion.div>

        <div className="mx-auto flex flex-col items-center justify-center gap-5 text-center">
          <h2 className="text-5xl font-bold tracking-tighter text-white">
            Get instant access
          </h2>
          <p className="text-center text-xl text-white/70">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <form className="mt-3 flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:justify-center">
            <input
              type="email"
              placeholder="your@gmail.com"
              className="h-12 flex-1 rounded-lg bg-white/20 px-[12px] py-[9px] sm:max-w-[286px]"
            />
            <button className="h-12 rounded-lg bg-white px-[15px] py-[10px]">
              Get accesss
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
