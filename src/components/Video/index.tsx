import React from "react";
import { motion } from "framer-motion";
import { useAppDispatch } from "../../store/hook";
import { cleanVideo } from "../../store/duck/fetchVideo";
import { useScrollIntoView } from "../../hooks/useScrollIntoView";
import { VideoEntity } from "../../entity/VideoEntity";
import Badge from "../Ui/Badge";
import VolumeIcon from "../Ui/VolumeIcon";

import * as S from "./styles";
import { FiX } from "react-icons/fi";

interface VideoProps {
  data: VideoEntity;
}

const Video: React.FC<VideoProps> = ({
  data: { title, duration, embed, mp4, webm, audio },
}) => {
  const videoRef = React.useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

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

        <div className={S.VideoWrapper()}>
          <header className={S.VideoDetails()}>
            <h1>{title}</h1>
            <span>{duration}</span>
          </header>
          <div className={S.VideoDownload()}>
            <div>
              {mp4.map((item) => (
                <>
                  <Badge key={item.url}>
                    <a href={item.url} target="_blank" rel="noreferrer">
                      {item.qualityLabel}
                      <VolumeIcon hasAudio={item.hasAudio} />
                    </a>
                  </Badge>
                </>
              ))}
            </div>

            <div>
              {webm.map((item) => (
                <>
                  <Badge bg="red" key={item.url}>
                    <a href={item.url} target="_blank" rel="noreferrer">
                      {item.qualityLabel}
                      <VolumeIcon hasAudio={item.hasAudio} />
                    </a>
                  </Badge>
                </>
              ))}
            </div>

            <div>
              {audio.map((item) => (
                <>
                  <Badge bg="blue" key={item.url}>
                    <a href={item.url} target="_blank" rel="noreferrer">
                      {item.container.toUpperCase()}
                      <VolumeIcon hasAudio={item.hasAudio} />
                    </a>
                  </Badge>
                </>
              ))}
            </div>
          </div>
          <div className={S.VideoBadgeLegend()}>
            <div className="mp4">
              <div></div>
              <span>MP4</span>
            </div>
            <div className="webm">
              <div></div>
              <span>WEBM</span>
            </div>
            <div className="audio">
              <div></div>
              <span>AUDIO</span>
            </div>
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
    </div>
  );
};

export default Video;
