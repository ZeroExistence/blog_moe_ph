module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  experimental: {
    uniformColorPalette: true,
    extendedFontSizeScale: true,
    applyComplexClasses: true,
  },
  purge: {
    mode: 'all',
    content: ["./src/**/*.svelte", "./src/**/*.html"]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Cantarell'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')]
}
