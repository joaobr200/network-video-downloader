import { css } from "@stitches/react";
import Card from "../Card";
import { FaCentercode, FaColumns } from "react-icons/fa";

export const Container = css({
  width: "100%",
  maxWidth: "1280px",
  margin: "24px auto",
});

export const VideoArticle = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "40px",

  margin: "0 24px 15px 24px",

  "@media screen and (min-width: 1024px)": {
    margin: "24px auto",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },

  ...Card,
});

export const Frame = css({
  width: "100%",
  maxWidth: "500px",
  height: "333px",
  margin: "1rem 0 0 0",
});

export const VideoDetails = css({
  width: "90%",
  height: "333px",
  textAlign: "center",
  display: "flex",
  flex: 1,
  flexDirection: "column",
  alignItems: "center",
  gap: "50px",

  "@media screen and (min-width: 1024px)": {
    textAlign: "start",
    alignItems: "flex-start",

    "> div:nth-child(1)": {
      display: "flex",
      flexDirection: "column",
      flex: 1,
    },
  },
});

export const cleanVideo = css({
  position: "absolute",
  top: 0,
  right: 0,
  cursor: "pointer",
  fontSize: "2.2rem",
});
