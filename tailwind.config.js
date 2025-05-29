/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        russo: ["var(--font-russo)", "sans-serif"],
      },
      colors: {
        hitam: "#0D0D0D",
        putih: "#EAEAEA",
        abu: "#D9D9D9",
      },
      textShadow: {
        glow: '0 0 8px rgba(255, 255, 255, 0.5)',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideScale: {
          '0%': { transform: 'translateY(-50px) scale(0.9)', opacity: '0' },
          '100%': { transform: 'translateY(0) scale(1)', opacity: '1' },
        },
        spinSlide: {
          '0%': { transform: 'translateX(0) rotate(-12deg)', opacity: '0' },
          '50%': { transform: 'translateX(30px) rotate(10deg)', opacity: '1' },
          '100%': { transform: 'translateX(0) rotate(-12deg)', opacity: '1' },
        },
        spinOnce: {
          '0%': { transform: 'rotate(-12deg)', opacity: '0' },
          '100%': { transform: 'rotate(168deg)', opacity: '1' },
        },
      },
      animation: {
        'slide-in': 'slideIn 1s ease-in-out forwards',
        'slide-scale': 'slideScale 0.6s ease-in-out forwards',
        'spin-slide': 'spinSlide 0.8s ease-in-out forwards',
        'spin-once': 'spinOnce 0.7s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};