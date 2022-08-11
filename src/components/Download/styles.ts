import { css } from "../../../stitches.config";

export const DownloadSection = css({
  margin: "24px 24px 40px 24px",
  height: "100%",

  "@media screen and (min-width: 1024px)": {
    height: "100%",
  },
});

export const From = css({
  width: "100%",
  maxWidth: "1280px",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const InputWrapper = css({
  position: "relative",
  width: "100%",

  "> span": {
    position: "absolute",
    top: "9px",
    left: "9px  ",
    fontSize: "28px",
  },
});

export const Input = css({
  width: "100%",
  height: "46px",
  padding: "0px 0px 0px 5px",

  borderRadius: "4px",
  fontSize: "1rem",
  fontWeight: "600",

  variants: {
    withIcon: {
      true: {
        padding: "0px 0px 0px 40px",
      },
    },
  },
});

export const ClearInput = css({
  position: "absolute",
  top: 0,
  right: 0,

  width: 43,
  height: "100%",

  color: "$white",
  background: "$primary",
  border: "none",
  borderTopRightRadius: "4px",
  borderBottomRightRadius: "4px",
  cursor: "pointer",

  transition: "background 100ms linear",

  "&:hover": {
    background: "$primaryHover",
  },
});
