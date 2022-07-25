import { css } from "@stitches/react";

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
  textAlign: "center",
  gap: "28px",
  width: "100%",
  maxWidth: "1280px",
  position: "relative",

  "> img": {
    width: "100%",
    maxWidth: "350px",
    height: "100%",
    position: "absolute",
    zIndex: -1,
    opacity: 0.3,
    top: 150,
  },

  "@media screen and (min-width: 1024px)": {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "start",
    margin: "0 auto",

    "> a": {
      display: "none",
    },

    "> img": {
      position: "static",
      zIndex: 0,
      opacity: 1,
    },
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
