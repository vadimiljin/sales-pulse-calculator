/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        maxWidth: {
          "90%": "90%",
          "1400px": "1400px",
        }
      },
    },
    plugins: [],
  };
  