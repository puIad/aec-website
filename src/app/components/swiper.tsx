'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import { EffectCoverflow, Autoplay } from 'swiper/modules';

const images = Array.from({ length: 22 }, (_, i) => `/image${i + 1}.jpg`);

export default function Slider() {
  const [slidesPerView, setSlidesPerView] = useState(3); // Default value for desktop

  useEffect(() => {
    // Update slidesPerView based on the window width
    const updateSlidesPerView = () => {
      setSlidesPerView(window.innerWidth < 768 ? 1.5 : 3);
    };

    // Call it initially and on window resize
    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center px-2">
      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={slidesPerView} // Use the state value here
        loop={true}
        spaceBetween={-50}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          scale: 0.8,
          slideShadows: false,
        }}
        className="w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide
            key={index}
            className="w-[220px] md:w-[280px] transition-all duration-500"
          >
            <img
              src={src}
              alt={`slide-${index}`}
              className="rounded-xl object-cover h-[400px] md:h-[500px] w-full shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
