'use client'
import { useState } from 'react';
import { ChevronDown } from 'lucide-react'; 
import "../globals.css";

export default function FAQ() {
  const questions = [
    { question: "How many problems will we be working on?", answer: "Three problem statements will be proposed, and each team will be assigned one to work on." },
    { question: "Does the team need to stay overnight during the competition?", answer: "Yes, it’s a hackathon that requires participants to stay overnight. However, only 2 out of the 4 team members are allowed to leave at night and return in the morning." },
    { question: "Do all team members need to fill out the registration?", answer: "No, only the team leader must register on behalf of the entire team." },
    { question: "Should all team members be from the same field or specialty?", answer: "Not at all. Team versatility is encouraged, and various skills are needed, including flexible prototyping, hands-on work, strong programming knowledge, critical thinking, robotics development, 3D printing, and experimental modeling." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id='FAQ' className="min-h-screen w-full flex flex-col items-center justify-center gap-10 px-4">
      <h1 className="aec text-2xl font-semibold text-[#FFC200] text-center">FAQ</h1>
      <div className="w-full lg:w-3/4 xl:w-2/3 p-5 space-y-4">
        {questions.map((item, index) => (
          <div 
            key={index}
            className="bg-gradient-to-r from-violet-500/50 to-indigo-900/50 rounded-3xl border border-violet-700 p-4"
          >
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggle(index)}
            >
              <p className="text-white text-base sm:text-lg md:text-xl font-semibold">
                {item.question}
              </p>
              <ChevronDown 
                className={`text-[#FFC200] transition-all duration-300 transform ${openIndex === index ? 'rotate-180' : 'rotate-0'} text-2xl sm:text-3xl`}
              />
            </div>
            {openIndex === index && (
              <p className="mt-4 text-white text-sm sm:text-base md:text-lg lg:text-2xl">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
