import "../globals.css";
import Image from "next/image";

export default function Aec() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      {/* Section 1 */}
      <div
        id="aec-section"
        className="relative h-screen w-full flex flex-col md:flex-row items-center justify-center"
      >
        {/* Background Decor Image */}
        <div className="relative w-4/5 md:w-1/2 h-[50%] md:h-[80%] md:left-1/5 left-1/8 md:left-1/7">
          <Image
            src="/hadikdowayrata3lwesmo-02.png"
            alt="decor"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Slogan + Description */}
        <div className="relative md:w-1/2 px-6 flex flex-col items-center md:items-start text-center md:text-left md:bottom-30 mt-20">
  <div className="w-full max-w-xl">
    <h2 className="aec text-2xl md:text-5xl font-Request font-semibold text-[#FFC200] mb-6">
      WHAT IS AEC
    </h2>
    <p className="text-lg md:text-2xl font-Gilroy text-white">
      The Algerian Engineering Competition (AEC) is a national event that
      brings together engineering students, recent graduates, and industry
      experts to solve real-world problems through innovation and
      teamwork.
    </p>
  </div>
</div>


      </div>
    </div>
  );
}
