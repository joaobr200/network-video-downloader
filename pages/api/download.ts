import type { NextApiRequest, NextApiResponse } from "next";
import ytdl from "ytdl-core";

interface DownloadRequest extends NextApiRequest {
  query: {
    url: string;
    mimetype: "mp4" | "mp3";
  };
}

const handler = async (req: DownloadRequest, res: NextApiResponse) => {
  const { url, mimetype } = req.query;

  if (!url) {
    res.status(400).json({
      error: "URL é obrigatória!",
    });
  }

  if (!ytdl.validateURL(url)) {
    res.status(400).json({
      error: "URL Inválida!",
    });
  }

  if (!mimetype) {
    res.status(400).json({
      error: "Mimetype é obrigatório!",
    });
  }

  const info = await ytdl.getBasicInfo(url);

  if (mimetype === "mp4") {
    const video = ytdl(url, {
      filter: (format) => format.hasAudio === true && format.hasVideo === true,
    });

    res.setHeader("Content-Type", "video/mp4");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${info.videoDetails.title}-joaojustodev.mp4`
    );
    res.status(200).send(video);
  }

  if (mimetype === "mp3") {
    const video = ytdl(url, {
      filter: (format) => format.hasAudio === true && format.hasVideo === false,
    });

    res.setHeader("Content-Type", "video/mp3");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${info.videoDetails.title}-joaojustodev.mp3`
    );
    res.status(200).send(video);
  }
};

export default handler;
