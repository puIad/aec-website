'use client';

import React, { useRef, useEffect, useCallback, useMemo } from "react";
import Timer from "./timer";
import Link from "next/link";
import Slider from "./swiper";

export default function First() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const imageList = useMemo(() => Array.from({ length: 22 }, (_, i) => `/image${i + 1}.jpg`), []);
  const duplicatedImages = useMemo(() => [...imageList, ...imageList], [imageList]);

  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    isDownRef.current = true;
    scrollRef.current.classList.add("cursor-grabbing");
    startXRef.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftRef.current = scrollRef.current.scrollLeft;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!scrollRef.current) return;
    isDownRef.current = false;
    scrollRef.current.classList.remove("cursor-grabbing");
  }, []);

  const handleMouseUp = useCallback(() => {
    if (!scrollRef.current) return;
    isDownRef.current = false;
    scrollRef.current.classList.remove("cursor-grabbing");
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDownRef.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 2;
    scrollRef.current.scrollLeft = scrollLeftRef.current - walk;
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      const images = Array.from(container.querySelectorAll("img"));

      images.forEach((img) => {
        const rect = img.getBoundingClientRect();
        const imgCenter = rect.left + rect.width / 2;
        const distance = Math.abs(containerCenter - imgCenter);

        img.classList.remove("opacity-100", "opacity-70", "opacity-50", "h-[34rem]", "h-[30rem]", "h-96");

        if (distance < 50) {
          img.classList.add("opacity-100", "h-[34rem]"); // Center image with full opacity
        } else if (distance < 200) {
          img.classList.add("opacity-70", "h-[30rem]"); // Neighboring images with reduced opacity
        } else {
          img.classList.add("opacity-50", "h-96"); // More distant images with lower opacity
        }
      });

      // Infinite Scroll Logic
      const scrollWidth = container.scrollWidth;
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.clientWidth;

      if (scrollLeft <= 0) {
        container.scrollLeft = scrollWidth / 2;
      } else if (scrollLeft + containerWidth >= scrollWidth) {
        container.scrollLeft = scrollWidth / 2 - containerWidth;
      }
    };

    container.addEventListener("scroll", handleScroll);

    // Initial center scroll
    setTimeout(() => {
      container.scrollLeft = container.scrollWidth / 2;
      handleScroll();
    }, 100);

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full min-h-[70vh] flex flex-col justify-center items-center">
        <img
          src="/carriyatlimlfo9slogan-02.png"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="relative flex flex-col items-center text-white text-center gap-2">
          <img
            src="/bottom.png"
            alt="top-decoration"
            className="absolute -top-10 md:-left-27 -left-15 rotate-180 w-[150px] md:w-[350px] object-contain"
          />
          <div className="text-2xl md:text-4xl flex flex-col items-center">
            <div className="slogan text-2xl font-semibold flex flex-wrap justify-center">
              <span className="mr-2 md:mr-5">THINK</span>
              <span className="text-[#FFC200] mr-2 md:mr-5">BOLD</span>
              <span className="mr-2 md:mr-5">. BUILD</span>
              <span className="text-[#FFC200] mr-2 md:mr-5">SMART</span>
              <span className="mr-2 md:mr-5">.</span>
            </div>
            <div className="slogan text-2xl font-semibold flex flex-wrap justify-center">
              <span className="mr-2 md:mr-5">COMPETE</span>
              <span className="text-[#FFC200] mr-2 md:mr-5">HARD</span>
              <span className="mr-2 md:mr-5">.</span>
            </div>
          </div>

          <img
            src="/bottom.png"
            alt="bottom-decoration"
            className="absolute -bottom-10 md:-right-10 -right-5 w-[150px] md:w-[350px] object-contain"
          />
        </div>
      </div>

      {/* Image Carousel Section */}
      <div className="relative overflow-hidden flex justify-center items-center py-0">
        {/* Scroll Left */}
        <button
          onClick={() => scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" })}
          className="absolute left-4 z-20 bg-[#110038]/70 text-[#FFC200] px-3 py-1  rounded-full hover:bg-[#FFC200] hover:text-[#110038] transition duration-300 backdrop-blur-sm"
          aria-label="Scroll Left"
        >
          &lt;
        </button>

        {/* Image Scroll Area */}
        <div className="w-full h-[80vh] md:h-[90vh] flex items-center" ref={scrollRef} onMouseDown={handleMouseDown} onMouseLeave={handleMouseLeave} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove}>
          <Slider />
        </div>

        {/* Scroll Right */}
        <button
          onClick={() => scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" })}
          className="absolute right-4 z-20 bg-[#110038]/70 text-[#FFC200] px-3 py-1  rounded-full hover:bg-[#FFC200] hover:text-[#110038] transition duration-300 backdrop-blur-sm"
          aria-label="Scroll Right"
        >
          &gt;
        </button>

        {/* Bottom Overlay Content */}
        <div className="absolute left-5 bottom-0 text-white tracking-wide drop-shadow-lg pl-[5%] z-500">
          <p className="aec text-2xl font-semibold text-white">ALGERIAN</p>
          <p className="aec text-2xl font-semibold text-white">ENGINEERING</p>
          <p className="aec text-2xl font-semibold text-white">COMPETITION</p>
          <div className="mt-6">
          </div>
          <div className="relative "> {/* wrapper of button */}
  <Link href="/register">
    <button className="bg-[#FFC200] text-[#110038] py-2 px-5 rounded-md font-bold text-2xl z-50 relative">
      REGISTER NOW
    </button>
  </Link>
</div>

        </div>
      </div>
    </div>
  );
}
