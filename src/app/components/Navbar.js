"use client"; // Add this line at the top

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md py-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/kz_logo.png"
              alt="KZ Logo"
              width={60} // Increased size
              height={60} // Increased size
              className="mr-3 cursor-pointer"
            />
          </Link>
          <Link href="/" className="text-2xl font-serif text-black">
            KZ Collections
          </Link>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link
            href="/#emirati-kandora"
            className="text-lg text-black hover:text-secondary"
          >
            Emirati Kandora
          </Link>
          <Link
            href="/#moroccan-thobes"
            className="text-lg text-black hover:text-secondary"
          >
            Moroccan Thobes
          </Link>
          <Link
            href="/#hooded-thobes"
            className="text-lg text-black hover:text-secondary"
          >
            Hooded Thobes
          </Link>
          <Link
            href="/#abayas"
            className="text-lg text-black hover:text-secondary"
          >
            Abayas
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link
            href="/#emirati-kandora"
            className="block px-4 py-2 text-lg text-black hover:text-secondary"
            onClick={toggleMenu}
          >
            Emirati Kandora
          </Link>
          <Link
            href="/#moroccan-thobes"
            className="block px-4 py-2 text-lg text-black hover:text-secondary"
            onClick={toggleMenu}
          >
            Moroccan Thobes
          </Link>
          <Link
            href="/#hooded-thobes"
            className="block px-4 py-2 text-lg text-black hover:text-secondary"
            onClick={toggleMenu}
          >
            Hooded Thobes
          </Link>
          <Link
            href="/#abayas"
            className="block px-4 py-2 text-lg text-black hover:text-secondary"
            onClick={toggleMenu}
          >
            Abayas
          </Link>
        </div>
      )}
    </nav>
  );
}
