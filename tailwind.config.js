module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: [],
  theme: {
    extend: {
      width: {
        almost50: "49%",
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus"],
    borderStyle: ["responsive", "hover", "focus"],
  },
  plugins: [],
};
