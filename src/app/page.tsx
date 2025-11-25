'use client';

import Navigation from "./components/Navigation";
import HeroOrbit from "./components/HeroOrbit";
import { SpaceButton } from "./components/SpaceButton";
import TypewriterText from "./components/TypewriterText";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#000814] overflow-hidden relative">

      {/* PARTIKEL DEBU KOSMIK */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white/30 rounded-full animate-drift"
              style={{
                width: Math.random() * 4 + 1 + 'px',
                height: Math.random() * 4 + 1 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animationDelay: Math.random() * 25 + 's',
                animationDuration: Math.random() * 50 + 40 + 's',
              }}
            />
          ))}
        </div>
      )}

      <Navigation />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-screen pt-20 pb-12">

          {/* KIRI: Teks */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 leading-tight">
              Hi, I'm Ridho,
            </p>

            <TypewriterText
              texts={[
                "Frontend Developer",
                "Next.js & React Lover",
                "Clean Code Addict"
              ]}
              className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold 
                         bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600
                         drop-shadow-2xl tracking-wider"
              typingSpeed={120}
              deletingSpeed={60}
              pauseBetween={1800}
            />

            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              I build fast-loading, responsive web apps with clean design and smooth interactions —
              turning ideas into experiences that feel intuitive and delightful on every device.
            </p>

            <div className="flex flex-col sm:flex-row md:flex-row gap-6 justify-center lg:justify-start mt-8 w-full">
              <div className="flex flex-col sm:flex-row md:flex-row gap-6 w-full justify-center lg:justify-start">
                {/* Button pertama */}
                <div className="w-full sm:w-auto md:w-auto flex justify-center">
                  <SpaceButton text="SEE MY WORK" href="/Project" />
                </div>

                {/* Button kedua */}
                <div className="w-full sm:w-auto md:w-auto flex justify-center">
                  <SpaceButton text="CONTACT ME" href="/Contact" />
                </div>

              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <HeroOrbit />
          </div>

        </div>
      </div>
    </div>
  );
}