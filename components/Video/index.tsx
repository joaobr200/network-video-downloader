import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useAppDispatch } from "../../store/hook";
import { cleanVideo } from "../../store/duck/fetchVideo";

import Button from "../Button";
import * as S from "./styles";
import { FiX } from "react-icons/fi";

interface VideoProps {
  title: string;
  duration: string;
  embed: string;
  url: string;
}

const Video: React.FC<VideoProps> = ({ title, duration, embed, url }) => {
  const dispatch = useAppDispatch();
  const videoRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = videoRef.current;
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
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
        ></iframe>
        <div className={S.VideoDetails()}>
          <div>
            <h1>{title}</h1>
            <span>{duration}</span>
          </div>
          <div>
            <button className={Button({ size: "lg" })}>Download</button>
          </div>
        </div>
        <div
          className={S.cleanVideo()}
          onClick={() => dispatch(cleanVideo())}
          aria-label="Limpar vídeo"
        >
          <FiX />
        </div>
      </motion.article>
    </div>
  );
};

export default Video;
