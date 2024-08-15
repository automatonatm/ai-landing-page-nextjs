import Image from "next/image";
import React from "react";

import { acme, apex, echo, pulse, quantom } from "@/app/assets/logos";

const images = [
  { src: acme, alt: "acme" },
  { src: apex, alt: "apex" },
  { src: echo, alt: "echo" },
  { src: pulse, alt: "pulse" },
  { src: quantom, alt: "quantom" },
];

const LogoTicker = () => {
  return (
    <div className="bg-black py-[72px] sm:py-24">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-9">
          <h2 className="text-center font-inter text-xl text-[#7A7A7A]">
            Trusted by the world’s most innovative teams
          </h2>

          <div className="relative overflow-hidden logo-ticker">
            <div className="flex gap-16">
              {images.map(({ src, alt }) => (
                <Image
                  src={src}
                  alt={alt}
                  className="h-8 w-auto flex-none"
                  key={alt}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
