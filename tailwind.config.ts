import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {   
    extend: {
      colors: {
        'custom-blue': {
          '2': '#010012',
          '4': '#03002f',
          '8': '#05004d',
          '16': '#06006b',
          '32': '#070088',
          '64': '#0700a6',
          '128': '#0500c4',
          '256': '#0300e1'
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
