import { TNetwork } from "../components/Ui/NetworkIcon";

interface IURLRegexs {
  network: TNetwork;
  regex: string;
}

export const URLregexs: IURLRegexs[] = [
  {
    network: "youtube",
    regex: "^(https?://)?(www.youtube.com|youtu.be)/.+$",
  },
];

export function validateUrl(url: string): TNetwork {
  for (let i = 0; i < URLregexs.length; i++) {
    if (url.match(URLregexs[i].regex)) {
      return URLregexs[i].network;
      break;
    }
  }
  return "error";
}
