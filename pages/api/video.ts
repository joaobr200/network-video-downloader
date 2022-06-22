import type { NextApiRequest, NextApiResponse } from "next";
import ytdl from "ytdl-core";
import secondsToHms from "../../helpers/secondToHours";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { url } = req.query;
    if (await !ytdl.validateURL(url)) {
      throw new Error("URL inválida");
    }

    const info = await ytdl.getBasicInfo(url);

    const response = {
      title: info.videoDetails.title,
      duration: secondsToHms(info.videoDetails.lengthSeconds),
      embed: info.videoDetails.embed.iframeUrl,
      url: info.videoDetails.embed.flashSecureUrl,
    };
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default handler;
