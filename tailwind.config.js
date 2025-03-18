/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { min: "350px", max: "500px" },
        "sm-xs": { min: "500px", max: "640px" },
      },
    },
  },
  plugins: [],
};
