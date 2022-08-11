import { styled } from "../../../../stitches.config";

const RainbowView = styled("div", {
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 200,

  width: "100%",
  height: 4,

  backgroundImage:
    "linear-gradient(90deg, red, orange, yellow, green, blue, DarkBlue, violet)",
});

export function Rainbow() {
  return <RainbowView />;
}
