// prettier-ignore
module.exports = {
  mode: "jit",
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: "#E5E5E5",
        "bg-second": "#FDFDFD",
        primary: "#0194F3",
        "primary-dark": "#1A699D",
        black: "#2D2D2D",
        subtitle: "#696984",
        gray: "rgba(45, 45, 45, 0.8)",
        neutral: "#616161",
        "soft-purple": "#A2B6D4",
        error: "#BA0000",
        alert: "#66738F",
        open: "#4ECB71",
        locked: "#FFD644",
        paid: "#E87C5A",
        complete: "#0194F3",
        closed: "#FF4E4E",
      },
      fontSize: {
        8: "8px",
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        24: "24px",
        26: "26px",
        32: "32px",
        36: "36px",
        44: "44px",
        52: "52px",
      },
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          width: "100%",
          paddingLeft: "24px",
          paddingRight: "24px",
          marginLeft: "auto",
          marginRight: "auto",
          "@screen sm": {
            width: "600px",
            paddingLeft: "0px",
            paddingRight: "0px",
          },
          "@screen md": {
            width: "700px",
            paddingLeft: "0px",
            paddingRight: "0px",
          },
          "@screen lg": {
            width: "900px",
            paddingLeft: "0px",
            paddingRight: "0px",
          },
          "@screen xl": {
            width: "1152px",
            paddingLeft: "0px",
            paddingRight: "0px",
          },
          "@screen 2xl": {
            width: "1152px",
            paddingLeft: "0px",
            paddingRight: "0px",
          },
        },
      });
    },
  ],
};
