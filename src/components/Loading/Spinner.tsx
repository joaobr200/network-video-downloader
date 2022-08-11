import React from "react";

function Spinner() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="192"
      height="192"
      viewBox="0 0 256 256"
    >
      <path fill="none" d="M0 0H256V256H0z"></path>
      <path
        fill="none"
        stroke="#a8a8b3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M168 40.7a96 96 0 11-80 0"
      ></path>
    </svg>
  );
}

export default Spinner;
