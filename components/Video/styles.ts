import { css } from "@stitches/react";
import Card from "../Card";
import { FaCentercode, FaColumns } from "react-icons/fa";

export const VideoArticle = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  margin: "0 24px 15px 24px",
  ...Card,
});

export const Frame = css({
  width: "100%",
  height: "333px",
});

export const VideoDetails = css({
  textAlign: "center",
});

export const VideoTitle = css({});

export const VideoDuration = css({
  fontWeight: "700",
});
