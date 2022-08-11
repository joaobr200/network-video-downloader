import type { NextApiRequest, NextApiResponse, NextApiHandler } from "next";
import ytdl from "ytdl-core";
import { formatSeconds } from "../../utils/formatSeconds";

interface VideoApiRequest extends NextApiRequest {
  body: {
    url: string;
  };
}

const handler: NextApiHandler = async (
  req: VideoApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method !== "POST") {
    res.status(200).send("Voodo é pra Jacú!");
    return;
  }

  const { url } = req.body;

  if (!url) {
    res.status(404).json({
      error: "URL é obrigatória!",
    });
  }

  if (!ytdl.validateURL(url)) {
    res.status(400).json({
      error: "URL Inválida!",
    });
  }

  const info = await ytdl.getInfo(url);

  if (!info) {
    res.status(500).json({
      error: "Não foi possível achar o vídeo",
    });
  }

  const filteredVideoAudio = ytdl.filterFormats(info.formats, "video");
  const filterdOnlyAudio = ytdl.filterFormats(info.formats, "audioonly");

  const formatsInMp4 = filteredVideoAudio.filter(
    (format) => format.container === "mp4"
  );

  const formatsInWebm = filteredVideoAudio.filter(
    (format) => format.container === "webm"
  );

  const { hours, minutes, seconds } = formatSeconds(
    info.videoDetails.lengthSeconds
  );

  const response = {
    title: info.videoDetails.title,
    duration: `${hours}${minutes}${seconds}`,
    embed: info.videoDetails.embed.iframeUrl,
    url: info.videoDetails.embed.flashSecureUrl,
    mp4: formatsInMp4,
    webm: formatsInWebm,
    audio: filterdOnlyAudio,
  };

  res.status(200).json(response);
};

export default handler;
