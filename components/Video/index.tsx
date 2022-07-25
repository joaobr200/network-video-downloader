import React from "react";
import { motion } from "framer-motion";
import Button from "../Button";
import { useAppDispatch } from "../../store/hook";
import { cleanVideo } from "../../store/duck/fetchVideo";
import { useScrollIntoView } from "../../hooks/useScrollIntoView";

import * as S from "./styles";
import { FiX } from "react-icons/fi";

interface VideoProps {
  title: string;
  duration: string;
  embed: string;
  url: string;
}

const Video: React.FC<VideoProps> = ({ title, duration, embed, url }) => {
  const videoRef = React.useRef<HTMLDivElement>(null);
  const [makeDownload, setMakeDownload] = React.useState(false);
  const [countDonwload, setCountDownload] = React.useState(0);
  const [mimetype, setMimetype] = React.useState("");
  const dispatch = useAppDispatch();

  function handleDownload(mimetype: string) {
    setMakeDownload(true);
    setCountDownload((oldState) => oldState + 1);
    setMimetype(mimetype);
  }

  useScrollIntoView(videoRef);
  return (
    <div className={S.Container()} ref={videoRef}>
      <motion.article
        animate={{ opacity: [0, 1], y: [-20, 0] }}
        transition={{ duration: 1, ease: "anticipate" }}
        className={S.VideoArticle()}
      >
        <iframe
          className={S.Frame()}
          src={embed}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />

        <div>
          <header className={S.VideoDetails()}>
            <h1>{title}</h1>
            <span>{duration}</span>
          </header>
          <div className={S.VideoDownload()}>
            <button
              type="button"
              title="Baixar vídeo mp4"
              aria-label="Baixar vídeo"
              className={Button({ size: "lg" })}
              onClick={() => handleDownload("mp4")}
            >
              <span>Download MP4</span>
            </button>
            <button
              type="button"
              title="Baixar audio mp3"
              aria-label="Baixar audio mp3"
              className={Button({ size: "lg" })}
              onClick={() => handleDownload("mp3")}
            >
              <span>Download mp3</span>
            </button>
          </div>
        </div>
        <button
          type="button"
          className={S.cleanVideoButton()}
          onClick={() => dispatch(cleanVideo())}
          aria-label="Limpar vídeo"
          title="Limpar vídeo"
        >
          <FiX aria-hidden />
        </button>
      </motion.article>
      {makeDownload && (
        <iframe
          src={`/api/download?url=${url}&mimetype=${mimetype}&c=${countDonwload}`}
          title="Download vídeo"
          style={{ display: "none" }}
        />
      )}
    </div>
  );
};

export default Video;
