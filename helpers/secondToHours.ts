export default function secondsToHms(d: string | number) {
  d = Number(d);

  const h = Math.floor(d / 3600);
  const m = Math.floor((d % 3600) / 60);
  const s = Math.floor((d % 3600) % 60);

  const hDisplay = h > 0 ? `${h}:` : "";
  const mDisplay = m > 0 ? `${m}:` : "";
  const sDisplay = s > 0 ? s : "";
  return `${hDisplay}${mDisplay}${sDisplay}s`;
}
