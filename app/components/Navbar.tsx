import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <div className="relative">
            <div className="nav-gradient absolute bottom-0 top-2 w-full"></div>
            <Image
              src="/assets/images/logosaas.png"
              alt="logo"
              className="relative h-12 w-12"
              height={40}
              width={40}
            />
          </div>

          <Image
            src="/assets/icons/menu.svg"
            height={20}
            width={20}
            alt="menu"
            className="h-10 w-10 rounded-lg border border-white border-opacity-30 sm:hidden"
          />

          <nav className="hidden items-center gap-6 sm:flex">
            <Link
              href="#"
              className="text-white text-opacity-60 transition hover:text-opacity-100 "
            >
              About
            </Link>
            <Link
              href="#"
              className="text-white text-opacity-60 transition hover:text-opacity-100"
            >
              Features
            </Link>
            <Link
              href="#"
              className="text-white text-opacity-60 transition hover:text-opacity-100"
            >
              Updates
            </Link>
            <Link
              href="#"
              className="text-white text-opacity-60 transition hover:text-opacity-100"
            >
              Help
            </Link>
            <Link
              href="#"
              className="text-white text-opacity-60 transition hover:text-opacity-100"
            >
              Customers
            </Link>

            <button className="rounded-lg bg-white px-4 py-2">
              Get for free
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};
