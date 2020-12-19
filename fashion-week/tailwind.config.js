module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        "8xl": [
          "7rem",
          {
            letterSpacing: "-10px",
            lineHeight: "1.5",
          },
        ],
        "9xl": [
          "9rem",
          {
            letterSpacing: "-10px",
            lineHeight: "1.5",
          },
        ],
        "10xl": "10rem",
      },
      fontFamily: {
        body: ["Poppins", "Open Sans", "Sans Serif"],
      },
      zIndex: {
        "-10": "-10",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
