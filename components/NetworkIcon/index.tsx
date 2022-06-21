import { FC } from "react";

import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FiXCircle } from "react-icons/fi";

export type TNetwork = "" | "youtube" | "facebook" | "error";

interface NetworkIconProps {
  network: TNetwork;
}

const NetworkIcon: FC<NetworkIconProps> = ({ network }) => {
  if (network === "youtube") {
    return <FaYoutube color="#FF0000" />;
  }
  if (network === "facebook") {
    return <FaFacebook color="#4267B2" />;
  }
  if (network === "error") {
    return <FiXCircle color="#FF0000" />;
  }

  return <></>;
};

export default NetworkIcon;
