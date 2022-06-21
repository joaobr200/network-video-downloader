import { css } from "@stitches/react";

export const DownloadSection = css({
  margin: "40px 24px 40px 24px",
});

export const From = css({});

export const InputWrapper = css({
  position: "relative",

  "> svg": {
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
