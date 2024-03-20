import type { Config } from "tailwindcss";
import AnimatedTailwindCSS from 'animated-tailwindcss';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-dot": "radial-gradient(rgba(155, 155, 155, 0.25) 0.5px, transparent 0px);"
      },
      ...AnimatedTailwindCSS
    },
  },
  plugins: [],
};

export default config;
