import { FaYoutube } from "react-icons/fa";
import { FiXCircle } from "react-icons/fi";

export type TNetwork = "" | "youtube" | "error";

interface NetworkIconProps {
  network: TNetwork;
}

function NetworkIcon({ network }: NetworkIconProps) {
  if (network === "youtube") {
    return (
      <span id="youtube" aria-label="URL do Youtube">
        <FaYoutube aria-hidden color="#FF0000" />
      </span>
    );
  }

  if (network === "error") {
    return (
      <span id="error" aria-label="URL inválida">
        <FiXCircle aria-hidden color="#FF0000" />
      </span>
    );
  }

  return <></>;
}

export default NetworkIcon;
