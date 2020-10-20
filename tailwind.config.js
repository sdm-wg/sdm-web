module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: ["./src/**/*.vue"],
  },
  theme: {
    typography: require("./tailwind.typography.config"),
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
