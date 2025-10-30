'use client'
import "../globals.css";

export default function Regclose() {
  return (
    <div className="relative w-full h-screen overflow-hidden ">
      {/* Base Image as Background, moved to the bottom-right */}
      <img 
        src="base.png" 
        className="absolute bottom-0 right-0 w-full h-full object-contain z-0 top-30 left-1/4 sm:left-1/4 md:left-1/4" 
        alt="Base Background"
      />
      
      {/* PC Image on top and to the right */}
      <img
        src="/pc1.png"
        alt="PC Decor"
        className="absolute right-0 top-1/8 z-10 w-[200px] md:w-[500px] lg:w-[600px] object-contain top-100 md:top-20"
      />
      
      {/* Text on top of everything */}
      <div className="relative flex flex-col items-center text-white text-center gap-2 w-full sm:w-3/5 md:w-3/5 lg:w-1/2 z-20 top-1/4 left-0 sm:left-10 md:left-60">
        {/* Top Left Wave */}
        <img
          src="/bottom.png"
          alt="decor"
          className="absolute -top-10 md:-left-20 -left-1 rotate-180 w-[100px] sm:w-[200px] md:w-[300px] object-contain"
        />
        
        {/* Slogan Container */}
        <div className="flex flex-col items-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl ">
          <div className="regc flex flex-wrap justify-center">
            <span className="mr-0">DOORS ARE CLOSED FOR NOW</span>
          </div>
          <div className="regc flex flex-wrap justify-center">
            <span className="text-[#FFC200] mr-0">STAY TUNED !</span>
          </div>
        </div>
        
        {/* Bottom Right Wave */}
        <img
          src="/bottom.png"
          alt="decor"
          className="absolute -bottom-10 md:-right-10 -right-0 w-[100px] sm:w-[200px] md:w-[300px] object-contain"
        />
      </div>
    </div>
  );
}
