/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-pink": "#de52eb",
        "custom-blue": "#47e0ff",
        "custom-green": "#3bff90",
      },
    },
  },
  plugins: [],
};
