import { css } from "@stitches/react";

export const HeroSection = css({
  margin: "150px 24px 40px 24px",
  height: "calc(100vh - 210px)",
});

export const HeroWrapper = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  gap: "40px",

  "> img": {
    width: "100%",
    maxWidth: "350px",
  },
});

export const HeroContent = css({
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  "> h1": {
    fontSize: "28px",
    fontWeight: "700",
    lineHeight: "30px",
  },

  "> p": {
    fontSize: "15px",
    lineHeight: "20px",
    textAlign: "center",
  },
});

export const HeroIconButton = css({
  fontSize: "14px",
  width: "22px",
  height: "22px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  background: "$primaryShape",
  borderRadius: "4px",
});
