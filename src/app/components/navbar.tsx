"use client";
import "../globals.css";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "AEC", href: "#aec-section" },
    { name: "FAQ", href: "#FAQ" },
    { name: "About us", href: "#Aboutus" },
  ];

  return (
<header
  style={{ backgroundColor: 'rgba(13, 0, 43, 0.8)' }} // 0.8 opacity (less transparent)
  className="p-4 fixed w-full z-50 font-gilroy backdrop-blur-md"
>
      <div className="flex justify-between items-center backdrop-blur-md w-full">
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex w-full justify-evenly">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="navLink active">
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X size={30} className="text-[#FFC200]" />
            ) : (
              <Menu size={30} className="text-[#FFC200]" />
            )}
          </button>

          {/* Register Button */}
          <Link
            href="/register"
            className="bg-[#FFC200] text-[#110038] py-2 px-5 rounded-md font-bold text-2xl"
          >
            Register
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-[#110038]/70 backdrop-blur-md"></div>
          <div className="relative z-10 h-full w-full flex flex-col items-center justify-center gap-8 text-white text-lg">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="navLink"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
