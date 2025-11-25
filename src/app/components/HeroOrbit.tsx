// components/HeroOrbit.tsx
'use client';

import React from 'react';

export default function HeroOrbit() {
  return (
    <div className="flex items-center justify-center relative">
      <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]">

        {/* Glow Aura */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="relative">
            <div className="absolute -inset-12 rounded-full bg-cyan-400/40 blur-3xl animate-pulse-slow"></div>
            <div className="absolute -inset-8 rounded-full bg-purple-500/30 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        {/* Foto Utama */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="relative group">
            <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 sm:border-12 border-cyan-400/70 shadow-2xl transition-all duration-700 group-hover:border-cyan-300">
              <img
                src="/img/img-ridho.jpg"
                alt="Ridho Anjar Maulana"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/20 rounded-full"></div>
            </div>
            <div className="absolute -inset-4 rounded-full border-4 border-cyan-400/50 animate-spin-slow opacity-70"></div>
          </div>
        </div>

        {/* ORBITING ICONS */}
        <div className="absolute inset-0 animate-spin-ultra-slow">

          {/* HTML5 */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 sm:-translate-y-12">
            <div className="relative group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white/30 backdrop-blur-lg border-4 border-white/50 shadow-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:bg-white/50">
                <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10 drop-shadow-lg">
                  <path fill="#06b6d4" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
                </svg>
                <div className="absolute -top-1 -left-1 w-4 h-4 bg-cyan-300 rounded-full blur-md animate-ping"></div>
              </div>
            </div>
          </div>

          {/* CSS3 */}
          <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-8 sm:translate-x-12">
            <div className="relative group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white/30 backdrop-blur-lg border-4 border-white/50 shadow-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:bg-white/50">
                <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10 drop-shadow-lg">
                  <path fill="#06b6d4" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
                </svg>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-400 rounded-full blur-md animate-ping delay-500"></div>
              </div>
            </div>
          </div>

          {/* JavaScript */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8 sm:translate-y-12">
            <div className="relative group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white/30 backdrop-blur-lg border-4 border-white/50 shadow-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:bg-white/50">
                <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10 drop-shadow-lg">
                  <path fill="#f7df1e" d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
                </svg>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-yellow-400 rounded-full blur-md animate-ping delay-1000"></div>
              </div>
            </div>
          </div>

          {/* React */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-8 sm:-translate-x-12">
            <div className="relative group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white/30 backdrop-blur-lg border-4 border-white/50 shadow-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:bg-white/50">
                <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-11 sm:h-11 drop-shadow-lg">
                  <path fill="#61dafb" d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278z" />
                </svg>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-cyan-400 rounded-full blur-md animate-ping delay-1500"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}