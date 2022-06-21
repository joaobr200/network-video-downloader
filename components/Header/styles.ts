import { css } from "@stitches/react";

export const Header = css({
  width: "100%",
  height: "90px",
  padding: "10px",
  background: "$background",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  boxShadow: "$xl",
});

export const GithubIcon = css({
  fontSize: "30px",
  color: "$text",
  transition: "transform 200ms ease",

  "&:hover": {
    transform: "scale(1.1,1.1)",
  },
});
