import Image from "next/image";
import React from "react";

export const Banner = () => {
  return (
    <div className="bg-gradient-1 py-3 ">
      <div className="container  mx-auto">
        <div className="flex items-center justify-center gap-2 ">
          <p className="p-body-tag hidden sm:inline">
            This page is included in a free SaaS Website Kit.
          </p>
          <a
            href="#"
            className="p-body-tag flex items-center justify-center gap-1"
          >
            View the complete Kit
            <Image
              src="/assets/icons/forward-arrow.svg"
              alt="forward arrow"
              width={16}
              height={16}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
