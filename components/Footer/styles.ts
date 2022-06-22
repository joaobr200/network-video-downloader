import { css } from "@stitches/react";

export const Container = css({
  width: "100%",
  maxWidth: "1280px",
  margin: "0 auto",
});

export const Footer = css({
  width: "100%",
  height: "40px",
  padding: "10px",
  background: "$background",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  boxShadow: "$xl",
});

export const GithubIcon = css({
  fontSize: "1.5rem",
  color: "$text",
  transition: "transform 200ms ease",

  "&:hover": {
    transform: "scale(1.1,1.1)",
  },
});
