import { createStitches } from "@stitches/react";

export const { globalCss, getCssText } = createStitches({
  theme: {
    colors: {
      background: "#121214",
      text: "#a8a8b3",
      baseText: "#c4c4cc",
      gray: "#e1e1e6",
      black: "#09090a",
      white: "#f1f1f1",
      primary: "#8257e5",
      primaryHover: "#9466ff",
      primaryShape: "#734bd1",
    },
    shadows: {
      sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);",
    },
  },
});

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    outline: 0,
    boxSizing: "border-box",
  },
  html: {
    scrollBehavior: "smooth",
  },

  body: {
    width: "100%",
    maxWidth: "1920px",
    margin: "0 auto",
    background: "$black",
    boxShadow: "$xl",
    color: "$text",
    fontFamily: "Roboto, sans-serif",
  },

  a: {
    textDecoration: "none",
  },

  ".container": {
    width: "100%",
    maxWidth: "1280px",
    margin: "0 auto",
  },
});
