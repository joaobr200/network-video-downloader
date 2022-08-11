import { css } from "../../stitches.config";

export const HeroSection = css({
  margin: "88px 24px 40px 24px",
  height: "100%",

  "@media screen and (min-width: 640px)": {
    marginTop: "100px",
  },

  "@media screen and (min-width: 1024px)": {
    marginTop: "60px",
  },
});

export const HeroWrapper = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "28px",
  width: "100%",
  maxWidth: "1280px",
  position: "relative",

  "& h1": {
    textAlign: "center",
  },

  "@bp1": {
    textAlign: "center",
  },

  "@bp2": {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "start",
    margin: "0 auto",

    "& h1": {
      textAlign: "start",
    },
  },
});

export const HeroImage = css({
  display: "none",

  "@bp2": {
    display: "block",
  },
});

export const HeroContent = css({
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  padding: "0.5rem",
  "> h1": {
    fontSize: "1.8rem",
    fontWeight: "700",
    lineHeight: "2.7rem",
  },

  "> p": {
    fontSize: "1rem",
    lineHeight: "1.5rem",
  },

  "@media screen and (min-width: 640px)": {
    "> h1": {
      fontSize: "2rem",
      fontWeight: "700",
      lineHeight: "3rem",
    },
    "> p": {
      fontSize: "1.2rem",
      lineHeight: "1.7rem",
    },
  },

  "@media screen and (min-width: 1024px)": {
    textAlign: "start",
    "> h1": {
      fontSize: "3rem",
      fontWeight: "700",
      lineHeight: "4rem",
    },
    "> p": {
      fontSize: "1.2rem",
      lineHeight: "1.7rem",
    },
  },
});
