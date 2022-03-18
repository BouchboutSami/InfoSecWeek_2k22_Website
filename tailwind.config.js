module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      mobile: { max: "750px" },
      // => @media (max-width: 750px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
