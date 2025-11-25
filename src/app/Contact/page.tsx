'use client';

export default function UltimatePlanetOrbit() {
  return (
    <div className="min-h-screen bg-[#000814] flex items-center justify-center overflow-hidden relative">

      {/* Partikel debu kosmik */}
      <div className="absolute inset-0">
        {[...Array(120)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/60 rounded-full animate-drift"
            style={{
              width: Math.random() * 3 + 'px',
              height: Math.random() * 3 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 20 + 's',
              animationDuration: Math.random() * 30 + 20 + 's',
            }}
          />
        ))}
      </div>

      {/* Container utama */}
      <div className="relative w-[520px] h-[520px]">

        {/* BUMI (Foto kamu) — DIAM + EFEK ATMOSFER */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="relative">
            {/* Atmosfer luar */}
            <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl animate-pulse-slow"></div>
            <div className="absolute inset-0 rounded-full bg-cyan-300/10 blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            
            {/* Foto + border glowing */}
            <div className="relative w-96 h-96 rounded-full overflow-hidden border-8 border-cyan-400/60 shadow-2xl">
              <img src="/img/img-ridho.jpg" alt="Ridho" className="w-full h-full object-cover" />
              {/* Refleksi cahaya di permukaan bumi */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-full"></div>
            </div>
          </div>
        </div>

        {/* ORBIT + 4 PLANET DENGAN EFEK GILA */}
        <div className="absolute inset-0 animate-spin-ultra-slow">

          {/* HTML5 Planet */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12">
            <div className="relative w-20 h-20">
              {/* Trail panjang */}
              <div className="absolute -inset-x-32 inset-y-0 bg-gradient-to-r from-orange-500/80 via-orange-400/40 to-transparent blur-2xl animate-trail"></div>
              {/* Atmosfer planet */}
              <div className="absolute inset-0 rounded-full bg-orange-400/40 blur-xl animate-pulse"></div>
              <div className="absolute inset-0 rounded-full bg-orange-300/30 blur-lg animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              {/* Badan planet */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-4 border-orange-300 shadow-2xl flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 24 24" className="w-12 h-12 drop-shadow-2xl">
                  <path fill="white" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
                </svg>
                {/* Highlight refleksi */}
                <div className="absolute top-2 left-2 w-6 h-6 bg-white/40 rounded-full blur-md"></div>
              </div>
            </div>
          </div>

          {/* CSS3 Planet */}
          <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-12">
            <div className="relative w-20 h-20">
              <div className="absolute -inset-x-32 inset-y-0 bg-gradient-to-l from-blue-500/80 via-blue-400/40 to-transparent blur-2xl animate-trail"></div>
              <div className="absolute inset-0 rounded-full bg-blue-400/40 blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-blue-700 border-4 border-blue-300 shadow-2xl flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 24 24" className="w-12 h-12 drop-shadow-2xl">
                  <path fill="white" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
                </svg>
                <div className="absolute top-2 left-2 w-6 h-6 bg-white/40 rounded-full blur-md"></div>
              </div>
            </div>
          </div>

          {/* JavaScript Planet */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-12">
            <div className="relative w-20 h-20">
              <div className="absolute -inset-x-32 inset-y-0 bg-gradient-to-t from-yellow-400/80 via-yellow-300/40 to-transparent blur-2xl animate-trail"></div>
              <div className="absolute inset-0 rounded-full bg-yellow-300/50 blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-yellow-300 to-yellow-600 border-4 border-yellow-200 shadow-2xl flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 24 24" className="w-12 h-12 drop-shadow-2xl">
                  <path fill="#000" d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
                </svg>
                <div className="absolute top-2 left-2 w-8 h-8 bg-white/50 rounded-full blur-md"></div>
              </div>
            </div>
          </div>

          {/* React Planet */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-12">
            <div className="relative w-20 h-20">
              <div className="absolute -inset-x-32 inset-y-0 bg-gradient-to-r from-cyan-400/80 via-cyan-300/40 to-transparent blur-2xl animate-trail"></div>
              <div className="absolute inset-0 rounded-full bg-cyan-300/50 blur-xl animate-pulse" style={{ animationDelay: '3s' }}></div>
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-cyan-300 to-cyan-700 border-4 border-cyan-200 shadow-2xl flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 24 24" className="w-14 h-14 drop-shadow-2xl">
                  <path fill="#000" d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278z" />
                </svg>
                <div className="absolute top-2 left-2 w-8 h-8 bg-white/60 rounded-full blur-md"></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ANIMASI GILA */}
      <style jsx>{`
        @keyframes spin-ultra-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-ultra-slow { animation: spin-ultra-slow 50s linear infinite; }

        @keyframes pulse { 0%, 100% { opacity: 0.6; transform: scale(1); } 50% { opacity: 0.3; transform: scale(1.3); } }
        .animate-pulse { animation: pulse 6s ease-in-out infinite; }

        @keyframes pulse-slow { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.8; } }
        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }

        @keyframes trail { 0% { opacity: 0.8; } 100% { opacity: 0; } }
        .animate-trail { animation: trail 3s linear infinite; }

        @keyframes drift { 0% { transform: translate(0, 0); } 100% { transform: translate(calc(100vw + 100px), calc(100vh + 100px)); } }
        .animate-drift { animation: drift linear infinite; }
      `}</style>
    </div>
  );
}