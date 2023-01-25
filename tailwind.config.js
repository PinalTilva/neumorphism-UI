/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        neu: "4px 4px 6px #94a3b8, -6px -6px 10px white",
        "neu-": "4px 4px 6px #94a3b8 inset, -8px -8px 12px white inset",
        neuGreen: "4px 4px 6px green, -6px -6px 10px #4ade80",
        "neuGreen-": "4px 4px 6px green inset, -8px -8px 12px #4ade80 inset",
      },
    },
  },
  plugins: [],
};
