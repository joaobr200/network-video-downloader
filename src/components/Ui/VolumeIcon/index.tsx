import React from "react";
import { GoMute } from "react-icons/go";
import { BsVolumeUpFill } from "react-icons/bs";

interface VolumeIcon {
  hasAudio: boolean;
}

const VolumeIcon: React.FC<VolumeIcon> = ({ hasAudio }) => {
  return hasAudio ? (
    <span title="With sound" style={{ marginLeft: 8 }}>
      <BsVolumeUpFill aria-hidden color="white" />
    </span>
  ) : (
    <span title="Muted" style={{ marginLeft: 8 }}>
      <GoMute aria-hidden color="red" />
    </span>
  );
};

export default VolumeIcon;
