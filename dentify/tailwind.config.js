/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightBlue: "rgba(230, 246, 254, 1)",
        midBlue: "rgba(19, 118, 248, 1)",
        secondaryColor: "rgba(255, 255, 255, 1)",
        darkBlue: "rgba(1, 22, 50, 1)",
        skyBlue: "rgba(37, 180, 248, 1)",
        textBody: "rgba(60, 73, 89, 1)",
      },
      fontFamily: {
        sans: ["General Sans", "sans-serif"], // Add your custom font
      },
    },
  },
  plugins: [],
};
