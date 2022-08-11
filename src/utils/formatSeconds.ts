interface Return {
  hours: number | string;
  minutes: number | string;
  seconds: number | string;
}

export function formatSeconds(p: string | number): Return {
  const d = Number(p);

  const hours = Math.floor(d / 3600);
  const minutes = Math.floor((d % 3600) / 60);
  const seconds = Math.floor((d % 3600) % 60);

  const hoursDisplay = hours > 0 ? `${hours}:` : "";
  const minutesDisplay = minutes > 0 ? `${minutes}:` : "00:";
  const secondsDisplay = seconds > 0 ? seconds : "00";
  return {
    hours: hoursDisplay,
    minutes: minutesDisplay,
    seconds: secondsDisplay,
  };
}
