import { css } from "../../stitches.config";
import Card from "../Card";

export const Container = css({
  width: "100%",
  maxWidth: "1280px",
  margin: "24px auto",
});

export const VideoArticle = css({
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

  ...Card,
});

export const Frame = css({
  width: "100%",
  height: "333px",
  maxWidth: "500px",

  "@bp2": {
    height: "100%",
  },
});

export const VideoDetails = css({
  width: "90%",
  height: "100%",
  display: "flex",
  flex: 1,
  flexDirection: "column",
  gap: "12px",
  marginBottom: "1.5rem",

  "@bp1": {
    textAlign: "center",
  },

  "@bp2": {
    textAlign: "start",
    alignItems: "flex-start",
  },
});

export const VideoDownload = css({
  width: "100%",
  height: "100%",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "12px",

  "@bp1": {
    justifyContent: "center",
  },

  "@bp2": {
    justifyContent: "flex-start",
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
