import { css } from "../../../stitches.config";
import { Card } from "../Card";

export const Container = css({
  width: "100%",
  maxWidth: "1280px",
  margin: "24px auto",
});

export const VideoArticle = css(Card, {
  display: "flex",
  width: "100%",
  height: "100%",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "40px",

  "@bp2": {
    margin: "24px auto",
    height: "400px",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});

export const VideoWrapper = css({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

export const Frame = css({
  width: "100%",
  height: "333px",
  maxWidth: "500px",
  marginTop: 12,

  "@bp2": {
    height: "100%",
    marginTop: 0,
  },
});

export const VideoDetails = css({
  width: "90%",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  marginBottom: "1.5rem",

  textAlign: "center",

  "@bp2": {
    textAlign: "start",
    alignItems: "flex-start",
  },
});

export const VideoDownload = css({
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  flexDirection: "column",
  rowGap: "24px",
  marginBottom: "24px",

  "> div": {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
  },

  "@bp1": {
    justifyContent: "center",
  },

  "@bp2": {
    justifyContent: "flex-start",
  },
});

export const VideoBadgeLegend = css({
  display: "flex",
  flex: 1,
  justifyContent: "flex-end",
  columnGap: "12px",

  "> div": {
    display: "flex",
    alignItems: "flex-end",
    columnGap: "4px",

    "> div": {
      width: "16px",
      height: "16px",
      borderRadius: "50%",
    },

    "> span": {
      fontWeight: 700,
    },
  },

  "> div.mp4": {
    "> div": {
      background: "PaleVioletRed",
    },
  },

  "> div.webm": {
    "> div": {
      background: "MediumVioletRed",
    },
  },

  "> div.audio": {
    "> div": {
      background: "BlueViolet",
    },
  },
});

export const cleanVideoButton = css({
  position: "absolute",
  top: 0,
  right: 0,
  cursor: "pointer",
  fontSize: "2.2rem",

  background: "transparent",
  border: "none",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  color: "$text",
});
