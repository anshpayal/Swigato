/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-background":
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('./Background.png')",
      },
      backgroundSize: {
        "cover-fit": "cover",
      },
      backgroundColor: {
        "blur-gray-800": "rgba(33, 37, 41, 0.8)", // Adjust the opacity as needed
      },
      backdropBlur: {
        lg: "10px", // Adjust the blur intensity as needed
      },
    },
  },
  plugins: [require("tailwindcss-filters")],
};
