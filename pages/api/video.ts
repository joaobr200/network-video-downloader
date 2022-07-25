import type { NextApiRequest, NextApiResponse, NextApiHandler } from "next";
import ytdl from "ytdl-core";
import secondsToHms from "../../utils/formatSeconds";

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

  const { hours, minutes, seconds } = secondsToHms(
    info.videoDetails.lengthSeconds
  );

  const formats = info.formats.map(
    ({ url, hasAudio, hasVideo, qualityLabel, container }) => ({
      url,
      hasAudio,
      hasVideo,
      quality: qualityLabel,
      mimeType: container,
    })
  );

  const formatsInMp4 = formats.filter((format) => format.mimeType === "mp4");
  const formatsInWebm = formats.filter((format) => format.mimeType === "webm");
  const formatsInAudio = formats.filter(
    (format) => format.hasAudio === true && format.hasVideo === false
  );

  const response = {
    title: info.videoDetails.title,
    duration: `${hours}${minutes}${seconds}`,
    embed: info.videoDetails.embed.iframeUrl,
    url: info.videoDetails.embed.flashSecureUrl,
    mp4: formatsInMp4,
    webm: formatsInWebm,
    audio: formatsInAudio,
  };

  res.status(200).json(response);
};

export default handler;
