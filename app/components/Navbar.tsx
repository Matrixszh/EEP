"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItemsLeft = [
    { text: "HOME", link: "/" },
    { text: "SPONSORS", link: "/SponsorsPage" },
    { text: "SPEAKERS", link: "/SpeakersPage" },
  ];

  const navItemsRight = [
    { text: "CONTACT", link: "#footer" }, 
    { text: "ABOUT", link: "/#aboutUs" },
  ];

  // Function to close the mobile menu when an item is clicked
  const handleLinkClick = () => {
    setIsOpen(false); // Close the mobile menu
  };

  return (
    <nav className="w-full py-4">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        {/* Top Row for Small Screens: Hamburger Menu and Logo */}
        <div className="flex w-full lg:hidden items-center justify-between">
          {/* Logo Section */}
          <div className="text-center">
            <div className="flex flex-col items-center">
              <span className="text-white text-4xl md:text-5xl font-extrabold tracking-widest">
                ELITE
              </span>
              <span className="text-[#9E0CCA] text-lg md:text-xl font-bold tracking-wide">
                ENTREPRENEURS
              </span>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Left Nav Items */}
        <div className="hidden lg:flex space-x-6">
          {navItemsLeft.map(({ text, link }, index) => (
            <Link key={index} href={link}>
              <NavButton text={text} />
            </Link>
          ))}
        </div>

        {/* Center Logo for Large Screens */}
        <div className="hidden lg:flex flex-shrink-0 text-center">
          <div className="flex flex-col items-center">
            <span className="text-white text-4xl md:text-5xl font-extrabold tracking-widest">
              ELITE
            </span>
            <span className="text-[#9E0CCA] text-lg md:text-xl font-bold tracking-wide">
              ENTREPRENEURS
            </span>
          </div>
        </div>

        {/* Right Nav Items */}
        <div className="hidden lg:flex space-x-6">
          {navItemsRight.map(({ text, link }, index) => (
            <Link key={index} href={link}>
              <NavButton text={text} />
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Nav Items */}
      <div className={`lg:hidden ${isOpen ? "block" : "hidden"} mt-4 space-y-2`}>
        {[...navItemsLeft, ...navItemsRight].map(({ text, link }, index) => (
          <Link key={index} href={link} onClick={handleLinkClick}>
            <MobileNavButton text={text} />
          </Link>
        ))}
      </div>
    </nav>
  );
};

const NavButton = ({ text }: { text: string }) => (
  <button
    className="px-6 py-3 rounded-full border border-[#9e0cca] hover:bg-purple-500/10 transition-all duration-300 uppercase text-xs tracking-wider"
  >
    {text}
  </button>
);

const MobileNavButton = ({ text }: { text: string }) => (
  <button
    className="w-full text-left px-4 py-2 text-white text-sm hover:text-[#9E0CCA] transition-all duration-300 hover:bg-white/5 backdrop-blur-sm font-medium tracking-wider"
  >
    {text}
  </button>
);

export default Navbar;
