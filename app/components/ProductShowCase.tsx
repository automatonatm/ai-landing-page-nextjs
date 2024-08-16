import Image from "next/image";
import React from "react";
import appScreen from "@/app/assets/app-screen.png";
const ProductShowCase = () => {
  return (
    <div className="gradient-to-bottom py-[72px] sm:px-[50px]">
      <div className="container">
        <div className="flex flex-col gap-[60px] items-center">
          <div className="mx-auto flex max-w-xl flex-col items-center gap-5">
            <h2 className="h2-bold text-white">Intuitive interface</h2>
            <p className="text-center text-[22px] font-normal leading-[31px] tracking-[-3.6%] text-white">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes, one task at a time.
            </p>
          </div>
          <div>
            <Image
              src={appScreen}
              alt="product-showcase"
              className="product-showcase-shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowCase;
