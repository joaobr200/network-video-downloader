import { css } from "@stitches/react";
import Card from "../Card";
import { FaCentercode, FaColumns } from "react-icons/fa";

export const Container = css({
  width: "100%",
  maxWidth: "1280px",
  margin: "0 auto",
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
  },

  ...Card,
});

export const Frame = css({
  width: "100%",
  maxWidth: "500px",
  height: "333px",
});

export const VideoDetails = css({
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "50px",

  "@media screen and (min-width: 1024px)": {
    textAlign: "start",
    gap: "150px",

    "> div:nth-child(2)": {
      alignSelf: "flex-end",
    },
  },
});
