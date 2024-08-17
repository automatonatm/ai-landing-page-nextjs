import Image from "next/image";
import React from "react";


const Footer = () => {
  return (
    <footer className="border-t border-white/20 bg-black py-5">
      <div className="container">
        <div className="gap flex flex-col md:flex-row md:justify-between gap-4">
          <div className="text-center text-sm text-white/60">
            @ 2024 Your Company, Inc. All rights reserved
          </div>
          <ul className="flex justify-center gap-2.5">
            <li>
              <Image
                src="/assets/icons/x-social.svg"
                alt="x"
                height={24}
                width={24}
              />
            </li>
            <li>
              <Image
                src="/assets/icons/pinterest.svg"
                alt="pinterest"
                height={24}
                width={24}
              />
            </li>
            <li>
              <Image
                src="/assets/icons/insta.svg"
                alt="insta"
                height={24}
                width={24}
              />
            </li>
            <li>
              <Image
                src="/assets/icons/linkedin.svg"
                alt="linkedin"
                height={24}
                width={24}
              />
            </li>
            <li>
              <Image
                src="/assets/icons/tiktok.svg"
                alt="tiktok"
                height={24}
                width={24}
              />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
