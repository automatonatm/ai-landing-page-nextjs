import Image from "next/image";
import { title } from "process";
import React from "react";

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

const Features = () => {
  return (
    <div className="bg-black py-[72px]">
      <div className="container">
        <div className="flex flex-col gap-5 items-center max-w-xl mx-auto">
          <h2 className="h2-bold text-white">Every thing you need</h2>
          <p className=" text-[22px] font-normal leading-[31px] tracking-[-3.6%] text-white text-center">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>

        <div className="mt-[64px] flex flex-col items-center justify-center gap-4 lg:flex-row">
          {features.map(({ title, description }) => (
            <div
              key={title}
              className="flex max-w-[360px] flex-col items-center justify-center gap-6 rounded-lg border border-white/30 bg-[#0D0D0D] p-10"
            >
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
          ))}
        </div>
      </div>
    </div>
  );
};
 
export default Features;
