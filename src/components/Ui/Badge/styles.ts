import { styled } from "../../../../stitches.config";

export const BadgeBlock = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  padding: "4px 8px",
  color: "#fff",
  background: "PaleVioletRed",
  borderRadius: "12px",

  variants: {
    bg: {
      blue: {
        background: "BlueViolet",
      },
      red: {
        background: "MediumVioletRed",
      },
    },
  },
});
