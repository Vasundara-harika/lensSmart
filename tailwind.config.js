// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1E1B2E",
        lightText: "#F3EFFF",
        primary: "#4B0082",
        secondary: "#8A2BE2",
        accent: "#FFD700",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        'slide-down': {
          '0%': { transform: 'translateY(-100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'bounce-in': {
          '0%': { transform: 'scale(0.9) translateY(-20px)', opacity: '0' },
          '100%': { transform: 'scale(1) translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-down': 'slide-down 1s ease-out forwards',
        'bounce-in': 'bounce-in 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
