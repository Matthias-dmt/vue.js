module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        body: "url('../images/bg-body.jpg')",
        "body-small": "url('../images/bg-body-small.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
