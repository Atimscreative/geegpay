/** @type {import('tailwindcss').Config} */
import TailwindForm from "@tailwindcss/forms";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        plus: "'Plus Jakarta Sans', sans-serif",
      },
    },
  },
  plugins: [TailwindForm],
};
