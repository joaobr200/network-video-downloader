import { TNetwork } from "../components/NetworkIcon";

interface IURLRegexs {
  network: TNetwork;
  regex: string;
}

export const URLregexs: IURLRegexs[] = [
  {
    network: "youtube",
    regex: "^(https?://)?(www.youtube.com|youtu.be)/.+$",
  },
  {
    network: "facebook",
    regex: "^(https://)?(www.facebook.com|fb.watch)/.+$",
  },
];

export function validateUrlByRegex(url: string): TNetwork {
  for (let i = 0; i < URLregexs.length; i++) {
    if (url.match(URLregexs[i].regex)) {
      return URLregexs[i].network;
      break;
    }
  }
  return "error";
}
