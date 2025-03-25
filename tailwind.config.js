module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#E9F5FF",
          DEFAULT: "#2A5C99",
          dark: "#1A3A66",
        },
        secondary: {
          light: "#FFF5F0",
          DEFAULT: "#FF7B4D",
          dark: "#CC4D26",
        },
        accent: {
          light: "#F0F9FF",
          DEFAULT: "#5DC1FF",
          dark: "#2A8ACC",
        },
        dark: "#1E1E24",
        light: "#F8F9FA",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-bebas)", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
