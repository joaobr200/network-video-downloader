import { css } from "@stitches/react";

export const Container = css({
  width: "100%",
  maxWidth: "1280px",
  margin: "0 auto"
});

export const Header = css({
  width: "100%",
  height: "90px",
  padding: "10px",
  background: "$background",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  boxShadow: "$xl",

  "> div a": {
    color: "$textColor",
    fontWeight: "700",
    fontSize: "1.5rem"
  }
});

export const MenuIcon = css({
  fontSize: "1.5rem",
  color: "$text"
});
