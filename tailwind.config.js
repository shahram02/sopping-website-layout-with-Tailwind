module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily:{
        sans:["iranyekan"], 
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class', // only generate classes
    }),

  ],
};
