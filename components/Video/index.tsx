import React from "react";
import { motion } from "framer-motion";

import Button from "../Button";
import * as S from "./styles";

const Video: React.FC = () => {
  return (
    <motion.article
      animate={{ opacity: [0, 1], y: [-20, 0] }}
      transition={{ duration: 2, ease: "anticipate" }}
      className={S.VideoArticle()}
    >
      <iframe
        className={S.Frame()}
        src="https://www.youtube.com/embed/4UprQWwhw_A"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      <div className={S.VideoDetails()}>
        <h1 className={S.VideoTitle()}>
          lil uzi vert - xo tour life + p2 [slowed + reverb]
        </h1>
        <span className={S.VideoDuration()}>8:42</span>
      </div>
      <div>
        <button className={Button({ size: "lg" })}>Download</button>
      </div>
    </motion.article>
  );
};

export default Video;
