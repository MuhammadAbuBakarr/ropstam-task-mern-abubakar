/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#49C7AB",
          secondary: "#E5E7EB",
        },
        heading: {
          primary: "#1E293B",
          secondary: "#334155",
        },
        text: {
          primary: "#1E293B",
          secondary: "#49C7AB",
          muted: "#475569",
        },
      },
    },
  },
  plugins: [],
};
