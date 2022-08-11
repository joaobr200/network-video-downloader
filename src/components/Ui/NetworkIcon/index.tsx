import { FaYoutube } from "react-icons/fa";
import { FiXCircle } from "react-icons/fi";

export type TNetwork = "" | "youtube" | "error";

interface NetworkIconProps {
  network: TNetwork;
}

function NetworkIcon({ network }: NetworkIconProps) {
  if (network === "youtube") {
    return <FaYoutube color="#FF0000" />;
  }

  if (network === "error") {
    return <FiXCircle color="#FF0000" />;
  }

  return <></>;
}

export default NetworkIcon;
