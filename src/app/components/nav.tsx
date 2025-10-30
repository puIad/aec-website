"use client";
import "../globals.css";
import Link from "next/link";

export default function Nav() {
  return (
    <header className=" p-5 fixed w-full z-50 font-gilroy">
      <div className="flex items-center justify-between  w-full">
        {/* Left side can be used for logo or left items */}
        <div></div>

        {/* Right-aligned button */}
        <div className="ml-auto">
          <Link
            href="/"
            className="bg-[#FFC200] text-[#110038] py-2 px-5  rounded-md font-bold text-2xl"
          >
            HOME
          </Link>
        </div>
      </div>
    </header>
  );
}
