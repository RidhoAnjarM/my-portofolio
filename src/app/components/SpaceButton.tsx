// components/SpaceButton.tsx
import Link from 'next/link';
import React from 'react';

interface SpaceButtonProps {
  text: string;
  href: string;
}

export const SpaceButton: React.FC<SpaceButtonProps> = ({ text, href }) => {
  return (
    <Link href={href} className="relative inline-block">
      <button
        type="button"
        className="btn group relative w-full sm:w-auto max-w-sm font-poppins"
        aria-label={text}
      >
        <strong className="relative z-10">{text}</strong>

        {/* CONTAINER BINTANG — TETAP ADA & LEBIH HIDUP */}
        <div className="absolute inset-0 overflow-hidden rounded-5rem z-0" id="container-stars">
          <div className="absolute inset-0" id="stars"></div>
        </div>

        {/* GLOW BIRU CYAN */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-10">
          <div className="circle"></div>
          <div className="circle delay-200"></div>
        </div>

        {/* OUTER GLOW HOVER */}
        <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 pointer-events-none">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/60 via-blue-500/50 to-cyan-600/60 blur-3xl animate-pulse"></div>
        </div>
      </button>

      <style jsx>{`
        .btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 14rem;
          height: 3.5rem;
          overflow: hidden;
          cursor: pointer;
          border-radius: 5rem;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          border: double 4px transparent;
          background-image: 
            linear-gradient(#0f0f1e, #0f0f1e),
            linear-gradient(137deg, #22d3ee 10%, #06b6d4 40%, #0891b2 70%, #0ea5e9 90%);
          background-origin: border-box;
          background-clip: content-box, border-box;
          backdrop-filter: blur(16px);
          box-shadow: 0 10px 32px rgba(6, 182, 212, 0.25);
        }

        .btn:hover {
          transform: scale(1.12) translateY(-6px);
          box-shadow: 
            0 24px 60px rgba(6, 182, 212, 0.5),
            0 0 40px rgba(34, 211, 238, 0.4);
        }

        .btn:active {
          transform: scale(1.05);
          border: double 5px #22d3ee;
        }

        strong {
          font-weight: 900;
          font-size: 0.9rem;
          letter-spacing: 7px;
          color: #ecfeff;
          text-shadow: 
            0 0 15px #22d3ee,
            0 0 30px #06b6d4;
          z-index: 20;
        }

        #stars::before {
          content: "";
          position: absolute;
          top: 0;
          left: -50%;
          width: 170%;
          height: 500%;
          background-image: 
            radial-gradient(2px 2px at 20px 30px, #cffafe, transparent),
            radial-gradient(2px 2px at 40px 70px, #67e8f9, transparent),
            radial-gradient(1.5px 1.5px at 90px 40px, #ecfeff, transparent);
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: animStar 90s linear infinite;
          opacity: 0.8;
        }

        #stars::after {
          content: "";
          position: absolute;
          top: -10rem;
          left: -100rem;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(1.5px 1.5px, #67e8f9 1px, transparent 1%);
          background-size: 60px 60px;
          animation: animStarRotate 140s linear infinite;
          opacity: 0.6;
        }

        .btn:hover #container-stars {
          z-index: 1;
          background-color: rgba(2, 20, 40, 0.6);
        }

        /* Glow dalam button */
        .circle {
          width: 100%;
          height: 32px;
          filter: blur(2.5rem);
          animation: pulse_3011 4s infinite ease-in-out;
        }
        .circle:nth-of-type(1) { background: rgba(34, 211, 238, 0.85); }
        .circle:nth-of-type(2) { background: rgba(6, 182, 212, 0.75); }
        .delay-200 { animation-delay: 2s; }

        @keyframes animStar {
          from { transform: translateY(0); }
          to { transform: translateY(-200rem); }
        }

        @keyframes animStarRotate {
          from { transform: rotate(360deg); }
          to { transform: rotate(0); }
        }

        @keyframes pulse_3011 {
          0%, 100% { transform: scale(0.8); opacity: 0.6; }
          50% { transform: scale(1.4); opacity: 0.95; }
        }
      `}</style>
    </Link>
  );
};