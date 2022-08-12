import { css } from "../../../stitches.config";

export const Container = css({
  width: "100%",
  maxWidth: "1280px",
  margin: "0 auto",
});

export const Header = css({
  width: "100%",
  height: "90px",
  background: "$background",
  boxShadow: "$xl",

  "> div": {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",

    "> div a": {
      color: "$textColor",
      fontWeight: "700",
      fontSize: "1.5rem",
    },
  },
});

export const MenuButton = css({
  background: "transparent",
  border: "none",
  cursor: "pointer",
  width: 42,
  height: 42,
  borderRadius: "50%",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  transition: "background 100ms linear",

  "&:hover": {
    background: "rgba(80,80,80,0.33)",
  },
});

export const MenuIcon = css({
  fontSize: "2.2rem",
  color: "$text",
});
