import { css } from "../../../../stitches.config";

export const Button = css({
  fontSize: "14px",
  lineHeight: "16px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  columnGap: "12px",
  border: "none",
  borderRadius: "5px",

  background: "$primary",
  color: "$white",
  textTransform: "uppercase",

  transition: "all 200ms linear",
  cursor: "pointer",

  "&:hover": {
    background: "$primaryShape",
  },

  variants: {
    size: {
      lg: {
        width: "159px",
        height: "56px",
      },
      md: {
        width: "129px",
        height: "46px",
      },
      sm: {
        width: "99px",
        height: "46px",
      },
      full: {
        width: "100%",
        height: "56px",
      },
    },
  },

  defaultVariants: {
    size: "full",
  },
});

export default Button;
