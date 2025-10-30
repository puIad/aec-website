"use client";

import React, { useState, useEffect } from 'react';
import "../globals.css";

export default function Timer() {
  const targetDate = new Date('2025-05-08T00:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    const updateTimer = () => {
      setTimeLeft(targetDate - new Date().getTime());
    };

    updateTimer();

    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (!hasMounted) return null;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div className="flex items-center justify-start ml-[5%]">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4 sm:gap-3">
          {[days, hours, minutes, seconds].map((time, idx) => (
            <React.Fragment key={idx}>
              <div className="flex flex-col items-center">
                <div className="timer text-white w-7 h-7 sm:w-12 sm:h-12 flex items-center justify-center font-bold rounded-md">
                  {String(time).padStart(2, '0')}
                </div>
                <p className="text-xs sm:text-[10px] text-white mt-2">
                  {['Days', 'Hours', 'Mins', 'Secs'][idx]}
                </p>
              </div>
              {idx < 3 && (
                <div className="flex items-center justify-center">
                  <p className="timer text-white leading-none px-2 mb-6">:</p>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
