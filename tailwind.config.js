module.exports = {
  theme: {
    extend: {
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        gradient: "gradient 5s linear infinite",
      },
      backgroundSize: {
        200: "200% 200%",
      },
    },
  },
  plugins: [],
};
