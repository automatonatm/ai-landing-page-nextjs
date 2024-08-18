"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.",
  },

  {
    title: "Goal setting and tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },

  {
    title: "Secure data encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

const Feature = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);

  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;
  const border = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      // e.x

      // e.y

      if (!border.current) return;
      const borderRectangle = border.current?.getBoundingClientRect();
      offsetX.set(e.x - borderRectangle?.x);
      offsetY.set(e.y - borderRectangle?.y);
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div className="relative flex max-w-[360px] flex-col items-center justify-center gap-6 rounded-xl border border-white/30 bg-[#0D0D0D] p-10">
      <motion.div
        className="absolute inset-0 rounded-xl border-2 border-purple-400"
        style={{ maskImage, WebkitMaskImage: maskImage }}
        ref={border}
      ></motion.div>
      <div>
        <Image
          src="/assets/icons/ecosystem.svg"
          alt="ecosystem"
          width={56}
          height={56}
        />
      </div>
      <div className="space-y-2 text-center">
        <h3 className="text-base font-bold text-white">{title}</h3>
        <p className="font-inter text-white">{description}</p>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <div className="bg-black py-[72px]">
      <div className="container">
        <div className="mx-auto max-w-xl space-y-5">
          <h2 className="h2-bold text-white">Every thing you need</h2>
          <p className="text-center text-[22px] font-normal leading-[31px] tracking-[-3.6%] text-white">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>

        <div className="mt-[64px] flex flex-col items-center justify-center gap-4 lg:flex-row">
          {features.map(({ title, description }) => (
            <Feature key={title} title={title} description={description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
