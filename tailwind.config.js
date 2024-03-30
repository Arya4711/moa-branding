/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Quicksand"', "ui-sans-serif"],
      },
      backgroundImage: {
        "branding-package-mockup":
          "url('./src/assets/branding-package-mockup.png')",
        "branding-package-website":
          "url('./src/assets/branding-package-website.png')",
        "branding-package": "url('./src/assets/branding-package.png')",
        "color-palette-fonts": "url('./src/assets/color-palette-fonts.png')",
        "logo-design": "url('./src/assets/logo-design.png')",
        "logo-redesign": "url('./src/assets/logo-redesign.png')",
      },
    },
  },
  plugins: [],
};
