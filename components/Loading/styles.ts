import { css, keyframes } from "@stitches/react";

export const Container = css({
  width: "100%",
  maxWidth: "1280px",
  margin: "0 auto",
});

const rotate = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },

  "100%": {
    transform: "rotate(360deg)",
  },
});

export const LoadingWrapper = css({
  display: "flex",
  flex: "1",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: 8,

  span: {
    fontSize: "1.5rem",
  },

  svg: {
    animation: `${rotate} 1s linear infinite`,
  },
});
