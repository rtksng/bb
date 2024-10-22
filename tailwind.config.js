const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // your paths
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        custom: {
          primary: "#0A1624",
          secondary: "#E4E6EF",
          secondary2: "#8F9FA3",
          accent: "#3BEDB2",
          accent10: "#3BEDB210",
          accent20: "#3BEDB220",
          accent12: "#3BEDB212",
          accent5: "#3BEDB205",
          background: "#F1F1F1",
          warning: "#FFB35B",
          danger: "#FF6262",
          info: "#8494FF",
          purple: "#B579FF",
          lightBlue: "#74BDE8",
          secondaryText: "#122439",
        },
      },
      animation: {
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        orbit: {
          "0%": {
            transform:
              "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
            transform:
              "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g., var(--custom-primary).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
