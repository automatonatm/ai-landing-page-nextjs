"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import appScreen from "@/app/assets/app-screen.png";
import { motion, useScroll, useTransform } from "framer-motion";

const ProductShowCase = () => {
  const appImage = useRef<HTMLImageElement>(null);

  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"],
  });

 

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);

  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <div className="gradient-to-bottom py-[72px] sm:px-[50px]">
      <div className="container">
        <div className="flex flex-col items-center gap-[60px]">
          <div className="mx-auto max-w-xl space-y-5">
            <h2 className="h2-bold text-white">Intuitive interface</h2>
            <p className="text-center text-[22px] font-normal leading-[31px] tracking-[-3.6%] text-white">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes, one task at a time.
            </p>
          </div>
          <motion.div
            style={{
              opacity,
              rotateX,
              transformPerspective: "800px",
            }}
          >
            <Image
              src={appScreen}
              alt="product-showcase"
              className="product-showcase-shadow"
              ref={appImage}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowCase;
