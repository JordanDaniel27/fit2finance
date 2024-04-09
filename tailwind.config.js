/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {},
      fontSize: {
        text12: "12px",
        text14: "14px",
        text16: "16px",
        text18: "18px",
        text20: "20px",
        text22: "22px",
        text24: "24px",
        text28: "28px",
        text32: "32px",
        text36: "36px",
        text40: "40px",
        text44: "44px",
        text48: "48px",
        text52: "52px",
        text56: "56px",
        text60: "60px",
        text64: "68px",
        text72: "72px",
      },
      backgroundColor: {
        bgGray: "#505977",
        bgGrayStrong: "#393F53",
        bgOrangeStrong: "#E38533",
        bgPurpose: "#EFF1FB",
        bgYellow: "#FCF0E7",
      },
      textColor: {
        textWhiteWeak: "#FCFBFA",
        textWhite: "#FFFFFF",
        textGray: "#505977",
        textGrayWeak: "#EFF1FB",
        textGrayStrong: "#393F53",
        textOrange: "#E38533",
      },
      borderColor: {
        borderOrange: "#E38533",
      },
    },
    screens: {
      xs: "320px",
      "2xs": "370px",
      sm: "640px",
      md: "768px",
      "2md": "950px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },

  plugins: [],
};
